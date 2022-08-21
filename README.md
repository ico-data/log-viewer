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