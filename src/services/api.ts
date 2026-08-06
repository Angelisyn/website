// src/services/api.ts

import { API_CONFIG, API_ENDPOINTS } from "../constants";

export type HttpMethod =
    | "GET"
    | "POST"
    | "PUT"
    | "PATCH"
    | "DELETE";

export interface ApiError {
    readonly status: number;
    readonly message: string;
    readonly details?: unknown;
}

export interface ApiResponse<T> {
    readonly success: boolean;
    readonly data: T;
    readonly error?: ApiError;
}

export interface RequestOptions
    extends Omit<RequestInit, "body" | "method"> {
    readonly method?: HttpMethod;
    readonly body?: unknown;
    readonly timeout?: number;
}

export class ApiClient {
    private readonly baseUrl: string;

    constructor(baseUrl = API_CONFIG.BASE_PATH) {
        this.baseUrl = baseUrl;
    }

    async request<T>(
        endpoint: string,
        options: RequestOptions = {},
    ): Promise<ApiResponse<T>> {
        const {
            method = "GET",
            body,
            timeout = API_CONFIG.DEFAULT_TIMEOUT,
            headers,
            ...init
        } = options;

        const controller = new AbortController();

        const timer = setTimeout(() => {
            controller.abort();
        }, timeout);

        try {
            const response = await fetch(`${this.baseUrl}${endpoint}`, {
                ...init,
                method,
                signal: controller.signal,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    ...headers,
                },
                body:
                    body !== undefined ? JSON.stringify(body) : undefined,
            });

            clearTimeout(timer);

            const payload = (await response.json()) as T;

            if (!response.ok) {
                return {
                    success: false,
                    data: payload,
                    error: {
                        status: response.status,
                        message: response.statusText,
                    },
                };
            }

            return {
                success: true,
                data: payload,
            };
        } catch (error) {
            clearTimeout(timer);

            return {
                success: false,
                data: {} as T,
                error: {
                    status: 500,
                    message:
                        error instanceof Error
                            ? error.message
                            : "Unknown API error.",
                },
            };
        }
    }

    get<T>(
        endpoint: string,
        options?: Omit<RequestOptions, "method">,
    ) {
        return this.request<T>(endpoint, {
            ...options,
            method: "GET",
        });
    }

    post<T>(
        endpoint: string,
        body?: unknown,
        options?: Omit<RequestOptions, "method" | "body">,
    ) {
        return this.request<T>(endpoint, {
            ...options,
            method: "POST",
            body,
        });
    }

    put<T>(
        endpoint: string,
        body?: unknown,
        options?: Omit<RequestOptions, "method" | "body">,
    ) {
        return this.request<T>(endpoint, {
            ...options,
            method: "PUT",
            body,
        });
    }

    patch<T>(
        endpoint: string,
        body?: unknown,
        options?: Omit<RequestOptions, "method" | "body">,
    ) {
        return this.request<T>(endpoint, {
            ...options,
            method: "PATCH",
            body,
        });
    }

    delete<T>(
        endpoint: string,
        options?: Omit<RequestOptions, "method">,
    ) {
        return this.request<T>(endpoint, {
            ...options,
            method: "DELETE",
        });
    }
}

export const api = new ApiClient();

export const apiEndpoints = {
    contact: API_ENDPOINTS.CONTACT,
    newsletter: API_ENDPOINTS.NEWSLETTER,
    health: API_ENDPOINTS.HEALTH,
    status: API_ENDPOINTS.STATUS,
    search: API_ENDPOINTS.SEARCH,
    feedback: API_ENDPOINTS.FEEDBACK,
} as const;