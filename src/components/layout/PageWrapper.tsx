// src/components/layout/PageWrapper.tsx

"use client";

import type { HTMLAttributes, PropsWithChildren } from "react";
import { motion } from "framer-motion";

import { cn } from "../../utils";

export interface PageWrapperProps
    extends PropsWithChildren,
    HTMLAttributes<HTMLElement> {
    /**
     * Render as a full-height page.
     *
     * @default true
     */
    readonly fullHeight?: boolean;

    /**
     * Apply default vertical spacing.
     *
     * @default true
     */
    readonly withSpacing?: boolean;

    /**
     * Disable the entry animation.
     *
     * @default false
     */
    readonly disableAnimation?: boolean;
}

const pageTransition = {
    duration: 0.2,
    ease: "easeOut",
} as const;

export function PageWrapper({
    children,
    className,
    fullHeight = true,
    withSpacing = true,
    disableAnimation = false,
    ...props
}: PageWrapperProps) {
    const content = (
        <main
            className={cn(
                "w-full",
                fullHeight && "min-h-screen",
                withSpacing && "py-16 md:py-20",
                className,
            )}
            {...props}
        >
            {children}
        </main>
    );

    if (disableAnimation) {
        return content;
    }

    return (
        <motion.main
            initial={{
                opacity: 0,
                y: 8,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            exit={{
                opacity: 0,
                y: -8,
            }}
            transition={pageTransition}
            className={cn(
                "w-full",
                fullHeight && "min-h-screen",
                withSpacing && "py-16 md:py-20",
                className,
            )}
            {...props}
        >
            {children}
        </motion.main>
    );
}