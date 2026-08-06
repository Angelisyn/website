// src/validators/common.ts

export interface ValidationResult<T = unknown> {
    readonly success: boolean;
    readonly data?: T;
    readonly errors: readonly string[];
}

export interface StringValidationOptions {
    readonly required?: boolean;
    readonly minLength?: number;
    readonly maxLength?: number;
    readonly trim?: boolean;
}

const EMAIL_PATTERN =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const URL_PATTERN =
    /^https?:\/\/([\w-]+\.)+[\w-]+(:\d+)?(\/.*)?$/i;

export function isNonEmptyString(
    value: unknown,
): value is string {
    return (
        typeof value === "string" &&
        value.trim().length > 0
    );
}

export function isValidEmail(
    value: string,
): boolean {
    return EMAIL_PATTERN.test(value);
}

export function isValidUrl(
    value: string,
): boolean {
    return URL_PATTERN.test(value);
}

export function validateString(
    value: unknown,
    field: string,
    options: StringValidationOptions = {},
): ValidationResult<string> {
    const {
        required = true,
        minLength,
        maxLength,
        trim = true,
    } = options;

    const errors: string[] = [];

    if (value == null) {
        if (required) {
            errors.push(`${field} is required.`);
        }

        return {
            success: errors.length === 0,
            data: "",
            errors,
        };
    }

    if (typeof value !== "string") {
        return {
            success: false,
            errors: [`${field} must be a string.`],
        };
    }

    const normalized = trim
        ? value.trim()
        : value;

    if (required && normalized.length === 0) {
        errors.push(`${field} is required.`);
    }

    if (
        minLength !== undefined &&
        normalized.length < minLength
    ) {
        errors.push(
            `${field} must be at least ${minLength} characters.`,
        );
    }

    if (
        maxLength !== undefined &&
        normalized.length > maxLength
    ) {
        errors.push(
            `${field} must not exceed ${maxLength} characters.`,
        );
    }

    return {
        success: errors.length === 0,
        data: normalized,
        errors,
    };
}

export function validateEmail(
    value: unknown,
    field = "Email",
): ValidationResult<string> {
    const result = validateString(
        value,
        field,
        {
            minLength: 5,
            maxLength: 320,
        },
    );

    if (!result.success) {
        return result;
    }

    if (
        !result.data ||
        !isValidEmail(result.data)
    ) {
        return {
            success: false,
            errors: [
                `${field} is not a valid email address.`,
            ],
        };
    }

    return result;
}

export function validateUrl(
    value: unknown,
    field = "URL",
): ValidationResult<string> {
    const result = validateString(
        value,
        field,
    );

    if (!result.success) {
        return result;
    }

    if (
        !result.data ||
        !isValidUrl(result.data)
    ) {
        return {
            success: false,
            errors: [`${field} is not a valid URL.`],
        };
    }

    return result;
}

export function mergeValidationResults(
    ...results: readonly ValidationResult[]
): ValidationResult {
    const errors = results.flatMap(
        (result) => result.errors,
    );

    return {
        success: errors.length === 0,
        errors,
    };
}