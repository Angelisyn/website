// src/validators/newsletter.ts

import {
    validateEmail,
    validateString,
    type ValidationResult,
} from "./common";

export interface NewsletterSubscription {
    readonly email: string;
    readonly firstName?: string;
    readonly lastName?: string;
    readonly source?: string;
}

export interface NewsletterValidationResult
    extends ValidationResult<NewsletterSubscription> { }

export function validateNewsletterSubscription(
    value: unknown,
): NewsletterValidationResult {
    if (
        typeof value !== "object" ||
        value === null ||
        Array.isArray(value)
    ) {
        return {
            success: false,
            errors: ["Newsletter subscription payload is invalid."],
        };
    }

    const data = value as Record<string, unknown>;

    const email = validateEmail(
        data.email,
        "Email",
    );

    const errors: string[] = [...email.errors];

    const firstName =
        data.firstName === undefined ||
            data.firstName === null ||
            data.firstName === ""
            ? undefined
            : validateString(
                data.firstName,
                "First name",
                {
                    required: false,
                    minLength: 2,
                    maxLength: 50,
                },
            );

    if (firstName && !firstName.success) {
        errors.push(...firstName.errors);
    }

    const lastName =
        data.lastName === undefined ||
            data.lastName === null ||
            data.lastName === ""
            ? undefined
            : validateString(
                data.lastName,
                "Last name",
                {
                    required: false,
                    minLength: 2,
                    maxLength: 50,
                },
            );

    if (lastName && !lastName.success) {
        errors.push(...lastName.errors);
    }

    const source =
        data.source === undefined ||
            data.source === null ||
            data.source === ""
            ? undefined
            : validateString(
                data.source,
                "Source",
                {
                    required: false,
                    maxLength: 100,
                },
            );

    if (source && !source.success) {
        errors.push(...source.errors);
    }

    if (errors.length > 0) {
        return {
            success: false,
            errors,
        };
    }

    return {
        success: true,
        data: {
            email: email.data!,
            firstName: firstName?.data,
            lastName: lastName?.data,
            source: source?.data,
        },
        errors: [],
    };
}