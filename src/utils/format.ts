// src/utils/format.ts

/**
 * Formatting utilities for the Angelisyn website.
 */

const DEFAULT_LOCALE = "en-US";

export function formatNumber(
    value: number,
    locale = DEFAULT_LOCALE,
): string {
    return new Intl.NumberFormat(locale).format(value);
}

export function formatCurrency(
    value: number,
    currency = "USD",
    locale = DEFAULT_LOCALE,
): string {
    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency,
    }).format(value);
}

export function formatPercentage(
    value: number,
    locale = DEFAULT_LOCALE,
    maximumFractionDigits = 2,
): string {
    return new Intl.NumberFormat(locale, {
        style: "percent",
        maximumFractionDigits,
    }).format(value);
}

export function formatBytes(
    bytes: number,
    decimals = 2,
): string {
    if (bytes === 0) {
        return "0 B";
    }

    const k = 1024;
    const dm = Math.max(0, decimals);
    const sizes = [
        "B",
        "KB",
        "MB",
        "GB",
        "TB",
        "PB",
    ];

    const index = Math.floor(
        Math.log(bytes) / Math.log(k),
    );

    const value =
        bytes / Math.pow(k, index);

    return `${value.toFixed(dm)} ${sizes[index]}`;
}

export function formatCompactNumber(
    value: number,
    locale = DEFAULT_LOCALE,
): string {
    return new Intl.NumberFormat(locale, {
        notation: "compact",
        maximumFractionDigits: 1,
    }).format(value);
}

export function formatOrdinal(
    value: number,
): string {
    const mod10 = value % 10;
    const mod100 = value % 100;

    if (mod10 === 1 && mod100 !== 11) {
        return `${value}st`;
    }

    if (mod10 === 2 && mod100 !== 12) {
        return `${value}nd`;
    }

    if (mod10 === 3 && mod100 !== 13) {
        return `${value}rd`;
    }

    return `${value}th`;
}

export function capitalize(
    value: string,
): string {
    if (value.length === 0) {
        return value;
    }

    return (
        value.charAt(0).toUpperCase() +
        value.slice(1)
    );
}

export function titleCase(
    value: string,
): string {
    return value
        .trim()
        .split(/\s+/)
        .map(capitalize)
        .join(" ");
}

export function truncate(
    value: string,
    maxLength: number,
    suffix = "…",
): string {
    if (value.length <= maxLength) {
        return value;
    }

    return `${value.slice(
        0,
        Math.max(0, maxLength - suffix.length),
    )}${suffix}`;
}

export function formatList(
    values: readonly string[],
    locale = DEFAULT_LOCALE,
): string {
    return new Intl.ListFormat(locale, {
        style: "long",
        type: "conjunction",
    }).format(values);
}