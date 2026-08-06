// src/services/contact.ts

import { api } from "./api";

export interface ContactFormData {
    readonly firstName: string;
    readonly lastName: string;
    readonly email: string;
    readonly company?: string;
    readonly subject: string;
    readonly message: string;
}

export interface ContactResponse {
    readonly success: boolean;
    readonly message: string;
}

export interface ContactValidationResult {
    readonly valid: boolean;
    readonly errors: Partial<
        Record<keyof ContactFormData, string>
    >;
}

export class ContactService {
    /**
     * Validate contact form data before submission.
     */
    validate(
        data: ContactFormData,
    ): ContactValidationResult {
        const errors: ContactValidationResult["errors"] = {};

        if (!data.firstName.trim()) {
            errors.firstName = "First name is required.";
        }

        if (!data.lastName.trim()) {
            errors.lastName = "Last name is required.";
        }

        if (!data.email.trim()) {
            errors.email = "Email is required.";
        } else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)
        ) {
            errors.email = "Invalid email address.";
        }

        if (!data.subject.trim()) {
            errors.subject = "Subject is required.";
        }

        if (!data.message.trim()) {
            errors.message = "Message is required.";
        } else if (data.message.trim().length < 10) {
            errors.message =
                "Message must contain at least 10 characters.";
        }

        return {
            valid: Object.keys(errors).length === 0,
            errors,
        };
    }

    /**
     * Submit the contact form.
     */
    async submit(
        data: ContactFormData,
    ): Promise<ContactResponse> {
        const validation = this.validate(data);

        if (!validation.valid) {
            throw new Error(
                "Contact form validation failed.",
            );
        }

        const response =
            await api.post<ContactResponse>(
                "/contact",
                data,
            );

        if (!response.success || response.error) {
            throw new Error(
                response.error?.message ??
                "Failed to submit contact form.",
            );
        }

        return response.data;
    }
}

export const contactService =
    new ContactService();