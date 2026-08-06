// src/constants/navigation.ts

export interface NavigationItem {
    readonly label: string;
    readonly href: string;
    readonly description?: string;
    readonly external?: boolean;
    readonly disabled?: boolean;
}

export interface NavigationGroup {
    readonly title: string;
    readonly items: readonly NavigationItem[];
}

export const PRIMARY_NAVIGATION: readonly NavigationItem[] = [
    {
        label: "Platform",
        href: "/#platform",
        description: "Explore the Angelisyn platform.",
    },
    {
        label: "Features",
        href: "/#features",
        description: "Discover platform capabilities.",
    },
    {
        label: "Roadmap",
        href: "/#roadmap",
        description: "See what's coming next.",
    },
    {
        label: "Security",
        href: "/#security",
        description: "Learn about our security practices.",
    },
    {
        label: "Company",
        href: "/#company",
        description: "Meet Angelisyn.",
    },
    {
        label: "FAQ",
        href: "/#faq",
        description: "Frequently asked questions.",
    },
    {
        label: "Contact",
        href: "/#contact",
        description: "Get in touch with us.",
    },
] as const;

export const FOOTER_NAVIGATION: readonly NavigationGroup[] = [
    {
        title: "Product",
        items: [
            {
                label: "Platform",
                href: "/#platform",
            },
            {
                label: "Features",
                href: "/#features",
            },
            {
                label: "Roadmap",
                href: "/#roadmap",
            },
            {
                label: "Announcements",
                href: "/blog",
            },
        ],
    },
    {
        title: "Company",
        items: [
            {
                label: "About",
                href: "/#company",
            },
            {
                label: "Careers",
                href: "/careers",
            },
            {
                label: "Press",
                href: "/press",
            },
            {
                label: "Contact",
                href: "/#contact",
            },
        ],
    },
    {
        title: "Resources",
        items: [
            {
                label: "Blog",
                href: "/blog",
            },
            {
                label: "Security",
                href: "/security",
            },
            {
                label: "Documentation",
                href: "/docs",
            },
            {
                label: "Status",
                href: "/status",
            },
        ],
    },
    {
        title: "Legal",
        items: [
            {
                label: "Privacy Policy",
                href: "/privacy",
            },
            {
                label: "Terms of Service",
                href: "/terms",
            },
            {
                label: "Cookie Policy",
                href: "/cookies",
            },
            {
                label: "Responsible Disclosure",
                href: "/security/disclosure",
            },
        ],
    },
] as const;

export const HEADER_ACTIONS = {
    primary: {
        label: "Get Started",
        href: "/contact",
    },
    secondary: {
        label: "GitHub",
        href: "https://github.com/Angelisyn",
        external: true,
    },
} as const;

export const MOBILE_NAVIGATION = PRIMARY_NAVIGATION;

export type PrimaryNavigation = typeof PRIMARY_NAVIGATION;
export type FooterNavigation = typeof FOOTER_NAVIGATION;
export type HeaderActions = typeof HEADER_ACTIONS;