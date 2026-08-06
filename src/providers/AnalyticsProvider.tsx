// src/providers/AnalyticsProvider.tsx

"use client";

import { useEffect, type PropsWithChildren } from "react";

export interface AnalyticsEvent {
    readonly name: string;
    readonly properties?: Record<string, unknown>;
}

export interface AnalyticsProviderProps
    extends PropsWithChildren { }

declare global {
    interface Window {
        va?: (...args: unknown[]) => void;
        gtag?: (
            command: string,
            event: string,
            parameters?: Record<string, unknown>,
        ) => void;
    }
}

const isBrowser = typeof window !== "undefined";

/**
 * Tracks a custom analytics event.
 *
 * Supports:
 * - Vercel Analytics
 * - Google Analytics (gtag)
 *
 * Safe to call even if no provider is configured.
 */
export function trackEvent({
    name,
    properties,
}: AnalyticsEvent): void {
    if (!isBrowser) {
        return;
    }

    try {
        window.va?.("event", {
            name,
            ...properties,
        });
    } catch {
        // Ignore analytics provider failures.
    }

    try {
        window.gtag?.("event", name, properties);
    } catch {
        // Ignore analytics provider failures.
    }
}

/**
 * Tracks a page view.
 */
export function trackPageView(path: string): void {
    trackEvent({
        name: "page_view",
        properties: {
            page_path: path,
        },
    });
}

/**
 * Tracks an outbound link click.
 */
export function trackOutboundLink(
    url: string,
    label?: string,
): void {
    trackEvent({
        name: "outbound_link_click",
        properties: {
            url,
            label,
        },
    });
}

/**
 * Tracks CTA interactions.
 */
export function trackCTA(
    label: string,
    location: string,
): void {
    trackEvent({
        name: "cta_click",
        properties: {
            label,
            location,
        },
    });
}

/**
 * Global analytics provider.
 *
 * Reserved for future initialization of:
 * - Vercel Analytics
 * - Google Analytics
 * - PostHog
 * - Plausible
 * - OpenTelemetry
 */
export function AnalyticsProvider({
    children,
}: AnalyticsProviderProps) {
    useEffect(() => {
        if (!isBrowser) {
            return;
        }

        trackPageView(window.location.pathname);
    }, []);

    return <>{children}</>;
}