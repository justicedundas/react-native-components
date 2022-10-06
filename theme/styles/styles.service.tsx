import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import {
    ThemeType,
    useTheme,
} from '../theme/theme.service';

export type StyleType = Record<string, any>;
export type Styles<T> = StyleSheet.NamedStyles<T>;

export class StyleService {

    static create = <T extends Styles<T>>(styles: T): T => {
        return styles;
    };
};