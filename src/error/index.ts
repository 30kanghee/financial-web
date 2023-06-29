import {AxiosError} from "axios";

export class SiteBunnyAdminError extends Error {
    constructor(public code: string, message?: string, noErrorPage?: boolean) {
        super(message);
        Object.setPrototypeOf(this, SiteBunnyAdminError.prototype);
        this.noErrorPage = noErrorPage;
    }

    public readonly isSiteBunnyAdminError = true;
    public noErrorPage?: boolean;
}

export const isAxiosError = (error: unknown): error is AxiosError => {
    try {
        return (
            typeof error === "object" && error != null && "isAxiosError" in error && typeof (error as Record<string, unknown>).isAxiosError === "boolean"
        )
    } catch (e) {
        return false;
    }
};

export const isSiteBunnyAdminError = (error: unknown): error is SiteBunnyAdminError => {
    try {
        return (
            typeof error === "object" && error != null && "isSiteBunnyAdminError" in error && typeof (error as Record<string, unknown>).isSiteBunnyAdminError === "boolean"
        )
    } catch (e) {
        return false;
    }
}

export const toSiteBunnyAdminError = (unknownError: unknown, options?: {code?: string, noErrorPage?: boolean}): SiteBunnyAdminError => {
    if (isAxiosError(unknownError)) {
        return new SiteBunnyAdminError(String(unknownError.response?.status) ?? "500", unknownError.message, options?.noErrorPage);
    }

    if (isSiteBunnyAdminError(unknownError)) {
        return unknownError;
    }

    try {
        return new SiteBunnyAdminError(options?.code ?? "500", JSON.stringify(unknownError));
    } catch {
        return new SiteBunnyAdminError(options?.code ?? "500", String(unknownError), options?.noErrorPage);
    }
};
