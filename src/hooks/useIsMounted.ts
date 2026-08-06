// src/hooks/useIsMounted.ts

"use client";

import { useEffect, useRef, useState } from "react";

export interface UseIsMountedResult {
    /**
     * True after the component has mounted on the client.
     */
    readonly isMounted: boolean;

    /**
     * Returns the current mounted state without triggering re-renders.
     */
    readonly getIsMounted: () => boolean;
}

/**
 * Tracks whether a component is currently mounted.
 *
 * Useful for:
 * - Avoiding state updates after unmount
 * - Client-only rendering
 * - Preventing hydration mismatches
 */
export function useIsMounted(): UseIsMountedResult {
    const mountedRef = useRef(false);

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        mountedRef.current = true;
        setIsMounted(true);

        return () => {
            mountedRef.current = false;
            setIsMounted(false);
        };
    }, []);

    return {
        isMounted,
        getIsMounted: () => mountedRef.current,
    };
}

/**
 * Lightweight mounted callback.
 *
 * Returns a stable function that always reflects
 * the current mounted state.
 */
export function useMountedRef(): () => boolean {
    const mountedRef = useRef(false);

    useEffect(() => {
        mountedRef.current = true;

        return () => {
            mountedRef.current = false;
        };
    }, []);

    return () => mountedRef.current;
}