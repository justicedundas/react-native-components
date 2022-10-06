type Neutral =
    | "white"
    | "s100"
    | "s150"
    | "s200"
    | "s250"
    | "s300"
    | "s400"
    | "s500"
    | "s600"
    | "s700"
    | "s800"
    | "s900"
    | "black"
export const neutral: Record<Neutral, string> = {
    white: "#ffffff",
    s100: "#efeff6",
    s150: "#dfdfe6",
    s200: "#c7c7ce",
    s250: "#bbbbc2",
    s300: "#9f9ea4",
    s400: "#7c7c82",
    s500: "#515154",
    s600: "#38383a",
    s700: "#2d2c2e",
    s800: "#212123",
    s900: "#161617",
    black: "#000000",
}


type Primary = "brand" | "light" | "dark"
export const primary: Record<Primary, string> = {
    light: "#D8ES90",
    brand: "#C9E265",
    dark: "#BADA3A"
}

type Secondary = "brand" | "light" | "dark"
export const secondary: Record<Secondary, string> = {
    light: "#FDFFEE",
    brand: "#F9FFDC",
    dark: "#AFB39A",
}

type Danger = "s400" | "s600" | "s800"
export const danger: Record<Danger, string> = {
    s400: "#FAEAEA",
    s600: "#D21C1C",
    s800: "#970C0C"
}

type Success = "s400" | "s600" | "s800"
export const success: Record<Success, string> = {
    s400: "#EBF4EC",
    s600: "#28A138",
    s800: "#2B7336"
}

type Warning = "s400"
export const warning: Record<Warning, string> = {
    s400: "#FFCC00",
}



const applyOpacity = (hexColor: string, opacity: number): string => {
    const red = parseInt(hexColor.slice(1, 3), 16)
    const green = parseInt(hexColor.slice(3, 5), 16)
    const blue = parseInt(hexColor.slice(5, 7), 16)

    return `rgba(${red}, ${green}, ${blue}, ${opacity})`
}

type Transparent = "clear" | "lightGray" | "darkGray"
export const transparent: Record<Transparent, string> = {
    clear: "rgba(255, 255, 255, 0)",
    lightGray: applyOpacity(neutral.s300, 0.4),
    darkGray: applyOpacity(neutral.s800, 0.8),
}

export const shadeColor = (hexColor: string, percent: number): string => {
    const redGamut: number = parseInt(hexColor.slice(1, 3), 16)
    const greenGamut: number = parseInt(hexColor.slice(3, 5), 16)
    const blueGamut: number = parseInt(hexColor.slice(5, 7), 16)

    const rgb: Array<number> = [redGamut, greenGamut, blueGamut]

    const toShadedGamut = (gamut: number): number => {
        return Math.floor(Math.min(gamut * (1 + percent / 100), 255))
    }

    const toHex = (gamut: number): string => {
        return gamut.toString(16).length === 1
        ? `0${gamut.toString(16)}`
        : gamut.toString(16)
    }

    const shadedRGB: Array<number> = rgb.map(toShadedGamut)
    const shadedHex: Array<string> = shadedRGB.map(toHex)

    const hexString: string = shadedHex.join("")

    return `#${hexString}`
}