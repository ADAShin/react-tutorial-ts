import { FC, useState } from 'react';
import { ThemeContext, THEMES, ThemeType } from './context/ThemeContext';
import App from './App';
import { getLanguages } from './const/language';
import { withLoading } from './hoc/withLoader';

const AppComponent = withLoading(App, getLanguages);

export const AppContainer: FC = () => {
  const [theme, setTheme] = useState<ThemeType>(THEMES.dark);

  const toggleTheme = () => {
    const nextTheme = theme === THEMES.dark ? THEMES.light : THEMES.dark;
    setTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider value={[theme, toggleTheme]}>
      <AppComponent />
    </ThemeContext.Provider>
  );
};
