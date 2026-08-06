// src/validators/contact.ts

import {
    mergeValidationResults,
    validateEmail,
    validateString,
    type ValidationResult,
} from "./common";

export interface ContactFormData {
    readonly firstName: string;
    readonly lastName: string;
    readonly email: string;
    readonly company?: string;
    readonly subject: string;
    readonly message: string;
}

export interface ContactValidationResult
    extends ValidationResult<ContactFormData> { }

export function validateContactForm(
    value: unknown,
): ContactValidationResult {
    if (
        typeof value !== "object" ||
        value === null ||
        Array.isArray(value)
    ) {
        return {
            success: false,
            errors: ["Contact form payload is invalid."],
        };
    }

    const data = value as Record<string, unknown>;

    const firstName = validateString(
        data.firstName,
        "First name",
        {
            minLength: 2,
            maxLength: 50,
        },
    );

    const lastName = validateString(
        data.lastName,
        "Last name",
        {
            minLength: 2,
            maxLength: 50,
        },
    );

    const email = validateEmail(
        data.email,
        "Email",
    );

    const company =
        data.company === undefined ||
            data.company === null ||
            data.company === ""
            ? {
                success: true,
                data: "",
                errors: [],
            }
            : validateString(
                data.company,
                "Company",
                {
                    required: false,
                    maxLength: 100,
                },
            );

    const subject = validateString(
        data.subject,
        "Subject",
        {
            minLength: 5,
            maxLength: 120,
        },
    );

    const message = validateString(
        data.message,
        "Message",
        {
            minLength: 10,
            maxLength: 5000,
        },
    );

    const merged = mergeValidationResults(
        firstName,
        lastName,
        email,
        company,
        subject,
        message,
    );

    if (!merged.success) {
        return merged;
    }

    return {
        success: true,
        data: {
            firstName: firstName.data!,
            lastName: lastName.data!,
            email: email.data!,
            company: company.data || undefined,
            subject: subject.data!,
            message: message.data!,
        },
        errors: [],
    };
}