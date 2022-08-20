import { useTheme } from "@/log-viewer/theme-provider";
import * as React from "react";
import * as S from "./style";

const ThemeBtn: React.FC = () => {
	const { mode, upDateTheme } = useTheme();
	const changeTheme = () => {
		upDateTheme(mode === "night" ? "light" : "night");
	};
	return (
		<S.ThemeBtn onClick={changeTheme}>Change Theme</S.ThemeBtn>
	);
};

export default ThemeBtn;