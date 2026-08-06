// src/constants/features.ts

export type FeatureCategory =
    | "security"
    | "platform"
    | "collaboration"
    | "monitoring"
    | "compliance"
    | "automation";

export type FeatureStatus =
    | "available"
    | "beta"
    | "preview"
    | "planned";

export interface Feature {
    readonly id: string;
    readonly title: string;
    readonly description: string;
    readonly category: FeatureCategory;
    readonly status: FeatureStatus;
    readonly highlight: boolean;
    readonly icon: string;
}

export const PLATFORM_FEATURES: readonly Feature[] = [
    {
        id: "security-first",
        title: "Security First",
        description:
            "Designed with secure-by-default principles, strong authentication, and modern security practices.",
        category: "security",
        status: "available",
        highlight: true,
        icon: "Shield",
    },
    {
        id: "cloud-native",
        title: "Cloud Native",
        description:
            "Built for modern cloud infrastructure with scalability, resilience, and high availability.",
        category: "platform",
        status: "available",
        highlight: true,
        icon: "Cloud",
    },
    {
        id: "real-time-monitoring",
        title: "Real-Time Monitoring",
        description:
            "Continuously monitor system activity, infrastructure health, and operational events.",
        category: "monitoring",
        status: "planned",
        highlight: true,
        icon: "Activity",
    },
    {
        id: "automation",
        title: "Security Automation",
        description:
            "Automate repetitive security workflows to improve operational efficiency.",
        category: "automation",
        status: "planned",
        highlight: false,
        icon: "Bot",
    },
    {
        id: "collaboration",
        title: "Team Collaboration",
        description:
            "Enable secure collaboration across teams with role-based access controls.",
        category: "collaboration",
        status: "planned",
        highlight: false,
        icon: "Users",
    },
    {
        id: "compliance",
        title: "Compliance Ready",
        description:
            "Designed to support enterprise governance and regulatory compliance initiatives.",
        category: "compliance",
        status: "planned",
        highlight: false,
        icon: "BadgeCheck",
    },
] as const;

export const FEATURE_CATEGORIES = [
    "security",
    "platform",
    "collaboration",
    "monitoring",
    "compliance",
    "automation",
] as const;

export const FEATURE_STATUS = {
    available: {
        label: "Available",
        color: "emerald",
    },
    beta: {
        label: "Beta",
        color: "cyan",
    },
    preview: {
        label: "Preview",
        color: "amber",
    },
    planned: {
        label: "Planned",
        color: "slate",
    },
} as const;

export const FEATURE_HIGHLIGHTS = PLATFORM_FEATURES.filter(
    (feature) => feature.highlight,
);

export type PlatformFeatures = typeof PLATFORM_FEATURES;
export type FeatureHighlights = typeof FEATURE_HIGHLIGHTS;
export type FeatureStatusMap = typeof FEATURE_STATUS;