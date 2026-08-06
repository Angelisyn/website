// src/hooks/useWindowSize.ts

"use client";

import { useEffect, useState } from "react";

export interface WindowSize {
    readonly width: number;
    readonly height: number;
}

export interface UseWindowSizeOptions {
    /**
     * Initialize with the current window size on mount.
     *
     * @default true
     */
    readonly initializeWithValue?: boolean;
}

const IS_SERVER = typeof window === "undefined";

const DEFAULT_SIZE: WindowSize = {
    width: 0,
    height: 0,
};

function getWindowSize(): WindowSize {
    if (IS_SERVER) {
        return DEFAULT_SIZE;
    }

    return {
        width: window.innerWidth,
        height: window.innerHeight,
    };
}

/**
 * Tracks the current browser window dimensions.
 *
 * Features:
 * - SSR-safe
 * - React 19 compatible
 * - Strictly typed
 * - Automatically updates on resize
 */
export function useWindowSize(
    options: UseWindowSizeOptions = {},
): WindowSize {
    const { initializeWithValue = true } = options;

    const [windowSize, setWindowSize] = useState<WindowSize>(() =>
        initializeWithValue ? getWindowSize() : DEFAULT_SIZE,
    );

    useEffect(() => {
        if (IS_SERVER) {
            return;
        }

        const handleResize = (): void => {
            setWindowSize(getWindowSize());
        };

        // Sync immediately after hydration
        handleResize();

        window.addEventListener("resize", handleResize, {
            passive: true,
        });

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return windowSize;
}

/**
 * Returns true when the viewport is currently in landscape orientation.
 */
export function useIsLandscape(): boolean {
    const { width, height } = useWindowSize();

    return width > height;
}

/**
 * Returns true when the viewport is currently in portrait orientation.
 */
export function useIsPortrait(): boolean {
    const { width, height } = useWindowSize();

    return height >= width;
}