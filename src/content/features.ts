/**
 * -----------------------------------------------------------------------------
 * Angelisyn
 * Features Page Content
 * -----------------------------------------------------------------------------
 *
 * Centralized content for the Features page.
 * All marketing copy should be managed here.
 * -----------------------------------------------------------------------------
 */

const features = {
    /* ------------------------------------------------------------------------ */
    /* Hero                                                                     */
    /* ------------------------------------------------------------------------ */

    hero: {
        badge: "Platform Features",

        title: "Built for Modern Cybersecurity.",

        subtitle:
            "Angelisyn combines visibility, intelligence, and security engineering into a unified cybersecurity platform designed for modern organizations.",
    },

    /* ------------------------------------------------------------------------ */
    /* Introduction                                                             */
    /* ------------------------------------------------------------------------ */

    introduction: {
        title: "One Platform. Multiple Capabilities.",

        description:
            "The platform is being designed to help security teams discover external assets, understand exposure, monitor infrastructure, and make informed security decisions.",
    },

    /* ------------------------------------------------------------------------ */
    /* Core Features                                                            */
    /* ------------------------------------------------------------------------ */

    sections: [
        {
            title: "Attack Surface Discovery",

            description:
                "Discover internet-facing infrastructure, services, and publicly accessible assets from a centralized platform.",

            available: false,
        },

        {
            title: "Network Intelligence",

            description:
                "Collect and organize network intelligence to improve infrastructure awareness and operational visibility.",

            available: false,
        },

        {
            title: "Asset Inventory",

            description:
                "Maintain a structured inventory of digital assets across environments and projects.",

            available: false,
        },

        {
            title: "Port Scanning",

            description:
                "Safely identify open network services to support visibility and authorized security assessments.",

            available: false,
        },

        {
            title: "Infrastructure Monitoring",

            description:
                "Track infrastructure changes over time to help identify unexpected exposure and operational drift.",

            available: false,
        },

        {
            title: "Security Reports",

            description:
                "Generate clear, structured reports that summarize platform findings and infrastructure visibility.",

            available: false,
        },

        {
            title: "Project Management",

            description:
                "Organize assets, discoveries, and security activities into dedicated projects.",

            available: false,
        },

        {
            title: "Team Collaboration",

            description:
                "Support collaboration between authorized team members through shared workspaces and role-based access.",

            available: false,
        },

        {
            title: "Developer API",

            description:
                "Future API support will enable secure integrations with internal tools and automation workflows.",

            available: false,
        },
    ],

    /* ------------------------------------------------------------------------ */
    /* Design Philosophy                                                        */
    /* ------------------------------------------------------------------------ */

    philosophy: {
        title: "Designed Around Simplicity",

        description:
            "Cybersecurity software should help teams focus on decisions—not unnecessary complexity. Angelisyn emphasizes clarity, performance, accessibility, and thoughtful user experience.",
    },

    /* ------------------------------------------------------------------------ */
    /* Development Status                                                       */
    /* ------------------------------------------------------------------------ */

    status: {
        title: "Actively Under Development",

        description:
            "New capabilities are continuously being designed and implemented. Feature availability will expand throughout the public roadmap.",
    },

    /* ------------------------------------------------------------------------ */
    /* CTA                                                                      */
    /* ------------------------------------------------------------------------ */

    cta: {
        title: "See What's Coming Next",

        description:
            "Explore the roadmap to follow upcoming platform capabilities and development milestones.",

        button: {
            label: "View Roadmap",

            href: "/roadmap",
        },
    },
} as const;

export default features;