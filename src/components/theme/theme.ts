type main =  "primary"  |  "secondary" | "tertiary" | "accent"
type sec =  "main"  |  "dark"  |  "light" 

export declare type Color = [main, sec]

export type PaletteColor = {
    main : string,
    light : string,
    dark : string,
    text : string
}

export type Palette = {
    primary : PaletteColor,
    secondary : PaletteColor,
    tertiary : PaletteColor,
    accent : PaletteColor,
}

export type BackgroundPalette = {
    primary:  string,
    primaryShade : string,
    secondary : string,
    shadow : string,
}

export type ThemePalette = {
     color : {
        dark : Palette,
        light : Palette,
    },
     background : {
        light : BackgroundPalette,
        dark : BackgroundPalette,
    }
}