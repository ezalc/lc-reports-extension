import InterfaceComponent from "./interface.vue";

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
					choices: [
						{ text: "Non-movement report", value: "non-movement" },
						{ text: "Billing report", value: "billing" },
						{ text: "Delivery order", value: "delivery-order" },
						{ text: "Daily summary", value: "daily-summary" },
					],
				},
			},
		},
	]
};
