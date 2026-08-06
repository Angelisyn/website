"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import { cn } from "../../utils/cn";

export interface AnnouncementProps {
    className?: string;
    badge?: string;
    title?: string;
    href?: string;
}

const DEFAULT_BADGE = "New";
const DEFAULT_TITLE =
    "Angelisyn Website is under active development. Follow our progress as we build a secure, enterprise-grade cybersecurity platform.";
const DEFAULT_HREF = "/roadmap";

export function Announcement({
    className,
    badge = DEFAULT_BADGE,
    title = DEFAULT_TITLE,
    href = DEFAULT_HREF,
}: AnnouncementProps) {
    return (
        <section
            aria-label="Announcement"
            className={cn("relative w-full", className)}
        >
            <div className="mx-auto flex max-w-7xl justify-center px-6 pt-6 sm:px-8 lg:px-10">
                <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.35,
                        ease: "easeOut",
                    }}
                    className="w-full max-w-4xl"
                >
                    <Link
                        href={href}
                        className={cn(
                            "group relative flex w-full items-center justify-between gap-4 overflow-hidden rounded-full",
                            "border border-cyan-500/20 bg-slate-950/70 px-5 py-3",
                            "backdrop-blur-xl transition-all duration-200",
                            "hover:border-cyan-400/40 hover:bg-slate-900/80",
                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                        )}
                    >
                        <div
                            aria-hidden
                            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08),transparent_70%)]"
                        />

                        <div className="relative flex min-w-0 items-center gap-3">
                            <span
                                className={cn(
                                    "inline-flex items-center gap-1 rounded-full",
                                    "border border-cyan-400/20 bg-cyan-500/10",
                                    "px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]",
                                    "text-cyan-300"
                                )}
                            >
                                <Sparkles className="h-3.5 w-3.5" />
                                {badge}
                            </span>

                            <p className="truncate text-sm font-medium text-slate-200 sm:text-base">
                                {title}
                            </p>
                        </div>

                        <span
                            className={cn(
                                "relative inline-flex shrink-0 items-center gap-2",
                                "text-sm font-semibold text-cyan-300 transition-colors",
                                "group-hover:text-cyan-200"
                            )}
                        >
                            Learn more
                            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                        </span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

export default Announcement;