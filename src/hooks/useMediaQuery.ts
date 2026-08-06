// src/hooks/useMediaQuery.ts

"use client";

import { useEffect, useState } from "react";

export interface UseMediaQueryOptions {
    /**
     * Default value used during SSR.
     *
     * @default false
     */
    readonly defaultValue?: boolean;

    /**
     * Initialize with the current media query value on mount.
     *
     * @default true
     */
    readonly initializeWithValue?: boolean;
}

const IS_SERVER = typeof window === "undefined";

function getMatches(
    query: string,
    defaultValue: boolean,
): boolean {
    if (IS_SERVER) {
        return defaultValue;
    }

    return window.matchMedia(query).matches;
}

/**
 * React hook for subscribing to CSS media queries.
 *
 * @example
 * const isDesktop = useMediaQuery("(min-width: 1024px)");
 */
export function useMediaQuery(
    query: string,
    options: UseMediaQueryOptions = {},
): boolean {
    const {
        defaultValue = false,
        initializeWithValue = true,
    } = options;

    const [matches, setMatches] = useState<boolean>(() =>
        initializeWithValue
            ? getMatches(query, defaultValue)
            : defaultValue,
    );

    useEffect(() => {
        if (IS_SERVER) {
            return;
        }

        const mediaQuery = window.matchMedia(query);

        const handleChange = (
            event: MediaQueryListEvent,
        ): void => {
            setMatches(event.matches);
        };

        setMatches(mediaQuery.matches);

        if (typeof mediaQuery.addEventListener === "function") {
            mediaQuery.addEventListener("change", handleChange);

            return () => {
                mediaQuery.removeEventListener(
                    "change",
                    handleChange,
                );
            };
        }

        // Safari < 14 fallback
        mediaQuery.addListener(handleChange);

        return () => {
            mediaQuery.removeListener(handleChange);
        };
    }, [query]);

    return matches;
}