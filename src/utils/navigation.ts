// src/utils/navigation.ts

import {
    NAVIGATION,
    ROUTES,
} from "../constants";

export interface NavigationItem {
    readonly label: string;
    readonly href: string;
    readonly external?: boolean;
    readonly disabled?: boolean;
}

export function isActiveRoute(
    pathname: string,
    href: string,
): boolean {
    if (href === "/") {
        return pathname === "/";
    }

    return (
        pathname === href ||
        pathname.startsWith(`${href}/`)
    );
}

export function getNavigationItems(): readonly NavigationItem[] {
    return NAVIGATION;
}

export function findNavigationItem(
    href: string,
): NavigationItem | undefined {
    return NAVIGATION.find(
        (item) => item.href === href,
    );
}

export function getPreviousRoute(
    currentPath: string,
): NavigationItem | undefined {
    const index = NAVIGATION.findIndex(
        (item) => item.href === currentPath,
    );

    if (index <= 0) {
        return undefined;
    }

    return NAVIGATION[index - 1];
}

export function getNextRoute(
    currentPath: string,
): NavigationItem | undefined {
    const index = NAVIGATION.findIndex(
        (item) => item.href === currentPath,
    );

    if (
        index === -1 ||
        index === NAVIGATION.length - 1
    ) {
        return undefined;
    }

    return NAVIGATION[index + 1];
}

export function isValidRoute(
    path: string,
): boolean {
    return Object.values(ROUTES).includes(path);
}

export function normalizePath(
    path: string,
): string {
    if (!path.startsWith("/")) {
        path = `/${path}`;
    }

    if (
        path.length > 1 &&
        path.endsWith("/")
    ) {
        path = path.slice(0, -1);
    }

    return path;
}

export function joinPath(
    ...segments: readonly string[]
): string {
    return normalizePath(
        segments
            .filter(Boolean)
            .join("/")
            .replace(/\/+/g, "/"),
    );
}