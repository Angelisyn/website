// src/constants/company.ts

export interface CompanyAddress {
    readonly street: string;
    readonly city: string;
    readonly state: string;
    readonly postalCode: string;
    readonly country: string;
}

export interface CompanyContact {
    readonly email: string;
    readonly support: string;
    readonly security: string;
    readonly careers: string;
    readonly press: string;
    readonly sales: string;
}

export interface CompanyProfile {
    readonly name: string;
    readonly legalName: string;
    readonly tagline: string;
    readonly description: string;
    readonly founded: number;
    readonly headquarters: CompanyAddress;
    readonly contact: CompanyContact;
}

export const COMPANY: CompanyProfile = {
    name: "Angelisyn",

    legalName: "Angelisyn",

    tagline: "Building Secure Digital Infrastructure.",

    description:
        "Angelisyn is a cybersecurity company focused on delivering secure, modern, and enterprise-grade software solutions that prioritize privacy, resilience, performance, and trust.",

    founded: 2026,

    headquarters: {
        street: "",
        city: "",
        state: "",
        postalCode: "",
        country: "India",
    },

    contact: {
        email: "contact@angelisyn.com",
        support: "support@angelisyn.com",
        security: "security@angelisyn.com",
        careers: "careers@angelisyn.com",
        press: "press@angelisyn.com",
        sales: "sales@angelisyn.com",
    },
} as const;

export const COMPANY_VALUES = [
    "Security First",
    "Privacy by Design",
    "Transparency",
    "Reliability",
    "Innovation",
    "Accessibility",
] as const;

export const COMPANY_PRINCIPLES = [
    "Build secure software by default.",
    "Protect user privacy at every layer.",
    "Deliver enterprise-quality engineering.",
    "Maintain transparency and trust.",
    "Continuously improve through innovation.",
] as const;

export const COMPANY_STATS = {
    uptimeTarget: "99.9%",
    securityPriority: "Critical",
    architecture: "Cloud Native",
    deployment: "Global Edge",
} as const;

export type Company = typeof COMPANY;
export type CompanyValues = typeof COMPANY_VALUES;
export type CompanyPrinciples = typeof COMPANY_PRINCIPLES;
export type CompanyStats = typeof COMPANY_STATS;