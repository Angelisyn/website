// src/middleware/cors.ts

import type { NextRequest, NextResponse } from "next/server";

export interface CorsOptions {
    readonly origin?: string | string[];
    readonly methods?: readonly string[];
    readonly headers?: readonly string[];
    readonly exposedHeaders?: readonly string[];
    readonly credentials?: boolean;
    readonly maxAge?: number;
}

const DEFAULT_OPTIONS: Required<CorsOptions> = {
    origin: "*",
    methods: [
        "GET",
        "POST",
        "PUT",
        "PATCH",
        "DELETE",
        "OPTIONS",
    ],
    headers: [
        "Accept",
        "Authorization",
        "Content-Type",
        "Origin",
        "X-Requested-With",
        "X-Request-Id",
    ],
    exposedHeaders: [
        "X-Request-Id",
        "X-RateLimit-Limit",
        "X-RateLimit-Remaining",
        "X-RateLimit-Reset",
    ],
    credentials: false,
    maxAge: 86400,
};

function resolveOrigin(
    requestOrigin: string | null,
    allowedOrigin: string | string[],
): string {
    if (allowedOrigin === "*") {
        return "*";
    }

    if (Array.isArray(allowedOrigin)) {
        if (requestOrigin && allowedOrigin.includes(requestOrigin)) {
            return requestOrigin;
        }

        return allowedOrigin[0] ?? "*";
    }

    return allowedOrigin;
}

export function applyCors(
    request: NextRequest,
    response: NextResponse,
    options: CorsOptions = {},
): NextResponse {
    const config = {
        ...DEFAULT_OPTIONS,
        ...options,
    };

    const origin = resolveOrigin(
        request.headers.get("origin"),
        config.origin,
    );

    response.headers.set(
        "Access-Control-Allow-Origin",
        origin,
    );

    response.headers.set(
        "Access-Control-Allow-Methods",
        config.methods.join(", "),
    );

    response.headers.set(
        "Access-Control-Allow-Headers",
        config.headers.join(", "),
    );

    response.headers.set(
        "Access-Control-Expose-Headers",
        config.exposedHeaders.join(", "),
    );

    response.headers.set(
        "Access-Control-Max-Age",
        config.maxAge.toString(),
    );

    if (config.credentials) {
        response.headers.set(
            "Access-Control-Allow-Credentials",
            "true",
        );
    }

    response.headers.append("Vary", "Origin");

    return response;
}

export function createPreflightResponse(
    request: NextRequest,
    options?: CorsOptions,
): NextResponse {
    const response = new NextResponse(null, {
        status: 204,
    });

    return applyCors(request, response, options);
}

export function isPreflightRequest(
    request: NextRequest,
): boolean {
    return request.method === "OPTIONS";
}