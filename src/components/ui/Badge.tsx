import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib";

const badgeVariants = cva(
    [
        "inline-flex",
        "items-center",
        "justify-center",
        "rounded-full",
        "border",
        "px-3",
        "py-1",
        "text-xs",
        "font-medium",
        "transition-colors",
        "select-none",
        "whitespace-nowrap",
    ],
    {
        variants: {
            variant: {
                default:
                    "border-cyan-500/30 bg-cyan-500/10 text-cyan-400",

                secondary:
                    "border-zinc-800 bg-zinc-900 text-zinc-300",

                success:
                    "border-green-500/30 bg-green-500/10 text-green-400",

                warning:
                    "border-yellow-500/30 bg-yellow-500/10 text-yellow-400",

                destructive:
                    "border-red-500/30 bg-red-500/10 text-red-400",

                outline:
                    "border-zinc-700 bg-transparent text-zinc-300",
            },
        },

        defaultVariants: {
            variant: "default",
        },
    }
);

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> { }

function Badge({
    className,
    variant,
    ...props
}: BadgeProps) {
    return (
        <div
            className={cn(
                badgeVariants({
                    variant,
                }),
                className
            )}
            {...props}
        />
    );
}

export { Badge, badgeVariants };