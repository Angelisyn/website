// src/utils/cn.ts

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind CSS classes while resolving conflicts.
 *
 * @example
 * cn("p-4", "text-sm", isActive && "bg-blue-600")
 *
 * @example
 * cn("px-2", "px-4") // => "px-4"
 */
export function cn(...inputs: ClassValue[]): string {
    return twMerge(clsx(inputs));
}

export default cn;