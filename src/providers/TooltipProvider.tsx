// src/providers/TooltipProvider.tsx

"use client";

import type { PropsWithChildren } from "react";

import { TooltipProvider as RadixTooltipProvider } from "@radix-ui/react-tooltip";

export interface TooltipProviderProps
    extends PropsWithChildren {
    /**
     * Delay (ms) before opening a tooltip.
     *
     * @default 300
     */
    readonly delayDuration?: number;

    /**
     * Time (ms) to skip delay after another tooltip closes.
     *
     * @default 300
     */
    readonly skipDelayDuration?: number;

    /**
     * Disable hoverable tooltip content.
     *
     * @default false
     */
    readonly disableHoverableContent?: boolean;
}

/**
 * Global tooltip provider.
 *
 * Wrap the application once to enable Radix/shadcn
 * tooltips with consistent behavior.
 */
export function TooltipProvider({
    children,
    delayDuration = 300,
    skipDelayDuration = 300,
    disableHoverableContent = false,
}: TooltipProviderProps) {
    return (
        <RadixTooltipProvider
            delayDuration={delayDuration}
            skipDelayDuration={skipDelayDuration}
            disableHoverableContent={disableHoverableContent}
        >
            {children}
        </RadixTooltipProvider>
    );
}