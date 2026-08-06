/**
 * -----------------------------------------------------------------------------
 * Angelisyn
 * Navigation Dataset
 * -----------------------------------------------------------------------------
 *
 * Structured navigation data used by:
 *
 * - Navbar
 * - Footer
 * - Mobile Navigation
 * - Sitemap
 * - Breadcrumbs (future)
 *
 * -----------------------------------------------------------------------------
 */

export type NavigationGroup =
    | "main"
    | "company"
    | "resources"
    | "security"
    | "legal";

export interface NavigationLink {
    id: number;

    label: string;

    description: string;

    href: string;

    group: NavigationGroup;

    external: boolean;

    disabled: boolean;
}

export const navigation: readonly NavigationLink[] = [
    /* ------------------------------------------------------------------------ */
    /* Main                                                                      */
    /* ------------------------------------------------------------------------ */

    {
        id: 1,

        label: "Platform",

        description: "Discover the Angelisyn cybersecurity platform.",

        href: "/platform",

        group: "main",

        external: false,

        disabled: false,
    },

    {
        id: 2,

        label: "Features",

        description: "Explore platform capabilities.",

        href: "/features",

        group: "main",

        external: false,

        disabled: false,
    },

    {
        id: 3,

        label: "Roadmap",

        description: "Follow platform development.",

        href: "/roadmap",

        group: "main",

        external: false,

        disabled: false,
    },

    {
        id: 4,

        label: "Security",

        description: "Security practices and policies.",

        href: "/security",

        group: "main",

        external: false,

        disabled: false,
    },

    /* ------------------------------------------------------------------------ */
    /* Company                                                                   */
    /* ------------------------------------------------------------------------ */

    {
        id: 5,

        label: "Company",

        description: "About Angelisyn.",

        href: "/company",

        group: "company",

        external: false,

        disabled: false,
    },

    {
        id: 6,

        label: "Contact",

        description: "Get in touch with us.",

        href: "/contact",

        group: "company",

        external: false,

        disabled: false,
    },

    {
        id: 7,

        label: "Careers",

        description: "Career opportunities.",

        href: "/careers",

        group: "company",

        external: false,

        disabled: false,
    },

    {
        id: 8,

        label: "Press",

        description: "Media and press resources.",

        href: "/press",

        group: "company",

        external: false,

        disabled: false,
    },

    /* ------------------------------------------------------------------------ */
    /* Resources                                                                 */
    /* ------------------------------------------------------------------------ */

    {
        id: 9,

        label: "Blog",

        description: "Engineering and product articles.",

        href: "/blog",

        group: "resources",

        external: false,

        disabled: false,
    },

    {
        id: 10,

        label: "FAQ",

        description: "Frequently asked questions.",

        href: "/faq",

        group: "resources",

        external: false,

        disabled: false,
    },

    {
        id: 11,

        label: "Status",

        description: "Platform status.",

        href: "/status",

        group: "resources",

        external: false,

        disabled: false,
    },

    /* ------------------------------------------------------------------------ */
    /* Security                                                                  */
    /* ------------------------------------------------------------------------ */

    {
        id: 12,

        label: "Responsible Disclosure",

        description: "Report security vulnerabilities responsibly.",

        href: "/legal/responsible-disclosure",

        group: "security",

        external: false,

        disabled: false,
    },

    {
        id: 13,

        label: "Security Policy",

        description: "Security practices and commitments.",

        href: "/legal/security-policy",

        group: "security",

        external: false,

        disabled: false,
    },

    /* ------------------------------------------------------------------------ */
    /* Legal                                                                     */
    /* ------------------------------------------------------------------------ */

    {
        id: 14,

        label: "Privacy Policy",

        description: "Privacy practices.",

        href: "/legal/privacy-policy",

        group: "legal",

        external: false,

        disabled: false,
    },

    {
        id: 15,

        label: "Terms of Service",

        description: "Terms governing use of the website.",

        href: "/legal/terms-of-service",

        group: "legal",

        external: false,

        disabled: false,
    },

    {
        id: 16,

        label: "Cookie Policy",

        description: "Cookie usage information.",

        href: "/legal/cookie-policy",

        group: "legal",

        external: false,

        disabled: false,
    },

    {
        id: 17,

        label: "Trademark",

        description: "Trademark information.",

        href: "/legal/trademark",

        group: "legal",

        external: false,

        disabled: false,
    },
] as const;

/* -------------------------------------------------------------------------- */
/* Helpers                                                                     */
/* -------------------------------------------------------------------------- */

export const mainNavigation = navigation.filter(
    (item) => item.group === "main"
);

export const companyNavigation = navigation.filter(
    (item) => item.group === "company"
);

export const resourcesNavigation = navigation.filter(
    (item) => item.group === "resources"
);

export const securityNavigation = navigation.filter(
    (item) => item.group === "security"
);

export const legalNavigation = navigation.filter(
    (item) => item.group === "legal"
);

export default navigation;