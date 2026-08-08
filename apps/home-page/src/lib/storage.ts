import type { IBlockResultValue } from "@undermuz/react-page-builder"

export const PAGE_STORAGE_KEY = "rpb-home-page"

export function loadPageValue(
    fallback: IBlockResultValue[]
): IBlockResultValue[] {
    try {
        const raw = sessionStorage.getItem(PAGE_STORAGE_KEY)
        if (!raw) return fallback
        const parsed = JSON.parse(raw) as unknown
        if (!Array.isArray(parsed)) return fallback
        return parsed as IBlockResultValue[]
    } catch {
        return fallback
    }
}

export function savePageValue(value: IBlockResultValue[]): void {
    try {
        sessionStorage.setItem(PAGE_STORAGE_KEY, JSON.stringify(value))
    } catch {
        // ignore quota / private mode errors
    }
}

export function clearPageValue(): void {
    try {
        sessionStorage.removeItem(PAGE_STORAGE_KEY)
    } catch {
        // ignore
    }
}
