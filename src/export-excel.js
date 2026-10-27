import ExcelJS from "exceljs/dist/exceljs.min.js";
import {
	createBillingData,
	createDailyData,
	createDeliveryOrderData,
	createMovementSummaryData,
	createNonMovementData,
	createWeightSummaryData,
} from "./export-pdf";
import {
	COLORS,
	REPORT_TEXT,
	agingItemCells,
	billingItemCells,
	billingSummaryRows,
	dailyItemCells,
	deliveryItemCells,
	formatDateTime,
	formatDayMonth,
	formatDayMonthYear,
	formatInteger,
	formatLocaleStamp,
	formatLongDate,
	formatMoney,
	formatNumber,
	formatOrDash,
	formatWordDate,
	movementLineCells,
	movementLineTotalCells,
	movementOrderCells,
	movementOrderTotalCells,
	normalizeBilling,
	normalizeDaily,
	normalizeDeliveryOrder,
	normalizeMovementSummary,
	normalizeNonMovement,
	normalizeServiceSummary,
	normalizeWeightSummary,
	serviceOrderCells,
	weightItemCells,
	weightTotalCells,
} from "./reports";

// Cells have an absolute x and width in PDF points. The column grid is the union of
// all x edges, and a cell spans the columns it covers. Styling follows export-pdf.js.

const FONT_NAME = "Arial";
const PAGE_WIDTH = 595.28;
const PAGE_HEIGHT = 841.89;

// COLORS are 0 to 1 floats, spreadsheets use hex
const toHex = (color) =>
	color.map((channel) => Math.round(channel * 255).toString(16).padStart(2, "0")).join("").toUpperCase();
const paletteFrom = (colors) => Object.fromEntries(Object.entries(colors).map(([name, color]) => [name, toHex(color)]));

// Colours most reports share
const BASE_PALETTE = paletteFrom({
	ink: COLORS.ink,
	muted: COLORS.muted,
	line: COLORS.line,
	brand: COLORS.brand,
	soft: COLORS.soft,
	header: COLORS.header,
});

// ---- layout helpers ----

const sumOf = (numbers) => numbers.reduce((total, number) => total + number, 0);

const estimateLineCount = (text, width, fontSize, bold) => {
	const characterWidth = fontSize * (bold ? 0.6 : 0.55);
	const charactersPerLine = Math.max(1, Math.floor(width / characterWidth));
	return String(text ?? "")
		.split("\n")
		.reduce((total, line) => total + Math.max(1, Math.ceil(line.length / charactersPerLine)), 0);
};

const spacer = (height) => ({ height, cells: [] });
const block = (x, width, text, style = {}) => ({ x, width, text, ...style });
const textRow = (height, width, text, style) => ({ height, cells: [block(0, width, text, style)] });
const generatedOnRow = (width, text, color) => textRow(12, width, text, { size: 8, color, align: "right" });
const ruleRow = (width, color, thick, height = 4) => ({
	height,
	cells: [block(0, width, "", { borderBottom: { color, thick } })],
});

// Bordered table, like drawTable() in export-pdf.js.
// A cell is a string, a number or { text, span, align, bold, color, fill, size }.
function tableRows({
	x = 0,
	columns,
	headerRows = [],
	rows,
	fontSize = 8,
	headerFontSize = fontSize,
	minHeight = 20,
	headerMinHeight = 18,
	padding = 4,
	borderColor,
	textColor,
	headerFill,
	headerBold = true,
}) {
	const columnX = columns.map((_, index) => x + sumOf(columns.slice(0, index).map((column) => column.width)));
	const buildRow = (cellSpecs, { isHeader, rowFill, rowBold, rowMinHeight }) => {
		const size = isHeader ? headerFontSize : fontSize;
		let columnIndex = 0;
		const cells = [];
		for (const spec of cellSpecs) {
			const cellSpec = typeof spec === "object" && spec !== null ? spec : { text: spec };
			const span = Math.min(cellSpec.span ?? 1, columns.length - columnIndex);
			const width = sumOf(columns.slice(columnIndex, columnIndex + span).map((column) => column.width));
			const column = columns[columnIndex];
			cells.push({
				x: columnX[columnIndex],
				width,
				text: cellSpec.text,
				size: cellSpec.size ?? size,
				bold: cellSpec.bold ?? rowBold,
				color: cellSpec.color ?? textColor,
				fill: cellSpec.fill ?? rowFill,
				align: cellSpec.align ?? (isHeader ? column?.headerAlign : column?.align) ?? "left",
				border: borderColor,
				valign: "middle",
				wrap: true,
			});
			columnIndex += span;
		}
		const contentHeight = Math.max(
			...cells.map(
				(cell) => estimateLineCount(cell.text, cell.width - padding * 2, cell.size, cell.bold) * cell.size * 1.25 + padding * 2,
			),
		);
		return { height: Math.max(rowMinHeight, contentHeight), cells };
	};
	return [
		...headerRows.map((cellSpecs) =>
			buildRow(cellSpecs, { isHeader: true, rowFill: headerFill, rowBold: headerBold, rowMinHeight: headerMinHeight }),
		),
		...rows.map((row) =>
			buildRow(row.cells, { isHeader: false, rowFill: row.backgroundColor, rowBold: row.bold ?? false, rowMinHeight: row.minHeight ?? minHeight }),
		),
	];
}

// Borderless table with rules, like drawLineTable() in export-pdf.js
function lineTableRows({
	x = 0,
	width,
	columns,
	rows,
	totalRow,
	emptyText,
	fontSize,
	lineHeight,
	paddingHorizontal = 4,
	paddingVertical,
	headerTextColor,
	headerRuleColor,
	headerBottomRuleColor,
	bodyTextColor,
	totalRuleColor,
	totalRuleThick,
	emptyHeight,
	emptyTextColor,
}) {
	const columnWidths = columns.map((column) => column.weight * width);
	const columnX = columnWidths.map((_, index) => x + sumOf(columnWidths.slice(0, index)));
	const buildRow = (values, { bold, borderTop, borderBottom, colorFor, heightAdjustment = 0 }) => {
		const cells = values.map((value, index) => ({
			x: columnX[index],
			width: columnWidths[index],
			text: value,
			size: fontSize,
			bold,
			color: colorFor(index),
			align: columns[index].align,
			valign: "middle",
			wrap: true,
			borderTop,
			borderBottom,
		}));
		const lineCount = Math.max(
			...cells.map((cell) => estimateLineCount(cell.text, cell.width - paddingHorizontal * 2, fontSize, bold)),
		);
		return { height: lineCount * lineHeight + paddingVertical * 2 + heightAdjustment, cells };
	};
	const resultRows = [
		buildRow(
			columns.map((column) => column.label),
			{
				bold: false,
				borderTop: { color: headerRuleColor },
				borderBottom: headerBottomRuleColor ? { color: headerBottomRuleColor } : undefined,
				colorFor: () => headerTextColor,
				heightAdjustment: headerBottomRuleColor ? -2 : 0,
			},
		),
	];
	if (rows.length) {
		rows.forEach((values) =>
			resultRows.push(buildRow(values, { bold: false, colorFor: (index) => columns[index].color ?? bodyTextColor })),
		);
	} else {
		resultRows.push({
			height: emptyHeight,
			cells: [block(x, width, emptyText, { size: fontSize, color: emptyTextColor, align: "center", valign: "middle" })],
		});
	}
	if (totalRow) {
		resultRows.push(
			buildRow(totalRow, {
				bold: true,
				borderTop: { color: totalRuleColor, thick: totalRuleThick },
				colorFor: () => bodyTextColor,
				heightAdjustment: -4,
			}),
		);
	}
	return resultRows;
}

// ---- layout to worksheet ----

const BORDER_SIDES = ["top", "left", "bottom", "right"];

function fontFor(cell) {
	return {
		name: FONT_NAME,
		size: cell.size ?? 10,
		bold: cell.bold ?? false,
		color: { argb: `FF${cell.color ?? "000000"}` },
	};
}

function writeWorksheet(layout) {
	const workbook = new ExcelJS.Workbook();
	const worksheet = workbook.addWorksheet("Report", {
		views: [{ showGridLines: false }],
		pageSetup: {
			paperSize: 9,
			orientation: layout.orientation,
			fitToPage: true,
			fitToWidth: 1,
			fitToHeight: 0,
			margins: {
				left: layout.margins.left / 72,
				right: layout.margins.right / 72,
				top: layout.margins.top / 72,
				bottom: layout.margins.bottom / 72,
				header: 0.3,
				footer: 0.3,
			},
		},
	});

	const roundedEdge = (edge) => Math.round(edge * 100) / 100;
	const edges = new Set([0]);
	layout.rows.forEach((row) =>
		row.cells.forEach((cell) => {
			edges.add(roundedEdge(cell.x));
			edges.add(roundedEdge(cell.x + cell.width));
		}),
	);
	const sortedEdges = [...edges].sort((first, second) => first - second);
	const edgeIndex = (edge) => {
		const target = roundedEdge(edge);
		return sortedEdges.findIndex((candidate) => Math.abs(candidate - target) < 0.02);
	};

	// One width unit is about 7 pixels, plus 3 pixels of padding
	worksheet.columns = sortedEdges.slice(1).map((edge, index) => ({
		width: Math.max(0.5, ((edge - sortedEdges[index]) * (96 / 72) - 3) / 7),
	}));

	const borderStyleFor = (rule) => (rule.thick ? "medium" : "thin");
	const toArgb = (hexColor) => ({ argb: `FF${hexColor}` });

	layout.rows.forEach((row, rowIndex) => {
		const rowNumber = rowIndex + 1;
		worksheet.getRow(rowNumber).height = row.height;
		row.cells.forEach((cell) => {
			const firstColumn = edgeIndex(cell.x) + 1;
			const lastColumn = edgeIndex(cell.x + cell.width);
			const lastRow = rowNumber + (cell.rowSpan ?? 1) - 1;
			if (lastColumn > firstColumn || lastRow > rowNumber) {
				worksheet.mergeCells(rowNumber, firstColumn, lastRow, lastColumn);
			}
			const target = worksheet.getCell(rowNumber, firstColumn);
			target.value = cell.parts
				? { richText: cell.parts.map((part) => ({ text: part.text, font: fontFor({ ...cell, ...part }) })) }
				: cell.text ?? "";
			target.font = fontFor(cell);
			target.alignment = {
				horizontal: cell.align ?? "left",
				vertical: cell.valign ?? "top",
				wrapText: cell.wrap ?? true,
				indent: cell.indent ?? 0,
			};
			if (cell.fill) target.fill = { type: "pattern", pattern: "solid", fgColor: toArgb(cell.fill) };
			const border = {};
			if (cell.border) {
				BORDER_SIDES.forEach((key) => (border[key] = { style: "thin", color: toArgb(cell.border) }));
			}
			if (cell.borderTop) border.top = { style: borderStyleFor(cell.borderTop), color: toArgb(cell.borderTop.color) };
			if (cell.borderBottom) border.bottom = { style: borderStyleFor(cell.borderBottom), color: toArgb(cell.borderBottom.color) };
			if (Object.keys(border).length) target.border = border;
		});
	});
	return workbook;
}

// ---- delivery order ----

function deliveryOrderLayout(data = {}) {
	const palette = { ...BASE_PALETTE, total: toHex(COLORS.total) };
	const order = normalizeDeliveryOrder(data);
	const { company, customer, deliverTo, items, hasTrolley, trolleyQuantity, trolleyIds } = order;
	const labels = REPORT_TEXT.deliveryOrder;
	const totalWeight = `${formatNumber(order.totalWeight)} ${order.weightUnit}`;

	const margins = { top: 40, right: 36, bottom: 40, left: 36 };
	const contentWidth = PAGE_WIDTH - margins.left - margins.right;
	const infoWidth = 210;
	const infoX = contentWidth - infoWidth;
	const companyWidth = contentWidth - infoWidth - 16;

	const infoRows = tableRows({
		x: infoX,
		columns: [{ width: 76 }, { width: 134 }],
		rows: [
			{ cells: [{ text: "DO Number", bold: true }, order.doNumber] },
			{ cells: [{ text: "Date", bold: true }, formatLongDate(order.date)] },
			{ cells: [{ text: "Driver", bold: true }, order.driver] },
			{ cells: [{ text: "Total Weight", bold: true }, totalWeight] },
		],
		fontSize: 8.5,
		minHeight: 18,
		padding: 4,
		borderColor: palette.line,
		textColor: palette.ink,
	});
	const addressHeight = estimateLineCount(company.address, companyWidth, 9, false) * 12 + 3;
	const infoHeight = sumOf(infoRows.map((row) => row.height));
	const addressOverflow = Math.max(0, addressHeight - infoHeight);
	infoRows[0].cells.push(
		block(0, companyWidth, company.address, {
			size: 9,
			color: palette.muted,
			rowSpan: infoRows.length + (addressOverflow ? 1 : 0),
			valign: "top",
		}),
	);
	if (addressOverflow) infoRows.push(spacer(addressOverflow));

	const boxWidth = (contentWidth - 10) / 2;
	const boxX = boxWidth + 10;
	const boxPartsFor = (party) => [
		{ text: "\n", size: 8 },
		{ text: party.name, bold: true, size: 10, color: palette.ink },
		{ text: `\n${party.address}`, size: 9, color: palette.muted },
	];
	const boxHeight =
		Math.max(
			...[customer, deliverTo].map(
				(party) =>
					estimateLineCount(party.name, boxWidth - 20, 10, true) * 13 +
					estimateLineCount(party.address, boxWidth - 20, 9, false) * 12,
			),
		) + 20;
	const boxFor = (x, party) =>
		block(x, boxWidth, "", { parts: boxPartsFor(party), border: palette.line, valign: "top", wrap: true, indent: 1 });
	const headingStyle = { size: 9, bold: true, color: palette.muted };

	const attentionTextWidth = 58;
	const attentionX = (contentWidth - (attentionTextWidth + 6 + 220)) / 2;

	const itemTableRows = tableRows({
		columns: [
			{ width: 34, align: "center", headerAlign: "center" },
			{ width: 180 },
			{ width: 110 },
			{ width: 80, align: "right", headerAlign: "right" },
			{ width: contentWidth - 34 - 180 - 110 - 80, align: "center", headerAlign: "center" },
		],
		headerRows: [labels.itemHeaders],
		rows: [
			...(items.length
				? items.map((item, index) => ({ cells: deliveryItemCells(item, index) }))
				: [{ cells: [{ text: labels.noItems, span: 5, align: "center" }], minHeight: 32 }]),
			{
				cells: [
					{ text: labels.totalQuantity, span: 3, bold: true },
					{ text: formatNumber(order.totalQuantity), align: "right", bold: true },
					{ text: order.quantityUnit, align: "center", bold: true },
				],
				backgroundColor: palette.total,
			},
		],
		fontSize: 8.8,
		headerFontSize: 8,
		minHeight: 24,
		borderColor: palette.line,
		textColor: palette.ink,
		headerFill: palette.soft,
	});

	const signatureWidth = (contentWidth - 28) / 2;
	const signatureX = signatureWidth + 28;
	const trolleyLabel = (text) => block(0, 105, text, { size: 9, bold: true, color: palette.ink });
	const trolleyValue = (text) => block(105, signatureWidth - 105, text, { size: 9, color: palette.muted });
	const signatureLine = (label) => ({
		height: 12,
		cells: [
			block(signatureX, 36, label, { size: 7.5, bold: true, color: palette.ink }),
			block(signatureX + 36, signatureWidth - 36, "", { borderBottom: { color: palette.line } }),
		],
	});

	return {
		orientation: "portrait",
		margins,
		rows: [
			{
				height: 24,
				cells: [
					block(0, companyWidth, company.name, { size: 16, bold: true, color: palette.brand }),
					block(infoX, infoWidth, labels.title, { size: 16, bold: true, color: palette.brand, align: "right" }),
				],
			},
			...infoRows,
			ruleRow(contentWidth, palette.brand, true, 6),
			spacer(14),
			{
				height: 14,
				cells: [
					block(0, boxWidth, labels.billTo, headingStyle),
					block(boxX, boxWidth, labels.deliverTo, headingStyle),
				],
			},
			{ height: boxHeight, cells: [boxFor(0, customer), boxFor(boxX, deliverTo)] },
			spacer(14),
			{
				height: 14,
				cells: [
					block(attentionX, attentionTextWidth, labels.attention, { size: 9, bold: true, color: palette.ink }),
					block(attentionX + attentionTextWidth + 6, 220, "", { borderBottom: { color: palette.line } }),
				],
			},
			spacer(14),
			{ height: 14, cells: [block(0, contentWidth, labels.itemsHeading, headingStyle)] },
			...itemTableRows,
			spacer(14),
			{
				height: 34,
				cells: [
					block(
						0,
						contentWidth,
						labels.notice,
						{ size: 8, color: palette.ink },
					),
				],
			},
			spacer(10),
			{
				height: 15,
				cells: [
					...(hasTrolley ? [trolleyLabel(labels.trolleyQuantity), trolleyValue(formatNumber(trolleyQuantity))] : []),
					block(signatureX, signatureWidth, labels.receivedBy, { size: 9, bold: true, color: palette.ink }),
				],
			},
			{
				height: 21,
				cells: [
					...(hasTrolley ? [trolleyLabel(labels.trolleyIds), trolleyValue(trolleyIds || "-")] : []),
					block(signatureX, signatureWidth, "", { borderBottom: { color: palette.line } }),
				],
			},
			spacer(6),
			signatureLine(labels.name),
			signatureLine(labels.date),
			signatureLine(labels.time),
			{
				height: 12,
				cells: [block(signatureX, signatureWidth, labels.chop, { size: 7.5, bold: true, color: palette.ink })],
			},
			spacer(8),
			generatedOnRow(contentWidth, `Generated on ${formatLocaleStamp()}`, palette.muted),
		],
	};
}

// ---- billing ----

function billingLayout(data = {}) {
	const palette = { ...BASE_PALETTE, ...paletteFrom(COLORS.billing) };
	const billing = normalizeBilling(data);
	const { deliveries, deliveryCount, items, summary, taxLabel, monthRange } = billing;
	const labels = REPORT_TEXT.billing;

	const dayWidth = 28;
	const margins = { top: 28, right: 24, bottom: 28, left: 24 };
	const contentWidth = 412 + deliveryCount * dayWidth;
	const columns = [
		{ width: 22, align: "center", headerAlign: "center" },
		{ width: 108 },
		{ width: 44, align: "center", headerAlign: "center" },
		{ width: 30, align: "center", headerAlign: "center" },
		{ width: 56, align: "right", headerAlign: "right" },
		...Array.from({ length: deliveryCount }, () => ({ width: dayWidth, align: "right", headerAlign: "center" })),
		{ width: 46, align: "right", headerAlign: "right" },
		{ width: 50, align: "right", headerAlign: "right" },
		{ width: 56, align: "right", headerAlign: "right" },
	];
	const tableBody = items.length
		? [
				...items.map((item) => ({ cells: billingItemCells(item) })),
				...billingSummaryRows(billing).map((row) => ({
					cells: [
						{ text: row.label, span: 5, bold: true },
						...[...row.perDay, ...row.totals].map((text) => ({ text, align: "right", bold: true })),
					],
					backgroundColor: palette[row.key],
				})),
			]
		: [{ cells: [{ text: labels.noItems, span: deliveryCount + 8, align: "center" }], minHeight: 30 }];

	const blankLeading = ["", "", "", "", ""];
	const blankTrailing = ["", "", ""];
	return {
		// The PDF page is wider than A4, so Excel scales it to one page wide
		orientation: "landscape",
		margins,
		rows: [
			textRow(22, contentWidth, billing.reportTitle, { size: 16, bold: true, color: palette.brand }),
			textRow(16, contentWidth, billing.hotelName, { size: 11, bold: true, color: palette.ink }),
			{
				height: 14,
				cells: [
					block(
						0,
						contentWidth,
						`${billing.department}  |  From ${formatDayMonthYear(monthRange.from)} To ${formatDayMonthYear(monthRange.to)}`,
						{ size: 9, color: palette.muted },
					),
				],
			},
			ruleRow(contentWidth, palette.brand, true, 8),
			spacer(12),
			...tableRows({
				columns,
				headerRows: [
					[
						...labels.headers,
						{ text: labels.deliveredQuantity, span: deliveryCount, align: "center" },
						...labels.totalHeaders,
					],
					[
						...blankLeading,
						...deliveries.map((delivery) => ({ text: formatDayMonth(delivery.date), align: "center" })),
						...blankTrailing,
					],
					[
						...blankLeading,
						...deliveries.map((delivery) => ({ text: delivery.doNumber, align: "center", size: 4.2 })),
						...blankTrailing,
					],
				],
				rows: tableBody,
				fontSize: 5.8,
				headerFontSize: 5,
				minHeight: 18,
				headerMinHeight: 14,
				padding: 2,
				borderColor: palette.line,
				textColor: palette.ink,
				headerFill: palette.header,
			}),
			spacer(8),
			generatedOnRow(contentWidth, `Generated on ${formatDateTime(billing.generatedOn)}`, palette.muted),
		],
	};
}

// ---- daily summary ----

function dailyLayout(data = {}) {
	const palette = BASE_PALETTE;
	const daily = normalizeDaily(data);
	const items = daily.items;
	const labels = REPORT_TEXT.daily;
	const margins = { top: 40, right: 36, bottom: 40, left: 36 };
	const contentWidth = PAGE_WIDTH - margins.left - margins.right;
	const numberColumn = { width: 80, align: "right", headerAlign: "right" };
	return {
		orientation: "portrait",
		margins,
		rows: [
			textRow(22, contentWidth, daily.reportTitle, { size: 16, bold: true, color: palette.brand }),
			textRow(16, contentWidth, daily.hotelName, { size: 11, bold: true, color: palette.ink }),
			textRow(12, contentWidth, formatLongDate(daily.date), { size: 9, color: palette.muted }),
			ruleRow(contentWidth, palette.brand, true, 12),
			spacer(14),
			...tableRows({
				columns: [
					{ width: 80, align: "left", headerAlign: "left" },
					{ width: contentWidth - 400 },
					numberColumn,
					numberColumn,
					numberColumn,
					numberColumn,
				],
				headerRows: [labels.headers],
				rows: items.length
					? items.map((item) => ({ cells: dailyItemCells(item) }))
					: [{ cells: [{ text: labels.noItems, span: 6, align: "center" }], minHeight: 32 }],
				fontSize: 9,
				headerFontSize: 8.5,
				minHeight: 26,
				headerMinHeight: 22,
				padding: 6,
				borderColor: palette.line,
				textColor: palette.ink,
				headerFill: palette.header,
			}),
			spacer(6),
			generatedOnRow(contentWidth, `Generated on ${formatLocaleStamp()}`, palette.muted),
		],
	};
}

// ---- non-movement (inventory aging) ----

function nonMovementLayout(data = {}) {
	const palette = { ...BASE_PALETTE, white: toHex(COLORS.white) };
	const report = normalizeNonMovement(data);
	const items = report.items;
	const labels = REPORT_TEXT.nonMovement;
	const margins = { top: 36, right: 36, bottom: 36, left: 36 };
	const contentWidth = PAGE_WIDTH - margins.left - margins.right;
	const firstColumnWidth = contentWidth * 0.22;
	const agingColumnWidth = (contentWidth - firstColumnWidth) / 4;
	const agingColumn = { width: agingColumnWidth, align: "right", headerAlign: "center" };

	const bodyRows = [];
	let currentCustomer = "";
	for (const item of items) {
		if (item.customer !== currentCustomer) {
			currentCustomer = item.customer;
			bodyRows.push({
				cells: [{ text: `Customer: ${currentCustomer}`, span: 4, bold: true, color: palette.brand, fill: palette.soft }],
				minHeight: 20,
			});
		}
		bodyRows.push({
			cells: agingItemCells(item),
			backgroundColor: palette.white,
		});
	}
	const headerStyle = { bold: true, color: palette.ink, fill: palette.soft };
	return {
		orientation: "portrait",
		margins,
		rows: [
			textRow(22, contentWidth, report.reportTitle, { size: 16, bold: true, color: palette.ink }),
			textRow(16, contentWidth, report.hotelName, { size: 11, bold: true, color: palette.ink }),
			spacer(16),
			...tableRows({
				columns: [{ width: firstColumnWidth }, agingColumn, agingColumn, agingColumn],
				headerRows: [
					[
						{ text: labels.item, align: "center", ...headerStyle },
						{ text: labels.daysSinceLastSeen, span: 2, align: "center", ...headerStyle },
					],
					[
						{ text: "", fill: palette.soft },
						{ text: labels.agingHeaders[0], align: "left", ...headerStyle },
						{ text: labels.agingHeaders[1], align: "left", ...headerStyle },
						{ text: labels.agingHeaders[2], align: "center", ...headerStyle },
					],
				],
				rows: bodyRows.length
					? bodyRows
					: [{ cells: [{ text: labels.noItems, span: 4, align: "center" }], minHeight: 32 }],
				fontSize: 9,
				headerFontSize: 8.5,
				minHeight: 28,
				headerMinHeight: 20,
				padding: 6,
				borderColor: palette.line,
				textColor: palette.ink,
				headerFill: palette.soft,
			}),
			spacer(6),
			generatedOnRow(contentWidth, `Generated on ${formatLocaleStamp(report.generatedOn)}`, palette.muted),
		],
	};
}

// ---- service summary (linen delivery orders) ----

function serviceSummaryLayout(data = {}) {
	const palette = BASE_PALETTE;
	const report = normalizeServiceSummary(data);
	const orders = report.orders;
	const labels = REPORT_TEXT.serviceSummary;
	const margins = { top: 36, right: 24, bottom: 32, left: 24 };
	const contentWidth = PAGE_HEIGHT - margins.left - margins.right;
	const titleWidth = contentWidth * 0.6;
	return {
		orientation: "landscape",
		margins,
		rows: [
			{
				height: 21,
				cells: [
					block(0, titleWidth, labels.title, { size: 16, bold: true, color: palette.brand }),
					block(titleWidth, contentWidth - titleWidth, `Generated On ${formatDateTime()}`, { size: 8, color: palette.muted, align: "right" }),
				],
			},
			textRow(16, titleWidth, report.hotelName, { size: 11, bold: true, color: palette.ink }),
			textRow(15, titleWidth, `From ${report.from} To ${report.to}`, { size: 9, color: palette.muted }),
			spacer(15),
			...tableRows({
				columns: [
					{ width: 65, headerAlign: "center" },
					{ width: 92 },
					{ width: 125 },
					{ width: 55, align: "right", headerAlign: "right" },
					{ width: 62, align: "right", headerAlign: "right" },
					{ width: 55, align: "right", headerAlign: "right" },
					{ width: 122 },
					{ width: 90 },
					{ width: 105 },
				],
				headerRows: [labels.headers],
				rows: orders.length
					? orders.map((order) => ({ cells: serviceOrderCells(order) }))
					: [{ cells: [{ text: labels.noOrders, span: 9, align: "center" }], minHeight: 32 }],
				fontSize: 7.5,
				headerFontSize: 7.5,
				minHeight: 28,
				headerMinHeight: 24,
				padding: 4,
				borderColor: palette.line,
				textColor: palette.ink,
				headerFill: palette.header,
			}),
		],
	};
}

// ---- movement summary (rewash report) ----

function movementSummaryLayout(data = {}) {
	const palette = paletteFrom(COLORS.movement);
	const report = normalizeMovementSummary(data);
	const { currency, orders, items, rewashItems, totals } = report;
	const labels = REPORT_TEXT.movementSummary;

	const margins = { top: 40, right: 40, bottom: 40, left: 40 };
	const contentWidth = PAGE_HEIGHT - margins.left - margins.right;
	const tableX = 10;
	const tableWidth = contentWidth - tableX;
	const generatedWidth = 200;
	const valueX = 166;

	const headingRow = (text, withRule) => ({
		height: 14,
		cells: [block(0, contentWidth, text, { size: 9, bold: true, color: palette.ink, borderBottom: withRule ? { color: palette.rule } : undefined })],
	});
	const lineTable = (columns, tableRowsValues, totalRow, emptyText) =>
		lineTableRows({
			x: tableX,
			width: tableWidth,
			columns,
			rows: tableRowsValues,
			totalRow,
			emptyText,
			fontSize: 9,
			lineHeight: 11,
			paddingVertical: 8,
			headerTextColor: palette.ink,
			headerRuleColor: palette.headerRule,
			headerBottomRuleColor: palette.strong,
			bodyTextColor: palette.ink,
			totalRuleColor: palette.strong,
			totalRuleThick: true,
			emptyHeight: 28,
			emptyTextColor: palette.muted,
		});
	const lineColumns = [
		{ label: labels.lineHeaders[0], weight: 0.38, align: "left" },
		{ label: labels.lineHeaders[1], weight: 0.25, align: "left" },
		{ label: labels.lineHeaders[2], weight: 0.11, align: "right" },
		{ label: `Unit Price (${currency})`, weight: 0.13, align: "right" },
		{ label: `Amount (${currency})`, weight: 0.13, align: "right" },
	];

	return {
		orientation: "landscape",
		margins,
		rows: [
			{
				height: 14,
				cells: [
					block(6, 154, `${report.reportTitle}:`, { size: 10, color: palette.ink }),
					block(valueX, contentWidth - valueX - generatedWidth, formatWordDate(report.reportDate), { size: 10, bold: true, color: palette.ink }),
					block(contentWidth - generatedWidth, generatedWidth, `Generated On ${formatDateTime(report.generatedOn)}`, {
						size: 10,
						color: palette.ink,
						align: "right",
					}),
				],
			},
			spacer(6),
			{
				height: 20,
				cells: [
					block(6, 154, labels.hotel, { size: 10, color: palette.ink, valign: "bottom" }),
					block(valueX, contentWidth - valueX, report.hotelName, { size: 14, bold: true, color: palette.ink }),
				],
			},
			spacer(18),
			headingRow(labels.summary, false),
			spacer(4),
			...tableRows({
				columns: [
					{ width: contentWidth * 0.25, align: "center", headerAlign: "center" },
					{ width: contentWidth * 0.25, align: "center", headerAlign: "center" },
					{ width: contentWidth * 0.5, align: "center", headerAlign: "center" },
				],
				headerRows: [[...labels.summaryHeaders, `Total Order Amount (${currency})`]],
				rows: [
					{
						cells: [
							formatOrDash(totals.totalOrders, formatInteger),
							formatOrDash(totals.totalQty, formatInteger),
							formatOrDash(totals.totalValue, formatMoney),
						],
					},
				],
				fontSize: 9,
				headerFontSize: 9,
				minHeight: 24,
				headerMinHeight: 18,
				borderColor: palette.boxBorder,
				textColor: palette.ink,
				headerFill: palette.headerFill,
				headerBold: false,
			}),
			spacer(22),
			headingRow(labels.orders, true),
			spacer(8),
			...lineTable(
				[
					{ label: labels.orderHeaders[0], weight: 0.45, align: "left", color: palette.muted },
					{ label: labels.orderHeaders[1], weight: 0.15, align: "right" },
					{ label: `Amount (${currency}) (Exclude Tax)`, weight: 0.4, align: "right" },
				],
				orders.map(movementOrderCells),
				orders.length ? movementOrderTotalCells(totals) : undefined,
				labels.noOrders,
			),
			spacer(22),
			headingRow(labels.items, true),
			spacer(8),
			...lineTable(lineColumns, items.map(movementLineCells), movementLineTotalCells(items, totals.itemsTotalQty, totals.itemsTotalValue), labels.noItems),
			spacer(22),
			headingRow(labels.rewashItems, true),
			spacer(8),
			...lineTable(
				lineColumns,
				rewashItems.map(movementLineCells),
				movementLineTotalCells(rewashItems, totals.rewashTotalQty, totals.rewashTotalValue),
				labels.noRewashItems,
			),
		],
	};
}

// ---- weight summary ----

function weightSummaryLayout(data = {}) {
	const palette = paletteFrom(COLORS.weight);
	const report = normalizeWeightSummary(data);
	const { driver, items } = report;
	const labels = REPORT_TEXT.weightSummary;

	const margins = { top: 32, right: 32, bottom: 32, left: 32 };
	const contentWidth = PAGE_HEIGHT - margins.left - margins.right;
	const titleWidth = contentWidth * 0.7;
	const columns = [
		{ label: labels.headers[0], weight: 0.08, align: "left", color: palette.muted },
		{ label: labels.headers[1], weight: 0.1, align: "left", color: palette.muted },
		{ label: labels.headers[2], weight: 0.31, align: "left", color: palette.ink },
		{ label: labels.headers[3], weight: 0.08, align: "left", color: palette.ink },
		{ label: labels.headers[4], weight: 0.1, align: "left", color: palette.ink },
		{ label: labels.headers[5], weight: 0.11, align: "left", color: palette.ink },
		{ label: labels.headers[6], weight: 0.13, align: "right", color: palette.ink },
		{ label: labels.headers[7], weight: 0.09, align: "right", color: palette.ink },
	];
	return {
		orientation: "landscape",
		margins,
		rows: [
			{
				height: 24,
				cells: [
					block(0, titleWidth, report.reportTitle, { size: 17, bold: true, color: palette.ink }),
					block(titleWidth, contentWidth - titleWidth, `Generated On ${formatDateTime(report.generatedOn)}`, {
						size: 8,
						color: palette.ink,
						align: "right",
					}),
				],
			},
			textRow(14, contentWidth, driver, { size: 10, bold: true, color: palette.ink }),
			{
				height: 12,
				cells: [block(0, contentWidth, `From ${formatDayMonthYear(report.fromDate)} To ${formatDayMonthYear(report.toDate)}`, { size: 7.5, bold: true, color: palette.ink })],
			},
			spacer(14),
			...lineTableRows({
				width: contentWidth,
				columns,
				rows: items.map((item) => weightItemCells(item, driver)),
				totalRow: weightTotalCells(report.totalGrossWeight),
				emptyText: labels.noDeliveries,
				fontSize: 7.5,
				lineHeight: 9.5,
				paddingVertical: 5.5,
				headerTextColor: palette.headerText,
				headerRuleColor: palette.headerRule,
				bodyTextColor: palette.ink,
				totalRuleColor: palette.strong,
				totalRuleThick: true,
				emptyHeight: 26,
				emptyTextColor: palette.muted,
			}),
		],
	};
}

// ---- entry point ----

const layoutBuilders = {
	"delivery-order": (value) => deliveryOrderLayout(createDeliveryOrderData(value)),
	"billing": (value) => billingLayout(createBillingData(value)),
	"daily-summary": (value) => dailyLayout(createDailyData(value)),
	"non-movement": (value) => nonMovementLayout(createNonMovementData(value)),
	"service-summary": (value) => serviceSummaryLayout(value),
	"movement-summary": (value) => movementSummaryLayout(createMovementSummaryData(value)),
	"weight-summary": (value) => weightSummaryLayout(createWeightSummaryData(value)),
};

function createExcelLayout(reportType, value) {
	const buildLayout = layoutBuilders[reportType];
	if (!buildLayout) throw new Error("Invalid reportType");
	return buildLayout(value);
}

export async function exportExcel(reportType, value) {
	const workbook = writeWorksheet(createExcelLayout(reportType, value));
	const buffer = await workbook.xlsx.writeBuffer();
	return new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
}
