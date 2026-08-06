// src/middleware/response.ts

import { randomUUID } from "node:crypto";

import { NextResponse } from "next/server";

export interface ApiSuccessResponse<T = unknown> {
    readonly success: true;
    readonly requestId: string;
    readonly timestamp: string;
    readonly data: T;
}

export interface ApiErrorResponse {
    readonly success: false;
    readonly requestId: string;
    readonly timestamp: string;
    readonly error: {
        readonly code: string;
        readonly message: string;
        readonly details?: unknown;
    };
}

export interface ResponseOptions {
    readonly status?: number;
    readonly headers?: HeadersInit;
}

function createRequestId(): string {
    return randomUUID();
}

function createTimestamp(): string {
    return new Date().toISOString();
}

/**
 * Creates a standardized success response.
 */
export function successResponse<T>(
    data: T,
    options: ResponseOptions = {},
): NextResponse<ApiSuccessResponse<T>> {
    const body: ApiSuccessResponse<T> = {
        success: true,
        requestId: createRequestId(),
        timestamp: createTimestamp(),
        data,
    };

    return NextResponse.json(body, {
        status: options.status ?? 200,
        headers: options.headers,
    });
}

/**
 * Creates a standardized error response.
 */
export function errorResponse(
    code: string,
    message: string,
    options: ResponseOptions & {
        readonly details?: unknown;
    } = {},
): NextResponse<ApiErrorResponse> {
    const body: ApiErrorResponse = {
        success: false,
        requestId: createRequestId(),
        timestamp: createTimestamp(),
        error: {
            code,
            message,
            details: options.details,
        },
    };

    return NextResponse.json(body, {
        status: options.status ?? 500,
        headers: options.headers,
    });
}

export function createdResponse<T>(
    data: T,
    headers?: HeadersInit,
): NextResponse<ApiSuccessResponse<T>> {
    return successResponse(data, {
        status: 201,
        headers,
    });
}

export function noContentResponse(
    headers?: HeadersInit,
): NextResponse {
    return new NextResponse(null, {
        status: 204,
        headers,
    });
}

export function badRequestResponse(
    message = "Bad request.",
): NextResponse<ApiErrorResponse> {
    return errorResponse("BAD_REQUEST", message, {
        status: 400,
    });
}

export function unauthorizedResponse(
    message = "Unauthorized.",
): NextResponse<ApiErrorResponse> {
    return errorResponse("UNAUTHORIZED", message, {
        status: 401,
    });
}

export function forbiddenResponse(
    message = "Forbidden.",
): NextResponse<ApiErrorResponse> {
    return errorResponse("FORBIDDEN", message, {
        status: 403,
    });
}

export function notFoundResponse(
    message = "Resource not found.",
): NextResponse<ApiErrorResponse> {
    return errorResponse("NOT_FOUND", message, {
        status: 404,
    });
}

export function tooManyRequestsResponse(
    message = "Too many requests.",
): NextResponse<ApiErrorResponse> {
    return errorResponse("RATE_LIMITED", message, {
        status: 429,
    });
}

export function internalServerErrorResponse(
    message = "Internal server error.",
): NextResponse<ApiErrorResponse> {
    return errorResponse(
        "INTERNAL_SERVER_ERROR",
        message,
        {
            status: 500,
        },
    );
}