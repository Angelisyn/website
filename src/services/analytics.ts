// src/services/analytics.ts

import {
    trackCTA,
    trackEvent,
    trackOutboundLink,
    trackPageView,
} from "../providers";

export interface AnalyticsProperties {
    readonly [key: string]: unknown;
}

export interface AnalyticsEvent {
    readonly name: string;
    readonly properties?: AnalyticsProperties;
}

export interface PageViewEvent {
    readonly path: string;
}

export interface CTAEvent {
    readonly label: string;
    readonly location: string;
}

export interface OutboundLinkEvent {
    readonly url: string;
    readonly label?: string;
}

export interface AnalyticsService {
    pageView(event: PageViewEvent): void;
    event(event: AnalyticsEvent): void;
    cta(event: CTAEvent): void;
    outboundLink(event: OutboundLinkEvent): void;
}

class AnalyticsServiceImpl implements AnalyticsService {
    pageView({ path }: PageViewEvent): void {
        trackPageView(path);
    }

    event({
        name,
        properties,
    }: AnalyticsEvent): void {
        trackEvent({
            name,
            properties,
        });
    }

    cta({
        label,
        location,
    }: CTAEvent): void {
        trackCTA(label, location);
    }

    outboundLink({
        url,
        label,
    }: OutboundLinkEvent): void {
        trackOutboundLink(url, label);
    }
}

/**
 * Global analytics service.
 */
export const analytics = new AnalyticsServiceImpl();

/**
 * Convenience helper.
 */
export function pageView(path: string): void {
    analytics.pageView({
        path,
    });
}

/**
 * Convenience helper.
 */
export function event(
    name: string,
    properties?: AnalyticsProperties,
): void {
    analytics.event({
        name,
        properties,
    });
}

/**
 * Convenience helper.
 */
export function cta(
    label: string,
    location: string,
): void {
    analytics.cta({
        label,
        location,
    });
}

/**
 * Convenience helper.
 */
export function outboundLink(
    url: string,
    label?: string,
): void {
    analytics.outboundLink({
        url,
        label,
    });
}

export default analytics;