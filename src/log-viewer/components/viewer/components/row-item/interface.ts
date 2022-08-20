/**
 * 单行日志 Props
 * 
 * One-line log props
 */
export interface RowItemProps {
  rowData: LogJsonItem | LogLongText;
  rowHeight: number;
  jsonRowStyles?: {
    row?: React.CSSProperties;
    ip?: React.CSSProperties;
    port?: React.CSSProperties;
    type?: React.CSSProperties;
    setTypeStyles?: (type: LogJsonItemType) => React.CSSProperties;
    serviceName?: React.CSSProperties;
    message?: React.CSSProperties;
    time?: React.CSSProperties;
  }
}