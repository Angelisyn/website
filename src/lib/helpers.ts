/**
 * -----------------------------------------------------------------------------
 * Angelisyn
 * Helper Functions
 * -----------------------------------------------------------------------------
 *
 * Generic helper functions used across the application.
 */

import { company } from "@/config/company";

/* -------------------------------------------------------------------------- */
/* Environment                                                                 */
/* -------------------------------------------------------------------------- */

export const isBrowser = (): boolean => typeof window !== "undefined";

export const isServer = (): boolean => !isBrowser();

/* -------------------------------------------------------------------------- */
/* Company                                                                     */
/* -------------------------------------------------------------------------- */

export const getCompanyName = (): string => company.name;

export const getCompanyTagline = (): string => company.tagline;

export const getCompanyDescription = (): string => company.description;

/* -------------------------------------------------------------------------- */
/* URL Helpers                                                                 */
/* -------------------------------------------------------------------------- */

export function buildUrl(path = ""): string {
    const base = company.url.replace(/\/$/, "");

    if (!path) return base;

    return `${base}/${path.replace(/^\//, "")}`;
}

export function buildAppUrl(path = ""): string {
    const base = company.appUrl.replace(/\/$/, "");

    if (!path) return base;

    return `${base}/${path.replace(/^\//, "")}`;
}

export function buildDocsUrl(path = ""): string {
    const base = company.docsUrl.replace(/\/$/, "");

    if (!path) return base;

    return `${base}/${path.replace(/^\//, "")}`;
}

/* -------------------------------------------------------------------------- */
/* Device                                                                      */
/* -------------------------------------------------------------------------- */

export function isMobile(width = 768): boolean {
    if (!isBrowser()) return false;

    return window.innerWidth < width;
}

export function isTablet(): boolean {
    if (!isBrowser()) return false;

    return window.innerWidth >= 768 && window.innerWidth < 1024;
}

export function isDesktop(): boolean {
    if (!isBrowser()) return false;

    return window.innerWidth >= 1024;
}

/* -------------------------------------------------------------------------- */
/* Theme                                                                       */
/* -------------------------------------------------------------------------- */

export function prefersDarkMode(): boolean {
    if (!isBrowser()) return true;

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

/* -------------------------------------------------------------------------- */
/* Scroll                                                                      */
/* -------------------------------------------------------------------------- */

export function scrollToTop(
    behavior: ScrollBehavior = "smooth"
): void {
    if (!isBrowser()) return;

    window.scrollTo({
        top: 0,
        behavior,
    });
}

export function scrollToElement(
    id: string,
    behavior: ScrollBehavior = "smooth"
): void {
    if (!isBrowser()) return;

    const element = document.getElementById(id);

    if (!element) return;

    element.scrollIntoView({
        behavior,
        block: "start",
    });
}

/* -------------------------------------------------------------------------- */
/* Browser                                                                     */
/* -------------------------------------------------------------------------- */

export function openExternal(url: string): void {
    if (!isBrowser()) return;

    window.open(url, "_blank", "noopener,noreferrer");
}

/* -------------------------------------------------------------------------- */
/* Email                                                                       */
/* -------------------------------------------------------------------------- */

export function createMailto(
    email: string,
    subject?: string
): string {
    if (!subject) {
        return `mailto:${email}`;
    }

    return `mailto:${email}?subject=${encodeURIComponent(subject)}`;
}

/* -------------------------------------------------------------------------- */
/* Async                                                                       */
/* -------------------------------------------------------------------------- */

export async function wait(milliseconds: number): Promise<void> {
    await new Promise((resolve) => {
        setTimeout(resolve, milliseconds);
    });
}