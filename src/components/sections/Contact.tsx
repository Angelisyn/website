"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowRight,
    Mail,
    MessageSquare,
    Shield,
} from "lucide-react";

import { cn } from "../../utils/cn";

export interface ContactProps {
    className?: string;
    title?: string;
    description?: string;
    email?: string;
}

const DEFAULT_TITLE = "Get in touch";
const DEFAULT_DESCRIPTION =
    "Whether you have questions about Angelisyn, partnerships, security, or media inquiries, we'd be glad to hear from you.";

const DEFAULT_EMAIL = "contact@angelisyn.com";

export function Contact({
    className,
    title = DEFAULT_TITLE,
    description = DEFAULT_DESCRIPTION,
    email = DEFAULT_EMAIL,
}: ContactProps) {
    return (
        <section
            id="contact"
            aria-labelledby="contact-heading"
            className={cn("relative py-24", className)}
        >
            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/70 backdrop-blur-xl"
                >
                    <div className="grid gap-10 p-8 md:grid-cols-2 md:p-12">
                        <div>
                            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
                                <MessageSquare className="h-4 w-4" />
                                Contact Angelisyn
                            </div>

                            <h2
                                id="contact-heading"
                                className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
                            >
                                {title}
                            </h2>

                            <p className="mt-5 text-lg leading-8 text-slate-300">
                                {description}
                            </p>

                            <div className="mt-8 flex items-center gap-3 text-slate-200">
                                <Mail className="h-5 w-5 text-cyan-400" />

                                <Link
                                    href={`mailto:${email}`}
                                    className="transition-colors hover:text-cyan-300"
                                >
                                    {email}
                                </Link>
                            </div>
                        </div>

                        <div className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-8">
                            <div>
                                <div className="flex items-center gap-3 text-cyan-300">
                                    <Shield className="h-6 w-6" />
                                    <h3 className="text-lg font-semibold">
                                        Responsible Security Communication
                                    </h3>
                                </div>

                                <p className="mt-5 text-sm leading-7 text-slate-400">
                                    Security reports, responsible disclosure, partnership
                                    requests, media inquiries, and general questions are welcome.
                                    We aim to respond as promptly as possible.
                                </p>
                            </div>

                            <div className="mt-10">
                                <Link
                                    href={`mailto:${email}`}
                                    className={cn(
                                        "inline-flex items-center gap-2 rounded-xl",
                                        "bg-cyan-500 px-6 py-3 font-semibold text-slate-950",
                                        "transition-colors hover:bg-cyan-400",
                                        "focus-visible:outline-none focus-visible:ring-2",
                                        "focus-visible:ring-cyan-400",
                                        "focus-visible:ring-offset-2",
                                        "focus-visible:ring-offset-slate-950"
                                    )}
                                >
                                    Contact Angelisyn
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Contact;