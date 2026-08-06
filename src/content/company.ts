/**
 * -----------------------------------------------------------------------------
 * Angelisyn
 * Company Page Content
 * -----------------------------------------------------------------------------
 *
 * Single source of truth for all company-related content.
 * -----------------------------------------------------------------------------
 */

const company = {
    /* ------------------------------------------------------------------------ */
    /* Hero                                                                     */
    /* ------------------------------------------------------------------------ */

    hero: {
        badge: "Company",

        title: "Building Trusted Cybersecurity Software.",

        subtitle:
            "Angelisyn is a modern cybersecurity company dedicated to developing secure, scalable, and thoughtfully engineered software that helps organizations understand and protect their digital infrastructure.",
    },

    /* ------------------------------------------------------------------------ */
    /* About                                                                     */
    /* ------------------------------------------------------------------------ */

    about: {
        title: "Who We Are",

        description:
            "Angelisyn is focused on delivering cybersecurity products that emphasize visibility, engineering quality, and long-term reliability. Our goal is to simplify complex security challenges through modern software design.",
    },

    /* ------------------------------------------------------------------------ */
    /* Mission                                                                   */
    /* ------------------------------------------------------------------------ */

    mission: {
        title: "Mission",

        description:
            "To empower organizations with accurate infrastructure visibility and modern cybersecurity tooling that supports informed security decisions.",
    },

    /* ------------------------------------------------------------------------ */
    /* Vision                                                                    */
    /* ------------------------------------------------------------------------ */

    vision: {
        title: "Vision",

        description:
            "To become one of the world's most trusted cybersecurity platforms through secure engineering, continuous innovation, and responsible development.",
    },

    /* ------------------------------------------------------------------------ */
    /* Values                                                                    */
    /* ------------------------------------------------------------------------ */

    values: {
        title: "Core Values",

        items: [
            {
                title: "Security",

                description:
                    "Security is considered throughout design, development, deployment, and maintenance.",
            },

            {
                title: "Engineering",

                description:
                    "Quality software is built through maintainable architecture, clean code, and continuous improvement.",
            },

            {
                title: "Transparency",

                description:
                    "We believe in responsible disclosure, clear communication, and openness whenever appropriate.",
            },

            {
                title: "Reliability",

                description:
                    "Software should be dependable, predictable, and designed for long-term use.",
            },

            {
                title: "Innovation",

                description:
                    "We continuously explore better approaches to solving cybersecurity challenges.",
            },

            {
                title: "Accessibility",

                description:
                    "Technology should be usable, understandable, and accessible to everyone.",
            },
        ],
    },

    /* ------------------------------------------------------------------------ */
    /* Principles                                                                */
    /* ------------------------------------------------------------------------ */

    principles: {
        title: "Engineering Principles",

        items: [
            "Security by Design",

            "Privacy First",

            "Performance Matters",

            "Accessibility Built In",

            "Developer Experience",

            "Modern Web Standards",

            "Scalable Architecture",

            "Continuous Improvement",
        ],
    },

    /* ------------------------------------------------------------------------ */
    /* Development                                                               */
    /* ------------------------------------------------------------------------ */

    development: {
        title: "Current Development",

        description:
            "The Angelisyn platform is currently under active development. We are focused on building a robust foundation before introducing advanced platform capabilities.",
    },

    /* ------------------------------------------------------------------------ */
    /* Future                                                                    */
    /* ------------------------------------------------------------------------ */

    future: {
        title: "Looking Forward",

        description:
            "Our long-term objective is to build a comprehensive cybersecurity ecosystem that continues to evolve alongside modern security challenges while maintaining high engineering standards.",
    },

    /* ------------------------------------------------------------------------ */
    /* CTA                                                                       */
    /* ------------------------------------------------------------------------ */

    cta: {
        title: "Follow the Journey",

        description:
            "Explore our roadmap and see how Angelisyn continues to grow.",

        primaryButton: {
            label: "View Roadmap",

            href: "/roadmap",
        },

        secondaryButton: {
            label: "Contact Us",

            href: "/contact",
        },
    },
} as const;

export default company;