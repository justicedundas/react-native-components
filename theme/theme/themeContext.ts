/**
 * Theme Provider HOC
 */
import React from 'react';
import { ThemeType } from './theme.service';
import { LightTheme }  from '../styles/index'
const theme = {...LightTheme}

const defaultTheme: ThemeType = {}

export const ThemeContext: React.Context<ThemeType> = React.createContext(defaultTheme);