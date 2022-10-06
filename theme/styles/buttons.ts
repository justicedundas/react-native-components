import {
    TextStyle,
    ViewStyle,
    PressableStateCallbackType,
    Platform,
} from "react-native"

import * as Colors from "./colors"
import * as Outlines from "./outlines"
import * as Sizing from "./sizing"
import * as Typography from "./typography"


/**
 * Semantic Properties:
 * Appearance
 * Variant -> Size, Status
 */

export const buttonVariants = [
    'solid',
    'ghost',
    'transparent'
] as const;

export type ButtonSize = 'default' | 'small' | 'large' | 'circular'
export const buttonSize: Record<ButtonSize, ViewStyle> = {
    default: {
        height: Sizing.x48,
        width: 182,
        paddingHorizontal: Sizing.x16,
        paddingVertical: Sizing.x16,
    },
    small: {
        height: 44,
        width: 132,
    },
    large: {
        height: Sizing.x56,
        width: 225,
        paddingHorizontal: Sizing.x16,
        paddingVertical: Sizing.x16,
    },
    circular: {
        height: Sizing.icons.x80,
        width: Sizing.icons.x80,
        borderRadius: Outlines.borderRadius.x99,
    }
};

export type ButtonVariant = 'filled' | 'outline' | 'ghost'
export const buttonVariant: Record<ButtonVariant, ViewStyle> = {
    filled: {
        backgroundColor: Colors.primary.brand 
    },
    outline: {
        borderColor: Colors.primary.brand,
        backgroundColor: Colors.primary.light,
    },
    ghost: {
        backgroundColor: '#FFF'
    },
};



export type Bar = "primary" | "secondary" 
export const bar: Record<Bar, ViewStyle> = {
    primary: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: Outlines.borderRadius.x8,
        backgroundColor: Colors.primary.brand,
    },
    secondary: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: Outlines.borderRadius.x8,
        borderColor: Colors.secondary.brand
    },
};

type ButtonText = "primary" | "secondary"
export const buttonText: Record<ButtonText, TextStyle> = {
    primary: {
        ...Typography.fontSize.x30,
        ...Typography.fontWeight.semibold,
        color: Colors.neutral.white,
    },
    secondary: {
        ...Typography.fontSize.x10,
        ...Typography.fontWeight.semibold,
        color: Colors.secondary.brand,
    },
};


type Circular = "primary" | "secondary"
export const circular: Record<Circular, ViewStyle> = {
    primary: {
        height: Sizing.icons.x80,
        width: Sizing.icons.x80,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: Outlines.borderRadius.x99,
    },
    secondary: {
        height: Sizing.icons.x80,
        width: Sizing.icons.x80,
        alignItems: "flex-start",
        borderRadius: Outlines.borderRadius.x99,
    },
};

const opacity = (state: PressableStateCallbackType): ViewStyle => {
    const opacity = state.pressed ? 0.65 : 1
    return { opacity }
};

export const applyOpacity = (style: ViewStyle) => {
    return (state: PressableStateCallbackType): ViewStyle => {
        return {
        ...style,
        ...opacity(state),
        }
    }
};