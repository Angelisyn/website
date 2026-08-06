// src/constants/app.ts

export const APP_CONFIG = {
    name: "Angelisyn",
    shortName: "Angelisyn",
    description:
        "Angelisyn is a modern cybersecurity platform focused on secure infrastructure, intelligent protection, and enterprise-grade security solutions.",

    version: "1.0.0",

    environment: process.env.NODE_ENV ?? "development",

    url:
        process.env.NEXT_PUBLIC_SITE_URL ??
        "https://angelisyn.com",

    defaultLocale: "en",

    locale: "en-US",

    timezone: "UTC",

    author: "Angelisyn",

    organization: "Angelisyn",

    supportEmail: "support@angelisyn.com",

    contactEmail: "contact@angelisyn.com",

    careersEmail: "careers@angelisyn.com",

    pressEmail: "press@angelisyn.com",

    securityEmail: "security@angelisyn.com",

    copyright: `© ${new Date().getFullYear()} Angelisyn. All rights reserved.`,

    repository: "https://github.com/Angelisyn/website",
} as const;

export const APP_SETTINGS = {
    theme: {
        default: "dark",
        storageKey: "angelisyn-theme",
    },

    animation: {
        enabled: true,
        duration: 0.2,
    },

    navigation: {
        sticky: true,
        showAnnouncement: true,
    },

    layout: {
        maxWidth: "1280px",
        contentWidth: "1200px",
    },
} as const;

export const FEATURE_FLAGS = {
    blog: true,
    careers: true,
    press: true,
    roadmap: true,
    changelog: true,
    newsletter: true,
    contactForm: true,
    analytics: true,
    search: false,
    authentication: false,
} as const;

export const STORAGE_KEYS = {
    theme: "angelisyn-theme",
    cookieConsent: "angelisyn-cookie-consent",
    announcementDismissed: "angelisyn-announcement-dismissed",
} as const;

export const EXTERNAL_LINKS = {
    github: "https://github.com/Angelisyn",
    linkedin: "https://linkedin.com/company/angelisyn",
    x: "https://x.com/angelisyn",
} as const;

export type AppConfig = typeof APP_CONFIG;
export type AppSettings = typeof APP_SETTINGS;
export type FeatureFlags = typeof FEATURE_FLAGS;
export type StorageKeys = typeof STORAGE_KEYS;
export type ExternalLinks = typeof EXTERNAL_LINKS;