// src/utils/env.ts

/**
 * Environment utility helpers for the Angelisyn website.
 */

export interface PublicEnvironment {
    readonly nodeEnv: "development" | "test" | "production";
    readonly appUrl: string;
    readonly apiUrl: string;
    readonly vercelEnv?: string;
    readonly vercelUrl?: string;
}

function getRequiredEnv(name: string): string {
    const value = process.env[name];

    if (!value) {
        throw new Error(
            `Missing required environment variable: ${name}`,
        );
    }

    return value;
}

function getOptionalEnv(
    name: string,
): string | undefined {
    const value = process.env[name];

    return value && value.length > 0
        ? value
        : undefined;
}

export function getPublicEnvironment(): PublicEnvironment {
    return {
        nodeEnv:
            (process.env.NODE_ENV as PublicEnvironment["nodeEnv"]) ??
            "development",

        appUrl: getRequiredEnv(
            "NEXT_PUBLIC_APP_URL",
        ),

        apiUrl: getRequiredEnv(
            "NEXT_PUBLIC_API_URL",
        ),

        vercelEnv: getOptionalEnv(
            "VERCEL_ENV",
        ),

        vercelUrl: getOptionalEnv(
            "VERCEL_URL",
        ),
    };
}

export const env = getPublicEnvironment();

export const isDevelopment =
    env.nodeEnv === "development";

export const isProduction =
    env.nodeEnv === "production";

export const isTest =
    env.nodeEnv === "test";

export function assertProduction(): void {
    if (!isProduction) {
        throw new Error(
            "This operation is only available in production.",
        );
    }
}

export function assertDevelopment(): void {
    if (!isDevelopment) {
        throw new Error(
            "This operation is only available in development.",
        );
    }
}