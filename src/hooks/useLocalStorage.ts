// src/hooks/useLocalStorage.ts

"use client";

import { Dispatch, SetStateAction, useCallback, useEffect, useState } from "react";

export interface UseLocalStorageOptions<T> {
    readonly serializer?: (value: T) => string;
    readonly deserializer?: (value: string) => T;
    readonly initializeWithValue?: boolean;
}

const IS_SERVER = typeof window === "undefined";

export function useLocalStorage<T>(
    key: string,
    initialValue: T,
    options: UseLocalStorageOptions<T> = {},
): readonly [T, Dispatch<SetStateAction<T>>, () => void] {
    const {
        serializer = JSON.stringify,
        deserializer = JSON.parse as (value: string) => T,
        initializeWithValue = true,
    } = options;

    const readValue = useCallback((): T => {
        if (IS_SERVER) {
            return initialValue;
        }

        try {
            const item = window.localStorage.getItem(key);

            if (item === null) {
                return initialValue;
            }

            return deserializer(item);
        } catch {
            return initialValue;
        }
    }, [deserializer, initialValue, key]);

    const [storedValue, setStoredValue] = useState<T>(() =>
        initializeWithValue ? readValue() : initialValue,
    );

    const setValue: Dispatch<SetStateAction<T>> = useCallback(
        (value) => {
            if (IS_SERVER) {
                return;
            }

            try {
                const newValue =
                    value instanceof Function ? value(readValue()) : value;

                window.localStorage.setItem(key, serializer(newValue));
                setStoredValue(newValue);

                window.dispatchEvent(
                    new StorageEvent("storage", {
                        key,
                        newValue: serializer(newValue),
                        storageArea: window.localStorage,
                    }),
                );
            } catch {
                // Ignore storage write errors.
            }
        },
        [key, readValue, serializer],
    );

    const remove = useCallback(() => {
        if (IS_SERVER) {
            return;
        }

        try {
            window.localStorage.removeItem(key);
            setStoredValue(initialValue);

            window.dispatchEvent(
                new StorageEvent("storage", {
                    key,
                    newValue: null,
                    storageArea: window.localStorage,
                }),
            );
        } catch {
            // Ignore storage removal errors.
        }
    }, [initialValue, key]);

    useEffect(() => {
        setStoredValue(readValue());
    }, [readValue]);

    useEffect(() => {
        if (IS_SERVER) {
            return;
        }

        const handleStorage = (event: StorageEvent): void => {
            if (event.storageArea !== window.localStorage) {
                return;
            }

            if (event.key !== key) {
                return;
            }

            setStoredValue(readValue());
        };

        window.addEventListener("storage", handleStorage);

        return () => {
            window.removeEventListener("storage", handleStorage);
        };
    }, [key, readValue]);

    return [storedValue, setValue, remove] as const;
}