// src/app/layout.tsx

import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

import { AnalyticsProvider } from "@/providers";
import { MotionProvider } from "@/providers";
import { QueryProvider } from "@/providers";
import { TooltipProvider } from "@/providers";

import { ThemeProvider } from "@/components/layout/ThemeProvider";

export const metadata: Metadata = {
    metadataBase: new URL("https://angelisyn.com"),
    title: {
        default: "Angelisyn",
        template: "%s | Angelisyn",
    },
    description:
        "Angelisyn is building a modern cybersecurity platform focused on secure collaboration, transparency, and enterprise-grade protection.",
    applicationName: "Angelisyn",
    keywords: [
        "Angelisyn",
        "Cybersecurity",
        "Security Platform",
        "Enterprise Security",
        "Cloud Security",
        "Zero Trust",
    ],
    authors: [
        {
            name: "Angelisyn",
        },
    ],
    creator: "Angelisyn",
    publisher: "Angelisyn",
    robots: {
        index: true,
        follow: true,
    },
};

export interface RootLayoutProps {
    children: ReactNode;
}

export default function RootLayout({
    children,
}: Readonly<RootLayoutProps>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
                <ThemeProvider>
                    <AnalyticsProvider>
                        <QueryProvider>
                            <MotionProvider>
                                <TooltipProvider>
                                    {children}
                                </TooltipProvider>
                            </MotionProvider>
                        </QueryProvider>
                    </AnalyticsProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}