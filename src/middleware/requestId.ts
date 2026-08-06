// src/middleware/requestId.ts

import { randomUUID } from "node:crypto";

import type { NextRequest, NextResponse } from "next/server";

export const REQUEST_ID_HEADER = "x-request-id";

export interface RequestIdOptions {
    /**
     * Header name used for request correlation.
     *
     * @default "x-request-id"
     */
    readonly headerName?: string;

    /**
     * Generate a new request ID even if one already exists.
     *
     * @default false
     */
    readonly overwrite?: boolean;
}

/**
 * Returns the current request ID if present,
 * otherwise generates a new UUID.
 */
export function getRequestId(
    request: NextRequest,
    options: RequestIdOptions = {},
): string {
    const {
        headerName = REQUEST_ID_HEADER,
        overwrite = false,
    } = options;

    if (!overwrite) {
        const existing = request.headers.get(headerName);

        if (existing) {
            return existing;
        }
    }

    return randomUUID();
}

/**
 * Adds a request ID header to the response.
 */
export function attachRequestId(
    request: NextRequest,
    response: NextResponse,
    options: RequestIdOptions = {},
): NextResponse {
    const {
        headerName = REQUEST_ID_HEADER,
    } = options;

    const requestId = getRequestId(request, options);

    response.headers.set(headerName, requestId);

    return response;
}

/**
 * Creates a request ID that can be reused throughout
 * the current request lifecycle.
 */
export function createRequestContext(
    request: NextRequest,
    options: RequestIdOptions = {},
): {
    readonly requestId: string;
} {
    return {
        requestId: getRequestId(request, options),
    };
}

/**
 * Adds the request ID to a plain object for
 * structured logging.
 */
export function withRequestId<T extends object>(
    requestId: string,
    payload: T,
): T & {
    readonly requestId: string;
} {
    return {
        ...payload,
        requestId,
    };
}