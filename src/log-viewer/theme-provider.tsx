import * as React from "react";
import { viewerTheme } from "@/theme";

interface ThemeContext {
  theme: ThemeBase;
  mode: GlobalThemeMode;
  upDateTheme: (theme: GlobalThemeMode) => void;
}

const ThemeContext = React.createContext<ThemeContext>({} as ThemeContext);

export const useTheme = () => React.useContext(ThemeContext);

interface ThemeProps extends React.PropsWithChildren {
  theme: GlobalThemeMode;
}

const ThemeProvider: React.FC<ThemeProps> = function (props) {
	const { theme, children } = props;
	const [themeMode, setThemeMode] = React.useState(theme);

	const themeVal = React.useMemo(() => viewerTheme[themeMode], [themeMode]);


	const updateTheme = (mode: GlobalThemeMode) => {
		setThemeMode(mode);
	};

	return (
		<ThemeContext.Provider
			value={{
				theme: themeVal,
				mode: themeMode,
				upDateTheme: updateTheme
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;