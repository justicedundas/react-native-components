import React from 'react';
import { ThemeContext } from './themeContext';
import {
    ThemeType,
} from './theme.service';
import { LightTheme }  from '../styles/index';

export interface ThemeProviderProps {
    theme: ThemeType;
    children?: React.ReactNode;
}

export class ThemeProvider extends React.PureComponent<ThemeProviderProps> {

    state = {
        'light': LightTheme,
        updateTheme: (theme: ThemeType) => {
            this.setState({ theme: theme })
        }
    }

    public render(): React.ReactNode {
        const { theme, children } = this.props;

        return (
        <ThemeContext.Provider
            value={theme}>
            {children}
        </ThemeContext.Provider>
        );
    }
}