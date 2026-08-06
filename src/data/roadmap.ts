/**
 * -----------------------------------------------------------------------------
 * Angelisyn
 * Product Roadmap Data
 * -----------------------------------------------------------------------------
 */

export type RoadmapStatus =
    | "completed"
    | "in-progress"
    | "planned";

export interface RoadmapItem {
    id: number;

    title: string;

    description: string;

    status: RoadmapStatus;

    progress: number;

    quarter: string;

    category:
    | "Foundation"
    | "Core"
    | "Security"
    | "Platform"
    | "Enterprise";

    milestones: readonly string[];
}

export const roadmap: readonly RoadmapItem[] = [
    {
        id: 1,

        title: "Foundation",

        description:
            "Establish the technical and organizational foundation of Angelisyn.",

        status: "completed",

        progress: 100,

        quarter: "Phase 1",

        category: "Foundation",

        milestones: [
            "Brand Identity",
            "GitHub Organization",
            "Website Architecture",
            "Platform Architecture",
            "Project Planning",
            "Repository Setup",
            "Design System",
        ],
    },

    {
        id: 2,

        title: "Core Platform",

        description:
            "Develop the core platform infrastructure and user experience.",

        status: "in-progress",

        progress: 65,

        quarter: "Phase 2",

        category: "Core",

        milestones: [
            "Authentication",
            "Dashboard",
            "Projects",
            "User Management",
            "Platform Backend",
            "Frontend Foundation",
        ],
    },

    {
        id: 3,

        title: "Security Tools",

        description:
            "Introduce cybersecurity capabilities focused on infrastructure visibility.",

        status: "planned",

        progress: 0,

        quarter: "Phase 3",

        category: "Security",

        milestones: [
            "Port Scanner",
            "Attack Surface Discovery",
            "Network Intelligence",
            "Asset Inventory",
            "Infrastructure Monitoring",
            "Security Reports",
        ],
    },

    {
        id: 4,

        title: "Platform Expansion",

        description:
            "Expand Angelisyn with collaboration and automation capabilities.",

        status: "planned",

        progress: 0,

        quarter: "Phase 4",

        category: "Platform",

        milestones: [
            "REST API",
            "Notifications",
            "Automation",
            "Team Collaboration",
            "Organization Management",
            "Activity Logs",
        ],
    },

    {
        id: 5,

        title: "Enterprise",

        description:
            "Deliver enterprise-grade security, scalability, and compliance capabilities.",

        status: "planned",

        progress: 0,

        quarter: "Phase 5",

        category: "Enterprise",

        milestones: [
            "Advanced Reporting",
            "Enterprise Authentication",
            "Compliance",
            "Audit Logs",
            "High Availability",
            "Performance Optimization",
        ],
    },
];

export default roadmap;

/* -------------------------------------------------------------------------- */
/* Helpers                                                                     */
/* -------------------------------------------------------------------------- */

export const completedRoadmap = roadmap.filter(
    (item) => item.status === "completed"
);

export const inProgressRoadmap = roadmap.filter(
    (item) => item.status === "in-progress"
);

export const plannedRoadmap = roadmap.filter(
    (item) => item.status === "planned"
);

export const totalMilestones = roadmap.reduce(
    (total, item) => total + item.milestones.length,
    0
);

export const completedMilestones = roadmap
    .filter((item) => item.status === "completed")
    .reduce((total, item) => total + item.milestones.length, 0);

export const roadmapProgress = Math.round(
    roadmap.reduce((sum, item) => sum + item.progress, 0) /
    roadmap.length
);