// src/middleware/rateLimiter.ts

import type { NextRequest, NextResponse } from "next/server";

export interface RateLimitOptions {
    readonly windowMs: number;
    readonly maxRequests: number;
}

export interface RateLimitResult {
    readonly success: boolean;
    readonly limit: number;
    readonly remaining: number;
    readonly reset: number;
}

interface RateLimitEntry {
    count: number;
    resetAt: number;
}

/**
 * Simple in-memory rate limiter.
 *
 * Suitable for:
 * - Local development
 * - Single-instance deployments
 *
 * For distributed production deployments (multiple server instances),
 * replace the backing store with Redis, Upstash Redis, or another
 * centralized data store.
 */
const store = new Map<string, RateLimitEntry>();

const DEFAULT_OPTIONS: RateLimitOptions = {
    windowMs: 60_000,
    maxRequests: 60,
};

function getClientIdentifier(request: NextRequest): string {
    const forwardedFor = request.headers.get("x-forwarded-for");

    if (forwardedFor) {
        return forwardedFor.split(",")[0].trim();
    }

    return "anonymous";
}

export function checkRateLimit(
    request: NextRequest,
    options: Partial<RateLimitOptions> = {},
): RateLimitResult {
    const config: RateLimitOptions = {
        ...DEFAULT_OPTIONS,
        ...options,
    };

    const identifier = getClientIdentifier(request);
    const now = Date.now();

    const current = store.get(identifier);

    if (!current || now >= current.resetAt) {
        store.set(identifier, {
            count: 1,
            resetAt: now + config.windowMs,
        });

        return {
            success: true,
            limit: config.maxRequests,
            remaining: config.maxRequests - 1,
            reset: now + config.windowMs,
        };
    }

    current.count++;

    store.set(identifier, current);

    return {
        success: current.count <= config.maxRequests,
        limit: config.maxRequests,
        remaining: Math.max(
            config.maxRequests - current.count,
            0,
        ),
        reset: current.resetAt,
    };
}

/**
 * Applies standard rate-limit headers.
 */
export function applyRateLimitHeaders(
    response: NextResponse,
    result: RateLimitResult,
): NextResponse {
    response.headers.set(
        "X-RateLimit-Limit",
        String(result.limit),
    );

    response.headers.set(
        "X-RateLimit-Remaining",
        String(result.remaining),
    );

    response.headers.set(
        "X-RateLimit-Reset",
        String(Math.floor(result.reset / 1000)),
    );

    return response;
}

/**
 * Periodically removes expired entries.
 */
export function cleanupRateLimiter(): void {
    const now = Date.now();

    for (const [key, value] of store.entries()) {
        if (value.resetAt <= now) {
            store.delete(key);
        }
    }
}

/**
 * Clears all tracked entries.
 * Useful for tests.
 */
export function resetRateLimiter(): void {
    store.clear();
}