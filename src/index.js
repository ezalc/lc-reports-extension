import InterfaceComponent from "./interface.vue";
import { REPORT_NAMES } from "./reports";

export default {
	id: "lc-report",
	name: "LC Report",
	description: "LC PDF report",
	icon: "smart_button",
	component: InterfaceComponent,
	types: ["json"],
	options: ({ collection }) => [
		{
			field: "label",
			type: "string",
			name: "$t:label",
			meta: {
				width: "full",
				interface: "text",
			},
		},
		{
			field: "reportType",
			name: "Report Type",
			type: "string",
			meta: {
				width: "full",
				interface: "select-dropdown",
				required: true,
				options: {
					choices: Object.entries(REPORT_NAMES).map(([value, text]) => ({ text, value })),
				},
			},
		},
	]
};
