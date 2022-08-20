import * as React from "react";
import * as I from "./interface";
import Viewer from "./components/viewer";
import "./style.less";
import ThemeProvider from "./theme-provider";

export const messageType = ["WARNING", "ERROR", "SUCCESS", "GENERAL", "INFO"];


const LogViewer: React.FC<I.LogViewerProps> = function (props) {
	const { theme = "light", ...resetProps } = props;
	return (
		<ThemeProvider
			theme={theme}
		>
			<Viewer {...resetProps} />
		</ThemeProvider>
	);
};

LogViewer.defaultProps = {
	theme: "light"
};


export default LogViewer;