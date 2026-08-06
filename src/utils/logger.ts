// src/utils/logger.ts

export type LogLevel =
    | "debug"
    | "info"
    | "warn"
    | "error";

export interface LogMetadata {
    readonly [key: string]: unknown;
}

export interface LoggerOptions {
    readonly enabled?: boolean;
    readonly minLevel?: LogLevel;
}

const LOG_LEVELS: Record<LogLevel, number> = {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3,
};

const DEFAULT_OPTIONS: Required<LoggerOptions> = {
    enabled: process.env.NODE_ENV !== "production",
    minLevel: process.env.NODE_ENV === "development"
        ? "debug"
        : "info",
};

class Logger {
    private readonly enabled: boolean;

    private readonly minLevel: LogLevel;

    constructor(options: LoggerOptions = {}) {
        this.enabled =
            options.enabled ?? DEFAULT_OPTIONS.enabled;

        this.minLevel =
            options.minLevel ?? DEFAULT_OPTIONS.minLevel;
    }

    private shouldLog(level: LogLevel): boolean {
        return (
            this.enabled &&
            LOG_LEVELS[level] >= LOG_LEVELS[this.minLevel]
        );
    }

    private createPayload(
        level: LogLevel,
        message: string,
        metadata?: LogMetadata,
    ) {
        return {
            timestamp: new Date().toISOString(),
            level,
            message,
            ...(metadata ?? {}),
        };
    }

    debug(
        message: string,
        metadata?: LogMetadata,
    ): void {
        if (!this.shouldLog("debug")) {
            return;
        }

        console.debug(
            this.createPayload(
                "debug",
                message,
                metadata,
            ),
        );
    }

    info(
        message: string,
        metadata?: LogMetadata,
    ): void {
        if (!this.shouldLog("info")) {
            return;
        }

        console.info(
            this.createPayload(
                "info",
                message,
                metadata,
            ),
        );
    }

    warn(
        message: string,
        metadata?: LogMetadata,
    ): void {
        if (!this.shouldLog("warn")) {
            return;
        }

        console.warn(
            this.createPayload(
                "warn",
                message,
                metadata,
            ),
        );
    }

    error(
        message: string,
        metadata?: LogMetadata,
    ): void {
        if (!this.shouldLog("error")) {
            return;
        }

        console.error(
            this.createPayload(
                "error",
                message,
                metadata,
            ),
        );
    }
}

export const logger = new Logger();

export function createLogger(
    options?: LoggerOptions,
): Logger {
    return new Logger(options);
}

export const log = logger;