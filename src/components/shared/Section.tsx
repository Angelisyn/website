"use client";

import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "../../utils/cn";

export interface SectionProps extends ComponentPropsWithoutRef<"section"> {
    /**
     * Optional section identifier.
     */
    id?: string;

    /**
     * Section content.
     */
    children: ReactNode;

    /**
     * Constrains the content to the site's maximum width.
     *
     * @default true
     */
    contained?: boolean;

    /**
     * Vertical spacing.
     *
     * @default "default"
     */
    spacing?: "none" | "sm" | "default" | "lg";

    /**
     * Additional classes for the inner container.
     */
    containerClassName?: string;
}

const spacingClasses = {
    none: "",
    sm: "py-12 sm:py-16",
    default: "py-16 sm:py-20 lg:py-24",
    lg: "py-24 sm:py-28 lg:py-32",
} as const;

export function Section({
    id,
    children,
    className,
    containerClassName,
    contained = true,
    spacing = "default",
    ...props
}: SectionProps) {
    const content = contained ? (
        <div
            className={cn(
                "mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10",
                containerClassName
            )}
        >
            {children}
        </div>
    ) : (
        children
    );

    return (
        <section
            id={id}
            className={cn(spacingClasses[spacing], className)}
            {...props}
        >
            {content}
        </section>
    );
}

export default Section;