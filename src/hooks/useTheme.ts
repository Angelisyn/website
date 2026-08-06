// src/hooks/useTheme.ts

"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

import {
    AVAILABLE_THEMES,
    DEFAULT_THEME,
    THEME_STORAGE_KEY,
    type ThemeMode,
} from "@/constants/themes";

export interface UseThemeReturn {
    readonly theme: ThemeMode;
    readonly resolvedTheme: Exclude<ThemeMode, "system">;
    readonly isDark: boolean;
    readonly isLight: boolean;
    readonly setTheme: (theme: ThemeMode) => void;
    readonly toggleTheme: () => void;
    readonly themes: typeof AVAILABLE_THEMES;
}

const isBrowser = typeof window !== "undefined";

function getSystemTheme(): Exclude<ThemeMode, "system"> {
    if (!isBrowser) {
        return "dark";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
}

function applyTheme(theme: ThemeMode): void {
    if (!isBrowser) {
        return;
    }

    const resolved =
        theme === "system" ? getSystemTheme() : theme;

    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(resolved);
    document.documentElement.style.colorScheme = resolved;
}

export function useTheme(): UseThemeReturn {
    const [theme, setThemeState] = useState<ThemeMode>(DEFAULT_THEME);

    useEffect(() => {
        if (!isBrowser) {
            return;
        }

        const storedTheme = window.localStorage.getItem(
            THEME_STORAGE_KEY,
        ) as ThemeMode | null;

        const nextTheme = storedTheme ?? DEFAULT_THEME;

        setThemeState(nextTheme);
        applyTheme(nextTheme);
    }, []);

    useEffect(() => {
        if (!isBrowser) {
            return;
        }

        if (theme !== "system") {
            return;
        }

        const mediaQuery = window.matchMedia(
            "(prefers-color-scheme: dark)",
        );

        const handleChange = (): void => {
            applyTheme("system");
        };

        if (typeof mediaQuery.addEventListener === "function") {
            mediaQuery.addEventListener("change", handleChange);

            return () => {
                mediaQuery.removeEventListener(
                    "change",
                    handleChange,
                );
            };
        }

        mediaQuery.addListener(handleChange);

        return () => {
            mediaQuery.removeListener(handleChange);
        };
    }, [theme]);

    const setTheme = useCallback((value: ThemeMode): void => {
        setThemeState(value);

        if (isBrowser) {
            window.localStorage.setItem(
                THEME_STORAGE_KEY,
                value,
            );
        }

        applyTheme(value);
    }, []);

    const toggleTheme = useCallback((): void => {
        const resolved =
            theme === "system" ? getSystemTheme() : theme;

        setTheme(resolved === "dark" ? "light" : "dark");
    }, [setTheme, theme]);

    const resolvedTheme = useMemo<
        Exclude<ThemeMode, "system">
    >(() => {
        return theme === "system"
            ? getSystemTheme()
            : theme;
    }, [theme]);

    return {
        theme,
        resolvedTheme,
        isDark: resolvedTheme === "dark",
        isLight: resolvedTheme === "light",
        setTheme,
        toggleTheme,
        themes: AVAILABLE_THEMES,
    };
}