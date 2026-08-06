import * as React from "react";

import { cn } from "@/lib";

type GridColumns =
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6;

type GridGap =
    | "none"
    | "sm"
    | "md"
    | "lg"
    | "xl";

export interface GridProps
    extends React.HTMLAttributes<HTMLDivElement> {
    cols?: GridColumns;

    gap?: GridGap;
}

const columnClasses: Record<GridColumns, string> = {
    1: "grid-cols-1",

    2: "grid-cols-1 md:grid-cols-2",

    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",

    4: "grid-cols-1 md:grid-cols-2 xl:grid-cols-4",

    5: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",

    6: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",
};

const gapClasses: Record<GridGap, string> = {
    none: "gap-0",

    sm: "gap-3",

    md: "gap-6",

    lg: "gap-8",

    xl: "gap-12",
};

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
    (
        {
            cols = 3,

            gap = "md",

            className,

            children,

            ...props
        },
        ref
    ) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "grid",

                    columnClasses[cols],

                    gapClasses[gap],

                    className
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
);

Grid.displayName = "Grid";

export { Grid };