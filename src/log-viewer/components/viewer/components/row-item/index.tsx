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
  const { rowData, jsonRowStyles } = props;
  const isJson = React.useMemo(() => !(typeof rowData === "string"), [rowData]);
  const { mode } = useTheme();

  const jsonRowItem = React.useMemo(() => {
    if (!isJson) return null;
    const { type = "GENERAL", time, message, ip = "", port = "", serviceName = "" } = rowData as LogJsonItem;
    return (
      <S.Row style={jsonRowStyles?.row}>
        <S.RowTime style={jsonRowStyles?.time}>{time}</S.RowTime>
        <S.RowIp style={jsonRowStyles?.ip}>{ip}</S.RowIp>
        <S.RowPort style={jsonRowStyles?.port}>{port}</S.RowPort>
        <S.RowType
          style={{
            ...(jsonRowStyles?.type ?? {}),
            ...(typeof jsonRowStyles?.setTypeStyles === "function" ? jsonRowStyles.setTypeStyles(type) : {})
          }}
          type={type}>
          {type}
        </S.RowType>
        <S.RowServiceName style={jsonRowStyles?.serviceName}>{serviceName}</S.RowServiceName>
        <S.RowMessage style={jsonRowStyles?.message}>{message}</S.RowMessage>
      </S.Row>
    );
  }
    , [rowData, isJson, jsonRowStyles]);

  const textRowItem = React.useMemo(() => {
    if (isJson) return null;
    return (
      <S.RowTime>
        <S.RowMessage>{rowData as string}</S.RowMessage>
      </S.RowTime>
    );
  }
    , [rowData, isJson]);

  return isJson ? jsonRowItem : textRowItem;
};

export default RowItem;