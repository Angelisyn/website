"use client";

import * as React from "react";
import Link from "next/link";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib";

const buttonVariants = cva(
    [
        "inline-flex",
        "items-center",
        "justify-center",
        "gap-2",
        "rounded-xl",
        "text-sm",
        "font-medium",
        "transition-all",
        "duration-300",
        "focus-visible:outline-none",
        "focus-visible:ring-2",
        "focus-visible:ring-cyan-500",
        "focus-visible:ring-offset-2",
        "disabled:pointer-events-none",
        "disabled:opacity-50",
        "select-none",
    ],
    {
        variants: {
            variant: {
                default:
                    "bg-cyan-500 text-white hover:bg-cyan-400",

                secondary:
                    "bg-zinc-900 text-zinc-100 border border-zinc-800 hover:bg-zinc-800",

                outline:
                    "border border-zinc-700 bg-transparent hover:bg-zinc-900",

                ghost:
                    "hover:bg-zinc-900",

                destructive:
                    "bg-red-600 text-white hover:bg-red-500",

                link:
                    "underline-offset-4 hover:underline text-cyan-400",
            },

            size: {
                sm: "h-9 px-3",

                default: "h-11 px-5",

                lg: "h-12 px-7",

                icon: "h-11 w-11",
            },
        },

        defaultVariants: {
            variant: "default",

            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;

    href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            variant,
            size,
            asChild = false,
            href,
            ...props
        },
        ref
    ) => {
        if (href) {
            return (
                <Link
                    href={href}
                    className={cn(
                        buttonVariants({
                            variant,
                            size,
                        }),
                        className
                    )}
                >
                    {props.children}
                </Link>
            );
        }

        const Comp = asChild ? Slot : "button";

        return (
            <Comp
                ref={ref}
                className={cn(
                    buttonVariants({
                        variant,
                        size,
                    }),
                    className
                )}
                {...props}
            />
        );
    }
);

Button.displayName = "Button";

export { Button, buttonVariants };