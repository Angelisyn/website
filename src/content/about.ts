/**
 * -----------------------------------------------------------------------------
 * Angelisyn
 * About Page Content
 * -----------------------------------------------------------------------------
 *
 * Centralized content for the About page.
 * Components should import from this file instead of hardcoding text.
 * -----------------------------------------------------------------------------
 */

const about = {
    /* ------------------------------------------------------------------------ */
    /* Hero                                                                     */
    /* ------------------------------------------------------------------------ */

    hero: {
        badge: "About Angelisyn",

        title: "Building the Next Generation of Cybersecurity Software.",

        subtitle:
            "Angelisyn is a cybersecurity company focused on creating modern software that improves visibility, security, and understanding of digital infrastructure.",
    },

    /* ------------------------------------------------------------------------ */
    /* Story                                                                    */
    /* ------------------------------------------------------------------------ */

    story: {
        title: "Our Story",

        paragraphs: [
            "Modern organizations depend on internet-facing infrastructure that changes constantly. Understanding that infrastructure has become increasingly difficult.",

            "Angelisyn was created with a simple objective: provide clear visibility into external attack surfaces through a modern, intuitive, and scalable platform.",

            "Our focus is to help security teams spend less time collecting information and more time improving security posture.",
        ],
    },

    /* ------------------------------------------------------------------------ */
    /* Mission                                                                  */
    /* ------------------------------------------------------------------------ */

    mission: {
        title: "Mission",

        description:
            "Empower organizations to discover, understand, monitor, and secure their digital infrastructure through modern cybersecurity tooling.",
    },

    /* ------------------------------------------------------------------------ */
    /* Vision                                                                   */
    /* ------------------------------------------------------------------------ */

    vision: {
        title: "Vision",

        description:
            "To build one of the world's most trusted cybersecurity platforms by delivering reliable, secure, and thoughtfully engineered software.",
    },

    /* ------------------------------------------------------------------------ */
    /* Values                                                                   */
    /* ------------------------------------------------------------------------ */

    values: {
        title: "Core Principles",

        items: [
            {
                title: "Security First",

                description:
                    "Security considerations guide every engineering decision from design through deployment.",
            },

            {
                title: "Engineering Excellence",

                description:
                    "We prioritize quality, maintainability, and performance over shortcuts.",
            },

            {
                title: "Transparency",

                description:
                    "We believe in clear communication, responsible disclosure, and open development practices whenever appropriate.",
            },

            {
                title: "Continuous Improvement",

                description:
                    "Technology evolves quickly, and so should security tooling.",
            },
        ],
    },

    /* ------------------------------------------------------------------------ */
    /* Development                                                              */
    /* ------------------------------------------------------------------------ */

    development: {
        title: "Current Development",

        description:
            "The Angelisyn platform is actively under development. New capabilities are being designed and implemented through a structured roadmap focused on security, reliability, and usability.",
    },

    /* ------------------------------------------------------------------------ */
    /* Future                                                                    */
    /* ------------------------------------------------------------------------ */

    future: {
        title: "Looking Ahead",

        description:
            "As the platform evolves, Angelisyn will continue expanding its capabilities while maintaining a strong emphasis on secure engineering, thoughtful design, and operational excellence.",
    },

    /* ------------------------------------------------------------------------ */
    /* CTA                                                                       */
    /* ------------------------------------------------------------------------ */

    cta: {
        title: "Follow Our Progress",

        description:
            "Explore our roadmap to see what we're building next.",

        button: {
            label: "View Roadmap",

            href: "/roadmap",
        },
    },
} as const;

export default about;