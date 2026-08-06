// src/hooks/useScrollPosition.ts

"use client";

import { useEffect, useRef, useState } from "react";

export interface ScrollPosition {
    readonly x: number;
    readonly y: number;
}

export interface UseScrollPositionOptions {
    /**
     * Delay (ms) between updates.
     *
     * @default 0
     */
    readonly throttleMs?: number;

    /**
     * Disable the hook.
     *
     * @default false
     */
    readonly disabled?: boolean;
}

const getScrollPosition = (): ScrollPosition => {
    if (typeof window === "undefined") {
        return {
            x: 0,
            y: 0,
        };
    }

    return {
        x: window.scrollX,
        y: window.scrollY,
    };
};

export function useScrollPosition(
    options: UseScrollPositionOptions = {},
): ScrollPosition {
    const {
        throttleMs = 0,
        disabled = false,
    } = options;

    const [position, setPosition] = useState<ScrollPosition>(
        getScrollPosition,
    );

    const timeoutRef = useRef<number | null>(null);

    useEffect(() => {
        if (disabled || typeof window === "undefined") {
            return;
        }

        const updatePosition = (): void => {
            setPosition(getScrollPosition());
        };

        const handleScroll = (): void => {
            if (throttleMs <= 0) {
                updatePosition();
                return;
            }

            if (timeoutRef.current !== null) {
                return;
            }

            timeoutRef.current = window.setTimeout(() => {
                timeoutRef.current = null;
                updatePosition();
            }, throttleMs);
        };

        updatePosition();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);

            if (timeoutRef.current !== null) {
                window.clearTimeout(timeoutRef.current);
            }
        };
    }, [disabled, throttleMs]);

    return position;
}

export function useScrollDirection(
    threshold = 10,
): "up" | "down" {
    const { y } = useScrollPosition();

    const previousY = useRef(y);

    const [direction, setDirection] = useState<"up" | "down">(
        "up",
    );

    useEffect(() => {
        const difference = y - previousY.current;

        if (Math.abs(difference) < threshold) {
            return;
        }

        setDirection(difference > 0 ? "down" : "up");
        previousY.current = y;
    }, [threshold, y]);

    return direction;
}

export function useScrolled(offset = 50): boolean {
    const { y } = useScrollPosition();

    return y > offset;
}