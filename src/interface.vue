<template>
	<div>
		<v-button
			:loading="isLoading"
			@click="click"
			:secondary="false"
		>
			{{ label }}
		</v-button>
		<v-button
			:loading="csvIsLoading"
			@click="csvClick"
			:secondary="false"
		>
			{{ csvLabel }}
		</v-button>
	</div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useStores } from "@directus/extensions-sdk";
import { render } from "micromustache";
import { useI18n } from "vue-i18n";
import { createDeliveryOrderData, createSummaryReportData, createNonMovementReportData, createDailyReportData, createRewashReportData, createWeightSummaryReportData, generateDeliveryOrderPdf, generateSummaryReportPdf, generateNonMovementReportPdf, generateDailyReportPdf, generateRewashReportPdf, generateWeightSummaryReportPdf, generateLinenDeliveryOrdersPdf, downloadPdf } from "./pdf-generator";

const reportName = {
	"non-movement": "Non-movement report",
	"billing": "Billing report",
	"delivery-order": "Delivery order report",
	"daily-summary": "Daily summary report",
	"service-summary": "Service summary",
	"rewash-report": "Rewash report",
	"weight-summary": "Weight summary",
};

function downloadCsv(csv, fileName) {
	var enc = new TextEncoder();

	const blob = new Blob([enc.encode(csv).buffer], { type: "application/pdf" });
	const url = URL.createObjectURL(blob);
	const link = document.createElement("a");

	link.href = url;
	link.download = fileName;
	link.click();

	URL.revokeObjectURL(url);
}


export default defineComponent({
	emits: ["input"],
	props: {
		label: {
			type: String,
			default: null,
		},
		csvLabel: {
			type: String,
			default: null,
		},
		reportType: {
			type: String,
			default: null,
		},
		value: {
			type: String,
			default: null,
		},
	},
	setup(props) {
		const { useNotificationsStore } = useStores();
		const store = useNotificationsStore();
		const isLoading = ref(false);
		const csvIsLoading = ref(false);
		const { t } = useI18n();

		const { label } = props;

		return {
			isLoading,
			csvIsLoading,
			label: label,
			async click() {
				const { reportType, value } = props;
				
				isLoading.value = true;

				try {
					const { name } = value;
					
					const pdf = (reportType === 'non-movement') ? 
						await generateNonMovementReportPdf(createNonMovementReportData(value))
					: (reportType === 'billing' ) ?
						await generateSummaryReportPdf(createSummaryReportData(value))
					: (reportType === 'delivery-order' ) ?
						await generateDeliveryOrderPdf(createDeliveryOrderData(value))
					: (reportType === 'daily-summary' ) ?
						await generateDailyReportPdf(createDailyReportData(value))
					: (reportType === 'service-summary' ) ?
						await generateLinenDeliveryOrdersPdf(value)
					: (reportType === 'rewash-report' ) ?
						await generateRewashReportPdf(createRewashReportData(value))
					: (reportType === 'weight-summary' ) ?
						await generateWeightSummaryReportPdf(createWeightSummaryReportData(value))
					: (() => {throw new Error ('Invalid reportType');})()
						;

					store.add({
						title: `${reportName[reportType]} generated`,
						type: 'success',
						dialog: true,
						dismissText: 'Download',
						dismissAction: () => {downloadPdf(pdf, `${name}.pdf`);}
					});
				} catch (e) {
					store.add({
						title: `${reportName[reportType]} failed to generate`,
						type: 'error',
						dialog: true,
						dismissText: 'Dismiss',
					});
				} finally {
					isLoading.value = false;
				}
			},
			async csvClick() {
				const { reportType, value } = props;
				
				isLoading.value = true;

				try {
					const { name } = value;
					
					const pdf = (reportType === 'non-movement') ? 
						(() => {
							const { reportTitle, hotelName, department, generatedOn, items } = value;

							return [
								[ reportTitle, generatedOn ],
								[],
								[ hotelName, department ],
								[],
								[ 'Linen Type', '30 - 60 days', '> 60 days', '> 60 days (Outstanding)' ],
								...items.map(({ item, days31to60, days60plus, total }) =>
									[ item, days31to60, days60plus, total ]
								)
							];
						})()
					: (reportType === 'billing' ) ?
						(() => {
							const {
								reportTitle,
								hotelName,
								department,
								period,
								taxRate,
								taxLabel,
								generatedOn,
								notes,
								deliveries,
								items,
								summaryOverrides,
							} = value;

							const {
								totalQtyPerDay,
								totalValuePerDay,
								taxPerDay,
								subtotalPerDay,
								totalQty,
								billableQty,
								totalValue,
								taxTotal,
								subtotalTotal
							} = summaryOverrides;

							return [
								[ reportTitle, generatedOn ],
								[],
								[ hotelName, department, period.from, period.to ],
								[],
								[
									'No.', 'Description', 'Servicing', 'Unit', 'Unit Price (RM)',
									'Delivered Quantity (including rewash)',
									...deliveries.slice(1).map(() => ''),
									'Total Qty', 'Billable Qty', 'Total Value'
								],
								[ '',, '',, '',, '',, '',, '',, '',, deliveries.map(({ date }) => date) ],
								[ '',, '',, '',, '',, '',, '',, '',, deliveries.map(({ doNumber }) => doNumber) ],
								...items.map(({
									no,
									servicing,
									description,
									unit,
									unit_price,
									quantities,
									totalQty,
									billableQty,
									totalValue,
								)) =>
									[ no, description, servicing, unit, unit_price, ...quantities, totalQty, billableQty, totalValue ]
								),
								[ 'Total Pcs per day', '',, '',, '',, '',, '',, '',, ...totalQtyPerDay, totalQty, billableQty, totalValue ],
								[ 'Total Value per day', '',, '',, '',, '',, '',, '',, ...totalValuePerDay, '', '', totalValue ],
								[ 'SST 8%', '',, '',, '',, '',, '',, '',, ...taxPerDay, '', '', taxTotal ],
								[ 'Subtotal w/ Tax', '',, '',, '',, '',, '',, '',, ...subtotalPerDay, '', '', subtotalTotal ],
								[],
								[ notes ],
							];
						}()
					: (reportType === 'delivery-order' ) ?
						(() => {WIP}()
					: (reportType === 'daily-summary' ) ?
						(() => {WIP}()
					: (reportType === 'service-summary' ) ?
						(() => {WIP}()
					: (reportType === 'rewash-report' ) ?
						(() => {WIP}()
					: (reportType === 'weight-summary' ) ?
						(() => {WIP}()
					: (() => {throw new Error ('Invalid reportType');})()
						;

					store.add({
						title: `${reportName[reportType]} generated`,
						type: 'success',
						dialog: true,
						dismissText: 'Download',
						dismissAction: () => {downloadCsv(csv, `${name}.csv`);}
					});
				} catch (e) {
					store.add({
						title: `${reportName[reportType]} failed to generate`,
						type: 'error',
						dialog: true,
						dismissText: 'Dismiss',
					});
				} finally {
					isLoading.value = false;
				}
			},
		};
	},
});
</script>