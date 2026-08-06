// src/constants/security.ts

export type SecuritySeverity =
    | "low"
    | "medium"
    | "high"
    | "critical";

export interface SecurityPrinciple {
    readonly title: string;
    readonly description: string;
}

export interface SecurityCommitment {
    readonly id: string;
    readonly title: string;
    readonly description: string;
    readonly priority: SecuritySeverity;
}

export interface SecurityContact {
    readonly email: string;
    readonly pgpKeyUrl: string;
    readonly disclosurePolicy: string;
    readonly responseTarget: string;
}

export const SECURITY_PRINCIPLES: readonly SecurityPrinciple[] = [
    {
        title: "Secure by Design",
        description:
            "Security considerations are integrated into architecture, development, testing, and deployment from the beginning.",
    },
    {
        title: "Privacy by Default",
        description:
            "We minimize data collection and apply privacy-first principles across the platform.",
    },
    {
        title: "Least Privilege",
        description:
            "Systems and services operate with only the permissions necessary to perform their functions.",
    },
    {
        title: "Defense in Depth",
        description:
            "Multiple layers of preventive, detective, and corrective security controls protect the platform.",
    },
    {
        title: "Continuous Improvement",
        description:
            "Security is continuously reviewed, tested, and improved through monitoring and assessment.",
    },
] as const;

export const SECURITY_COMMITMENTS: readonly SecurityCommitment[] = [
    {
        id: "encryption",
        title: "Strong Encryption",
        description:
            "Industry-standard encryption is used to protect data in transit and at rest wherever applicable.",
        priority: "critical",
    },
    {
        id: "authentication",
        title: "Modern Authentication",
        description:
            "Support for strong authentication methods and secure session management.",
        priority: "critical",
    },
    {
        id: "vulnerability-management",
        title: "Vulnerability Management",
        description:
            "Security issues are triaged, prioritized, and remediated through a structured process.",
        priority: "high",
    },
    {
        id: "logging-monitoring",
        title: "Monitoring & Auditing",
        description:
            "Security-relevant events are logged and monitored to support detection and investigation.",
        priority: "high",
    },
    {
        id: "secure-development",
        title: "Secure Development Lifecycle",
        description:
            "Development follows secure coding standards, code review, dependency management, and automated validation.",
        priority: "high",
    },
    {
        id: "business-continuity",
        title: "Resilience",
        description:
            "Infrastructure is designed with availability, redundancy, and recovery objectives in mind.",
        priority: "medium",
    },
] as const;

export const SECURITY_CONTACT: SecurityContact = {
    email: "security@angelisyn.com",
    pgpKeyUrl: "/.well-known/pgp-key.asc",
    disclosurePolicy: "/security/disclosure",
    responseTarget: "Within 72 hours",
} as const;

export const SECURITY_HEADERS = {
    contentSecurityPolicy: true,
    strictTransportSecurity: true,
    xContentTypeOptions: true,
    xFrameOptions: true,
    referrerPolicy: true,
    permissionsPolicy: true,
    crossOriginOpenerPolicy: true,
    crossOriginEmbedderPolicy: true,
    crossOriginResourcePolicy: true,
} as const;

export const SECURITY_CERTIFICATIONS = [
    "OWASP Best Practices",
    "Security by Design",
    "Privacy by Design",
    "Responsible Disclosure",
] as const;

export const SECURITY_RESPONSE_TARGETS = {
    acknowledgement: "24 hours",
    initialAssessment: "72 hours",
    remediationUpdates: "As applicable",
} as const;

export type SecurityPrinciples = typeof SECURITY_PRINCIPLES;
export type SecurityCommitments = typeof SECURITY_COMMITMENTS;
export type SecurityHeaders = typeof SECURITY_HEADERS;
export type SecurityCertifications = typeof SECURITY_CERTIFICATIONS;
export type SecurityResponseTargets = typeof SECURITY_RESPONSE_TARGETS;