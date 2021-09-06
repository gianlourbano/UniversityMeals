import { HEXtoHSL, HSLtoStringHSL, SaturationModifier } from "./utilities"
import { PaletteColor } from "./theme"

export const CreateShades = (hexColor: string): PaletteColor => {
	let hslColor = HEXtoHSL(hexColor)

	return({
		"main": HSLtoStringHSL( ...hslColor),
		"light": HSLtoStringHSL(hslColor[0],SaturationModifier(hslColor[1], "sub"), hslColor[2]),
		"dark": HSLtoStringHSL(hslColor[0],SaturationModifier(hslColor[1], "add"), hslColor[2]),
		"text": "#dfdfdf"
	})
}

