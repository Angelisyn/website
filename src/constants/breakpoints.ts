// src/constants/breakpoints.ts

/**
 * Responsive Design Constants
 * Angelisyn Website
 */

export const BREAKPOINTS = {
    xs: 0,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536,
} as const;

export const BREAKPOINT_QUERIES = {
    xs: "(min-width: 0px)",
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
    xl: "(min-width: 1280px)",
    "2xl": "(min-width: 1536px)",
} as const;

export const CONTAINER_WIDTHS = {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1400px",
} as const;

export const MAX_CONTENT_WIDTH = "1280px";

export const SIDEBAR_WIDTH = {
    expanded: 280,
    collapsed: 80,
} as const;

export const HEADER_HEIGHT = {
    desktop: 72,
    mobile: 64,
} as const;

export const FOOTER_MIN_HEIGHT = 240;

export const GRID_COLUMNS = {
    mobile: 4,
    tablet: 8,
    desktop: 12,
} as const;

export const SPACING_SCALE = {
    section: {
        mobile: "py-16",
        tablet: "py-20",
        desktop: "py-24",
    },
    container: {
        mobile: "px-4",
        tablet: "px-6",
        desktop: "px-8",
    },
} as const;

export const Z_INDEX = {
    hide: -1,
    base: 0,
    dropdown: 50,
    sticky: 100,
    overlay: 200,
    drawer: 300,
    modal: 400,
    popover: 500,
    tooltip: 600,
    notification: 700,
} as const;

export const ICON_SIZES = {
    xs: 12,
    sm: 16,
    md: 20,
    lg: 24,
    xl: 32,
    "2xl": 40,
} as const;

export const BORDER_RADIUS = {
    none: "0",
    sm: "0.25rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
    full: "9999px",
} as const;

export type Breakpoint = keyof typeof BREAKPOINTS;
export type BreakpointValue = (typeof BREAKPOINTS)[Breakpoint];
export type BreakpointQuery = (typeof BREAKPOINT_QUERIES)[Breakpoint];
export type ContainerWidth = keyof typeof CONTAINER_WIDTHS;
export type ZIndex = keyof typeof Z_INDEX;
export type IconSize = keyof typeof ICON_SIZES;
export type BorderRadius = keyof typeof BORDER_RADIUS;