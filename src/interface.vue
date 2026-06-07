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
	"delivery-order": "Delivery order",
	"daily-summary": "Daily summary",
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

		const { label, reportType, value } = props;

		return {
			isLoading,
			label: label,
			async click() {
				isLoading.value = true;

				try {
					const pdf = (reportType === 'non-movement') ? 
						await generateNonMovementReportPdf(createNonMovementReportData(JSON.parse(value)))
					: (reportType === 'billing' ) ?
						await generateSummaryReportPdf(createSummaryReportData(JSON.parse(value)))
					: (reportType === 'delivery-order' ) ?
						await generateDeliveryOrderPdf(createDeliveryOrderData(JSON.parse(value)))
					: (reportType === 'daily-summary' ) ?
						await generateDailyReportPdf(createDailyReportData(JSON.parse(value)))
					: (() => {throw new Error ('Invalid reportType');})()
						;

					store.add({
						title: `${reportName[reportType]} generated`,
						type: 'success',
						dialog: true,
						dismissText: 'Download',
						dismissAction: () => {downloadPdf(pdf, 'my-name.pdf');}
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