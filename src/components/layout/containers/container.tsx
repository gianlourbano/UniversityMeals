import { CSSProperties } from "react"
import { useTheme, usePalette } from "../../theme/theme-provider"
import { Color } from "../../theme/theme"

import { UIComponent } from "../../types"

export interface ContainerProps {
	vertical?: boolean,
	center?: boolean,
	bgSecondary?: boolean,
	colortype?: Color, // [0] = primary, secondary | [1] = main, dark, light
}

export const Container: UIComponent<ContainerProps> = ({ center, vertical, bgSecondary, colortype, children, style, className }) => {
	const { background, color } = usePalette()
	const theme = useTheme()

	const contStyle: CSSProperties = {
		display: "flex", 
		flexDirection: vertical ? "column" : "row",
		justifyContent: center ? "center" : "",
		backgroundColor: colortype ? color[theme][colortype[0]][colortype[1]] : (!bgSecondary ? `${background[theme].primary}` : `${background[theme].secondary}`),
		transition: "background-color 0.35s"
	}

	return (
		<div className={className} style={{ ...contStyle, ...style }}>
			{children}
		</div>
	)
}