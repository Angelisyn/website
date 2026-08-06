// src/utils/date.ts

/**
 * Date utility functions for the Angelisyn website.
 */

export type DateInput = Date | string | number;

const DEFAULT_LOCALE = "en-US";

function toDate(value: DateInput): Date {
    return value instanceof Date ? value : new Date(value);
}

export function formatDate(
    value: DateInput,
    locale = DEFAULT_LOCALE,
    options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
    },
): string {
    return new Intl.DateTimeFormat(locale, options).format(
        toDate(value),
    );
}

export function formatDateTime(
    value: DateInput,
    locale = DEFAULT_LOCALE,
): string {
    return formatDate(value, locale, {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });
}

export function formatTime(
    value: DateInput,
    locale = DEFAULT_LOCALE,
): string {
    return formatDate(value, locale, {
        hour: "2-digit",
        minute: "2-digit",
    });
}

export function formatRelativeTime(
    value: DateInput,
    locale = DEFAULT_LOCALE,
): string {
    const date = toDate(value);
    const diffMs = date.getTime() - Date.now();

    const rtf = new Intl.RelativeTimeFormat(locale, {
        numeric: "auto",
    });

    const minutes = Math.round(diffMs / 60_000);

    if (Math.abs(minutes) < 60) {
        return rtf.format(minutes, "minute");
    }

    const hours = Math.round(minutes / 60);

    if (Math.abs(hours) < 24) {
        return rtf.format(hours, "hour");
    }

    const days = Math.round(hours / 24);

    if (Math.abs(days) < 30) {
        return rtf.format(days, "day");
    }

    const months = Math.round(days / 30);

    if (Math.abs(months) < 12) {
        return rtf.format(months, "month");
    }

    const years = Math.round(months / 12);

    return rtf.format(years, "year");
}

export function isToday(
    value: DateInput,
): boolean {
    const date = toDate(value);
    const today = new Date();

    return (
        date.getFullYear() === today.getFullYear() &&
        date.getMonth() === today.getMonth() &&
        date.getDate() === today.getDate()
    );
}

export function isPast(
    value: DateInput,
): boolean {
    return toDate(value).getTime() < Date.now();
}

export function isFuture(
    value: DateInput,
): boolean {
    return toDate(value).getTime() > Date.now();
}

export function addDays(
    value: DateInput,
    days: number,
): Date {
    const date = new Date(toDate(value));

    date.setDate(date.getDate() + days);

    return date;
}

export function startOfDay(
    value: DateInput,
): Date {
    const date = new Date(toDate(value));

    date.setHours(0, 0, 0, 0);

    return date;
}

export function endOfDay(
    value: DateInput,
): Date {
    const date = new Date(toDate(value));

    date.setHours(23, 59, 59, 999);

    return date;
}