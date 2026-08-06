// src/middleware/userAgent.ts

import type { NextRequest } from "next/server";

export type DeviceType =
    | "desktop"
    | "mobile"
    | "tablet"
    | "bot"
    | "unknown";

export interface UserAgentInfo {
    readonly raw: string;
    readonly browser: string;
    readonly operatingSystem: string;
    readonly device: DeviceType;
    readonly isBot: boolean;
    readonly isMobile: boolean;
    readonly isTablet: boolean;
    readonly isDesktop: boolean;
}

const BOT_PATTERNS = [
    /bot/i,
    /crawler/i,
    /spider/i,
    /slurp/i,
    /bingpreview/i,
    /facebookexternalhit/i,
    /googlebot/i,
    /duckduckbot/i,
    /yandex/i,
] as const;

const MOBILE_PATTERN =
    /Android|iPhone|BlackBerry|IEMobile|Opera Mini|Mobile/i;

const TABLET_PATTERN =
    /iPad|Tablet|PlayBook|Kindle|Silk|Nexus 7|Nexus 10/i;

function detectBrowser(userAgent: string): string {
    if (/Edg\//i.test(userAgent)) return "Microsoft Edge";
    if (/Chrome\//i.test(userAgent)) return "Google Chrome";
    if (/Firefox\//i.test(userAgent)) return "Mozilla Firefox";
    if (/Safari\//i.test(userAgent) && !/Chrome/i.test(userAgent))
        return "Safari";
    if (/Opera|OPR\//i.test(userAgent)) return "Opera";

    return "Unknown";
}

function detectOperatingSystem(userAgent: string): string {
    if (/Windows/i.test(userAgent)) return "Windows";
    if (/Mac OS X|Macintosh/i.test(userAgent)) return "macOS";
    if (/Android/i.test(userAgent)) return "Android";
    if (/iPhone|iPad|iPod/i.test(userAgent)) return "iOS";
    if (/Linux/i.test(userAgent)) return "Linux";

    return "Unknown";
}

function detectDevice(
    userAgent: string,
): DeviceType {
    if (BOT_PATTERNS.some((pattern) => pattern.test(userAgent))) {
        return "bot";
    }

    if (TABLET_PATTERN.test(userAgent)) {
        return "tablet";
    }

    if (MOBILE_PATTERN.test(userAgent)) {
        return "mobile";
    }

    if (userAgent.length > 0) {
        return "desktop";
    }

    return "unknown";
}

export function parseUserAgent(
    userAgent: string,
): UserAgentInfo {
    const device = detectDevice(userAgent);

    return {
        raw: userAgent,
        browser: detectBrowser(userAgent),
        operatingSystem: detectOperatingSystem(userAgent),
        device,
        isBot: device === "bot",
        isMobile: device === "mobile",
        isTablet: device === "tablet",
        isDesktop: device === "desktop",
    };
}

export function getUserAgent(
    request: NextRequest,
): UserAgentInfo {
    const raw =
        request.headers.get("user-agent") ?? "";

    return parseUserAgent(raw);
}

export function isBotRequest(
    request: NextRequest,
): boolean {
    return getUserAgent(request).isBot;
}

export function isMobileRequest(
    request: NextRequest,
): boolean {
    return getUserAgent(request).isMobile;
}

export function isDesktopRequest(
    request: NextRequest,
): boolean {
    return getUserAgent(request).isDesktop;
}