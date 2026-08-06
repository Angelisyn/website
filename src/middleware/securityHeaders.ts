// src/middleware/securityHeaders.ts

import type { NextRequest, NextResponse } from "next/server";

export interface SecurityHeaderOptions {
    readonly contentSecurityPolicy?: string;
    readonly strictTransportSecurity?: string;
    readonly permissionsPolicy?: string;
    readonly referrerPolicy?: string;
}

const DEFAULT_OPTIONS: Required<SecurityHeaderOptions> = {
    contentSecurityPolicy: [
        "default-src 'self'",
        "base-uri 'self'",
        "object-src 'none'",
        "frame-ancestors 'none'",
        "img-src 'self' data: https:",
        "font-src 'self' data:",
        "style-src 'self' 'unsafe-inline'",
        "script-src 'self'",
        "connect-src 'self' https:",
        "form-action 'self'",
        "upgrade-insecure-requests",
    ].join("; "),

    strictTransportSecurity:
        "max-age=63072000; includeSubDomains; preload",

    permissionsPolicy: [
        "accelerometer=()",
        "camera=()",
        "display-capture=()",
        "fullscreen=(self)",
        "geolocation=()",
        "gyroscope=()",
        "magnetometer=()",
        "microphone=()",
        "payment=()",
        "usb=()",
    ].join(", "),

    referrerPolicy: "strict-origin-when-cross-origin",
};

/**
 * Applies recommended security headers to a NextResponse.
 */
export function applySecurityHeaders(
    response: NextResponse,
    options: SecurityHeaderOptions = {},
): NextResponse {
    const config = {
        ...DEFAULT_OPTIONS,
        ...options,
    };

    response.headers.set(
        "Content-Security-Policy",
        config.contentSecurityPolicy,
    );

    response.headers.set(
        "Strict-Transport-Security",
        config.strictTransportSecurity,
    );

    response.headers.set(
        "Permissions-Policy",
        config.permissionsPolicy,
    );

    response.headers.set(
        "Referrer-Policy",
        config.referrerPolicy,
    );

    response.headers.set(
        "X-Content-Type-Options",
        "nosniff",
    );

    response.headers.set(
        "X-Frame-Options",
        "DENY",
    );

    response.headers.set(
        "X-DNS-Prefetch-Control",
        "off",
    );

    response.headers.set(
        "Cross-Origin-Embedder-Policy",
        "require-corp",
    );

    response.headers.set(
        "Cross-Origin-Opener-Policy",
        "same-origin",
    );

    response.headers.set(
        "Cross-Origin-Resource-Policy",
        "same-origin",
    );

    response.headers.set(
        "Origin-Agent-Cluster",
        "?1",
    );

    return response;
}

/**
 * Creates a response with security headers already applied.
 */
export function createSecureResponse(
    response: NextResponse,
    options?: SecurityHeaderOptions,
): NextResponse {
    return applySecurityHeaders(response, options);
}

/**
 * Convenience helper for middleware pipelines.
 */
export function withSecurityHeaders(
    handler: (
        request: NextRequest,
    ) => NextResponse | Promise<NextResponse>,
    options?: SecurityHeaderOptions,
) {
    return async (
        request: NextRequest,
    ): Promise<NextResponse> => {
        const response = await handler(request);

        return applySecurityHeaders(response, options);
    };
}