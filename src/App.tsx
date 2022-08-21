import * as React from "react";
import LogViewer, { messageType } from "./log-viewer";
import "./App.css";

function generateData() {
	const logList: LogJsonList = [];
	for (let index = 0; index < 1000000; index++) {
		logList.push({
			time: Date(),
			message: "DevTools failed to load source map: Could not load content for https://github.githubassets.com/assets/light_tritanopia-ec62ec1d425f.css.map: Load canceled due to load timeout",
			ip: "132.3.4.33.231",
			port: "8000",
			type: messageType[Math.floor(Math.random() * 10) % 5] as LogJsonItemType,
			serviceName: "react-virtualized@9.22.",
		});
	}
	return logList;
}

const App: React.FC = () => {
	return (
		<div className="App">
			<h1>LogViewer</h1>
			<div style={{width: 600}}>
				<LogViewer logData={generateData()} />
			</div>

		</div>
	);
};

export default App;
