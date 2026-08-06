import { company } from "./company"

export const seo = {
    title: company.name,

    titleTemplate: `%s | ${company.name}`,

    description: company.description,

    keywords: [
        "Cybersecurity",
        "Attack Surface Management",
        "Attack Surface Discovery",
        "Network Intelligence",
        "Security Platform",
        "Port Scanner",
        "Vulnerability Management",
    ],

    author: company.name,

    creator: company.name,

    robots: {
        index: true,
        follow: true,
    },
}