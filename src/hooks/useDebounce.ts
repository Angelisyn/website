// src/hooks/useDebounce.ts

"use client";

import { useEffect, useRef, useState } from "react";

export interface DebounceOptions {
    /**
     * Skip debouncing the initial value.
     *
     * @default false
     */
    readonly leading?: boolean;
}

export interface DebouncedState<T> {
    readonly value: T;
    readonly isPending: boolean;
}

/**
 * Returns a debounced version of a value.
 */
export function useDebounce<T>(
    value: T,
    delay: number,
    options: DebounceOptions = {},
): DebouncedState<T> {
    const { leading = false } = options;

    const isFirstRender = useRef(true);

    const [debouncedValue, setDebouncedValue] = useState<T>(value);
    const [isPending, setIsPending] = useState(false);

    useEffect(() => {
        if (leading && isFirstRender.current) {
            isFirstRender.current = false;
            setDebouncedValue(value);
            return;
        }

        isFirstRender.current = false;

        setIsPending(true);

        const timeout = window.setTimeout(() => {
            setDebouncedValue(value);
            setIsPending(false);
        }, delay);

        return () => {
            window.clearTimeout(timeout);
        };
    }, [value, delay, leading]);

    return {
        value: debouncedValue,
        isPending,
    };
}

/**
 * Debounced callback helper.
 */
export function useDebouncedCallback<T extends (...args: never[]) => void>(
    callback: T,
    delay: number,
): (...args: Parameters<T>) => void {
    const timeoutRef = useRef<number | null>(null);

    useEffect(() => {
        return () => {
            if (timeoutRef.current !== null) {
                window.clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return (...args: Parameters<T>) => {
        if (timeoutRef.current !== null) {
            window.clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = window.setTimeout(() => {
            callback(...args);
        }, delay);
    };
}