import {
	createBillingData,
	createDailyData,
	createDeliveryOrderData,
	createMovementSummaryData,
	createNonMovementData,
	createWeightSummaryData,
} from "./export-pdf";
import {
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

// Each report is a string[][] grid laid out like its PDF. Right-aligned PDF text
// goes in the last column, and a spanning cell leaves blanks after it.

const rowFromColumn = (column, ...cells) => [...Array(column).fill(""), ...cells];
const spanCells = (text, columnCount) => [text, ...Array(columnCount - 1).fill("")];
const padRows = (rows) => {
	const width = Math.max(...rows.map((row) => row.length));
	return rows.map((row) => Array.from({ length: width }, (_, index) => row[index] ?? ""));
};

// Quote if needed. A leading quote stops spreadsheets running text as a formula.
const toCsvCell = (value) => {
	let text = String(value ?? "");
	if (/^[=+@]|^-[^\d.\s]/.test(text)) text = `'${text}`;
	return /[",\r\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
};

// ---- delivery order ----

function deliveryOrderGrid(data) {
	const text = REPORT_TEXT.deliveryOrder;
	const order = normalizeDeliveryOrder(data);
	const weight = `${formatNumber(order.totalWeight)} ${order.weightUnit}`;

	return padRows([
		[order.company.name, "", "", text.title],
		[order.company.address, "", "", "DO Number", order.doNumber],
		rowFromColumn(3, "Date", formatLongDate(order.date)),
		rowFromColumn(3, "Driver", order.driver),
		rowFromColumn(3, "Total Weight", weight),
		[],
		[text.billTo, "", text.deliverTo],
		[order.customer.name, "", order.deliverTo.name],
		[order.customer.address, "", order.deliverTo.address],
		[],
		rowFromColumn(1, text.attention),
		[],
		[text.itemsHeading],
		text.itemHeaders,
		...(order.items.length
			? order.items.map(deliveryItemCells)
			: [spanCells(text.noItems, 5)]),
		[...spanCells(text.totalQuantity, 3), formatNumber(order.totalQuantity), order.quantityUnit],
		[],
		[text.notice],
		[],
		[
			order.hasTrolley ? text.trolleyQuantity : "",
			order.hasTrolley ? formatNumber(order.trolleyQuantity) : "",
			text.receivedBy,
		],
		[order.hasTrolley ? text.trolleyIds : "", order.hasTrolley ? order.trolleyIds || "-" : ""],
		[],
		rowFromColumn(2, text.name),
		rowFromColumn(2, text.date),
		rowFromColumn(2, text.time),
		rowFromColumn(2, text.chop),
		[],
		rowFromColumn(4, `Generated on ${formatLocaleStamp()}`),
	]);
}

// ---- billing ----

function billingGrid(data) {
	const text = REPORT_TEXT.billing;
	const billing = normalizeBilling(data);
	const { deliveryCount } = billing;
	const leadingBlanks = ["", "", "", "", ""];
	const trailingBlanks = ["", "", ""];
	return padRows([
		[billing.reportTitle],
		[billing.hotelName],
		[
			`${billing.department}  |  From ${formatDayMonthYear(billing.monthRange.from)} To ${formatDayMonthYear(billing.monthRange.to)}`,
		],
		[],
		[...text.headers, ...spanCells(text.deliveredQuantity, deliveryCount), ...text.totalHeaders],
		[...leadingBlanks, ...billing.deliveries.map((delivery) => formatDayMonth(delivery.date)), ...trailingBlanks],
		[...leadingBlanks, ...billing.deliveries.map((delivery) => delivery.doNumber), ...trailingBlanks],
		...(billing.items.length
			? [
					...billing.items.map(billingItemCells),
					...billingSummaryRows(billing).map((row) => [...spanCells(row.label, 5), ...row.perDay, ...row.totals]),
				]
			: [spanCells(text.noItems, deliveryCount + 8)]),
		[],
		rowFromColumn(deliveryCount + 7, `Generated on ${formatDateTime(billing.generatedOn)}`),
	]);
}

// ---- daily summary ----

function dailyGrid(data) {
	const text = REPORT_TEXT.daily;
	const daily = normalizeDaily(data);
	return padRows([
		[daily.reportTitle],
		[daily.hotelName],
		[formatLongDate(daily.date)],
		[],
		text.headers,
		...(daily.items.length
			? daily.items.map(dailyItemCells)
			: [spanCells(text.noItems, 6)]),
		[],
		rowFromColumn(5, `Generated on ${formatLocaleStamp()}`),
	]);
}

// ---- non-movement (inventory aging) ----

function nonMovementGrid(data) {
	const text = REPORT_TEXT.nonMovement;
	const report = normalizeNonMovement(data);
	const bodyRows = [];
	let currentCustomer = "";
	for (const item of report.items) {
		if (item.customer !== currentCustomer) {
			currentCustomer = item.customer;
			bodyRows.push(spanCells(`Customer: ${currentCustomer}`, 4));
		}
		bodyRows.push(agingItemCells(item));
	}
	return padRows([
		[report.reportTitle],
		[report.hotelName],
		[],
		[text.item, text.daysSinceLastSeen],
		["", ...text.agingHeaders],
		...(bodyRows.length ? bodyRows : [spanCells(text.noItems, 4)]),
		[],
		rowFromColumn(3, `Generated on ${formatLocaleStamp(report.generatedOn)}`),
	]);
}

// ---- service summary (linen delivery orders) ----

function serviceSummaryGrid(data) {
	const text = REPORT_TEXT.serviceSummary;
	const report = normalizeServiceSummary(data);
	return padRows([
		[text.title, "", "", "", "", "", "", "", `Generated On ${formatDateTime()}`],
		[report.hotelName],
		[`From ${report.from} To ${report.to}`],
		[],
		text.headers,
		...(report.orders.length
			? report.orders.map(serviceOrderCells)
			: [spanCells(text.noOrders, 9)]),
	]);
}

// ---- movement summary (rewash report) ----

function movementSummaryGrid(data) {
	const text = REPORT_TEXT.movementSummary;
	const report = normalizeMovementSummary(data);
	const { currency, totals } = report;
	const lineTotalRows = (lines, totalQuantity, totalValue) =>
		[movementLineTotalCells(lines, totalQuantity, totalValue)].filter(Boolean);
	const lineHeader = [...text.lineHeaders, `Unit Price (${currency})`, `Amount (${currency})`];

	return padRows([
		[`${report.reportTitle}:`, formatWordDate(report.reportDate), "", "", `Generated On ${formatDateTime(report.generatedOn)}`],
		[text.hotel, report.hotelName],
		[],
		[text.summary],
		[...text.summaryHeaders, `Total Order Amount (${currency})`],
		[
			formatOrDash(totals.totalOrders, formatInteger),
			formatOrDash(totals.totalQty, formatInteger),
			formatOrDash(totals.totalValue, formatMoney),
		],
		[],
		[text.orders],
		[...text.orderHeaders, `Amount (${currency}) (Exclude Tax)`],
		...(report.orders.length
			? [
					...report.orders.map(movementOrderCells),
					movementOrderTotalCells(totals),
				]
			: [[text.noOrders]]),
		[],
		[text.items],
		lineHeader,
		...(report.items.length
			? [...report.items.map(movementLineCells), ...lineTotalRows(report.items, totals.itemsTotalQty, totals.itemsTotalValue)]
			: [[text.noItems]]),
		[],
		[text.rewashItems],
		lineHeader,
		...(report.rewashItems.length
			? [...report.rewashItems.map(movementLineCells), ...lineTotalRows(report.rewashItems, totals.rewashTotalQty, totals.rewashTotalValue)]
			: [[text.noRewashItems]]),
	]);
}

// ---- weight summary ----

function weightSummaryGrid(data) {
	const text = REPORT_TEXT.weightSummary;
	const report = normalizeWeightSummary(data);
	return padRows([
		[report.reportTitle, "", "", "", "", "", "", `Generated On ${formatDateTime(report.generatedOn)}`],
		[report.driver],
		[`From ${formatDayMonthYear(report.fromDate)} To ${formatDayMonthYear(report.toDate)}`],
		[],
		text.headers,
		...(report.items.length
			? report.items.map((item) => weightItemCells(item, report.driver))
			: [spanCells(text.noDeliveries, 8)]),
		weightTotalCells(report.totalGrossWeight),
	]);
}

// ---- entry point ----

const gridBuilders = {
	"delivery-order": (value) => deliveryOrderGrid(createDeliveryOrderData(value)),
	"billing": (value) => billingGrid(createBillingData(value)),
	"daily-summary": (value) => dailyGrid(createDailyData(value)),
	"non-movement": (value) => nonMovementGrid(createNonMovementData(value)),
	"service-summary": (value) => serviceSummaryGrid(value),
	"movement-summary": (value) => movementSummaryGrid(createMovementSummaryData(value)),
	"weight-summary": (value) => weightSummaryGrid(createWeightSummaryData(value)),
};

function createCsvGrid(reportType, value) {
	const buildGrid = gridBuilders[reportType];
	if (!buildGrid) throw new Error("Invalid reportType");
	return buildGrid(value);
}

export async function exportCsv(reportType, value) {
	const grid = createCsvGrid(reportType, value);
	// BOM so Excel reads the file as UTF-8
	const csvText = "\ufeff" + grid.map((row) => row.map(toCsvCell).join(",")).join("\r\n");
	return new Blob([csvText], { type: "text/csv;charset=utf-8" });
}
