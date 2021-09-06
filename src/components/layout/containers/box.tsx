import { CSSProperties } from "react"
import { useTheme, usePalette } from "../../theme/theme-provider"
import { Color } from "../../theme/theme"
import { UIComponent } from "../../types"

export interface BoxProps {
	colortype?: Color, // [0] = primary, secondary, tertiary | [1] = main, shade
	bgSecondary?: boolean
}

export const Box: UIComponent<BoxProps> = ({ bgSecondary, colortype, children, style, className }) => {
	const { background, color } = usePalette()
	const theme = useTheme()

	const contStyle: CSSProperties = {
		backgroundColor: colortype ? color[theme][colortype[0]][colortype[1]] : (!bgSecondary ? `${background[theme].primary}` : `${background[theme].secondary}`),
		transition: "background-color 0.35s"
	}

	return (
		<>
			<div className={className} style={{ ...contStyle, ...style }}>
				{children}
			</div>
		</>
	)
}