// src/providers/MotionProvider.tsx

"use client";

import {
    LazyMotion,
    MotionConfig,
    domAnimation,
    useReducedMotion,
} from "framer-motion";
import type { PropsWithChildren } from "react";

export interface MotionProviderProps
    extends PropsWithChildren {
    /**
     * Global animation duration in seconds.
     *
     * @default 0.2
     */
    readonly duration?: number;
}

export function MotionProvider({
    children,
    duration = 0.2,
}: MotionProviderProps) {
    const prefersReducedMotion = useReducedMotion();

    return (
        <MotionConfig
            reducedMotion={
                prefersReducedMotion ? "always" : "never"
            }
            transition={{
                duration,
                ease: "easeOut",
            }}
        >
            <LazyMotion features={domAnimation}>
                {children}
            </LazyMotion>
        </MotionConfig>
    );
}