"use client";

import Link from "next/link";
import { AlertCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { cn } from "../../utils/cn";

export interface EmptyStateProps {
    className?: string;
    title: string;
    description: string;
    actionLabel?: string;
    actionHref?: string;
    icon?: React.ReactNode;
}

export function EmptyState({
    className,
    title,
    description,
    actionLabel,
    actionHref,
    icon,
}: EmptyStateProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={cn(
                "flex w-full flex-col items-center justify-center rounded-3xl",
                "border border-slate-800 bg-slate-950/60",
                "px-8 py-16 text-center backdrop-blur-xl",
                className
            )}
        >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-300">
                {icon ?? <AlertCircle className="h-8 w-8" />}
            </div>

            <h2 className="mt-6 text-2xl font-bold tracking-tight text-white">
                {title}
            </h2>

            <p className="mt-3 max-w-lg text-sm leading-7 text-slate-400">
                {description}
            </p>

            {actionLabel && actionHref ? (
                <Link
                    href={actionHref}
                    className={cn(
                        "mt-8 inline-flex items-center gap-2 rounded-xl",
                        "bg-cyan-500 px-5 py-3",
                        "font-semibold text-slate-950",
                        "transition-colors hover:bg-cyan-400",
                        "focus-visible:outline-none",
                        "focus-visible:ring-2",
                        "focus-visible:ring-cyan-400",
                        "focus-visible:ring-offset-2",
                        "focus-visible:ring-offset-slate-950"
                    )}
                >
                    {actionLabel}
                    <ArrowRight className="h-4 w-4" />
                </Link>
            ) : null}
        </motion.div>
    );
}

export default EmptyState;