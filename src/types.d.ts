/**
 * `JSON日志模式`支持类型
 * 
 * `JSON log mode` support types
 */
type LogJsonItemType = "WARNING" | "ERROR" | "SUCCESS" | "GENERAL" | "INFO";

/**
 * `JSON 日志模式`单条日志信息
 * 
 * `JSON log mode` single log information
 */
interface LogJsonItem {
  time: string;
  message: string;

  type?: LogJsonItemType;
  ip?: string;
  port?: string;
  serviceName?: string;
}

/**
 * 日志内容
 * 
 * Log Content
 */
type LogData = LogJsonList | LogList | LogLongText;


type LogJsonList = LogJsonItem[];

type LogList = LogLongText[];

type LogLongText = string;


type ThemeColorVariable = string;

/**
 * 基本主题配置
 * 
 * Base Theme Config
 */
interface ThemeBase {
  bgColor: string;
  rowItem: {
    time: string;
    ip: string;
    message: string;
    port: string;
    serviceName: string;
    type: {
      color: string;
      bgColor: {
        WARNING: string;
        ERROR: string;
        SUCCESS: string;
        GENERAL: string;
        INFO: string;
      };
    };
  };
}

type GlobalThemeMode = "night" | "light"
type GlobalThemePropType = {
  themeVal: ThemeBase
};
type GlobalTheme = Record<GlobalThemeMode, ThemeBase>;