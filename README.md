# Log-Viewer

简单的日志信息展示组件

<div align="center">
  <img src="https://s1.ax1x.com/2022/08/21/vylze1.png">
</div>

## 功能简介

- 支持大数据量的日志展示
- 支持主题的切换和样式的自定义

## 如何使用

```js
import {LogViewer} from '@ico-data/log-viewer';

function App () {
  return <LogViewer logData={[...]} />
}
```

`logData`支持三种类型，`string`、`string[]`,`JsonLogObject[]`。

其中`JsonLogObject`可支持的类型为：
```js
const messageType = ["WARNING", "ERROR", "SUCCESS", "GENERAL", "INFO"];

{
  time: Date(),
  message: "DevTools failed to load source map: Could not load content for https://github.githubassets.com/assets/light_tritanopia-ec62ec1d425f.css.map: Load canceled due to load timeout",
  ip: "132.3.4.33.231",
  port: "8000",
  type: messageType[Math.floor(Math.random() * 10) % 5] as LogJsonItemType,
  serviceName: "react-virtualized@9.22.",
}
```

除了LogData必传参数外，还支持：

  - rowHeight           配置行高
  - height              配置Viewer高度
  - width               配置Viewer宽度
  - hiddenThemeBtn      是否隐藏主题切换按钮
  - theme               设置Theme