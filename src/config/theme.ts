export const theme = {
    radius: "0.75rem",

    defaultTheme: "dark",

    accent: "cyan",

    animation: true,

    fonts: {
        heading: "Geist",
        body: "Geist",
        mono: "Geist Mono",
    },
} as const

export type Theme = typeof theme