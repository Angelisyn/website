/**
 * -----------------------------------------------------------------------------
 * Angelisyn
 * Global Constants
 * -----------------------------------------------------------------------------
 */

export const SITE = {
    NAME: "Angelisyn",

    VERSION: "1.0.0",

    LOCALE: "en-IN",

    LANGUAGE: "en",

    COPYRIGHT_YEAR: new Date().getFullYear(),
} as const;

export const ROUTES = {
    HOME: "/",

    PLATFORM: "/platform",

    FEATURES: "/features",

    ROADMAP: "/roadmap",

    SECURITY: "/security",

    COMPANY: "/company",

    CONTACT: "/contact",

    FAQ: "/faq",

    BLOG: "/blog",

    CAREERS: "/careers",

    STATUS: "/status",

    PRIVACY: "/legal/privacy-policy",

    TERMS: "/legal/terms-of-service",

    COOKIES: "/legal/cookie-policy",

    TRADEMARK: "/legal/trademark",

    DISCLOSURE: "/legal/responsible-disclosure",

    SECURITY_POLICY: "/legal/security-policy",
} as const;

export const SOCIAL = {
    GITHUB: "https://github.com/Angelisyn",

    LINKEDIN: "",

    X: "",

    YOUTUBE: "",
} as const;

export const API = {
    BASE_URL: process.env.NEXT_PUBLIC_API_URL ?? "",

    TIMEOUT: 30000,
} as const;

export const APP = {
    MAX_WIDTH: "1440px",

    HEADER_HEIGHT: 72,

    FOOTER_HEIGHT: 420,
} as const;

export const ANIMATION = {
    FAST: 0.2,

    NORMAL: 0.35,

    SLOW: 0.6,
} as const;