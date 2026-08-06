"use client";

import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

import { cn } from "../../utils/cn";

export interface LoadingProps {
    className?: string;
    title?: string;
    description?: string;
    fullScreen?: boolean;
    size?: "sm" | "md" | "lg";
}

const spinnerSizes = {
    sm: "h-5 w-5",
    md: "h-8 w-8",
    lg: "h-12 w-12",
} as const;

export function Loading({
    className,
    title = "Loading",
    description = "Please wait while we prepare the content.",
    fullScreen = false,
    size = "md",
}: LoadingProps) {
    return (
        <div
            className={cn(
                "flex w-full items-center justify-center",
                fullScreen ? "min-h-screen" : "min-h-[320px]",
                className
            )}
            role="status"
            aria-live="polite"
            aria-busy="true"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25 }}
                className={cn(
                    "flex flex-col items-center rounded-3xl",
                    "border border-slate-800 bg-slate-950/70",
                    "px-8 py-10 backdrop-blur-xl"
                )}
            >
                <Loader2
                    className={cn(
                        "animate-spin text-cyan-400",
                        spinnerSizes[size]
                    )}
                />

                <h2 className="mt-6 text-lg font-semibold text-white">
                    {title}
                </h2>

                <p className="mt-2 max-w-xs text-center text-sm leading-6 text-slate-400">
                    {description}
                </p>
            </motion.div>
        </div>
    );
}

export default Loading;