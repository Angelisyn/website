"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

import { cn } from "../../utils/cn";

export interface CTAProps {
    className?: string;
    title?: string;
    description?: string;
    primaryLabel?: string;
    primaryHref?: string;
    secondaryLabel?: string;
    secondaryHref?: string;
}

const DEFAULT_TITLE = "Build with security at the core.";
const DEFAULT_DESCRIPTION =
    "Explore Angelisyn's vision for modern cybersecurity infrastructure, product updates, and our public roadmap.";

export function CTA({
    className,
    title = DEFAULT_TITLE,
    description = DEFAULT_DESCRIPTION,
    primaryLabel = "View Roadmap",
    primaryHref = "/roadmap",
    secondaryLabel = "Contact Us",
    secondaryHref = "/contact",
}: CTAProps) {
    return (
        <section
            aria-labelledby="cta-heading"
            className={cn("relative overflow-hidden py-24", className)}
        >
            <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_60%)]"
            />

            <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4 }}
                    className="rounded-3xl border border-cyan-500/20 bg-slate-950/70 p-8 backdrop-blur-xl sm:p-12"
                >
                    <div className="mx-auto max-w-3xl text-center">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
                            <ShieldCheck className="h-4 w-4" />
                            Enterprise Security • Privacy First
                        </div>

                        <h2
                            id="cta-heading"
                            className="text-3xl font-bold tracking-tight text-white sm:text-5xl"
                        >
                            {title}
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-300">
                            {description}
                        </p>

                        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Link
                                href={primaryHref}
                                className={cn(
                                    "inline-flex items-center gap-2 rounded-xl",
                                    "bg-cyan-500 px-6 py-3 font-semibold text-slate-950",
                                    "transition-colors hover:bg-cyan-400",
                                    "focus-visible:outline-none focus-visible:ring-2",
                                    "focus-visible:ring-cyan-400 focus-visible:ring-offset-2",
                                    "focus-visible:ring-offset-slate-950"
                                )}
                            >
                                {primaryLabel}
                                <ArrowRight className="h-4 w-4" />
                            </Link>

                            <Link
                                href={secondaryHref}
                                className={cn(
                                    "inline-flex items-center rounded-xl border",
                                    "border-slate-700 px-6 py-3 font-semibold text-slate-200",
                                    "transition-colors hover:border-cyan-500/40 hover:text-white",
                                    "focus-visible:outline-none focus-visible:ring-2",
                                    "focus-visible:ring-cyan-400 focus-visible:ring-offset-2",
                                    "focus-visible:ring-offset-slate-950"
                                )}
                            >
                                {secondaryLabel}
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default CTA;