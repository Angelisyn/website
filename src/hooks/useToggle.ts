// src/hooks/useToggle.ts

"use client";

import { Dispatch, SetStateAction, useCallback, useState } from "react";

export interface UseToggleReturn {
    readonly value: boolean;
    readonly setValue: Dispatch<SetStateAction<boolean>>;
    readonly toggle: () => void;
    readonly enable: () => void;
    readonly disable: () => void;
    readonly set: (value: boolean) => void;
}

/**
 * A simple boolean state hook with helper methods.
 *
 * @param initialValue Initial toggle state.
 * @returns Toggle state and helper actions.
 */
export function useToggle(
    initialValue = false,
): UseToggleReturn {
    const [value, setValue] = useState<boolean>(initialValue);

    const toggle = useCallback((): void => {
        setValue((previous) => !previous);
    }, []);

    const enable = useCallback((): void => {
        setValue(true);
    }, []);

    const disable = useCallback((): void => {
        setValue(false);
    }, []);

    const set = useCallback((nextValue: boolean): void => {
        setValue(nextValue);
    }, []);

    return {
        value,
        setValue,
        toggle,
        enable,
        disable,
        set,
    };
}