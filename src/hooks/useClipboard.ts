// src/hooks/useClipboard.ts

"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export interface ClipboardState {
    readonly copied: boolean;
    readonly value: string | null;
    readonly isSupported: boolean;
    readonly error: Error | null;
}

export interface ClipboardOptions {
    /**
     * Duration (ms) before the copied state resets.
     * Set to 0 to disable automatic reset.
     *
     * @default 2000
     */
    readonly resetAfter?: number;
}

export interface ClipboardActions {
    readonly copy: (text: string) => Promise<boolean>;
    readonly read: () => Promise<string | null>;
    readonly reset: () => void;
}

const DEFAULT_RESET_AFTER = 2000;

const isClipboardSupported = (): boolean => {
    return (
        typeof navigator !== "undefined" &&
        typeof navigator.clipboard !== "undefined"
    );
};

export function useClipboard(
    options: ClipboardOptions = {},
): ClipboardState & ClipboardActions {
    const { resetAfter = DEFAULT_RESET_AFTER } = options;

    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const [state, setState] = useState<ClipboardState>({
        copied: false,
        value: null,
        isSupported: isClipboardSupported(),
        error: null,
    });

    const clearResetTimer = useCallback((): void => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
    }, []);

    const reset = useCallback((): void => {
        clearResetTimer();

        setState((previous) => ({
            ...previous,
            copied: false,
            error: null,
        }));
    }, [clearResetTimer]);

    const copy = useCallback(
        async (text: string): Promise<boolean> => {
            if (!isClipboardSupported()) {
                const error = new Error("Clipboard API is not supported.");

                setState((previous) => ({
                    ...previous,
                    copied: false,
                    error,
                    isSupported: false,
                }));

                return false;
            }

            try {
                await navigator.clipboard.writeText(text);

                clearResetTimer();

                setState({
                    copied: true,
                    value: text,
                    error: null,
                    isSupported: true,
                });

                if (resetAfter > 0) {
                    timeoutRef.current = setTimeout(() => {
                        setState((previous) => ({
                            ...previous,
                            copied: false,
                        }));
                    }, resetAfter);
                }

                return true;
            } catch (error) {
                const clipboardError =
                    error instanceof Error
                        ? error
                        : new Error("Failed to copy text to clipboard.");

                setState((previous) => ({
                    ...previous,
                    copied: false,
                    error: clipboardError,
                }));

                return false;
            }
        },
        [clearResetTimer, resetAfter],
    );

    const read = useCallback(async (): Promise<string | null> => {
        if (!isClipboardSupported()) {
            return null;
        }

        try {
            const value = await navigator.clipboard.readText();

            setState((previous) => ({
                ...previous,
                value,
                error: null,
            }));

            return value;
        } catch (error) {
            const clipboardError =
                error instanceof Error
                    ? error
                    : new Error("Failed to read clipboard.");

            setState((previous) => ({
                ...previous,
                error: clipboardError,
            }));

            return null;
        }
    }, []);

    useEffect(() => {
        return () => {
            clearResetTimer();
        };
    }, [clearResetTimer]);

    return {
        ...state,
        copy,
        read,
        reset,
    };
}