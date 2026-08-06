// src/components/layout/ThemeProvider.tsx

"use client";

import type { PropsWithChildren } from "react";

import { ThemeProvider as AppThemeProvider } from "../../providers";

export interface ThemeProviderProps
    extends PropsWithChildren {
    readonly attribute?: "class" | "data-theme";
}

/**
 * Layout-level theme provider.
 *
 * Wraps the global application theme provider so layouts
 * can remain decoupled from the underlying implementation.
 */
export function ThemeProvider({
    children,
    attribute = "class",
}: ThemeProviderProps) {
    return (
        <AppThemeProvider
            attribute={attribute}
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            {children}
        </AppThemeProvider>
    );
}