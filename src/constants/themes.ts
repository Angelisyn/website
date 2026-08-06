// src/constants/themes.ts

export type ThemeMode = "light" | "dark" | "system";

export interface ThemeOption {
    readonly value: ThemeMode;
    readonly label: string;
    readonly description: string;
}

export interface ThemeColors {
    readonly primary: string;
    readonly secondary: string;
    readonly accent: string;
    readonly background: string;
    readonly foreground: string;
    readonly muted: string;
    readonly border: string;
    readonly success: string;
    readonly warning: string;
    readonly destructive: string;
}

export const THEME_STORAGE_KEY = "angelisyn-theme";

export const DEFAULT_THEME: ThemeMode = "dark";

export const AVAILABLE_THEMES: readonly ThemeOption[] = [
    {
        value: "light",
        label: "Light",
        description: "Light appearance for bright environments.",
    },
    {
        value: "dark",
        label: "Dark",
        description: "Default Angelisyn experience.",
    },
    {
        value: "system",
        label: "System",
        description: "Follow the operating system preference.",
    },
] as const;

export const THEME_COLORS: Readonly<
    Record<Exclude<ThemeMode, "system">, ThemeColors>
> = {
    light: {
        primary: "#2563EB",
        secondary: "#0F172A",
        accent: "#06B6D4",
        background: "#FFFFFF",
        foreground: "#0F172A",
        muted: "#F8FAFC",
        border: "#E2E8F0",
        success: "#16A34A",
        warning: "#D97706",
        destructive: "#DC2626",
    },
    dark: {
        primary: "#3B82F6",
        secondary: "#E2E8F0",
        accent: "#22D3EE",
        background: "#020617",
        foreground: "#F8FAFC",
        muted: "#0F172A",
        border: "#1E293B",
        success: "#22C55E",
        warning: "#F59E0B",
        destructive: "#EF4444",
    },
} as const;

export const THEME_MEDIA_QUERY =
    "(prefers-color-scheme: dark)" as const;

export const THEME_ATTRIBUTES = {
    htmlAttribute: "class",
    darkClass: "dark",
    lightClass: "light",
} as const;

export const TRANSITION_DURATION_MS = 200;

export const COLOR_SCHEME = {
    light: "light",
    dark: "dark",
} as const;

export type AvailableThemes = typeof AVAILABLE_THEMES;
export type ThemeAttributes = typeof THEME_ATTRIBUTES;
export type ThemePalette = typeof THEME_COLORS;