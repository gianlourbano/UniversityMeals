import { ThemePalette } from "./theme/theme"
import { CreateShades } from "./theme/theme-creator"

export const defaultTheme: ThemePalette = {
    "color": {
        "dark": {
            "primary": CreateShades("#3f4f5f"),
            "secondary": CreateShades("#be965b"),
            "tertiary": CreateShades("#d8c6b0"),
            "accent": CreateShades("#ccd4d7")
        },
        "light": {
            "primary": CreateShades("#3f4f5f"),
            "secondary": CreateShades("#be965b"),
            "tertiary": CreateShades("#d8c6b0"),
            "accent": CreateShades("#ccd4d7")
        }
    },
    "background": {
        "dark": {
            "primary": "#141414",
            "primaryShade": "#0F0F0F",
            "secondary": "whitesmoke",
            "shadow": "#000"
        },
        "light": {
            "primary": "whitesmoke",
            "primaryShade": "#dfdfdf",
            "secondary": "#191d22",
            "shadow": "#979797",
        }
    }
}