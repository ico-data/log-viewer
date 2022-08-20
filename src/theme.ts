export const viewerTheme = {
	light: {
		bgColor: "#fafafa",
		rowItem: {
			time: "#d4b106",
			ip: "#1890ff",
			message: "#434343",
			port: "#597ef7",
			serviceName: "#722ed1",
			type: {
				color: "#1f1f1f",
				bgColor: {
					"WARNING": "#ffc53d",
					"ERROR": "#ff4d4f",
					"SUCCESS":"#73d13d ",
					"GENERAL":"#f0f0f0",
					"INFO": "#5cdbd3"
				}
			}
		}

	},
	night: {
		bgColor: "#262626",
		rowItem: {
			time: "#fadb14",
			ip: "#40a9ff",
			message: "#f0f0f0",
			port: "#2f54eb",
			serviceName: "#9254de",
			type: {
				color: "#fafafa",
				bgColor: {
					"WARNING": "#faad14",
					"ERROR": "#f5222d",
					"SUCCESS":"#52c41a",
					"GENERAL":"#bfbfbf",
					"INFO": "#08979c"
				}
			}
		}
	}
};