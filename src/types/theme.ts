export interface ThemeFonts {
    heading: string

    body: string

    mono: string
}

export interface ThemeConfig {
    radius: string

    defaultTheme: "light" | "dark"

    accent: string

    animation: boolean

    fonts: ThemeFonts
}