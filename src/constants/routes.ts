// src/constants/routes.ts

export interface RouteDefinition {
    readonly name: string;
    readonly path: string;
    readonly protected: boolean;
    readonly indexable: boolean;
}

export const ROUTES = {
    HOME: "/",
    BLOG: "/blog",
    BLOG_POST: "/blog/[slug]",
    CAREERS: "/careers",
    PRESS: "/press",
    CONTACT: "/contact",
    ABOUT: "/about",
    ROADMAP: "/roadmap",
    SECURITY: "/security",
    STATUS: "/status",
    FAQ: "/faq",

    PRIVACY: "/privacy",
    TERMS: "/terms",
    COOKIES: "/cookies",

    CHANGELOG: "/changelog",

    SITEMAP: "/sitemap.xml",
    ROBOTS: "/robots.txt",

    NOT_FOUND: "/404",
} as const;

export const APP_ROUTES: readonly RouteDefinition[] = [
    {
        name: "Home",
        path: ROUTES.HOME,
        protected: false,
        indexable: true,
    },
    {
        name: "Blog",
        path: ROUTES.BLOG,
        protected: false,
        indexable: true,
    },
    {
        name: "Careers",
        path: ROUTES.CAREERS,
        protected: false,
        indexable: true,
    },
    {
        name: "Press",
        path: ROUTES.PRESS,
        protected: false,
        indexable: true,
    },
    {
        name: "Contact",
        path: ROUTES.CONTACT,
        protected: false,
        indexable: true,
    },
    {
        name: "About",
        path: ROUTES.ABOUT,
        protected: false,
        indexable: true,
    },
    {
        name: "Roadmap",
        path: ROUTES.ROADMAP,
        protected: false,
        indexable: true,
    },
    {
        name: "Security",
        path: ROUTES.SECURITY,
        protected: false,
        indexable: true,
    },
    {
        name: "Status",
        path: ROUTES.STATUS,
        protected: false,
        indexable: true,
    },
    {
        name: "FAQ",
        path: ROUTES.FAQ,
        protected: false,
        indexable: true,
    },
    {
        name: "Privacy Policy",
        path: ROUTES.PRIVACY,
        protected: false,
        indexable: true,
    },
    {
        name: "Terms of Service",
        path: ROUTES.TERMS,
        protected: false,
        indexable: true,
    },
    {
        name: "Cookie Policy",
        path: ROUTES.COOKIES,
        protected: false,
        indexable: true,
    },
    {
        name: "Changelog",
        path: ROUTES.CHANGELOG,
        protected: false,
        indexable: true,
    },
] as const;

export const API_ROUTES = {
    CONTACT: "/api/contact",
    NEWSLETTER: "/api/newsletter",
    HEALTH: "/api/health",
} as const;

export const EXTERNAL_ROUTES = {
    GITHUB: "https://github.com/Angelisyn",
    LINKEDIN: "https://linkedin.com/company/angelisyn",
    X: "https://x.com/angelisyn",
} as const;

export type RouteKey = keyof typeof ROUTES;
export type RoutePath = (typeof ROUTES)[RouteKey];

export type ApiRouteKey = keyof typeof API_ROUTES;
export type ApiRoutePath = (typeof API_ROUTES)[ApiRouteKey];

export type ExternalRouteKey = keyof typeof EXTERNAL_ROUTES;
export type ExternalRoutePath =
    (typeof EXTERNAL_ROUTES)[ExternalRouteKey];