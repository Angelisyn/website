import type { FooterSection } from "@/types/footer";

export const footer: FooterSection[] = [
    {
        title: "Platform",
        links: [
            {
                label: "Platform",
                href: "/platform",
            },
            {
                label: "Features",
                href: "/features",
            },
            {
                label: "Roadmap",
                href: "/roadmap",
            },
        ],
    },

    {
        title: "Company",
        links: [
            {
                label: "About",
                href: "/company",
            },
            {
                label: "Contact",
                href: "/contact",
            },
            {
                label: "Careers",
                href: "/careers",
            },
            {
                label: "Press",
                href: "/press",
            },
        ],
    },

    {
        title: "Resources",
        links: [
            {
                label: "Blog",
                href: "/blog",
            },
            {
                label: "FAQ",
                href: "/faq",
            },
            {
                label: "Status",
                href: "/status",
            },
        ],
    },

    {
        title: "Security",
        links: [
            {
                label: "Security",
                href: "/security",
            },
            {
                label: "Responsible Disclosure",
                href: "/legal/responsible-disclosure",
            },
            {
                label: "Security Policy",
                href: "/legal/security-policy",
            },
        ],
    },

    {
        title: "Legal",
        links: [
            {
                label: "Privacy Policy",
                href: "/legal/privacy-policy",
            },
            {
                label: "Terms of Service",
                href: "/legal/terms-of-service",
            },
            {
                label: "Cookie Policy",
                href: "/legal/cookie-policy",
            },
            {
                label: "Trademark",
                href: "/legal/trademark",
            },
        ],
    },
];

export default footer;