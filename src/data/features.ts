/**
 * -----------------------------------------------------------------------------
 * Angelisyn
 * Platform Features
 * -----------------------------------------------------------------------------
 */

export interface Feature {
    id: number;

    title: string;

    description: string;

    icon: string;

    category:
    | "Discovery"
    | "Intelligence"
    | "Monitoring"
    | "Platform";

    available: boolean;
}

export const features: readonly Feature[] = [
    {
        id: 1,

        title: "Attack Surface Discovery",

        description:
            "Discover internet-facing infrastructure and external assets.",

        icon: "Radar",

        category: "Discovery",

        available: false,
    },

    {
        id: 2,

        title: "Asset Inventory",

        description:
            "Maintain an organized inventory of discovered assets.",

        icon: "Database",

        category: "Discovery",

        available: false,
    },

    {
        id: 3,

        title: "Network Intelligence",

        description:
            "Understand infrastructure through collected intelligence.",

        icon: "Network",

        category: "Intelligence",

        available: false,
    },

    {
        id: 4,

        title: "Port Scanner",

        description:
            "View exposed network services for authorized assets.",

        icon: "ScanSearch",

        category: "Monitoring",

        available: false,
    },

    {
        id: 5,

        title: "Infrastructure Monitoring",

        description:
            "Track changes across external infrastructure over time.",

        icon: "Activity",

        category: "Monitoring",

        available: false,
    },

    {
        id: 6,

        title: "Security Reports",

        description:
            "Generate structured reports for visibility and analysis.",

        icon: "FileText",

        category: "Platform",

        available: false,
    },

    {
        id: 7,

        title: "Projects",

        description:
            "Organize assets and activities into dedicated workspaces.",

        icon: "Folder",

        category: "Platform",

        available: false,
    },

    {
        id: 8,

        title: "Developer API",

        description:
            "Integrate Angelisyn into existing workflows and automation.",

        icon: "Code2",

        category: "Platform",

        available: false,
    },

    {
        id: 9,

        title: "Team Collaboration",

        description:
            "Collaborate securely across authorized team members.",

        icon: "Users",

        category: "Platform",

        available: false,
    },
];

export default features;