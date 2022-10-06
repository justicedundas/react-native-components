import { ViewStyle, StyleSheet } from "react-native"

import * as Colors from "./colors"

type BorderRadius = "x4" | "x8" | "x16" | "x99"
export const borderRadius: Record<BorderRadius, number> = {
    x4: 5,      // Checkboxes
    x8: 8,      // Buttons, fields
    x16: 16,
    x99: 9999,  // Circular
}

type BorderWidth = "hairline" | "thin" | "base" | "thick"
export const borderWidth: Record<BorderWidth, number> = {
    hairline: StyleSheet.hairlineWidth,
    thin: 1,
    base: 2,
    thick: 3,
}

type Shadow = "basic" | "focus" | "success" | "warning"
export const shadow: Record<Shadow, ViewStyle> = {
    basic: {
        shadowColor: Colors.neutral.s400,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 5.5,
    },
    focus: {
        shadowColor: Colors.primary.brand,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 1.0,
        shadowRadius: 4,
    },
    warning: {
        shadowColor: Colors.danger.s400,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 1.0,
        shadowRadius: 4,
    },
    success: {
        shadowColor: Colors.success.s400,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 1.0,
        shadowRadius: 4,
    },
}