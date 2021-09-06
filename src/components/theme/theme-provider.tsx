import { useReducer } from "react"
import { ThemePalette, PaletteColor } from "./theme"
import { createStrictContext } from "../../misc/strict-context"
import { UIComponent } from "../types"
import { defaultTheme } from "../default-theme"

type Action = { type: "switch" }
type Dispatch = (action: Action) => void
type Theme = "dark" | "light"

const [PaletteProvider, usePalette] = createStrictContext<ThemePalette>(undefined)
const [ThemeProvider_, useTheme] = createStrictContext<Theme>(undefined)
const [ThemeDispatcher, useThemeDispatch] = createStrictContext<Dispatch>(undefined)

const themeReducer = (state: Theme, action: Action): Theme => {
    switch (action.type) {
        case "switch": {
            if (state === "dark") return "light"
            else if (state === "light") return "dark"
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}

export const createGradient = (color: PaletteColor, angle = 145) => {
    return `linear-gradient(${angle}deg, ${color.dark}, ${color.light})`
}

export const ThemeProvider: UIComponent<{ theme?: Theme }> = ({ theme = "light", children }) => {
    const [state, dispatch] = useReducer(themeReducer, theme)

    return (
        <PaletteProvider value={defaultTheme}>
            <ThemeProvider_ value={state}>
                <ThemeDispatcher value={dispatch}>
                    {children}
                </ThemeDispatcher>
            </ThemeProvider_>
        </PaletteProvider>
    )
}

export { usePalette, useTheme, useThemeDispatch }