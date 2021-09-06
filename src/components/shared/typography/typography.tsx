import { CSSProperties } from "react"
import { UIComponent } from "../../types"
import { useTheme, usePalette, createGradient } from "../../theme/theme-provider"
import styles from "./typography.module.css"

export declare type typography = "div" | "span" | "h1" | "h2" | "h3" | "h4" | "p"

export declare interface TypographyProps {
	type?: typography,
    secondary?: boolean,
    staticColor?: boolean,
    anim?: boolean
    noWrap?: boolean, //the text won't wrap until a <br/> tag
    gradient?: boolean, 
}

export const Typography: UIComponent<TypographyProps> = ({ type = "div", gradient, noWrap, staticColor, anim, secondary, children, ...rest }) => {

    const { color } = usePalette()
    const theme = useTheme()
    const Type = type

    //default styles
    const typoStyle: CSSProperties = {
        color: (staticColor ? `${color["dark"].primary.text}` : (!secondary ? `${color[theme].primary.text}` : `${color[theme].secondary.text}`)),
        whiteSpace: noWrap ? "nowrap" : "initial",
    }

    //styles for the gradient variant
    const gradient_: CSSProperties = {
        color: "unset",
        background: createGradient(color["dark"].secondary),
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
    }

    //styles for paragraph
    const pStyle: CSSProperties = {
        textOverflow: "ellipsis",
        whiteSpace: "pre-wrap",
        overflowX: "hidden",
        textAlign: "justify",
        overflowY: "visible",
    }

    //composition of styles
    const tStyle = gradient ? {...gradient_, ...typoStyle} : (type === "p" ? { ...pStyle, ...typoStyle } : typoStyle)
    const animation = anim ? styles.typo : ""

    return (
        <Type style={{ ...tStyle, ...rest.style }} className={`${animation} ${rest.className} ${type === "p" ? styles.p : ""}`}>
            {children}
        </Type>
    )
}