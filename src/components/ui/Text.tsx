import * as React from "react";

import { cn } from "@/lib";

type TextVariant =
    | "default"
    | "lead"
    | "large"
    | "small"
    | "muted"
    | "caption"
    | "label";

export interface TextProps
    extends React.HTMLAttributes<HTMLParagraphElement> {
    as?:
    | "p"
    | "span"
    | "div";

    variant?: TextVariant;
}

const variants: Record<TextVariant, string> = {
    default: cn(
        "text-base",
        "leading-7",
        "text-zinc-300"
    ),

    lead: cn(
        "text-xl",
        "leading-8",
        "text-zinc-400",
        "md:text-2xl"
    ),

    large: cn(
        "text-lg",
        "leading-8",
        "font-medium",
        "text-zinc-200"
    ),

    small: cn(
        "text-sm",
        "leading-6",
        "text-zinc-400"
    ),

    muted: cn(
        "text-sm",
        "leading-6",
        "text-zinc-500"
    ),

    caption: cn(
        "text-xs",
        "uppercase",
        "tracking-wider",
        "font-medium",
        "text-zinc-500"
    ),

    label: cn(
        "text-sm",
        "font-medium",
        "text-zinc-200"
    ),
};

const Text = React.forwardRef<
    HTMLParagraphElement,
    TextProps
>(
    (
        {
            as = "p",

            variant = "default",

            className,

            children,

            ...props
        },
        ref
    ) => {
        const Component = as;

        return (
            <Component
                ref={ref}
                className={cn(
                    variants[variant],

                    className
                )}
                {...props}
            >
                {children}
            </Component>
        );
    }
);

Text.displayName = "Text";

export { Text };