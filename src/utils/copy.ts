// src/utils/copy.ts

export interface CopyOptions {
    /**
     * Use the Clipboard API when available.
     *
     * @default true
     */
    readonly useClipboardApi?: boolean;
}

const DEFAULT_OPTIONS: Required<CopyOptions> = {
    useClipboardApi: true,
};

/**
 * Returns true if the Clipboard API is available.
 */
export function isClipboardSupported(): boolean {
    return (
        typeof navigator !== "undefined" &&
        typeof navigator.clipboard !== "undefined"
    );
}

/**
 * Copies text to the clipboard.
 */
export async function copyToClipboard(
    text: string,
    options: CopyOptions = {},
): Promise<boolean> {
    const { useClipboardApi } = {
        ...DEFAULT_OPTIONS,
        ...options,
    };

    if (
        useClipboardApi &&
        isClipboardSupported()
    ) {
        try {
            await navigator.clipboard.writeText(text);

            return true;
        } catch {
            // Fall back below.
        }
    }

    if (
        typeof document === "undefined"
    ) {
        return false;
    }

    try {
        const textarea =
            document.createElement("textarea");

        textarea.value = text;
        textarea.readOnly = true;

        textarea.style.position = "fixed";
        textarea.style.top = "-9999px";
        textarea.style.left = "-9999px";

        document.body.appendChild(textarea);

        textarea.focus();
        textarea.select();

        const successful =
            document.execCommand("copy");

        document.body.removeChild(textarea);

        return successful;
    } catch {
        return false;
    }
}

/**
 * Reads text from the clipboard.
 */
export async function readClipboard(): Promise<string | null> {
    if (!isClipboardSupported()) {
        return null;
    }

    try {
        return await navigator.clipboard.readText();
    } catch {
        return null;
    }
}