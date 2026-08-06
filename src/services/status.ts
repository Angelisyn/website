// src/services/status.ts

import { api } from "./api";

export type ServiceStatus =
    | "operational"
    | "degraded"
    | "maintenance"
    | "outage";

export interface HealthCheck {
    readonly name: string;
    readonly status: ServiceStatus;
    readonly latency: number;
}

export interface StatusResponse {
    readonly status: ServiceStatus;
    readonly version: string;
    readonly timestamp: string;
    readonly uptime: number;
    readonly services: readonly HealthCheck[];
}

export class StatusService {
    /**
     * Retrieves the overall application status.
     */
    async getStatus(): Promise<StatusResponse> {
        const response =
            await api.get<StatusResponse>("/status");

        if (!response.success || response.error) {
            throw new Error(
                response.error?.message ??
                "Unable to retrieve service status.",
            );
        }

        return response.data;
    }

    /**
     * Performs a health check.
     */
    async health(): Promise<boolean> {
        try {
            const response =
                await api.get<StatusResponse>("/health");

            return (
                response.success &&
                response.data.status === "operational"
            );
        } catch {
            return false;
        }
    }

    /**
     * Measures endpoint latency.
     */
    async ping(): Promise<number> {
        const start = performance.now();

        await this.health();

        return Math.round(
            performance.now() - start,
        );
    }
}

export const statusService =
    new StatusService();