// src/providers/QueryProvider.tsx

"use client";

import {
    QueryClient,
    QueryClientProvider,
} from "@tanstack/react-query";
import type { PropsWithChildren } from "react";
import { useState } from "react";

export interface QueryProviderProps
    extends PropsWithChildren { }

function createQueryClient(): QueryClient {
    return new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 1000 * 60 * 5,
                gcTime: 1000 * 60 * 30,
                retry: 2,
                refetchOnWindowFocus: false,
                refetchOnReconnect: true,
                refetchOnMount: true,
            },

            mutations: {
                retry: 1,
            },
        },
    });
}

/**
 * Global TanStack Query provider.
 *
 * Provides:
 * - Request caching
 * - Background refetching
 * - Mutation management
 * - Server state synchronization
 */
export function QueryProvider({
    children,
}: QueryProviderProps) {
    const [queryClient] = useState(createQueryClient);

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
}