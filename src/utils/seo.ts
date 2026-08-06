// src/utils/seo.ts

import type { Metadata } from "next";

import {
    APP_CONFIG,
    DEFAULT_SEO,
} from "../constants";

export interface SeoMetadataOptions {
    readonly title?: string;
    readonly description?: string;
    readonly canonical?: string;
    readonly image?: string;
    readonly noIndex?: boolean;
    readonly keywords?: readonly string[];
}

export interface JsonLd {
    readonly "@context": "https://schema.org";
    readonly "@type": string;
    readonly [key: string]: unknown;
}

export function buildPageTitle(
    title?: string,
): string {
    if (!title) {
        return DEFAULT_SEO.title;
    }

    return `${title} | ${APP_CONFIG.name}`;
}

export function buildCanonicalUrl(
    path = "/",
): string {
    const normalized =
        path.startsWith("/") ? path : `/${path}`;

    return `${APP_CONFIG.url}${normalized}`;
}

export function buildMetadata(
    options: SeoMetadataOptions = {},
): Metadata {
    const title = buildPageTitle(options.title);

    const description =
        options.description ??
        DEFAULT_SEO.description;

    const canonical =
        options.canonical ??
        buildCanonicalUrl();

    const image =
        options.image ??
        `${APP_CONFIG.url}/images/og-image.png`;

    return {
        title,
        description,

        keywords: options.keywords,

        metadataBase: new URL(
            APP_CONFIG.url,
        ),

        alternates: {
            canonical,
        },

        robots: {
            index: !options.noIndex,
            follow: !options.noIndex,
        },

        openGraph: {
            title,
            description,
            url: canonical,
            siteName: APP_CONFIG.name,
            locale: "en_US",
            type: "website",

            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image],
        },
    };
}

export function organizationJsonLd(): JsonLd {
    return {
        "@context":
            "https://schema.org",

        "@type":
            "Organization",

        name: APP_CONFIG.name,

        url: APP_CONFIG.url,

        logo: `${APP_CONFIG.url}/logo.png`,
    };
}

export function websiteJsonLd(): JsonLd {
    return {
        "@context":
            "https://schema.org",

        "@type":
            "WebSite",

        name: APP_CONFIG.name,

        url: APP_CONFIG.url,
    };
}

export function breadcrumbJsonLd(
    items: ReadonlyArray<{
        readonly name: string;
        readonly url: string;
    }>,
): JsonLd {
    return {
        "@context":
            "https://schema.org",

        "@type":
            "BreadcrumbList",

        itemListElement: items.map(
            (item, index) => ({
                "@type":
                    "ListItem",

                position:
                    index + 1,

                name:
                    item.name,

                item:
                    item.url,
            }),
        ),
    };
}

export function serializeJsonLd(
    value: JsonLd,
): string {
    return JSON.stringify(value);
}