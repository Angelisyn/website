"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib";

export interface LogoProps
    extends React.HTMLAttributes<HTMLAnchorElement> {
    /**
     * Display logo text.
     */
    showText?: boolean;

    /**
     * Logo size.
     */
    size?: "sm" | "md" | "lg" | "xl";

    /**
     * Navigate to homepage when clicked.
     */
    href?: string;
}

const logoSizes = {
    sm: {
        symbol: "h-8 w-8",
        text: "text-lg",
    },

    md: {
        symbol: "h-10 w-10",
        text: "text-xl",
    },

    lg: {
        symbol: "h-12 w-12",
        text: "text-2xl",
    },

    xl: {
        symbol: "h-16 w-16",
        text: "text-3xl",
    },
} as const;

export function Logo({
    className,
    showText = true,
    size = "md",
    href = "/",
    ...props
}: LogoProps) {
    return (
        <Link
            href={href}
            aria-label="Angelisyn Home"
            className={cn(
                "inline-flex",
                "items-center",
                "gap-3",
                "group",
                "select-none",
                className
            )}
            {...props}
        >
            {/* ------------------------------------------------------------------- */}
            {/* Symbol                                                               */}
            {/* ------------------------------------------------------------------- */}

            <div
                className={cn(
                    "relative",
                    "flex",
                    "items-center",
                    "justify-center",
                    "rounded-full",
                    "border",
                    "border-cyan-500/30",
                    "bg-zinc-950",
                    "transition-all",
                    "duration-300",
                    "group-hover:border-cyan-400",
                    "group-hover:shadow-lg",
                    "group-hover:shadow-cyan-500/20",

                    logoSizes[size].symbol
                )}
            >
                {/* Halo */}

                <div className="absolute inset-1 rounded-full border border-cyan-500/20" />

                {/* Core */}

                <div className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_18px_rgb(34,211,238)]" />
            </div>

            {/* ------------------------------------------------------------------- */}
            {/* Wordmark                                                             */}
            {/* ------------------------------------------------------------------- */}

            {showText && (
                <div className="flex flex-col leading-none">
                    <span
                        className={cn(
                            "font-bold",
                            "tracking-tight",
                            "text-white",

                            logoSizes[size].text
                        )}
                    >
                        Angelisyn
                    </span>

                    <span className="text-xs tracking-[0.18em] uppercase text-zinc-500">
                        Cybersecurity Platform
                    </span>
                </div>
            )}
        </Link>
    );
}

export default Logo;