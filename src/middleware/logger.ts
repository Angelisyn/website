// src/middleware/logger.ts

import type { NextRequest, NextResponse } from "next/server";

export type LogLevel = "debug" | "info" | "warn" | "error";

export interface LogContext {
    readonly requestId?: string;
    readonly method?: string;
    readonly pathname?: string;
    readonly status?: number;
    readonly duration?: number;
    readonly ip?: string;
    readonly userAgent?: string;
    readonly [key: string]: unknown;
}

export interface RequestLog {
    readonly requestId: string;
    readonly method: string;
    readonly pathname: string;
    readonly ip: string;
    readonly userAgent: string;
    readonly timestamp: string;
}

export interface ResponseLog extends RequestLog {
    readonly status: number;
    readonly duration: number;
}

function write(
    level: LogLevel,
    message: string,
    context?: LogContext,
): void {
    const payload = {
        level,
        message,
        timestamp: new Date().toISOString(),
        ...(context ?? {}),
    };

    switch (level) {
        case "debug":
            console.debug(payload);
            break;

        case "info":
            console.info(payload);
            break;

        case "warn":
            console.warn(payload);
            break;

        case "error":
            console.error(payload);
            break;

        default:
            console.log(payload);
    }
}

export function logDebug(
    message: string,
    context?: LogContext,
): void {
    write("debug", message, context);
}

export function logInfo(
    message: string,
    context?: LogContext,
): void {
    write("info", message, context);
}

export function logWarn(
    message: string,
    context?: LogContext,
): void {
    write("warn", message, context);
}

export function logError(
    message: string,
    context?: LogContext,
): void {
    write("error", message, context);
}

export function createRequestLog(
    request: NextRequest,
    requestId: string,
): RequestLog {
    return {
        requestId,
        method: request.method,
        pathname: request.nextUrl.pathname,
        ip:
            request.headers.get("x-forwarded-for") ??
            request.headers.get("x-real-ip") ??
            "unknown",
        userAgent:
            request.headers.get("user-agent") ?? "unknown",
        timestamp: new Date().toISOString(),
    };
}

export function createResponseLog(
    request: NextRequest,
    response: NextResponse,
    requestId: string,
    startedAt: number,
): ResponseLog {
    return {
        requestId,
        method: request.method,
        pathname: request.nextUrl.pathname,
        ip:
            request.headers.get("x-forwarded-for") ??
            request.headers.get("x-real-ip") ??
            "unknown",
        userAgent:
            request.headers.get("user-agent") ?? "unknown",
        status: response.status,
        duration: Date.now() - startedAt,
        timestamp: new Date().toISOString(),
    };
}

export function logRequest(
    request: NextRequest,
    requestId: string,
): void {
    const log = createRequestLog(request, requestId);

    logInfo("Incoming request", log);
}

export function logResponse(
    request: NextRequest,
    response: NextResponse,
    requestId: string,
    startedAt: number,
): void {
    const log = createResponseLog(
        request,
        response,
        requestId,
        startedAt,
    );

    if (response.status >= 500) {
        logError("Request completed", log);
        return;
    }

    if (response.status >= 400) {
        logWarn("Request completed", log);
        return;
    }

    logInfo("Request completed", log);
}