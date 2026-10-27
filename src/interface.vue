<template>
	<div>
		<v-button
			@click="isDialogOpen = true"
			:secondary="false"
		>
			{{ label }}
		</v-button>
		<v-dialog v-model="isDialogOpen" @esc="closeDialog" persistent>
			<v-card class="lc-report-card">
				<v-card-title>{{ title }}</v-card-title>
				<v-card-text>
					<p v-for="format in formats" :key="format.name">
						<strong>{{ format.name }}:</strong> {{ format.hint }}
					</p>
				</v-card-text>
				<div class="lc-report-actions">
					<v-button
						secondary
						:disabled="loadingFormat !== null"
						@click="closeDialog"
					>
						Cancel
					</v-button>
					<v-button
						v-for="format in formats"
						:key="format.name"
						:loading="loadingFormat === format.name"
						:disabled="loadingFormat !== null"
						@click="exportAs(format)"
					>
						Export as {{ format.name }}
					</v-button>
				</div>
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useStores } from "@directus/extensions-sdk";
import { exportPdf } from "./export-pdf";
import { exportCsv } from "./export-csv";
import { exportExcel } from "./export-excel";
import { REPORT_NAMES, downloadBlob } from "./reports";

const formats = [
	{ name: 'PDF', hint: 'print-ready document.', export: exportPdf, extension: 'pdf' },
	{ name: 'CSV', hint: 'plain data in the same cell positions, no styling.', export: exportCsv, extension: 'csv' },
	{ name: 'Excel', hint: 'same layout, fonts and colours as the PDF.', export: exportExcel, extension: 'xlsx' },
];

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
		const isDialogOpen = ref(false);
		const loadingFormat = ref(null);

		return {
			isDialogOpen,
			loadingFormat,
			formats,
			label: props.label,
			title: `Export ${REPORT_NAMES[props.reportType] ?? props.label}`,
			closeDialog() {
				if (loadingFormat.value === null) isDialogOpen.value = false;
			},
			async exportAs(format) {
				const { reportType, value } = props;

				loadingFormat.value = format.name;

				try {
					const { name } = value;

					downloadBlob(await format.export(reportType, value), `${name}.${format.extension}`);

					store.add({
						title: `${REPORT_NAMES[reportType]} generated`,
						type: 'success',
					});
					isDialogOpen.value = false;
				} catch (error) {
					console.error(error);
					store.add({
						title: `${REPORT_NAMES[reportType]} failed to generate`,
						type: 'error',
						dialog: true,
						dismissText: 'Dismiss',
					});
				} finally {
					loadingFormat.value = null;
				}
			},
		};
	},
});
</script>

<style scoped>
.lc-report-card {
	width: 720px;
	max-width: 90vw;
}

.lc-report-actions {
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-end;
	gap: 8px;
	padding: 0 var(--v-card-padding, 32px) var(--v-card-padding, 32px);
}
</style>
