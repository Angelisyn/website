// src/middleware/validation.ts

import type { NextRequest } from "next/server";

import { HttpError } from "./errors";

export interface ValidationResult<T = unknown> {
    readonly success: boolean;
    readonly data?: T;
    readonly errors: readonly string[];
}

export interface Validator<T> {
    (value: unknown): ValidationResult<T>;
}

/**
 * Validates a request body using a supplied validator.
 */
export async function validateRequestBody<T>(
    request: NextRequest,
    validator: Validator<T>,
): Promise<T> {
    let body: unknown;

    try {
        body = await request.json();
    } catch {
        throw new HttpError(
            400,
            "INVALID_JSON",
            "The request body contains invalid JSON.",
        );
    }

    const result = validator(body);

    if (!result.success || result.data === undefined) {
        throw new HttpError(
            422,
            "VALIDATION_ERROR",
            result.errors.join(" "),
            result.errors,
        );
    }

    return result.data;
}

/**
 * Validates URL search parameters.
 */
export function validateSearchParams<T>(
    searchParams: URLSearchParams,
    validator: Validator<T>,
): T {
    const params = Object.fromEntries(searchParams.entries());

    const result = validator(params);

    if (!result.success || result.data === undefined) {
        throw new HttpError(
            422,
            "VALIDATION_ERROR",
            result.errors.join(" "),
            result.errors,
        );
    }

    return result.data;
}

/**
 * Ensures a required value is present.
 */
export function requireValue<T>(
    value: T | null | undefined,
    field: string,
): T {
    if (value === undefined || value === null) {
        throw new HttpError(
            400,
            "MISSING_FIELD",
            `${field} is required.`,
        );
    }

    return value;
}

/**
 * Validates a string value.
 */
export function requireString(
    value: unknown,
    field: string,
): string {
    if (typeof value !== "string") {
        throw new HttpError(
            400,
            "INVALID_TYPE",
            `${field} must be a string.`,
        );
    }

    const trimmed = value.trim();

    if (trimmed.length === 0) {
        throw new HttpError(
            400,
            "EMPTY_FIELD",
            `${field} cannot be empty.`,
        );
    }

    return trimmed;
}

/**
 * Validates an email address.
 */
export function requireEmail(
    value: unknown,
    field = "email",
): string {
    const email = requireString(value, field);

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        throw new HttpError(
            400,
            "INVALID_EMAIL",
            `${field} is not a valid email address.`,
        );
    }

    return email;
}