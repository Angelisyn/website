import * as React from "react";

import { cn } from "@/lib";

export interface ContainerProps
    extends React.HTMLAttributes<HTMLDivElement> {
    as?: React.ElementType;

    fluid?: boolean;

    size?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
}

const sizeClasses = {
    sm: "max-w-3xl",

    md: "max-w-5xl",

    lg: "max-w-6xl",

    xl: "max-w-7xl",

    "2xl": "max-w-[90rem]",

    full: "max-w-full",
} as const;

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
    (
        {
            as: Component = "div",

            fluid = false,

            size = "xl",

            className,

            children,

            ...props
        },
        ref
    ) => {
        return (
            <Component
                ref={ref}
                className={cn(
                    "w-full",

                    "mx-auto",

                    fluid ? "px-4 md:px-6 lg:px-8" : "px-6 md:px-8 lg:px-10",

                    sizeClasses[size],

                    className
                )}
                {...props}
            >
                {children}
            </Component>
        );
    }
);

Container.displayName = "Container";

export { Container };