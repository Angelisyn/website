// src/store/theme-store.ts

"use client";

import {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
    type Dispatch,
    type PropsWithChildren,
    type SetStateAction,
} from "react";

import {
    DEFAULT_THEME,
    THEME_STORAGE_KEY,
    type ThemeMode,
} from "../constants";

export interface ThemeStoreState {
    readonly theme: ThemeMode;
}

export interface ThemeStoreActions {
    readonly setTheme: Dispatch<SetStateAction<ThemeMode>>;
    readonly toggleTheme: () => void;
    readonly resetTheme: () => void;
}

export interface ThemeStoreContextValue {
    readonly state: ThemeStoreState;
    readonly actions: ThemeStoreActions;
}

const ThemeStoreContext =
    createContext<ThemeStoreContextValue | null>(null);

export interface ThemeStoreProviderProps
    extends PropsWithChildren { }

export function ThemeStoreProvider({
    children,
}: ThemeStoreProviderProps) {
    const [theme, setTheme] = useState<ThemeMode>(() => {
        if (typeof window === "undefined") {
            return DEFAULT_THEME;
        }

        const storedTheme = window.localStorage.getItem(
            THEME_STORAGE_KEY,
        ) as ThemeMode | null;

        return storedTheme ?? DEFAULT_THEME;
    });

    const persistTheme = useCallback((value: ThemeMode) => {
        if (typeof window === "undefined") {
            return;
        }

        window.localStorage.setItem(
            THEME_STORAGE_KEY,
            value,
        );

        document.documentElement.classList.remove(
            "light",
            "dark",
        );

        const resolved =
            value === "system"
                ? window.matchMedia(
                    "(prefers-color-scheme: dark)",
                ).matches
                    ? "dark"
                    : "light"
                : value;

        document.documentElement.classList.add(
            resolved,
        );

        document.documentElement.style.colorScheme =
            resolved;
    }, []);

    const updateTheme: Dispatch<
        SetStateAction<ThemeMode>
    > = useCallback(
        (value) => {
            setTheme((previous) => {
                const next =
                    typeof value === "function"
                        ? value(previous)
                        : value;

                persistTheme(next);

                return next;
            });
        },
        [persistTheme],
    );

    const toggleTheme = useCallback(() => {
        updateTheme((previous) => {
            const resolved =
                previous === "system"
                    ? "dark"
                    : previous;

            return resolved === "dark"
                ? "light"
                : "dark";
        });
    }, [updateTheme]);

    const resetTheme = useCallback(() => {
        updateTheme(DEFAULT_THEME);
    }, [updateTheme]);

    const value =
        useMemo<ThemeStoreContextValue>(
            () => ({
                state: {
                    theme,
                },
                actions: {
                    setTheme: updateTheme,
                    toggleTheme,
                    resetTheme,
                },
            }),
            [
                theme,
                updateTheme,
                toggleTheme,
                resetTheme,
            ],
        );

    return (
        <ThemeStoreContext.Provider value= { value } >
        { children }
        </ThemeStoreContext.Provider>
  );
}

export function useThemeStore(): ThemeStoreContextValue {
    const context = useContext(
        ThemeStoreContext,
    );

    if (!context) {
        throw new Error(
            "useThemeStore must be used within ThemeStoreProvider.",
        );
    }

    return context;
}