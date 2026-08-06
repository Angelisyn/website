// src/constants/api.ts

/**
 * Angelisyn Website
 * API Constants
 */

export const API_CONFIG = {
    VERSION: "v1",
    BASE_PATH: "/api",
    DEFAULT_TIMEOUT: 10000,
    MAX_RETRIES: 3,
    RETRY_DELAY: 1000,
    CACHE_TTL: 300,
} as const;

export const API_ENDPOINTS = {
    CONTACT: "/api/contact",
    NEWSLETTER: "/api/newsletter",
    HEALTH: "/api/health",
    STATUS: "/api/status",
    SEARCH: "/api/search",
    FEEDBACK: "/api/feedback",
} as const;

export const API_METHODS = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    PATCH: "PATCH",
    DELETE: "DELETE",
    OPTIONS: "OPTIONS",
    HEAD: "HEAD",
} as const;

export const HTTP_STATUS = {
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NO_CONTENT: 204,

    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    CONFLICT: 409,
    UNPROCESSABLE_ENTITY: 422,
    TOO_MANY_REQUESTS: 429,

    INTERNAL_SERVER_ERROR: 500,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504,
} as const;

export const CONTENT_TYPES = {
    JSON: "application/json",
    FORM_DATA: "multipart/form-data",
    FORM_URLENCODED: "application/x-www-form-urlencoded",
    TEXT: "text/plain",
} as const;

export const REQUEST_HEADERS = {
    CONTENT_TYPE: "Content-Type",
    ACCEPT: "Accept",
    AUTHORIZATION: "Authorization",
    CACHE_CONTROL: "Cache-Control",
    X_REQUEST_ID: "X-Request-Id",
} as const;

export const CACHE_CONTROL = {
    NO_STORE: "no-store",
    NO_CACHE: "no-cache",
    PUBLIC: "public",
    PRIVATE: "private",
    IMMUTABLE: "public, max-age=31536000, immutable",
} as const;

export const RATE_LIMITS = {
    CONTACT_FORM: {
        requests: 5,
        windowSeconds: 300,
    },
    NEWSLETTER: {
        requests: 10,
        windowSeconds: 300,
    },
    SEARCH: {
        requests: 60,
        windowSeconds: 60,
    },
} as const;

export const ERROR_CODES = {
    UNKNOWN_ERROR: "UNKNOWN_ERROR",
    VALIDATION_ERROR: "VALIDATION_ERROR",
    BAD_REQUEST: "BAD_REQUEST",
    UNAUTHORIZED: "UNAUTHORIZED",
    FORBIDDEN: "FORBIDDEN",
    NOT_FOUND: "NOT_FOUND",
    RATE_LIMITED: "RATE_LIMITED",
    INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR",
} as const;

export type ApiEndpoint =
    (typeof API_ENDPOINTS)[keyof typeof API_ENDPOINTS];

export type HttpMethod =
    (typeof API_METHODS)[keyof typeof API_METHODS];

export type HttpStatus =
    (typeof HTTP_STATUS)[keyof typeof HTTP_STATUS];

export type ContentType =
    (typeof CONTENT_TYPES)[keyof typeof CONTENT_TYPES];

export type ErrorCode =
    (typeof ERROR_CODES)[keyof typeof ERROR_CODES];