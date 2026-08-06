/**
 * -----------------------------------------------------------------------------
 * Angelisyn
 * Homepage Content
 * -----------------------------------------------------------------------------
 *
 * Single source of truth for all homepage copy.
 * Components should import content from this file instead of hardcoding text.
 * -----------------------------------------------------------------------------
 */

const homepage = {
    /* ------------------------------------------------------------------------ */
    /* Hero                                                                     */
    /* ------------------------------------------------------------------------ */

    hero: {
        badge: "Building the Future of Cybersecurity",

        title: "Discover, Understand, and Secure Your Digital Infrastructure.",

        subtitle:
            "Angelisyn is a modern cybersecurity platform built for attack surface discovery, network intelligence, infrastructure visibility, and security engineering.",

        primaryButton: {
            label: "View Platform",

            href: "/platform",
        },

        secondaryButton: {
            label: "View Roadmap",

            href: "/roadmap",
        },
    },

    /* ------------------------------------------------------------------------ */
    /* Announcement                                                             */
    /* ------------------------------------------------------------------------ */

    announcement: {
        enabled: true,

        badge: "Coming Soon",

        title: "The Angelisyn platform is currently under active development.",

        description:
            "We're building a next-generation cybersecurity platform designed to help organizations discover and secure their external attack surface.",
    },

    /* ------------------------------------------------------------------------ */
    /* Overview                                                                 */
    /* ------------------------------------------------------------------------ */

    overview: {
        title: "Modern Cybersecurity Starts with Visibility",

        description:
            "Organizations cannot protect assets they cannot see. Angelisyn provides visibility into internet-facing infrastructure, helping security teams understand exposure and make informed decisions.",
    },

    /* ------------------------------------------------------------------------ */
    /* Platform Preview                                                         */
    /* ------------------------------------------------------------------------ */

    platform: {
        title: "One Platform. Complete Visibility.",

        description:
            "A unified platform for discovering, monitoring, and understanding your organization's external infrastructure.",
    },

    /* ------------------------------------------------------------------------ */
    /* Feature Preview                                                          */
    /* ------------------------------------------------------------------------ */

    features: {
        title: "Built for Security Professionals",

        description:
            "Designed with security engineers, penetration testers, and defenders in mind.",

        button: {
            label: "Explore Features",

            href: "/features",
        },
    },

    /* ------------------------------------------------------------------------ */
    /* Roadmap                                                                  */
    /* ------------------------------------------------------------------------ */

    roadmap: {
        title: "Building in Public",

        description:
            "Follow Angelisyn's development journey and upcoming milestones.",

        button: {
            label: "View Roadmap",

            href: "/roadmap",
        },
    },

    /* ------------------------------------------------------------------------ */
    /* Security                                                                 */
    /* ------------------------------------------------------------------------ */

    security: {
        title: "Security by Design",

        description:
            "Security is integrated into every stage of development through secure engineering practices, modern authentication, responsible disclosure, and continuous improvement.",

        button: {
            label: "Read Security",

            href: "/security",
        },
    },

    /* ------------------------------------------------------------------------ */
    /* Company                                                                  */
    /* ------------------------------------------------------------------------ */

    company: {
        title: "Built with Purpose",

        description:
            "Angelisyn is focused on creating trusted cybersecurity software that helps organizations improve visibility across their digital infrastructure.",

        button: {
            label: "About Angelisyn",

            href: "/company",
        },
    },

    /* ------------------------------------------------------------------------ */
    /* Contact                                                                  */
    /* ------------------------------------------------------------------------ */

    contact: {
        title: "Let's Connect",

        description:
            "Questions, partnerships, feedback, or security-related inquiries—we'd love to hear from you.",

        button: {
            label: "Contact Us",

            href: "/contact",
        },
    },

    /* ------------------------------------------------------------------------ */
    /* Final CTA                                                                */
    /* ------------------------------------------------------------------------ */

    cta: {
        title: "Follow Angelisyn's Journey",

        description:
            "Stay updated as we continue building the next generation of cybersecurity tooling.",

        primaryButton: {
            label: "View Roadmap",

            href: "/roadmap",
        },

        secondaryButton: {
            label: "Contact",

            href: "/contact",
        },
    },
} as const;

export default homepage;