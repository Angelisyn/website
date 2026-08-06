/**
 * -----------------------------------------------------------------------------
 * Angelisyn
 * Validation Schemas
 * -----------------------------------------------------------------------------
 */

import { z } from "zod";

/* -------------------------------------------------------------------------- */
/* Common Validators                                                           */
/* -------------------------------------------------------------------------- */

export const nameSchema = z
    .string()
    .trim()
    .min(2, "Name must contain at least 2 characters.")
    .max(100, "Name cannot exceed 100 characters.");

export const emailSchema = z
    .string()
    .trim()
    .email("Please enter a valid email address.");

export const subjectSchema = z
    .string()
    .trim()
    .min(3, "Subject must contain at least 3 characters.")
    .max(150, "Subject cannot exceed 150 characters.");

export const messageSchema = z
    .string()
    .trim()
    .min(10, "Message must contain at least 10 characters.")
    .max(5000, "Message cannot exceed 5000 characters.");

export const companySchema = z
    .string()
    .trim()
    .max(150)
    .optional();

export const urlSchema = z
    .string()
    .trim()
    .url("Invalid URL.")
    .optional()
    .or(z.literal(""));

/* -------------------------------------------------------------------------- */
/* Contact Form                                                                */
/* -------------------------------------------------------------------------- */

export const contactFormSchema = z.object({
    name: nameSchema,

    email: emailSchema,

    company: companySchema,

    subject: subjectSchema,

    message: messageSchema,
});

export type ContactForm = z.infer<typeof contactFormSchema>;

/* -------------------------------------------------------------------------- */
/* Newsletter                                                                  */
/* -------------------------------------------------------------------------- */

export const newsletterSchema = z.object({
    email: emailSchema,
});

export type NewsletterForm = z.infer<typeof newsletterSchema>;

/* -------------------------------------------------------------------------- */
/* Waitlist                                                                    */
/* -------------------------------------------------------------------------- */

export const waitlistSchema = z.object({
    name: nameSchema,

    email: emailSchema,

    company: companySchema,
});

export type WaitlistForm = z.infer<typeof waitlistSchema>;

/* -------------------------------------------------------------------------- */
/* Search                                                                       */
/* -------------------------------------------------------------------------- */

export const searchSchema = z.object({
    query: z
        .string()
        .trim()
        .min(1)
        .max(100),
});

export type SearchForm = z.infer<typeof searchSchema>;

/* -------------------------------------------------------------------------- */
/* Utility Validation                                                          */
/* -------------------------------------------------------------------------- */

export function validateEmail(email: string): boolean {
    return emailSchema.safeParse(email).success;
}

export function validateContactForm(
    data: unknown
) {
    return contactFormSchema.safeParse(data);
}

export function validateNewsletter(
    data: unknown
) {
    return newsletterSchema.safeParse(data);
}

export function validateWaitlist(
    data: unknown
) {
    return waitlistSchema.safeParse(data);
}