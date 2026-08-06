/**
 * Angelisyn
 * Global Company Configuration
 *
 * This file is the single source of truth for all
 * company information used throughout the website.
 */
import type { Company } from "@/types"

export const company = {
    // Basic Information
    name: "Angelisyn",

    shortName: "Angelisyn",

    legalName: "Angelisyn",

    tagline: "Attack Surface Discovery. Network Intelligence. Security Engineering.",

    description:
        "Angelisyn is a modern cybersecurity platform focused on attack surface discovery, network intelligence, and security engineering.",

    mission:
        "Empowering organizations to discover, understand, and secure their digital infrastructure.",

    vision:
        "Build one of the world's most trusted cybersecurity platforms.",

    founded: 2026,

    version: "1.0.0",

    status: "In Development",

    // URLs
    url: "https://angelisyn.com",

    appUrl: "https://app.angelisyn.com",

    docsUrl: "https://docs.angelisyn.com",

    statusUrl: "https://status.angelisyn.com",

    githubUrl: "https://github.com/Angelisyn",

    // Contact
    email: "contact@angelisyn.com",

    supportEmail: "support@angelisyn.com",

    securityEmail: "security@angelisyn.com",

    pressEmail: "press@angelisyn.com",

    legalEmail: "legal@angelisyn.com",

    // Company
    copyright: `© ${new Date().getFullYear()} Angelisyn. All rights reserved.`,

    location: "India",

    timezone: "Asia/Kolkata",
} as const

export type Company = typeof company