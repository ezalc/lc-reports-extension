<template>
	<div>
		<v-button
			:loading="isLoading"
			@click="click"
			:secondary="false"
		>
			{{ label }}
		</v-button>
	</div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useStores } from "@directus/extensions-sdk";
import { render } from "micromustache";
import { useI18n } from "vue-i18n";
import { createDeliveryOrderData, createSummaryReportData, createNonMovementReportData, createDailyReportData, generateDeliveryOrderPdf, generateSummaryReportPdf, generateNonMovementReportPdf, generateDailyReportPdf, downloadPdf } from "./pdf-generator";

const reportName = {
	"non-movement": "Non-movement report",
	"billing": "Billing report",
	"delivery-order": "Delivery order report",
	"daily-summary": "Daily summary report",
};

export default defineComponent({
	emits: ["input"],
	props: {
		label: {
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
		const { t } = useI18n();

		const { label } = props;

		return {
			isLoading,
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
		};
	},
});
</script>