import { Dimensions } from "react-native"

const { height: screenHeight, width: screenWidth } = Dimensions.get("screen")
type Screen = "width" | "height"
export const screen: Record<Screen, number> = {
    width: screenWidth,
    height: screenHeight,
}

type Layout =
    | "x4"
    | "x8"
    | "x12"
    | "x16"
    | "x20"
    | "x24"
    | "x32"
    | "x36"
    | "x40"
    | "x48"
    | "x56"
export const layout: Record<Layout, number> = {
    x4:  4,
    x8:  8,
    x12: 12,
    x16: 16,
    x20: 20,
    x24: 24,
    x32: 32,
    x36: 36,
    x40 :40,
    x48 :48,
    x56: 56,
}

export const x4 = layout.x4
export const x8 = layout.x8
export const x12 = layout.x12
export const x16 = layout.x16
export const x20 = layout.x20
export const x24 = layout.x24
export const x32 = layout.x32
export const x36 = layout.x36
export const x40 = layout.x40
export const x48 = layout.x48
export const x56 = layout.x56

type Icons = "x10" | "x15" | "x20" | "x25" | "x30" | "x40" | "x50" | "x80"
export const icons: Record<Icons, number> = {
    x10: 14,
    x15: 17,
    x20: 20,
    x25: 25,
    x30: 30,
    x40: 40,
    x50: 50,
    x80: 80,
}

type IconStroke = "x1" | "x2"
export const iconStroke: Record<IconStroke, number> = {
    x1: 1,
    x2: 2,
}