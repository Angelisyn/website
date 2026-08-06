"use client";

import { motion } from "framer-motion";

import { cn } from "../../utils/cn";

export interface SectionHeaderProps {
    className?: string;
    badge?: string;
    title: string;
    description?: string;
    align?: "left" | "center";
    children?: React.ReactNode;
}

export function SectionHeader({
    className,
    badge,
    title,
    description,
    align = "center",
    children,
}: SectionHeaderProps) {
    const centered = align === "center";

    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35 }}
            className={cn(
                "mx-auto mb-14 max-w-3xl",
                centered ? "text-center" : "text-left",
                className
            )}
        >
            {badge ? (
                <span
                    className={cn(
                        "inline-flex items-center rounded-full",
                        "border border-cyan-500/20 bg-cyan-500/10",
                        "px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em]",
                        "text-cyan-300"
                    )}
                >
                    {badge}
                </span>
            ) : null}

            <h2
                className={cn(
                    "mt-4 text-3xl font-bold tracking-tight text-white",
                    "sm:text-4xl lg:text-5xl"
                )}
            >
                {title}
            </h2>

            {description ? (
                <p
                    className={cn(
                        "mt-6 text-lg leading-8 text-slate-400",
                        centered ? "mx-auto max-w-2xl" : "max-w-2xl"
                    )}
                >
                    {description}
                </p>
            ) : null}

            {children ? (
                <div className="mt-8">
                    {children}
                </div>
            ) : null}
        </motion.div>
    );
}

export default SectionHeader;