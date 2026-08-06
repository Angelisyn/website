/**
 * -----------------------------------------------------------------------------
 * Angelisyn
 * Frequently Asked Questions
 * -----------------------------------------------------------------------------
 *
 * Centralized FAQ content.
 * -----------------------------------------------------------------------------
 */

const faq = {
    /* ------------------------------------------------------------------------ */
    /* Hero                                                                     */
    /* ------------------------------------------------------------------------ */

    hero: {
        badge: "Frequently Asked Questions",

        title: "Questions About Angelisyn.",

        subtitle:
            "Everything you need to know about the Angelisyn platform, development, security, and future plans.",
    },

    /* ------------------------------------------------------------------------ */
    /* Questions                                                                 */
    /* ------------------------------------------------------------------------ */

    questions: [
        {
            category: "General",

            question: "What is Angelisyn?",

            answer:
                "Angelisyn is a modern cybersecurity platform focused on attack surface discovery, network intelligence, infrastructure visibility, and security engineering.",
        },

        {
            category: "General",

            question: "Who is Angelisyn built for?",

            answer:
                "The platform is designed for security professionals, security engineers, defenders, organizations, researchers, and technical teams that need visibility into internet-facing infrastructure.",
        },

        {
            category: "Development",

            question: "Is Angelisyn available today?",

            answer:
                "The platform is currently under active development. The public website provides information about the project while new platform capabilities continue to be implemented.",
        },

        {
            category: "Development",

            question: "Where can I follow development?",

            answer:
                "Development progress is published through the roadmap, release updates, and official Angelisyn communication channels.",
        },

        {
            category: "Security",

            question: "Is security a priority?",

            answer:
                "Yes. Security is considered throughout planning, development, deployment, and maintenance. Responsible disclosure and secure engineering practices are fundamental principles of the project.",
        },

        {
            category: "Security",

            question: "How can I report a security issue?",

            answer:
                "Security reports should be submitted through the Responsible Disclosure process using the official security contact information published on the website.",
        },

        {
            category: "Platform",

            question: "What capabilities are planned?",

            answer:
                "Planned capabilities include attack surface discovery, network intelligence, asset inventory, infrastructure visibility, reporting, collaboration features, and additional security tooling as development progresses.",
        },

        {
            category: "Platform",

            question: "Will Angelisyn continue expanding after launch?",

            answer:
                "Yes. The platform is designed to grow through continuous improvements, new capabilities, and long-term development.",
        },

        {
            category: "Company",

            question: "Where is Angelisyn located?",

            answer:
                "Company information is available on the Company page of the website.",
        },

        {
            category: "Company",

            question: "How can I contact Angelisyn?",

            answer:
                "General enquiries, partnerships, press requests, and security-related enquiries can be submitted through the Contact page.",
        },
    ],

    /* ------------------------------------------------------------------------ */
    /* CTA                                                                       */
    /* ------------------------------------------------------------------------ */

    cta: {
        title: "Still Have Questions?",

        description:
            "If your question isn't answered here, our team will be happy to help.",

        button: {
            label: "Contact Us",

            href: "/contact",
        },
    },
} as const;

export default faq;