import type { FC } from "react"
import ModeToggle, { type AppMode } from "./ModeToggle"

const GITHUB = "https://github.com/undermuz/react-page-builder"
const NPM = "https://www.npmjs.com/package/@undermuz/react-page-builder"
const USE_FORM = "https://www.npmjs.com/package/@undermuz/use-form"
const JSON_FORM = "https://www.npmjs.com/package/@undermuz/react-json-form"

type AppChromeProps = {
    mode: AppMode
    onModeChange: (mode: AppMode) => void
    onReset: () => void
}

const linkClass =
    "font-mono text-xs text-rpb-muted transition-colors hover:text-rpb-text"

const AppChrome: FC<AppChromeProps> = ({ mode, onModeChange, onReset }) => {
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
                            live demo · same library
                        </p>
                    </div>
                </div>

                <ModeToggle mode={mode} onChange={onModeChange} />

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
                    <a
                        className={linkClass}
                        href={NPM}
                        target="_blank"
                        rel="noreferrer"
                    >
                        npm
                    </a>
                    <a
                        className={linkClass}
                        href={USE_FORM}
                        target="_blank"
                        rel="noreferrer"
                    >
                        use-form
                    </a>
                    <a
                        className={linkClass}
                        href={JSON_FORM}
                        target="_blank"
                        rel="noreferrer"
                    >
                        react-json-form
                    </a>
                    <button
                        type="button"
                        onClick={onReset}
                        className="rounded-full border border-rpb-border px-3 py-1 font-mono text-xs text-rpb-muted transition hover:border-rpb-secondary/50 hover:text-rpb-text"
                    >
                        Reset demo
                    </button>
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
