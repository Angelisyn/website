// src/hooks/useBreakpoint.ts

"use client";

import { useEffect, useMemo, useState } from "react";

import { BREAKPOINTS } from "../constants";

export interface BreakpointState {
    readonly width: number;
    readonly isXs: boolean;
    readonly isSm: boolean;
    readonly isMd: boolean;
    readonly isLg: boolean;
    readonly isXl: boolean;
    readonly is2Xl: boolean;
    readonly current: BreakpointName;
}

export type BreakpointName =
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl";

const getWindowWidth = (): number => {
    if (typeof window === "undefined") {
        return 0;
    }

    return window.innerWidth;
};

const getBreakpoint = (width: number): BreakpointName => {
    if (width >= BREAKPOINTS["2xl"]) {
        return "2xl";
    }

    if (width >= BREAKPOINTS.xl) {
        return "xl";
    }

    if (width >= BREAKPOINTS.lg) {
        return "lg";
    }

    if (width >= BREAKPOINTS.md) {
        return "md";
    }

    if (width >= BREAKPOINTS.sm) {
        return "sm";
    }

    return "xs";
};

export function useBreakpoint(): BreakpointState {
    const [width, setWidth] = useState<number>(getWindowWidth);

    useEffect(() => {
        const handleResize = (): void => {
            setWidth(window.innerWidth);
        };

        handleResize();

        window.addEventListener("resize", handleResize, {
            passive: true,
        });

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return useMemo(() => {
        const current = getBreakpoint(width);

        return {
            width,

            current,

            isXs: current === "xs",

            isSm: width >= BREAKPOINTS.sm,

            isMd: width >= BREAKPOINTS.md,

            isLg: width >= BREAKPOINTS.lg,

            isXl: width >= BREAKPOINTS.xl,

            is2Xl: width >= BREAKPOINTS["2xl"],
        };
    }, [width]);
}

export function useIsMobile(): boolean {
    const { width } = useBreakpoint();

    return width < BREAKPOINTS.md;
}

export function useIsTablet(): boolean {
    const { width } = useBreakpoint();

    return width >= BREAKPOINTS.md && width < BREAKPOINTS.lg;
}

export function useIsDesktop(): boolean {
    const { width } = useBreakpoint();

    return width >= BREAKPOINTS.lg;
}