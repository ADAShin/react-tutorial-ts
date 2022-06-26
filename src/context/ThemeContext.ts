import React from 'react';

export const THEMES = {
  light: {
    color: 'black',
    backgroundColor: 'white',
  },
  dark: {
    color: 'white',
    backgroundColor: '#222222',
  },
} as const;

type ValueOf<T> = T[keyof T];
export type ThemeType = ValueOf<typeof THEMES>;

type ThemeContextType = [ThemeType, () => void];

export const ThemeContext = React.createContext<ThemeContextType>([
  THEMES.dark,
  () => {},
]);
