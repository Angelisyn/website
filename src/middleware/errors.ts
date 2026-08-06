// src/middleware/errors.ts

import { NextResponse } from "next/server";

export class HttpError extends Error {
    public readonly status: number;
    public readonly code: string;
    public readonly details?: unknown;

    constructor(
        status: number,
        code: string,
        message: string,
        details?: unknown,
    ) {
        super(message);

        this.name = "HttpError";
        this.status = status;
        this.code = code;
        this.details = details;
    }
}

export interface ErrorResponseBody {
    readonly success: false;
    readonly error: {
        readonly code: string;
        readonly message: string;
        readonly details?: unknown;
    };
    readonly timestamp: string;
}

export function createErrorResponse(
    error: unknown,
): NextResponse<ErrorResponseBody> {
    if (error instanceof HttpError) {
        return NextResponse.json(
            {
                success: false,
                error: {
                    code: error.code,
                    message: error.message,
                    details: error.details,
                },
                timestamp: new Date().toISOString(),
            },
            {
                status: error.status,
            },
        );
    }

    const message =
        error instanceof Error
            ? error.message
            : "An unexpected error occurred.";

    return NextResponse.json(
        {
            success: false,
            error: {
                code: "INTERNAL_SERVER_ERROR",
                message,
            },
            timestamp: new Date().toISOString(),
        },
        {
            status: 500,
        },
    );
}

export function handleError(error: unknown): never {
    if (error instanceof HttpError) {
        throw error;
    }

    if (error instanceof Error) {
        throw new HttpError(
            500,
            "INTERNAL_SERVER_ERROR",
            error.message,
        );
    }

    throw new HttpError(
        500,
        "UNKNOWN_ERROR",
        "An unknown error occurred.",
    );
}

export function isHttpError(
    value: unknown,
): value is HttpError {
    return value instanceof HttpError;
}

export function assert(
    condition: unknown,
    status: number,
    code: string,
    message: string,
): asserts condition {
    if (!condition) {
        throw new HttpError(status, code, message);
    }
}

export function notFound(
    message = "Resource not found.",
): never {
    throw new HttpError(
        404,
        "NOT_FOUND",
        message,
    );
}

export function badRequest(
    message = "Bad request.",
): never {
    throw new HttpError(
        400,
        "BAD_REQUEST",
        message,
    );
}

export function unauthorized(
    message = "Unauthorized.",
): never {
    throw new HttpError(
        401,
        "UNAUTHORIZED",
        message,
    );
}

export function forbidden(
    message = "Forbidden.",
): never {
    throw new HttpError(
        403,
        "FORBIDDEN",
        message,
    );
}

export function conflict(
    message = "Conflict.",
): never {
    throw new HttpError(
        409,
        "CONFLICT",
        message,
    );
}

export function rateLimited(
    message = "Too many requests.",
): never {
    throw new HttpError(
        429,
        "RATE_LIMITED",
        message,
    );
}