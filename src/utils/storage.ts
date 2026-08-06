// src/utils/storage.ts

/**
 * Storage utilities for the Angelisyn website.
 */

export type StorageType = "local" | "session";

export interface StorageOptions {
    readonly storage?: StorageType;
}

const isBrowser = (): boolean =>
    typeof window !== "undefined";

function getStorage(type: StorageType): Storage {
    return type === "session"
        ? window.sessionStorage
        : window.localStorage;
}

export function isStorageAvailable(
    type: StorageType = "local",
): boolean {
    if (!isBrowser()) {
        return false;
    }

    try {
        const storage = getStorage(type);
        const key = "__angelisyn_storage_test__";

        storage.setItem(key, key);
        storage.removeItem(key);

        return true;
    } catch {
        return false;
    }
}

export function setStorageItem<T>(
    key: string,
    value: T,
    options: StorageOptions = {},
): boolean {
    const { storage = "local" } = options;

    if (!isStorageAvailable(storage)) {
        return false;
    }

    try {
        getStorage(storage).setItem(
            key,
            JSON.stringify(value),
        );

        return true;
    } catch {
        return false;
    }
}

export function getStorageItem<T>(
    key: string,
    defaultValue: T,
    options: StorageOptions = {},
): T {
    const { storage = "local" } = options;

    if (!isStorageAvailable(storage)) {
        return defaultValue;
    }

    try {
        const value = getStorage(storage).getItem(key);

        if (value === null) {
            return defaultValue;
        }

        return JSON.parse(value) as T;
    } catch {
        return defaultValue;
    }
}

export function removeStorageItem(
    key: string,
    options: StorageOptions = {},
): boolean {
    const { storage = "local" } = options;

    if (!isStorageAvailable(storage)) {
        return false;
    }

    try {
        getStorage(storage).removeItem(key);

        return true;
    } catch {
        return false;
    }
}

export function clearStorage(
    options: StorageOptions = {},
): boolean {
    const { storage = "local" } = options;

    if (!isStorageAvailable(storage)) {
        return false;
    }

    try {
        getStorage(storage).clear();

        return true;
    } catch {
        return false;
    }
}