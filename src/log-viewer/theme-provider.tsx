import * as React from 'react';
import { viewerTheme } from '@/theme';

interface ThemeContext {
  theme: ThemeBase;
  mode: GlobalThemeMode;
  upDateTheme: (theme: GlobalThemeMode) => void;
}

const ThemeContext = React.createContext<ThemeContext>({
  theme: viewerTheme.light,
  mode: 'light',
  upDateTheme: (theme) => { }
});

export const useTheme = () => React.useContext(ThemeContext);

interface ThemeProps extends React.PropsWithChildren {
  theme: GlobalThemeMode;
}

const ThemeProvider: React.FC<ThemeProps> = function (props) {
  const { theme, children } = props;
  const [globalTheme, setGlobalTheme] = React.useState(theme);

  const themeVal = React.useMemo(() => viewerTheme[globalTheme], [globalTheme]);

  const updateTheme = (mode: GlobalThemeMode) => {
    setGlobalTheme(mode);
  }

  return (
    <ThemeContext.Provider
      value={{
        theme: themeVal,
        mode: theme,
        upDateTheme: updateTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;