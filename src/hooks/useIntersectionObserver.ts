// src/hooks/useIntersectionObserver.ts

"use client";

import {
    RefObject,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";

export interface UseIntersectionObserverOptions
    extends IntersectionObserverInit {
    /**
     * Disconnect the observer after the element
     * becomes visible for the first time.
     *
     * @default false
     */
    readonly freezeOnceVisible?: boolean;
}

export interface IntersectionObserverState {
    readonly entry: IntersectionObserverEntry | null;
    readonly isIntersecting: boolean;
}

const hasIntersectionObserverSupport = (): boolean =>
    typeof window !== "undefined" &&
    "IntersectionObserver" in window;

export function useIntersectionObserver<T extends Element>(
    targetRef: RefObject<T | null>,
    {
        threshold = 0,
        root = null,
        rootMargin = "0px",
        freezeOnceVisible = false,
    }: UseIntersectionObserverOptions = {},
): IntersectionObserverState {
    const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);

    const frozen =
        freezeOnceVisible && Boolean(entry?.isIntersecting);

    useEffect(() => {
        const node = targetRef.current;

        if (!node || frozen) {
            return;
        }

        if (!hasIntersectionObserverSupport()) {
            setEntry({
                boundingClientRect: node.getBoundingClientRect(),
                intersectionRatio: 1,
                intersectionRect: node.getBoundingClientRect(),
                isIntersecting: true,
                rootBounds: null,
                target: node,
                time: performance.now(),
            } satisfies IntersectionObserverEntry);

            return;
        }

        const observer = new IntersectionObserver(
            ([observerEntry]) => {
                setEntry(observerEntry);
            },
            {
                threshold,
                root,
                rootMargin,
            },
        );

        observer.observe(node);

        return () => {
            observer.disconnect();
        };
    }, [
        targetRef,
        threshold,
        root,
        rootMargin,
        frozen,
    ]);

    return useMemo(
        () => ({
            entry,
            isIntersecting: Boolean(entry?.isIntersecting),
        }),
        [entry],
    );
}

export interface UseInViewOptions
    extends UseIntersectionObserverOptions { }

export interface UseInViewResult<T extends Element>
    extends IntersectionObserverState {
    readonly ref: RefObject<T | null>;
}

export function useInView<T extends Element>(
    options?: UseInViewOptions,
): UseInViewResult<T> {
    const ref = useRef<T>(null);

    const state = useIntersectionObserver(ref, options);

    return {
        ref,
        ...state,
    };
}