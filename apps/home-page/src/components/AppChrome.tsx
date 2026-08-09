import type { FC } from "react"
import ModeToggle, { type AppMode } from "./ModeToggle"
import {
    getJsonFormHref,
    getUseFormHref,
} from "../lib/siteUrls"

const GITHUB = "https://github.com/undermuz/react-page-builder"

type AppChromeProps = {
    mode: AppMode
    onModeChange: (mode: AppMode) => void
    onReset: () => void
    isDirty: boolean
}

const linkClass =
    "font-mono text-xs text-rpb-muted transition-colors hover:text-rpb-text"

const AppChrome: FC<AppChromeProps> = ({
    mode,
    onModeChange,
    onReset,
    isDirty,
}) => {
    return (
        <header className="sticky top-0 z-50 border-b border-rpb-border bg-rpb-surface/75 backdrop-blur-xl">
            <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
                <div className="flex min-w-0 items-center gap-3">
                    <div
                        className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-rpb-border bg-rpb-glass"
                        aria-hidden
                    >
                        <span className="flex flex-col gap-0.5">
                            <span className="h-0.5 w-3.5 rounded-full bg-rpb-primary" />
                            <span className="h-0.5 w-3.5 rounded-full bg-rpb-text/80" />
                            <span className="h-0.5 w-3.5 rounded-full bg-rpb-text/50" />
                        </span>
                    </div>
                    <div className="min-w-0">
                        <p className="truncate font-sans text-sm font-semibold tracking-tight text-rpb-text">
                            react-page-builder
                        </p>
                        <p className="truncate font-mono text-[10px] text-rpb-muted">
                            this page is built with the library
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-2">
                    <ModeToggle mode={mode} onChange={onModeChange} />
                    {isDirty ? (
                        <button
                            type="button"
                            onClick={onReset}
                            className="rounded-full border border-amber-400/60 bg-amber-400 px-3 py-1.5 font-mono text-xs font-semibold text-rpb-surface transition hover:bg-amber-300"
                        >
                            Reset demo
                        </button>
                    ) : null}
                </div>

                <nav
                    className="flex flex-wrap items-center gap-x-4 gap-y-2"
                    aria-label="Project links"
                >
                    <a
                        className={linkClass}
                        href={GITHUB}
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>
                    <a className={linkClass} href={getUseFormHref()}>
                        use-form
                    </a>
                    <a className={linkClass} href={getJsonFormHref()}>
                        react-json-form
                    </a>
                </nav>
            </div>
            {mode === "edit" && (
                <p className="border-t border-rpb-border/60 bg-rpb-primary/10 px-4 py-2 text-center font-mono text-[11px] text-rpb-text/90 sm:px-6">
                    Edit mode — add, reorder, edit, or remove any section below.
                    Switch to View to see the public page.
                </p>
            )}
        </header>
    )
}

export default AppChrome
