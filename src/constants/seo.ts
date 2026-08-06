// src/constants/seo.ts

import { APP_CONFIG } from "./app";

export interface SeoImage {
    readonly url: string;
    readonly width: number;
    readonly height: number;
    readonly alt: string;
}

export interface SeoMetadata {
    readonly title: string;
    readonly description: string;
    readonly keywords: readonly string[];
    readonly canonical: string;
    readonly robots: string;
    readonly openGraph: {
        readonly type: string;
        readonly locale: string;
        readonly siteName: string;
        readonly title: string;
        readonly description: string;
        readonly url: string;
        readonly images: readonly SeoImage[];
    };
    readonly twitter: {
        readonly card: "summary" | "summary_large_image";
        readonly title: string;
        readonly description: string;
        readonly images: readonly string[];
    };
}

export const DEFAULT_SEO: SeoMetadata = {
    title: "Angelisyn | Enterprise Cybersecurity Platform",

    description:
        "Angelisyn builds secure, enterprise-grade cybersecurity solutions with a focus on privacy, resilience, performance, and modern cloud infrastructure.",

    keywords: [
        "Angelisyn",
        "Cybersecurity",
        "Enterprise Security",
        "Cloud Security",
        "Zero Trust",
        "Cyber Defense",
        "Threat Detection",
        "Secure Platform",
        "Privacy",
        "Security Platform",
        "Next.js",
        "SaaS",
    ],

    canonical: APP_CONFIG.url,

    robots: "index,follow",

    openGraph: {
        type: "website",
        locale: "en_US",
        siteName: APP_CONFIG.name,

        title: "Angelisyn | Enterprise Cybersecurity Platform",

        description:
            "Modern cybersecurity solutions designed for organizations that demand security, reliability, and performance.",

        url: APP_CONFIG.url,

        images: [
            {
                url: `${APP_CONFIG.url}/images/og-image.png`,
                width: 1200,
                height: 630,
                alt: "Angelisyn",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",

        title: "Angelisyn | Enterprise Cybersecurity Platform",

        description:
            "Building secure digital infrastructure for modern organizations.",

        images: [`${APP_CONFIG.url}/images/og-image.png`],
    },
} as const;

export const PAGE_TITLES = {
    home: "Angelisyn | Enterprise Cybersecurity Platform",
    about: "About Angelisyn",
    platform: "Platform",
    features: "Features",
    roadmap: "Roadmap",
    security: "Security",
    blog: "Blog",
    careers: "Careers",
    press: "Press",
    contact: "Contact",
    faq: "Frequently Asked Questions",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    cookies: "Cookie Policy",
    status: "System Status",
    changelog: "Changelog",
} as const;

export const SEO_DEFAULT_IMAGE: SeoImage = {
    url: `${APP_CONFIG.url}/images/og-image.png`,
    width: 1200,
    height: 630,
    alt: "Angelisyn",
} as const;

export const SEO_ROBOTS = {
    index: "index,follow",
    noIndex: "noindex,nofollow",
} as const;

export const SEO_VERIFICATION = {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "",
    bing: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ?? "",
    yandex: process.env.NEXT_PUBLIC_YANDEX_SITE_VERIFICATION ?? "",
} as const;

export type DefaultSeo = typeof DEFAULT_SEO;
export type PageTitles = typeof PAGE_TITLES;
export type SeoRobots = typeof SEO_ROBOTS;
export type SeoVerification = typeof SEO_VERIFICATION;