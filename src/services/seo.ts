// src/services/seo.ts

import type { Metadata } from "next";

import { APP_CONFIG, DEFAULT_SEO } from "../constants";

export interface JsonLd {
    readonly "@context": "https://schema.org";
    readonly "@type": string;
    readonly [key: string]: unknown;
}

export interface SeoOptions {
    readonly title?: string;
    readonly description?: string;
    readonly canonical?: string;
    readonly image?: string;
    readonly noIndex?: boolean;
}

export function createMetadata(
    options: SeoOptions = {},
): Metadata {
    const title = options.title ?? DEFAULT_SEO.title;
    const description =
        options.description ?? DEFAULT_SEO.description;
    const canonical =
        options.canonical ?? APP_CONFIG.url;

    const image =
        options.image ??
        DEFAULT_SEO.openGraph.images[0]?.url ??
        `${APP_CONFIG.url}/images/og-image.png`;

    return {
        title,
        description,

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
                    alt: APP_CONFIG.name,
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

export function createOrganizationJsonLd(): JsonLd {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",

        name: APP_CONFIG.name,

        url: APP_CONFIG.url,

        logo: `${APP_CONFIG.url}/logo.png`,

        email: APP_CONFIG.contactEmail,
    };
}

export function createWebsiteJsonLd(): JsonLd {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",

        name: APP_CONFIG.name,

        url: APP_CONFIG.url,

        description: DEFAULT_SEO.description,
    };
}

export function createBreadcrumbJsonLd(
    items: ReadonlyArray<{
        readonly name: string;
        readonly url: string;
    }>,
): JsonLd {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",

        itemListElement: items.map(
            (item, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: item.name,
                item: item.url,
            }),
        ),
    };
}

export function serializeJsonLd(
    data: JsonLd,
): string {
    return JSON.stringify(data);
}