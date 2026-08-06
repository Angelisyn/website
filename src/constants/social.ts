// src/constants/social.ts

export interface SocialLink {
    readonly name: string;
    readonly href: string;
    readonly username: string;
    readonly icon: string;
    readonly external: true;
}

export interface CommunityLink {
    readonly name: string;
    readonly href: string;
    readonly description: string;
    readonly external: true;
}

export const SOCIAL_LINKS = {
    github: {
        name: "GitHub",
        href: "https://github.com/Angelisyn",
        username: "@Angelisyn",
        icon: "github",
        external: true,
    },

    x: {
        name: "X",
        href: "https://x.com/angelisyn",
        username: "@angelisyn",
        icon: "twitter",
        external: true,
    },

    linkedin: {
        name: "LinkedIn",
        href: "https://linkedin.com/company/angelisyn",
        username: "Angelisyn",
        icon: "linkedin",
        external: true,
    },

    youtube: {
        name: "YouTube",
        href: "https://youtube.com/@angelisyn",
        username: "@angelisyn",
        icon: "youtube",
        external: true,
    },

    discord: {
        name: "Discord",
        href: "https://discord.gg/angelisyn",
        username: "Angelisyn",
        icon: "discord",
        external: true,
    },
} as const satisfies Record<string, SocialLink>;

export const COMMUNITY_LINKS: readonly CommunityLink[] = [
    {
        name: "GitHub Organization",
        href: "https://github.com/Angelisyn",
        description: "Open-source projects, issue tracking, and development updates.",
        external: true,
    },
    {
        name: "LinkedIn",
        href: "https://linkedin.com/company/angelisyn",
        description: "Company announcements, hiring, and enterprise news.",
        external: true,
    },
    {
        name: "X",
        href: "https://x.com/angelisyn",
        description: "Product updates, release announcements, and community news.",
        external: true,
    },
    {
        name: "Discord",
        href: "https://discord.gg/angelisyn",
        description: "Developer and community discussions.",
        external: true,
    },
] as const;

export const SHARE_LINKS = {
    x: "https://x.com/intent/tweet",
    linkedin: "https://www.linkedin.com/sharing/share-offsite",
    facebook: "https://www.facebook.com/sharer/sharer.php",
} as const;

export const SOCIAL_USERNAMES = {
    github: "Angelisyn",
    x: "angelisyn",
    linkedin: "angelisyn",
    youtube: "@angelisyn",
    discord: "Angelisyn",
} as const;

export const SOCIAL_ICONS = {
    github: "github",
    x: "twitter",
    linkedin: "linkedin",
    youtube: "youtube",
    discord: "discord",
} as const;

export type SocialLinks = typeof SOCIAL_LINKS;
export type ShareLinks = typeof SHARE_LINKS;
export type SocialUsernames = typeof SOCIAL_USERNAMES;
export type SocialIcons = typeof SOCIAL_ICONS;