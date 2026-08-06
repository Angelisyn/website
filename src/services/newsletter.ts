// src/services/newsletter.ts

import { api } from "./api";

export interface NewsletterSubscription {
    readonly email: string;
    readonly firstName?: string;
    readonly lastName?: string;
    readonly source?: string;
}

export interface NewsletterResponse {
    readonly success: boolean;
    readonly message: string;
}

export interface NewsletterValidationResult {
    readonly valid: boolean;
    readonly errors: {
        readonly email?: string;
    };
}

export class NewsletterService {
    /**
     * Validates newsletter subscription input.
     */
    validate(
        data: NewsletterSubscription,
    ): NewsletterValidationResult {
        const errors: NewsletterValidationResult["errors"] = {};

        const email = data.email.trim();

        if (!email) {
            errors.email = "Email is required.";
        } else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
        ) {
            errors.email = "Invalid email address.";
        }

        return {
            valid: Object.keys(errors).length === 0,
            errors,
        };
    }

    /**
     * Subscribes a user to the newsletter.
     */
    async subscribe(
        data: NewsletterSubscription,
    ): Promise<NewsletterResponse> {
        const validation = this.validate(data);

        if (!validation.valid) {
            throw new Error(
                validation.errors.email ??
                "Newsletter validation failed.",
            );
        }

        const response =
            await api.post<NewsletterResponse>(
                "/newsletter",
                {
                    ...data,
                    email: data.email.trim().toLowerCase(),
                },
            );

        if (!response.success || response.error) {
            throw new Error(
                response.error?.message ??
                "Unable to subscribe to the newsletter.",
            );
        }

        return response.data;
    }

    /**
     * Unsubscribes a user from the newsletter.
     */
    async unsubscribe(
        email: string,
    ): Promise<NewsletterResponse> {
        const normalizedEmail = email.trim().toLowerCase();

        if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)
        ) {
            throw new Error("Invalid email address.");
        }

        const response =
            await api.delete<NewsletterResponse>(
                `/newsletter?email=${encodeURIComponent(
                    normalizedEmail,
                )}`,
            );

        if (!response.success || response.error) {
            throw new Error(
                response.error?.message ??
                "Unable to unsubscribe from the newsletter.",
            );
        }

        return response.data;
    }
}

export const newsletterService =
    new NewsletterService();