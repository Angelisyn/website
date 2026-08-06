// src/providers/ThemeProvider.tsx

"use client";

import type { PropsWithChildren } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

import {
    DEFAULT_THEME,
    THEME_STORAGE_KEY,
    type ThemeMode,
} from "../constants/themes";

export interface ThemeProviderProps
    extends PropsWithChildren {
    /**
     * HTML attribute used by next-themes.
     *
     * @default "class"
     */
    readonly attribute?: "class" | "data-theme";

    /**
     * Default theme.
     *
     * @default DEFAULT_THEME
     */
    readonly defaultTheme?: ThemeMode;

    /**
     * Enable following the operating system theme.
     *
     * @default true
     */
    readonly enableSystem?: boolean;

    /**
     * Disable transition flashes while switching themes.
     *
     * @default true
     */
    readonly disableTransitionOnChange?: boolean;

    /**
     * Local storage key.
     *
     * @default THEME_STORAGE_KEY
     */
    readonly storageKey?: string;
}

/**
 * Global application theme provider.
 *
 * Features:
 * - next-themes integration
 * - Dark / Light / System themes
 * - SSR compatible
 * - Hydration-safe
 * - Transition flash prevention
 */
export function ThemeProvider({
    children,
    attribute = "class",
    defaultTheme = DEFAULT_THEME,
    enableSystem = true,
    disableTransitionOnChange = true,
    storageKey = THEME_STORAGE_KEY,
}: ThemeProviderProps) {
    return (
        <NextThemesProvider
            attribute={attribute}
            defaultTheme={defaultTheme}
            enableSystem={enableSystem}
            storageKey={storageKey}
            disableTransitionOnChange={disableTransitionOnChange}
        >
            {children}
        </NextThemesProvider>
    );
}