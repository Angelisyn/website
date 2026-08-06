// src/store/ui-store.ts

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

export interface UiStoreState {
    readonly mobileMenuOpen: boolean;
    readonly searchOpen: boolean;
    readonly commandPaletteOpen: boolean;
    readonly sidebarOpen: boolean;
}

export interface UiStoreActions {
    readonly setMobileMenuOpen: Dispatch<
        SetStateAction<boolean>
    >;
    readonly setSearchOpen: Dispatch<
        SetStateAction<boolean>
    >;
    readonly setCommandPaletteOpen: Dispatch<
        SetStateAction<boolean>
    >;
    readonly setSidebarOpen: Dispatch<
        SetStateAction<boolean>
    >;

    readonly openMobileMenu: () => void;
    readonly closeMobileMenu: () => void;
    readonly toggleMobileMenu: () => void;

    readonly openSearch: () => void;
    readonly closeSearch: () => void;
    readonly toggleSearch: () => void;

    readonly openCommandPalette: () => void;
    readonly closeCommandPalette: () => void;
    readonly toggleCommandPalette: () => void;

    readonly openSidebar: () => void;
    readonly closeSidebar: () => void;
    readonly toggleSidebar: () => void;

    readonly closeAll: () => void;
}

export interface UiStoreContextValue {
    readonly state: UiStoreState;
    readonly actions: UiStoreActions;
}

const UiStoreContext =
    createContext<UiStoreContextValue | null>(null);

export interface UiStoreProviderProps
    extends PropsWithChildren { }

export function UiStoreProvider({
    children,
}: UiStoreProviderProps) {
    const [mobileMenuOpen, setMobileMenuOpen] =
        useState(false);

    const [searchOpen, setSearchOpen] =
        useState(false);

    const [
        commandPaletteOpen,
        setCommandPaletteOpen,
    ] = useState(false);

    const [sidebarOpen, setSidebarOpen] =
        useState(false);

    const openMobileMenu = useCallback(() => {
        setMobileMenuOpen(true);
    }, []);

    const closeMobileMenu = useCallback(() => {
        setMobileMenuOpen(false);
    }, []);

    const toggleMobileMenu = useCallback(() => {
        setMobileMenuOpen((previous) => !previous);
    }, []);

    const openSearch = useCallback(() => {
        setSearchOpen(true);
    }, []);

    const closeSearch = useCallback(() => {
        setSearchOpen(false);
    }, []);

    const toggleSearch = useCallback(() => {
        setSearchOpen((previous) => !previous);
    }, []);

    const openCommandPalette = useCallback(() => {
        setCommandPaletteOpen(true);
    }, []);

    const closeCommandPalette = useCallback(() => {
        setCommandPaletteOpen(false);
    }, []);

    const toggleCommandPalette =
        useCallback(() => {
            setCommandPaletteOpen(
                (previous) => !previous,
            );
        }, []);

    const openSidebar = useCallback(() => {
        setSidebarOpen(true);
    }, []);

    const closeSidebar = useCallback(() => {
        setSidebarOpen(false);
    }, []);

    const toggleSidebar = useCallback(() => {
        setSidebarOpen((previous) => !previous);
    }, []);

    const closeAll = useCallback(() => {
        setMobileMenuOpen(false);
        setSearchOpen(false);
        setCommandPaletteOpen(false);
        setSidebarOpen(false);
    }, []);

    const value = useMemo<UiStoreContextValue>(
        () => ({
            state: {
                mobileMenuOpen,
                searchOpen,
                commandPaletteOpen,
                sidebarOpen,
            },

            actions: {
                setMobileMenuOpen,
                setSearchOpen,
                setCommandPaletteOpen,
                setSidebarOpen,

                openMobileMenu,
                closeMobileMenu,
                toggleMobileMenu,

                openSearch,
                closeSearch,
                toggleSearch,

                openCommandPalette,
                closeCommandPalette,
                toggleCommandPalette,

                openSidebar,
                closeSidebar,
                toggleSidebar,

                closeAll,
            },
        }),
        [
            mobileMenuOpen,
            searchOpen,
            commandPaletteOpen,
            sidebarOpen,
            openMobileMenu,
            closeMobileMenu,
            toggleMobileMenu,
            openSearch,
            closeSearch,
            toggleSearch,
            openCommandPalette,
            closeCommandPalette,
            toggleCommandPalette,
            openSidebar,
            closeSidebar,
            toggleSidebar,
            closeAll,
        ],
    );

    return (
        <UiStoreContext.Provider value= { value } >
        { children }
        </UiStoreContext.Provider>
  );
}

export function useUiStore(): UiStoreContextValue {
    const context = useContext(UiStoreContext);

    if (!context) {
        throw new Error(
            "useUiStore must be used within a UiStoreProvider.",
        );
    }

    return context;
}