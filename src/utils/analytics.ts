// src/utils/analytics.ts

import {
    analytics,
    type AnalyticsEvent,
    type AnalyticsProperties,
} from "../services/analytics";

export interface PageViewProperties extends AnalyticsProperties {
    readonly page: string;
    readonly title?: string;
    readonly referrer?: string;
}

export interface CTAProperties extends AnalyticsProperties {
    readonly label: string;
    readonly location: string;
}

export interface OutboundLinkProperties
    extends AnalyticsProperties {
    readonly url: string;
    readonly label?: string;
}

/**
 * Tracks a page view.
 */
export function trackPageView(
    page: string,
    title?: string,
): void {
    analytics.pageView({
        path: page,
    });

    analytics.event({
        name: "page_view",
        properties: {
            page,
            title,
        },
    });
}

/**
 * Tracks a custom analytics event.
 */
export function trackAnalyticsEvent(
    name: string,
    properties?: AnalyticsProperties,
): void {
    const event: AnalyticsEvent = {
        name,
        properties,
    };

    analytics.event(event);
}

/**
 * Tracks CTA interactions.
 */
export function trackCTA(
    label: string,
    location: string,
): void {
    analytics.cta({
        label,
        location,
    });
}

/**
 * Tracks outbound links.
 */
export function trackOutboundLink(
    url: string,
    label?: string,
): void {
    analytics.outboundLink({
        url,
        label,
    });
}

/**
 * Tracks file downloads.
 */
export function trackDownload(
    filename: string,
): void {
    trackAnalyticsEvent("file_download", {
        filename,
    });
}

/**
 * Tracks search queries.
 */
export function trackSearch(
    query: string,
    results?: number,
): void {
    trackAnalyticsEvent("search", {
        query,
        results,
    });
}

/**
 * Tracks form submissions.
 */
export function trackFormSubmission(
    form: string,
): void {
    trackAnalyticsEvent("form_submit", {
        form,
    });
}

/**
 * Tracks form validation failures.
 */
export function trackFormError(
    form: string,
    field: string,
): void {
    trackAnalyticsEvent("form_error", {
        form,
        field,
    });
}