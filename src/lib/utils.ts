/**
 * -----------------------------------------------------------------------------
 * Angelisyn
 * Utility Functions
 * -----------------------------------------------------------------------------
 */

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/* -------------------------------------------------------------------------- */
/* Tailwind                                                                   */
/* -------------------------------------------------------------------------- */

/**
 * Merge Tailwind class names safely.
 */
export function cn(...inputs: ClassValue[]): string {
    return twMerge(clsx(inputs));
}

/* -------------------------------------------------------------------------- */
/* String Utilities                                                           */
/* -------------------------------------------------------------------------- */

export function capitalize(value: string): string {
    if (!value) return "";

    return value.charAt(0).toUpperCase() + value.slice(1);
}

export function titleCase(value: string): string {
    return value
        .split(" ")
        .map(capitalize)
        .join(" ");
}

export function slugify(value: string): string {
    return value
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
}

export function truncate(value: string, length = 150): string {
    if (value.length <= length) return value;

    return `${value.slice(0, length)}...`;
}

/* -------------------------------------------------------------------------- */
/* Number Utilities                                                           */
/* -------------------------------------------------------------------------- */

export function formatNumber(value: number): string {
    return new Intl.NumberFormat("en-IN").format(value);
}

export function clamp(
    value: number,
    min: number,
    max: number
): number {
    return Math.min(Math.max(value, min), max);
}

/* -------------------------------------------------------------------------- */
/* Date Utilities                                                             */
/* -------------------------------------------------------------------------- */

export function formatDate(
    date: Date | string,
    locale = "en-IN"
): string {
    return new Intl.DateTimeFormat(locale, {
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(new Date(date));
}

export function getCurrentYear(): number {
    return new Date().getFullYear();
}

/* -------------------------------------------------------------------------- */
/* URL Utilities                                                              */
/* -------------------------------------------------------------------------- */

export function isExternalUrl(url: string): boolean {
    return /^https?:\/\//.test(url);
}

export function removeTrailingSlash(url: string): string {
    return url.replace(/\/$/, "");
}

/* -------------------------------------------------------------------------- */
/* Array Utilities                                                            */
/* -------------------------------------------------------------------------- */

export function unique<T>(array: T[]): T[] {
    return [...new Set(array)];
}

export function chunk<T>(
    array: T[],
    size: number
): T[][] {
    const chunks: T[][] = [];

    for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size));
    }

    return chunks;
}

/* -------------------------------------------------------------------------- */
/* Object Utilities                                                           */
/* -------------------------------------------------------------------------- */

export function isEmptyObject(
    value: Record<string, unknown>
): boolean {
    return Object.keys(value).length === 0;
}

/* -------------------------------------------------------------------------- */
/* Clipboard                                                                  */
/* -------------------------------------------------------------------------- */

export async function copyToClipboard(
    text: string
): Promise<boolean> {
    try {
        await navigator.clipboard.writeText(text);

        return true;
    } catch {
        return false;
    }
}

/* -------------------------------------------------------------------------- */
/* Sleep                                                                      */
/* -------------------------------------------------------------------------- */

export function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

/* -------------------------------------------------------------------------- */
/* Random                                                                     */
/* -------------------------------------------------------------------------- */

export function randomId(length = 8): string {
    return crypto.randomUUID().replace(/-/g, "").slice(0, length);
}

export function randomNumber(
    min: number,
    max: number
): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* -------------------------------------------------------------------------- */
/* Boolean                                                                    */
/* -------------------------------------------------------------------------- */

export function isDefined<T>(
    value: T | null | undefined
): value is T {
    return value !== undefined && value !== null;
}