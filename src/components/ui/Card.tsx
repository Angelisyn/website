import * as React from "react";

import { cn } from "@/lib";

/* -------------------------------------------------------------------------- */
/* Card                                                                        */
/* -------------------------------------------------------------------------- */

export interface CardProps
    extends React.HTMLAttributes<HTMLDivElement> { }

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "rounded-2xl",
                    "border",
                    "border-zinc-800",
                    "bg-zinc-950/60",
                    "backdrop-blur-xl",
                    "shadow-sm",
                    "transition-all",
                    "duration-300",
                    "hover:border-cyan-500/30",
                    "hover:shadow-cyan-500/5",
                    className
                )}
                {...props}
            />
        );
    }
);

Card.displayName = "Card";

/* -------------------------------------------------------------------------- */
/* Card Header                                                                 */
/* -------------------------------------------------------------------------- */

export interface CardHeaderProps
    extends React.HTMLAttributes<HTMLDivElement> { }

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
    ({ className, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "flex",
                    "flex-col",
                    "space-y-2",
                    "p-6",
                    className
                )}
                {...props}
            />
        );
    }
);

CardHeader.displayName = "CardHeader";

/* -------------------------------------------------------------------------- */
/* Card Title                                                                  */
/* -------------------------------------------------------------------------- */

export interface CardTitleProps
    extends React.HTMLAttributes<HTMLHeadingElement> { }

const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
    ({ className, ...props }, ref) => {
        return (
            <h3
                ref={ref}
                className={cn(
                    "text-xl",
                    "font-semibold",
                    "tracking-tight",
                    "text-zinc-100",
                    className
                )}
                {...props}
            />
        );
    }
);

CardTitle.displayName = "CardTitle";

/* -------------------------------------------------------------------------- */
/* Card Description                                                            */
/* -------------------------------------------------------------------------- */

export interface CardDescriptionProps
    extends React.HTMLAttributes<HTMLParagraphElement> { }

const CardDescription = React.forwardRef<
    HTMLParagraphElement,
    CardDescriptionProps
>(({ className, ...props }, ref) => {
    return (
        <p
            ref={ref}
            className={cn(
                "text-sm",
                "leading-7",
                "text-zinc-400",
                className
            )}
            {...props}
        />
    );
});

CardDescription.displayName = "CardDescription";

/* -------------------------------------------------------------------------- */
/* Card Content                                                                */
/* -------------------------------------------------------------------------- */

export interface CardContentProps
    extends React.HTMLAttributes<HTMLDivElement> { }

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
    ({ className, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "px-6",
                    "pb-6",
                    className
                )}
                {...props}
            />
        );
    }
);

CardContent.displayName = "CardContent";

/* -------------------------------------------------------------------------- */
/* Card Footer                                                                 */
/* -------------------------------------------------------------------------- */

export interface CardFooterProps
    extends React.HTMLAttributes<HTMLDivElement> { }

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
    ({ className, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "flex",
                    "items-center",
                    "justify-between",
                    "gap-4",
                    "border-t",
                    "border-zinc-800",
                    "px-6",
                    "py-5",
                    className
                )}
                {...props}
            />
        );
    }
);

CardFooter.displayName = "CardFooter";

/* -------------------------------------------------------------------------- */
/* Exports                                                                     */
/* -------------------------------------------------------------------------- */

export {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
};