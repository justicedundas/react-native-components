import { TextStyle, Platform } from "react-native";
import { systemWeights } from 'react-native-typography';

type FontSize = "x10" | "x20" | "x30" | "x40" | "x50" | "x60" | "x70"
export const fontSize: Record<FontSize, TextStyle> = {
    x10: {
        fontSize: 12,
    },
    x20: {
        fontSize: 14,
    },
    x30: {
        fontSize: 16,
    },
    x40: {
        fontSize: 30,
    },
    x50: {
        fontSize: 38,
    },
    x60: {
        fontSize: 46,
    },
    x70: {
        fontSize: 56,
    },
};

type FontWeight = "thin" | "regular" | "medium" | "semibold"
export const fontWeight: Record<FontWeight, TextStyle> = {
    thin: {
        // fontFamily: 'SairaCondensed-Thin'
        fontFamily: 'SairaCondensed-Regular',
        fontWeight: '100'
    },
    regular: {
        fontFamily: 'SairaCondensed-Regular',
        fontWeight: '400'
    },
    medium: {
        fontFamily: 'SairaCondensed-Regular',
        fontWeight: '500'
    },
    semibold: {
        fontFamily: 'SairaCondensed-Regular',
        fontWeight: '600'
    },
};

type LetterSpacing = "x30" | "x40"
export const letterSpacing: Record<LetterSpacing, number> = {
    x30: 2,
    x40: 3,
}

type LineHeight =  "x10" | "x20" | "x30" | "x40" | "x50" | "x60" | "x70"
export const lineHeight: Record<LineHeight, TextStyle> = {
    x10: {
        lineHeight: 19,
    },
    x20: {
        lineHeight: 22,
    },
    x30: {
        lineHeight: 25,
    },
    x40: {
        lineHeight: 38,
    },
    x50: {
        lineHeight: 46,
    },
    x60: {
        lineHeight: 54,
    },
    x70: {
        lineHeight: 64,
    },
}

type Semibold =  "x10" | "x20" | "x30" | "x40" | "x50" | "x60" | "x70"
export const semibold: Record<Semibold, TextStyle> = {
    x10: {
        ...fontSize.x10,
        ...lineHeight.x10,
        ...fontWeight.semibold,
    },
    x20: {
        ...fontSize.x20,
        ...lineHeight.x20,
        ...fontWeight.semibold,
    },
    x30: {
        ...fontSize.x30,
        ...lineHeight.x30,
        ...fontWeight.semibold,
    },
    x40: {
        ...fontSize.x40,
        ...lineHeight.x40,
        ...fontWeight.semibold,
    },
    x50: {
        ...fontSize.x50,
        ...lineHeight.x50,
        ...fontWeight.semibold,
    },
    x60: {
        ...fontSize.x60,
        ...lineHeight.x60,
        ...fontWeight.semibold,
    },
    x70: {
        ...fontSize.x70,
        ...lineHeight.x70,
        ...fontWeight.semibold,
    },
}
type Medium = "x10" | "x20" | "x30" | "x40" | "x50" | "x60" | "x70"
export const medium: Record<Medium, TextStyle> = {
    x10: {
        ...fontSize.x10,
        ...lineHeight.x10,
        ...fontWeight.regular,
    },
    x20: {
        ...fontSize.x20,
        ...lineHeight.x20,
        ...fontWeight.regular,
    },
    x30: {
        ...fontSize.x30,
        ...lineHeight.x30,
        ...fontWeight.regular,
    },
    x40: {
        ...fontSize.x40,
        ...lineHeight.x40,
        ...fontWeight.regular,
    },
    x50: {
        ...fontSize.x50,
        ...lineHeight.x50,
        ...fontWeight.regular,
    },
    x60: {
        ...fontSize.x60,
        ...lineHeight.x60,
        ...fontWeight.regular,
    },
    x70: {
        ...fontSize.x70,
        ...lineHeight.x70,
        ...fontWeight.regular
    }
}


type Regular = "x10" | "x20" | "x30" | "x40" | "x50" | "x60" | "x70"
export const regular: Record<Regular, TextStyle> = {
    x10: {
        ...fontSize.x10,
        ...lineHeight.x10,
        ...fontWeight.regular,
    },
    x20: {
        ...fontSize.x20,
        ...lineHeight.x20,
        ...fontWeight.regular,
    },
    x30: {
        ...fontSize.x30,
        ...lineHeight.x30,
        ...fontWeight.regular,
    },
    x40: {
        ...fontSize.x40,
        ...lineHeight.x40,
        ...fontWeight.regular,
    },
    x50: {
        ...fontSize.x50,
        ...lineHeight.x50,
        ...fontWeight.regular,
    },
    x60: {
        ...fontSize.x60,
        ...lineHeight.x60,
        ...fontWeight.regular,
    },
    x70: {
        ...fontSize.x70,
        ...lineHeight.x70,
        ...fontWeight.regular
    }
}

type Thin = "x10" | "x20" | "x30" | "x40" | "x50"
export const thin: Record<Thin, TextStyle> = {
    x10: {
        ...fontSize.x10,
        ...lineHeight.x10,
        ...fontWeight.thin,
    },
    x20: {
        ...fontSize.x20,
        ...lineHeight.x20,
        ...fontWeight.thin,
    },
    x30: {
        ...fontSize.x30,
        ...lineHeight.x30,
        ...fontWeight.thin,
    },
    x40: {
        ...fontSize.x40,
        ...lineHeight.x40,
        ...fontWeight.thin,
    },
    x50: {
        ...fontSize.x50,
        ...lineHeight.x50,
        ...fontWeight.thin,
    },
}

/**
 * @ios SairaCondensed
 * @android SairaCondensed
 */
const sansSerifFontFamily = Platform.select({
    ios: "SairaCondensed-Regular",
    android: "SairaCondensed-Regular",
})

type SansSerif = "base"
export const sansSerif: Record<SansSerif, TextStyle> = {
    base: {
        fontFamily: sansSerifFontFamily,
    },
}