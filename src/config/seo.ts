import company from "./company";
import type { SEOConfig } from "@/types/seo";

export const seo: SEOConfig = {
    title: company.name,

    titleTemplate: `%s | ${company.name}`,

    description: company.description,

    keywords: [
        "Cybersecurity",
        "Attack Surface Management",
        "Attack Surface Discovery",
        "Network Intelligence",
        "Security Engineering",
        "Port Scanner",
        "Infrastructure Security",
        "Asset Discovery",
        "Threat Exposure",
        "Digital Footprint",
    ],

    author: company.name,

    creator: company.name,

    publisher: company.name,

    robots: {
        index: true,
        follow: true,
    },

    openGraph: {
        type: "website",
        locale: "en_US",
        image: "/opengraph.png",
    },

    twitter: {
        card: "summary_large_image",
        image: "/opengraph.png",
    },
};

export default seo;