import * as React from "react";

import { cn } from "@/lib";

type HeadingLevel =
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6;

export interface HeadingProps
    extends React.HTMLAttributes<HTMLHeadingElement> {
    as?: HeadingLevel;

    gradient?: boolean;

    balance?: boolean;
}

const styles: Record<HeadingLevel, string> = {
    1: cn(
        "scroll-m-20",
        "text-5xl",
        "font-bold",
        "tracking-tight",
        "leading-tight",
        "text-balance",
        "md:text-6xl",
        "lg:text-7xl"
    ),

    2: cn(
        "scroll-m-20",
        "text-4xl",
        "font-bold",
        "tracking-tight",
        "text-balance",
        "md:text-5xl"
    ),

    3: cn(
        "scroll-m-20",
        "text-3xl",
        "font-semibold",
        "tracking-tight",
        "md:text-4xl"
    ),

    4: cn(
        "scroll-m-20",
        "text-2xl",
        "font-semibold",
        "tracking-tight"
    ),

    5: cn(
        "scroll-m-20",
        "text-xl",
        "font-semibold"
    ),

    6: cn(
        "scroll-m-20",
        "text-lg",
        "font-semibold"
    ),
};

const Heading = React.forwardRef<
    HTMLHeadingElement,
    HeadingProps
>(
    (
        {
            as = 2,

            gradient = false,

            balance = true,

            className,

            children,

            ...props
        },
        ref
    ) => {
        const Component = `h${as}` as keyof JSX.IntrinsicElements;

        return (
            <Component
                ref={ref}
                className={cn(
                    styles[as],

                    "text-zinc-100",

                    balance && "text-balance",

                    gradient &&
                    "bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent",

                    className
                )}
                {...props}
            >
                {children}
            </Component>
        );
    }
);

Heading.displayName = "Heading";

export { Heading };