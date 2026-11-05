import {
	createDailyReportData,
	createDeliveryOrderData,
	createNonMovementReportData,
	createQcReportData,
	createRewashReportData,
	createSummaryReportData,
	createWeightSummaryReportData,
	generateDailyReportPdf,
	generateDeliveryOrderPdf,
	generateLinenDeliveryOrdersPdf,
	generateNonMovementReportPdf,
	generateQcReportPdf,
	generateRewashReportPdf,
	generateSummaryReportPdf,
	generateWeightSummaryReportPdf,
} from "./pdf-generator";
export { exportExcel } from "./excel-generator";

// createData maps the raw record. The service summary uses it as is.
const PDF_REPORTS = {
	"delivery-order": { createData: createDeliveryOrderData, generate: generateDeliveryOrderPdf },
	"billing": { createData: createSummaryReportData, generate: generateSummaryReportPdf },
	"daily-summary": { createData: createDailyReportData, generate: generateDailyReportPdf },
	"non-movement": { createData: createNonMovementReportData, generate: generateNonMovementReportPdf },
	"service-summary": { createData: (value) => value, generate: generateLinenDeliveryOrdersPdf },
	"movement-summary": { createData: createRewashReportData, generate: generateRewashReportPdf },
	"weight-summary": { createData: createWeightSummaryReportData, generate: generateWeightSummaryReportPdf },
	"qc": { createData: createQcReportData, generate: generateQcReportPdf },
};

export async function exportPdf(reportType, value) {
	const report = PDF_REPORTS[reportType];
	if (!report) throw new Error("Invalid reportType");
	const bytes = await report.generate(report.createData(value));
	// plain ArrayBuffer copy for the Blob
	const buffer = new ArrayBuffer(bytes.byteLength);
	new Uint8Array(buffer).set(bytes);
	return new Blob([buffer], { type: "application/pdf" });
}

export const REPORT_NAMES = {
	"delivery-order": "Delivery order report",
	"billing": "Billing report",
	"daily-summary": "Daily summary report",
	"non-movement": "Non-movement report",
	"service-summary": "Service summary",
	"movement-summary": "Movement summary report",
	"weight-summary": "Weight summary",
	"qc": "QC report",
};

export function downloadBlob(blob, filename) {
	const url = URL.createObjectURL(blob);
	const link = document.createElement("a");
	link.href = url;
	link.download = filename;
	link.click();
	URL.revokeObjectURL(url);
}
