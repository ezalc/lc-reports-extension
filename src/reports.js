// Shared by the PDF and Excel exporters.

export const REPORT_NAMES = {
	"delivery-order": "Delivery order report",
	"billing": "Billing report",
	"daily-summary": "Daily summary report",
	"non-movement": "Non-movement report",
	"service-summary": "Service summary",
	"movement-summary": "Movement summary report",
	"weight-summary": "Weight summary",
};

// Text printed on the reports
export const REPORT_TEXT = {
	deliveryOrder: {
		title: "Delivery Order",
		billTo: "BILL TO",
		deliverTo: "DELIVER TO",
		attention: "Attention to:",
		itemsHeading: "DELIVERED ITEMS",
		itemHeaders: ["No.", "Item", "Department", "Quantity", "Unit"],
		totalQuantity: "Total Quantity",
		noItems: "No items provided.",
		notice:
			"Goods should be examined at the time of delivery. Any claims/complaints must notify us within 7 days from the delivery date, otherwise such claims shall not be entertained.",
		trolleyQuantity: "Trolley/Canvas Qty:",
		trolleyIds: "Trolley/Canvas IDs:",
		receivedBy: "Received By:",
		name: "NAME:",
		date: "DATE:",
		time: "TIME:",
		chop: "Please Chop, Sign, Write Name",
	},
	billing: {
		headers: ["No", "Description", "Servicing", "Unit", "Unit Price\n(RM)"],
		deliveredQuantity: "Delivered Quantity (Including rewash)",
		totalHeaders: ["Total Qty", "Billable Qty", "Total Value (RM)"],
		totalPieces: "Total Pcs Per Day",
		totalValue: "Total Value Per Day",
		subtotal: "Subtotal W Tax",
		noItems: "No monthly bill items provided.",
	},
	daily: {
		headers: ["Department", "Linen Type", "Collected", "Delivered", "Stock Level", "Par Level"],
		noItems: "No items provided.",
	},
	nonMovement: {
		item: "Item",
		daysSinceLastSeen: "No. of Days Since Last Seen",
		agingHeaders: ["31 - 60", "> 60", "> 60 Days Outstanding"],
		noItems: "No items provided.",
	},
	serviceSummary: {
		title: "Linen Delivery Order",
		headers: ["D.O Date", "D.O. Number", "Customer", "Quantity", "Trolley Qty", "Weight", "Delivered Date", "Department", "Driver"],
		noOrders: "No linen delivery orders provided.",
	},
	movementSummary: {
		summary: "Summary",
		orders: "Orders",
		items: "Items",
		rewashItems: "Rewash Items",
		hotel: "Hotel:",
		summaryHeaders: ["Total Orders", "Total Quantity"],
		orderHeaders: ["Order No.", "Quantity"],
		lineHeaders: ["Description", "Department", "Quantity"],
		noOrders: "No orders.",
		noItems: "No items.",
		noRewashItems: "No rewash items.",
	},
	weightSummary: {
		headers: ["D.O. Date", "D.O. Number", "Customer", "Delivered By", "P.L. Number", "Trolley", "Weight (inc. Trolley)", "Weight (kg)"],
		noDeliveries: "No deliveries in this period.",
	},
};

// [red, green, blue] floats from 0 to 1, as the PDF uses. Excel converts them to hex.
export const COLORS = {
	ink: [0.12, 0.16, 0.2],
	muted: [0.32, 0.38, 0.44],
	line: [0.77, 0.82, 0.87],
	brand: [0.04, 0.24, 0.36],
	soft: [0.95, 0.97, 0.99],
	header: [0.93, 0.96, 0.99],
	total: [0.98, 0.99, 1],
	white: [1, 1, 1],
	billing: {
		brand: [0.19, 0.27, 0.35],
		quantity: [0.96, 0.98, 1],
		value: [0.97, 0.98, 0.99],
		tax: [1, 0.97, 0.93],
		subtotal: [0.94, 0.98, 0.94],
	},
	movement: {
		ink: [0.12, 0.12, 0.12],
		muted: [0.4, 0.4, 0.4],
		rule: [0.62, 0.62, 0.62],
		strong: [0.1, 0.1, 0.1],
		boxBorder: [0.55, 0.55, 0.55],
		headerFill: [0.92, 0.94, 0.98],
		headerRule: [0.86, 0.9, 0.95],
	},
	weight: {
		ink: [0.1, 0.1, 0.1],
		muted: [0.45, 0.45, 0.45],
		headerText: [0.62, 0.62, 0.62],
		headerRule: [0.88, 0.9, 0.93],
		strong: [0.1, 0.1, 0.1],
	},
};

// ---- values ----

const asArray = (value) => (Array.isArray(value) ? value : []);
const toNumber = (value) => {
	const number = Number(value);
	return Number.isFinite(number) ? number : 0;
};
const roundToTwoDecimals = (value) => Math.round((toNumber(value) + Number.EPSILON) * 100) / 100;
const hasValue = (value) => value != null && value !== "";
const toNullableNumber = (value) => (hasValue(value) ? toNumber(value) : null);

// ---- formats ----

const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const formatNumber = (value, options = {}) =>
	new Intl.NumberFormat("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 2, ...options }).format(toNumber(value));
export const formatInteger = (value) => formatNumber(value, { maximumFractionDigits: 0 });
export const formatMoney = (value) =>
	formatNumber(roundToTwoDecimals(value), { minimumFractionDigits: 2, maximumFractionDigits: 2 });
export const formatOrDash = (value, format) => (value === null ? "-" : format(value));
const formatMoneyOrDash = (value) => (value === null || value === 0 ? "-" : formatMoney(value));

export const toDate = (value) => {
	if (!hasValue(value)) return null;
	if (value instanceof Date) return Number.isNaN(value.getTime()) ? null : value;
	const isoMatch = typeof value === "string" && /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
	const date = isoMatch
		? new Date(Number(isoMatch[1]), Number(isoMatch[2]) - 1, Number(isoMatch[3]))
		: new Date(value);
	return Number.isNaN(date.getTime()) ? null : date;
};
const padTwoDigits = (number) => String(number).padStart(2, "0");
export const formatLongDate = (value) => {
	const date = toDate(value);
	return date ? new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "short", year: "numeric" }).format(date) : "-";
};
export const formatDayMonthYear = (value) => {
	const date = toDate(value);
	return date ? `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}` : "-";
};
export const formatDayMonth = (value) => {
	const date = toDate(value);
	return date ? `${padTwoDigits(date.getDate())}-${MONTH_NAMES[date.getMonth()]}` : "-";
};
const formatSlashDate = (value) => {
	const date = toDate(value);
	return date ? `${padTwoDigits(date.getDate())}/${padTwoDigits(date.getMonth() + 1)}/${date.getFullYear()}` : "-";
};
export const formatWordDate = (date) => `${date.getDate()} ${MONTH_NAMES[date.getMonth()]} ${date.getFullYear()}`;
export const formatLocaleStamp = (value = new Date()) => {
	const date = toDate(value);
	return date ? date.toLocaleString("en-GB") : "-";
};
export const formatDateTime = (value = new Date()) => {
	const date = toDate(value) ?? new Date();
	const time = date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", second: "2-digit", hour12: true });
	return `${formatDayMonthYear(date)} ${time}`;
};

// ---- normalisers ----

export function normalizeDeliveryOrder(data = {}) {
	const items = asArray(data.items).map((item = {}) => ({
		name: item.name ?? "",
		department: item.department ?? "-",
		quantity: toNumber(item.quantity),
		unit: item.unit ?? "",
	}));
	const company = { name: data.company?.name ?? "Company Name", address: data.company?.address ?? "Company Address" };
	const customer = { name: data.customer?.name ?? "Customer Name", address: data.customer?.address ?? "Customer Address" };
	const deliverTo = {
		name: data.deliverTo?.name ?? customer.name,
		address: data.deliverTo?.address ?? customer.address,
	};
	const totals = data.totals ?? {};
	const trolleyQuantity = toNumber(data.trolleyQty);
	const trolleyIds = data.trolleyIds ?? "";
	return {
		company,
		customer,
		deliverTo,
		items,
		doNumber: data.doNumber ?? "N/A",
		driver: data.driver ?? "N/A",
		date: data.date ?? new Date(),
		totalQuantity: totals.totalQuantity,
		quantityUnit: totals.totalQuantityUnit ?? data.totalQuantityUnit ?? (items[0]?.unit || "pcs"),
		totalWeight: totals.totalWeight ?? data.totalWeight,
		weightUnit: totals.totalWeightUnit ?? data.totalWeightUnit ?? "kg",
		trolleyQuantity,
		trolleyIds,
		hasTrolley: Boolean(trolleyQuantity > 0 || trolleyIds),
	};
}

export function normalizeBilling(data = {}) {
	const period = data.period ?? data.dateRange ?? {};
	const periodDate = toDate(period.month) ?? toDate(period.from) ?? toDate(period.to) ?? new Date();
	const monthRange = {
		from: new Date(periodDate.getFullYear(), periodDate.getMonth(), 1),
		to: new Date(periodDate.getFullYear(), periodDate.getMonth() + 1, 0),
	};
	const deliveries = asArray(data.deliveries ?? data.days)
		.map((delivery) => ({
			date: toDate(delivery.date ?? delivery.deliveryDate),
			doNumber: delivery.doNumber ?? delivery.reference ?? "-",
		}))
		.filter((delivery) => delivery.date)
		.sort((first, second) => first.date - second.date);
	if (!deliveries.length) deliveries.push({ date: monthRange.from, doNumber: "-" });
	const deliveryCount = deliveries.length;

	const rawTaxRate = toNumber(data.taxRate ?? data.sstRate);
	const taxRate = rawTaxRate ? (rawTaxRate > 1 ? rawTaxRate / 100 : rawTaxRate) : 0.08;

	const items = asArray(data.items).map((item, index) => ({
		no: item.no ?? index + 1,
		description: item.description ?? item.name ?? "",
		servicing: item.servicing === "Express" || item.servicing === "Special" ? item.servicing : "Normal",
		unit: item.unit ?? "PCS",
		unitPrice: toNumber(item.unitPrice),
		quantities: Array.from({ length: deliveryCount }, (_, dayIndex) => toNumber(asArray(item.quantities)[dayIndex])),
		totalQuantity: toNumber(item.totalQty),
		billableQuantity: toNumber(item.billableQty),
		totalValue: roundToTwoDecimals(item.totalValue ?? 0),
	}));

	const overrides = data.summary ?? data.summaryOverrides;
	const perDay = (values, convert) =>
		Array.from({ length: deliveryCount }, (_, dayIndex) =>
			Array.isArray(values) && dayIndex < values.length ? convert(values[dayIndex]) : 0,
		);
	return {
		reportTitle: data.reportTitle ?? "Billing Report",
		hotelName: data.hotelName ?? data.company?.name ?? "Hotel Name",
		department: data.department ?? "IRD",
		monthRange,
		deliveries,
		deliveryCount,
		taxLabel: data.taxLabel ?? `SST ${formatNumber(taxRate * 100)}%`,
		items,
		summary: {
			totalQuantityPerDay: perDay(overrides?.totalQtyPerDay, toNumber),
			totalValuePerDay: perDay(overrides?.totalValuePerDay, roundToTwoDecimals),
			taxPerDay: perDay(overrides?.taxPerDay, roundToTwoDecimals),
			subtotalPerDay: perDay(overrides?.subtotalPerDay, roundToTwoDecimals),
			totalQuantity: toNumber(overrides?.totalQty),
			billableQuantity: toNumber(overrides?.billableQty),
			totalValue: roundToTwoDecimals(overrides?.totalValue ?? 0),
			taxTotal: roundToTwoDecimals(overrides?.taxTotal ?? 0),
			subtotalTotal: roundToTwoDecimals(overrides?.subtotalTotal ?? 0),
		},
		generatedOn: data.generatedOn,
	};
}

export function normalizeDaily(data = {}) {
	return {
		reportTitle: data.reportTitle ?? "Daily Summary",
		hotelName: data.hotelName ?? "Hotel Name",
		date: data.date ? new Date(data.date) : new Date(),
		items: asArray(data.Items).map((item) => ({
			linenType: item.linenType ?? "-",
			department: item.department ?? "-",
			linenIn: item.LinenIn,
			linenOut: item.LinenOut,
			stock: item.Stock,
			par: item.PAR,
		})),
	};
}

export function normalizeNonMovement(data = {}) {
	return {
		reportTitle: data.reportTitle ?? "Inventory Aging Report",
		hotelName: data.hotelName ?? "Hotel Name",
		generatedOn: data.generatedOn ? new Date(data.generatedOn) : undefined,
		items: asArray(data.items).map((item) => ({
			customer: item.customer ?? "-",
			item: item.item ?? "-",
			days31to60: item.days31to60,
			days60plus: item.days60plus,
			total: item.total,
		})),
	};
}

// Nothing to map, the PDF prints the raw value
export function normalizeServiceSummary(data) {
	const record = data ?? {};
	return { hotelName: record.hotelName, from: record.from, to: record.to, orders: asArray(record.orders) };
}

const MOVEMENT_TOTAL_KEYS = [
	"totalOrders",
	"totalQty",
	"totalValue",
	"ordersTotalQty",
	"ordersTotalValue",
	"itemsTotalQty",
	"itemsTotalValue",
	"rewashTotalQty",
	"rewashTotalValue",
];

export function normalizeMovementSummary(data = {}) {
	const normalizeLine = (item) => ({
		description: item.description ?? item.name ?? "-",
		department: item.department ?? "-",
		quantity: toNumber(item.quantity),
		unitPrice: toNullableNumber(item.unitPrice),
		totalValue: hasValue(item.totalValue) ? roundToTwoDecimals(item.totalValue) : null,
	});
	const rawTotals = data.totals ?? {};
	return {
		reportTitle: data.reportTitle ?? "Daily Linen Delivery Report",
		hotelName: data.hotelName ?? "Hotel Name",
		currency: data.currencySymbol ?? "$",
		reportDate: toDate(data.date) ?? new Date(),
		generatedOn: data.generatedOn,
		orders: asArray(data.orders).map((order) => ({
			doNumber: order.doNumber ?? "-",
			quantity: toNumber(order.quantity),
			totalValue: roundToTwoDecimals(order.totalValue),
		})),
		items: asArray(data.items).map(normalizeLine),
		rewashItems: asArray(data.rewashItems).map(normalizeLine),
		totals: Object.fromEntries(MOVEMENT_TOTAL_KEYS.map((key) => [key, toNullableNumber(rawTotals[key])])),
	};
}

export function normalizeWeightSummary(data = {}) {
	const items = asArray(data.items);
	const itemDates = items
		.map((item) => toDate(item.date))
		.filter(Boolean)
		.sort((first, second) => first - second);
	return {
		reportTitle: data.reportTitle ?? "Weight Summary Report",
		driver: data.driver ?? "-",
		fromDate: toDate(data.period?.from) ?? itemDates[0] ?? null,
		toDate: toDate(data.period?.to) ?? itemDates[itemDates.length - 1] ?? null,
		generatedOn: data.generatedOn,
		items,
		totalGrossWeight: data.totalGrossWeight,
	};
}

// ---- table rows (display text, the same in the PDF and Excel) ----

export const deliveryItemCells = (item, index) => [
	index + 1,
	item.name || "-",
	item.department || "-",
	formatNumber(item.quantity),
	item.unit || "-",
];

export const billingItemCells = (item) => [
	item.no,
	item.description || "-",
	item.servicing,
	item.unit,
	formatMoney(item.unitPrice),
	...item.quantities.map(formatInteger),
	formatInteger(item.totalQuantity),
	formatInteger(item.billableQuantity),
	formatMoney(item.totalValue),
];

// Each row: label, one cell per delivery day, then three total cells
export function billingSummaryRows(billing) {
	const { summary, taxLabel } = billing;
	return [
		{
			key: "quantity",
			label: REPORT_TEXT.billing.totalPieces,
			perDay: summary.totalQuantityPerDay.map(formatInteger),
			totals: [formatInteger(summary.totalQuantity), formatInteger(summary.billableQuantity), formatMoney(summary.totalValue)],
		},
		{
			key: "value",
			label: REPORT_TEXT.billing.totalValue,
			perDay: summary.totalValuePerDay.map(formatMoney),
			totals: ["", "", formatMoney(summary.totalValue)],
		},
		{ key: "tax", label: taxLabel, perDay: summary.taxPerDay.map(formatMoney), totals: ["", "", formatMoney(summary.taxTotal)] },
		{
			key: "subtotal",
			label: REPORT_TEXT.billing.subtotal,
			perDay: summary.subtotalPerDay.map(formatMoney),
			totals: ["", "", formatMoney(summary.subtotalTotal)],
		},
	];
}

export const dailyItemCells = (item) => [
	item.department,
	item.linenType,
	formatNumber(item.linenIn),
	formatNumber(item.linenOut),
	formatNumber(item.stock),
	formatNumber(item.par),
];

export const agingItemCells = (item) => [
	item.item,
	formatNumber(item.days31to60),
	formatNumber(item.days60plus),
	formatNumber(item.total),
];

export const serviceOrderCells = (order) => [
	order.doDate ?? "-",
	order.doNumber ?? "-",
	order.customer ?? "-",
	order.quantity ?? "-",
	order.trolleyQty ?? "-",
	order.weight ?? "-",
	order.deliveredDate ?? "-",
	order.department ?? "-",
	order.driver ?? "-",
];

export const movementOrderCells = (order) => [order.doNumber, formatInteger(order.quantity), formatMoney(order.totalValue)];

export const movementOrderTotalCells = (totals) => [
	"Total",
	formatOrDash(totals.ordersTotalQty, formatInteger),
	formatOrDash(totals.ordersTotalValue, formatMoney),
];

export const movementLineCells = (line) => [
	line.description,
	line.department,
	formatInteger(line.quantity),
	formatMoneyOrDash(line.unitPrice),
	formatMoneyOrDash(line.totalValue),
];

// Undefined when there are no lines
export const movementLineTotalCells = (lines, totalQuantity, totalValue) =>
	lines.length ? ["Total", "", formatOrDash(totalQuantity, formatInteger), "-", totalValue ? formatMoney(totalValue) : "-"] : undefined;

export const weightItemCells = (item, driver) => [
	formatSlashDate(item.date),
	item.doNumber ?? "-",
	item.customer ?? "-",
	item.deliveredBy ?? driver,
	item.plNumber ?? "-",
	item.trolley ?? "-",
	formatNumber(item.weightIncTrolley),
	formatNumber(item.weight),
];

export const weightTotalCells = (totalGrossWeight) => [
	"Total",
	"",
	"",
	"",
	"",
	"",
	"",
	hasValue(totalGrossWeight) ? formatNumber(totalGrossWeight) : "-",
];

// ---- download ----

export function downloadBlob(blob, filename) {
	const url = URL.createObjectURL(blob);
	const link = document.createElement("a");
	link.href = url;
	link.download = filename;
	link.click();
	URL.revokeObjectURL(url);
}
