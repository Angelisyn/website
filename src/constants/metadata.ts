// src/constants/metadata.ts

import type { Metadata, Viewport } from "next";

import { APP_CONFIG } from "./app";
import { DEFAULT_SEO } from "./seo";

export const SITE_METADATA: Metadata = {
    metadataBase: new URL(APP_CONFIG.url),

    title: {
        default: DEFAULT_SEO.title,
        template: `%s | ${APP_CONFIG.name}`,
    },

    description: DEFAULT_SEO.description,

    applicationName: APP_CONFIG.name,

    generator: "Next.js",

    referrer: "origin-when-cross-origin",

    keywords: [...DEFAULT_SEO.keywords],

    authors: [
        {
            name: APP_CONFIG.author,
        },
    ],

    creator: APP_CONFIG.author,

    publisher: APP_CONFIG.organization,

    category: "Technology",

    alternates: {
        canonical: DEFAULT_SEO.canonical,
    },

    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            "max-image-preview": "large",
            "max-video-preview": -1,
            "max-snippet": -1,
        },
    },

    openGraph: {
        type: "website",
        locale: "en_US",
        url: APP_CONFIG.url,
        siteName: APP_CONFIG.name,
        title: DEFAULT_SEO.openGraph.title,
        description: DEFAULT_SEO.openGraph.description,
        images: DEFAULT_SEO.openGraph.images,
    },

    twitter: {
        card: "summary_large_image",
        title: DEFAULT_SEO.twitter.title,
        description: DEFAULT_SEO.twitter.description,
        images: DEFAULT_SEO.twitter.images,
        creator: "@angelisyn",
    },

    icons: {
        icon: [
            {
                url: "/favicon.ico",
            },
            {
                url: "/favicon-32x32.png",
                sizes: "32x32",
                type: "image/png",
            },
            {
                url: "/favicon-16x16.png",
                sizes: "16x16",
                type: "image/png",
            },
        ],

        apple: [
            {
                url: "/apple-touch-icon.png",
                sizes: "180x180",
            },
        ],

        shortcut: "/favicon.ico",
    },

    manifest: "/site.webmanifest",

    verification: {
        google:
            process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? undefined,

        other: {
            bing:
                process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ?? "",

            yandex:
                process.env.NEXT_PUBLIC_YANDEX_SITE_VERIFICATION ?? "",
        },
    },
};

export const SITE_VIEWPORT: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    themeColor: [
        {
            media: "(prefers-color-scheme: light)",
            color: "#ffffff",
        },
        {
            media: "(prefers-color-scheme: dark)",
            color: "#020617",
        },
    ],

    colorScheme: "dark light",
};

export const DEFAULT_METADATA = SITE_METADATA;

export type SiteMetadata = typeof SITE_METADATA;
export type SiteViewport = typeof SITE_VIEWPORT;