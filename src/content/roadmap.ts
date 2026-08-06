/**
 * -----------------------------------------------------------------------------
 * Angelisyn
 * Roadmap Content
 * -----------------------------------------------------------------------------
 *
 * Centralized roadmap configuration for the marketing website.
 * Components should render this data instead of hardcoding milestones.
 * -----------------------------------------------------------------------------
 */

const roadmap = {
    /* ------------------------------------------------------------------------ */
    /* Hero                                                                     */
    /* ------------------------------------------------------------------------ */

    hero: {
        badge: "Product Roadmap",

        title: "Building Angelisyn in Public.",

        subtitle:
            "Follow the evolution of Angelisyn as we continue designing and developing a modern cybersecurity platform focused on visibility, intelligence, and secure engineering.",
    },

    /* ------------------------------------------------------------------------ */
    /* Introduction                                                             */
    /* ------------------------------------------------------------------------ */

    introduction: {
        title: "A Structured Development Journey",

        description:
            "Every milestone represents meaningful progress toward delivering a secure, reliable, and scalable cybersecurity platform.",
    },

    /* ------------------------------------------------------------------------ */
    /* Timeline                                                                  */
    /* ------------------------------------------------------------------------ */

    timeline: [
        {
            quarter: "Foundation",

            status: "completed",

            items: [
                "Brand Identity",

                "Architecture Planning",

                "Website Foundation",

                "Platform Planning",

                "Repository Structure",
            ],
        },

        {
            quarter: "Core Platform",

            status: "in-progress",

            items: [
                "Authentication",

                "Dashboard",

                "Projects",

                "Asset Management",

                "Platform Infrastructure",
            ],
        },

        {
            quarter: "Security Tools",

            status: "planned",

            items: [
                "Port Scanner",

                "Network Intelligence",

                "Asset Discovery",

                "Infrastructure Visibility",

                "Reporting",
            ],
        },

        {
            quarter: "Expansion",

            status: "planned",

            items: [
                "Public API",

                "Team Collaboration",

                "Developer Integrations",

                "Automation",

                "Notifications",
            ],
        },

        {
            quarter: "Enterprise",

            status: "planned",

            items: [
                "Advanced Reporting",

                "Organization Management",

                "Enterprise Security",

                "Compliance",

                "Scalability Improvements",
            ],
        },
    ],

    /* ------------------------------------------------------------------------ */
    /* Philosophy                                                               */
    /* ------------------------------------------------------------------------ */

    philosophy: {
        title: "Quality Over Speed",

        description:
            "Every feature is designed with security, maintainability, accessibility, and long-term reliability in mind before release.",
    },

    /* ------------------------------------------------------------------------ */
    /* Disclaimer                                                               */
    /* ------------------------------------------------------------------------ */

    disclaimer: {
        title: "Roadmap Notice",

        description:
            "The roadmap represents current development intentions. Features, priorities, and timelines may evolve as the platform grows.",
    },

    /* ------------------------------------------------------------------------ */
    /* CTA                                                                      */
    /* ------------------------------------------------------------------------ */

    cta: {
        title: "Follow the Journey",

        description:
            "Stay informed as Angelisyn continues to evolve into a comprehensive cybersecurity platform.",

        primaryButton: {
            label: "Explore Features",

            href: "/features",
        },

        secondaryButton: {
            label: "Contact Us",

            href: "/contact",
        },
    },
} as const;

export default roadmap;