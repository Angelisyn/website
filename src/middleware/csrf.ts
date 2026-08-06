// src/middleware/csrf.ts

import { timingSafeEqual } from "node:crypto";

import type { NextRequest } from "next/server";

export const CSRF_HEADER = "x-csrf-token";
export const CSRF_COOKIE = "csrf-token";

export interface CsrfValidationResult {
    readonly valid: boolean;
    readonly reason?: string;
}

function safeCompare(a: string, b: string): boolean {
    const left = Buffer.from(a);
    const right = Buffer.from(b);

    if (left.length !== right.length) {
        return false;
    }

    return timingSafeEqual(left, right);
}

/**
 * Returns the CSRF token supplied in the request header.
 */
export function getCsrfHeaderToken(
    request: NextRequest,
): string | null {
    return request.headers.get(CSRF_HEADER);
}

/**
 * Returns the CSRF token stored in the request cookie.
 */
export function getCsrfCookieToken(
    request: NextRequest,
): string | null {
    return request.cookies.get(CSRF_COOKIE)?.value ?? null;
}

/**
 * Validates the CSRF header against the cookie value.
 */
export function validateCsrf(
    request: NextRequest,
): CsrfValidationResult {
    const headerToken = getCsrfHeaderToken(request);
    const cookieToken = getCsrfCookieToken(request);

    if (!headerToken) {
        return {
            valid: false,
            reason: "Missing CSRF header.",
        };
    }

    if (!cookieToken) {
        return {
            valid: false,
            reason: "Missing CSRF cookie.",
        };
    }

    if (!safeCompare(headerToken, cookieToken)) {
        return {
            valid: false,
            reason: "CSRF token mismatch.",
        };
    }

    return {
        valid: true,
    };
}

/**
 * Determines whether a request method requires CSRF validation.
 */
export function requiresCsrfProtection(
    request: NextRequest,
): boolean {
    return ["POST", "PUT", "PATCH", "DELETE"].includes(
        request.method,
    );
}