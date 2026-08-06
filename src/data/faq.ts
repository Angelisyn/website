/**
 * -----------------------------------------------------------------------------
 * Angelisyn
 * FAQ Dataset
 * -----------------------------------------------------------------------------
 */

export interface FAQ {
    id: number;

    category:
    | "General"
    | "Platform"
    | "Security"
    | "Development"
    | "Company";

    question: string;

    answer: string;
}

export const faq: readonly FAQ[] = [
    {
        id: 1,

        category: "General",

        question: "What is Angelisyn?",

        answer:
            "Angelisyn is a modern cybersecurity platform focused on attack surface discovery, network intelligence, infrastructure visibility, and security engineering.",
    },

    {
        id: 2,

        category: "General",

        question: "Who is Angelisyn designed for?",

        answer:
            "The platform is designed for security professionals, security engineers, organizations, researchers, and technical teams seeking better visibility into digital infrastructure.",
    },

    {
        id: 3,

        category: "Development",

        question: "Is Angelisyn currently available?",

        answer:
            "The platform is under active development. The public website shares project information, roadmap updates, and company details while core platform features continue to be built.",
    },

    {
        id: 4,

        category: "Development",

        question: "How can I follow development?",

        answer:
            "Development progress is published through the public roadmap, release notes, and official Angelisyn communication channels.",
    },

    {
        id: 5,

        category: "Platform",

        question: "Which features are planned?",

        answer:
            "The roadmap includes attack surface discovery, network intelligence, asset inventory, port scanning, infrastructure monitoring, reporting, APIs, and collaboration capabilities.",
    },

    {
        id: 6,

        category: "Platform",

        question: "Will more features be added after launch?",

        answer:
            "Yes. Angelisyn is designed as a continuously evolving platform with regular improvements and new capabilities.",
    },

    {
        id: 7,

        category: "Security",

        question: "Is security a core priority?",

        answer:
            "Yes. Security is considered throughout planning, software architecture, development, deployment, and ongoing maintenance.",
    },

    {
        id: 8,

        category: "Security",

        question: "How do I report a security issue?",

        answer:
            "Please follow the Responsible Disclosure Policy available on the website and use the published security contact information.",
    },

    {
        id: 9,

        category: "Company",

        question: "Where can I contact Angelisyn?",

        answer:
            "General enquiries, partnerships, legal enquiries, and security reports can all be submitted through the Contact page.",
    },

    {
        id: 10,

        category: "Company",

        question: "Where can I learn more about the company?",

        answer:
            "Visit the Company page to learn about Angelisyn's mission, vision, engineering principles, and long-term goals.",
    },
] as const;

/* -------------------------------------------------------------------------- */
/* Categories                                                                  */
/* -------------------------------------------------------------------------- */

export const faqCategories = [
    "General",
    "Platform",
    "Security",
    "Development",
    "Company",
] as const;

/* -------------------------------------------------------------------------- */
/* Helpers                                                                     */
/* -------------------------------------------------------------------------- */

export function getFAQByCategory(category: FAQ["category"]) {
    return faq.filter((item) => item.category === category);
}

export function getFAQById(id: number) {
    return faq.find((item) => item.id === id);
}

export function searchFAQ(query: string) {
    const search = query.toLowerCase();

    return faq.filter(
        ({ question, answer }) =>
            question.toLowerCase().includes(search) ||
            answer.toLowerCase().includes(search)
    );
}

export default faq;