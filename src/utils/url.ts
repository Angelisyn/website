// src/utils/url.ts

/**
 * URL utilities for the Angelisyn website.
 */

import { APP_CONFIG } from "../constants";

const BASE_URL = APP_CONFIG.url;

export interface QueryParams {
    readonly [key: string]:
    | string
    | number
    | boolean
    | null
    | undefined;
}

/**
 * Returns an absolute URL.
 */
export function createUrl(
    path = "/",
    query?: QueryParams,
): string {
    const url = new URL(path, BASE_URL);

    if (query) {
        Object.entries(query).forEach(([key, value]) => {
            if (
                value === undefined ||
                value === null
            ) {
                return;
            }

            url.searchParams.set(key, String(value));
        });
    }

    return url.toString();
}

/**
 * Returns true if the value is a valid URL.
 */
export function isValidUrl(
    value: string,
): boolean {
    try {
        new URL(value);

        return true;
    } catch {
        return false;
    }
}

/**
 * Returns true for external URLs.
 */
export function isExternalUrl(
    value: string,
): boolean {
    if (!isValidUrl(value)) {
        return false;
    }

    return !value.startsWith(BASE_URL);
}

/**
 * Removes duplicate slashes from a path.
 */
export function normalizePath(
    path: string,
): string {
    const normalized = path
        .replace(/\/{2,}/g, "/")
        .replace(/\/$/, "");

    return normalized.length === 0
        ? "/"
        : normalized;
}

/**
 * Joins multiple URL segments.
 */
export function joinUrl(
    ...segments: readonly string[]
): string {
    return normalizePath(
        segments
            .filter(Boolean)
            .join("/"),
    );
}

/**
 * Appends query parameters to an existing URL.
 */
export function appendQuery(
    url: string,
    query: QueryParams,
): string {
    const parsed = new URL(url, BASE_URL);

    Object.entries(query).forEach(([key, value]) => {
        if (
            value === undefined ||
            value === null
        ) {
            return;
        }

        parsed.searchParams.set(
            key,
            String(value),
        );
    });

    return parsed.toString();
}

/**
 * Extracts query parameters from a URL.
 */
export function getQueryParams(
    url: string,
): Record<string, string> {
    const parsed = new URL(url, BASE_URL);

    return Object.fromEntries(
        parsed.searchParams.entries(),
    );
}

/**
 * Removes the query string and hash.
 */
export function stripUrl(
    url: string,
): string {
    const parsed = new URL(url, BASE_URL);

    return `${parsed.origin}${parsed.pathname}`;
}