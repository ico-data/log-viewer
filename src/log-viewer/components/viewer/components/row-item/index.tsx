import { useTheme } from "@/log-viewer/theme-provider";
import * as React from "react";
import * as I from "./interface";
import * as S from "./style";

/**
 * 单行日志展示组件
 * 
 * Single-line log display component 
 */
const RowItem: React.FC<I.RowItemProps> = function (props) {
	const { rowData, jsonRowStyles, rowHeight } = props;
	const isJson = React.useMemo(() => !(typeof rowData === "string"), [rowData]);
	const { mode, theme } = useTheme();

	const jsonRowItem = React.useMemo(() => {
		if (!isJson) return null;
		const { type = "GENERAL", time, message, ip = "", port = "", serviceName = "" } = rowData as LogJsonItem;
		return (
			<S.Row height={rowHeight} style={jsonRowStyles?.row}>
				<S.RowTime themeVal={theme} style={jsonRowStyles?.time}>{time}</S.RowTime>
				<S.RowIp themeVal={theme} style={jsonRowStyles?.ip}>{ip}</S.RowIp>
				<S.RowPort themeVal={theme} style={jsonRowStyles?.port}>:{port}</S.RowPort>
				<S.RowType
					themeVal={theme}
					style={{
						...(jsonRowStyles?.type ?? {}),
						...(typeof jsonRowStyles?.setTypeStyles === "function" ? jsonRowStyles.setTypeStyles(type) : {})
					}}
					type={type}>
					{type}
				</S.RowType>
				<S.RowServiceName themeVal={theme} style={jsonRowStyles?.serviceName}>{serviceName}</S.RowServiceName>
				<br />
				<S.RowMessage themeVal={theme} style={jsonRowStyles?.message}>{message}</S.RowMessage>
			</S.Row>
		);
	}
	, [rowData, isJson, jsonRowStyles]);

	const textRowItem = React.useMemo(() => {
		if (isJson) return null;
		return (
			<S.Row height={rowHeight}>
				<S.RowMessage themeVal={theme}>{rowData as string}</S.RowMessage>
			</S.Row>
		);
	}
	, [rowData, isJson]);

	return isJson ? jsonRowItem : textRowItem;
};

export default RowItem;