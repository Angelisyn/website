// src/store/app-store.ts

"use client";

import {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
    type Dispatch,
    type PropsWithChildren,
    type SetStateAction,
} from "react";

export interface AppStoreState {
    readonly initialized: boolean;
    readonly loading: boolean;
    readonly announcementVisible: boolean;
    readonly mobileNavigationOpen: boolean;
}

export interface AppStoreActions {
    readonly setInitialized: Dispatch<SetStateAction<boolean>>;
    readonly setLoading: Dispatch<SetStateAction<boolean>>;
    readonly setAnnouncementVisible: Dispatch<
        SetStateAction<boolean>
    >;
    readonly setMobileNavigationOpen: Dispatch<
        SetStateAction<boolean>
    >;

    readonly initialize: () => void;
    readonly showAnnouncement: () => void;
    readonly hideAnnouncement: () => void;
    readonly openMobileNavigation: () => void;
    readonly closeMobileNavigation: () => void;
    readonly toggleMobileNavigation: () => void;
}

export interface AppStoreContextValue {
    readonly state: AppStoreState;
    readonly actions: AppStoreActions;
}

const AppStoreContext =
    createContext<AppStoreContextValue | null>(null);

export interface AppStoreProviderProps
    extends PropsWithChildren { }

export function AppStoreProvider({
    children,
}: AppStoreProviderProps) {
    const [initialized, setInitialized] =
        useState(false);

    const [loading, setLoading] = useState(false);

    const [
        announcementVisible,
        setAnnouncementVisible,
    ] = useState(true);

    const [
        mobileNavigationOpen,
        setMobileNavigationOpen,
    ] = useState(false);

    const initialize = useCallback(() => {
        setInitialized(true);
    }, []);

    const showAnnouncement = useCallback(() => {
        setAnnouncementVisible(true);
    }, []);

    const hideAnnouncement = useCallback(() => {
        setAnnouncementVisible(false);
    }, []);

    const openMobileNavigation = useCallback(() => {
        setMobileNavigationOpen(true);
    }, []);

    const closeMobileNavigation = useCallback(() => {
        setMobileNavigationOpen(false);
    }, []);

    const toggleMobileNavigation =
        useCallback(() => {
            setMobileNavigationOpen(
                (previous) => !previous,
            );
        }, []);

    const value = useMemo<AppStoreContextValue>(
        () => ({
            state: {
                initialized,
                loading,
                announcementVisible,
                mobileNavigationOpen,
            },

            actions: {
                setInitialized,
                setLoading,
                setAnnouncementVisible,
                setMobileNavigationOpen,

                initialize,

                showAnnouncement,

                hideAnnouncement,

                openMobileNavigation,

                closeMobileNavigation,

                toggleMobileNavigation,
            },
        }),
        [
            initialized,
            loading,
            announcementVisible,
            mobileNavigationOpen,
            initialize,
            showAnnouncement,
            hideAnnouncement,
            openMobileNavigation,
            closeMobileNavigation,
            toggleMobileNavigation,
        ],
    );

    return (
        <AppStoreContext.Provider value= { value } >
        { children }
        </AppStoreContext.Provider>
  );
}

export function useAppStore(): AppStoreContextValue {
    const context = useContext(AppStoreContext);

    if (!context) {
        throw new Error(
            "useAppStore must be used within an AppStoreProvider.",
        );
    }

    return context;
}