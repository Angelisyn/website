// src/app/page.tsx

import { Announcement } from "@/components/sections/Announcement";
import { CTA } from "@/components/sections/CTA";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
    return (
        <>
            <Announcement />

            <main className="container section-padding flex flex-col gap-24">
                <section className="mx-auto max-w-4xl text-center">
                    <span className="inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
                        Enterprise Cybersecurity Platform
                    </span>

                    <h1 className="gradient-text mt-8 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
                        Angelisyn
                    </h1>

                    <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
                        Angelisyn is building a modern cybersecurity platform focused on
                        secure collaboration, enterprise-grade protection, transparency,
                        and privacy-first infrastructure.
                    </p>

                    <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <a
                            href="#contact"
                            className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-cyan-400"
                        >
                            Contact Us
                        </a>

                        <a
                            href="#cta"
                            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition-colors hover:border-cyan-500 hover:text-white"
                        >
                            Learn More
                        </a>
                    </div>
                </section>

                <CTA />

                <Contact />
            </main>
        </>
    );
}