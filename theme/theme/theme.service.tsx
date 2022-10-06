import React from 'react';
import { ThemeContext } from './themeContext';

export type ThemeValue = string;
export type ThemeType = Record<string, ThemeValue>;

export const useTheme = (): ThemeType => {
    return React.useContext(ThemeContext);
};