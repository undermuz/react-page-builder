import type { FC } from "react"
import { EnumSchemeItemType } from "@undermuz/react-json-form"
import type { IScheme } from "@undermuz/react-json-form"
import type { IBlock } from "@undermuz/react-page-builder"

export type HeroValue = {
    brand: string
    eyebrow: string
    headline: string
    support: string
    primaryLabel: string
    primaryHref: string
    secondaryLabel: string
    secondaryHref: string
    tipEyebrow: string
    tipTitle: string
    tipBody: string
}

const DEF_VALUE: HeroValue = {
    brand: "@undermuz/react-page-builder",
    eyebrow: "Build pages as blocks",
    headline: "Compose UI from JSON blocks with a live editor.",
    support:
        "Define a block once — scheme, defaults, and view — then assemble pages that users can edit, reorder, and ship as plain JSON.",
    primaryLabel: "Get started →",
    primaryHref: "#install",
    secondaryLabel: "View on GitHub",
    secondaryHref: "https://github.com/undermuz/react-page-builder",
    tipEyebrow: "Try it now",
    tipTitle: "Hover this block → click Edit",
    tipBody:
        "Move your mouse over any section. The toolbar appears — hit the pencil and rewrite the page live.",
}

const scheme: IScheme = {
    id: "hero",
    title: "Hero",
    multiple: false,
    scheme: [
        {
            name: "brand",
            title: "Brand",
            type: EnumSchemeItemType.Text,
            def_value: DEF_VALUE.brand,
        },
        {
            name: "eyebrow",
            title: "Eyebrow",
            type: EnumSchemeItemType.Text,
            def_value: DEF_VALUE.eyebrow,
        },
        {
            name: "headline",
            title: "Headline",
            type: EnumSchemeItemType.TextBlock,
            def_value: DEF_VALUE.headline,
        },
        {
            name: "support",
            title: "Support",
            type: EnumSchemeItemType.TextBlock,
            def_value: DEF_VALUE.support,
        },
        {
            name: "primaryLabel",
            title: "Primary CTA label",
            type: EnumSchemeItemType.Text,
            def_value: DEF_VALUE.primaryLabel,
        },
        {
            name: "primaryHref",
            title: "Primary CTA href",
            type: EnumSchemeItemType.Text,
            def_value: DEF_VALUE.primaryHref,
        },
        {
            name: "secondaryLabel",
            title: "Secondary CTA label",
            type: EnumSchemeItemType.Text,
            def_value: DEF_VALUE.secondaryLabel,
        },
        {
            name: "secondaryHref",
            title: "Secondary CTA href",
            type: EnumSchemeItemType.Text,
            def_value: DEF_VALUE.secondaryHref,
        },
        {
            name: "tipEyebrow",
            title: "Tip eyebrow",
            type: EnumSchemeItemType.Text,
            def_value: DEF_VALUE.tipEyebrow,
        },
        {
            name: "tipTitle",
            title: "Tip title",
            type: EnumSchemeItemType.Text,
            def_value: DEF_VALUE.tipTitle,
        },
        {
            name: "tipBody",
            title: "Tip body",
            type: EnumSchemeItemType.TextBlock,
            def_value: DEF_VALUE.tipBody,
        },
    ],
}

const HeroTip: FC<{
    eyebrow: string
    title: string
    body: string
}> = ({ eyebrow, title, body }) => (
    <aside
        className="hero-tip relative w-full max-w-sm shrink-0 lg:mt-10"
        aria-label="How to edit this page"
    >
        <div className="pointer-events-none absolute -top-3 right-6 hidden text-rpb-primary lg:block">
            <svg width="28" height="36" viewBox="0 0 28 36" fill="none" aria-hidden>
                <path
                    d="M14 2v26M14 28l-7-7M14 28l7-7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>

        <div className="glass relative overflow-hidden rounded-2xl border-rpb-primary/35 p-5 shadow-[0_0_40px_rgb(95_160_78_/0.18)] sm:p-6">
            <div className="absolute -right-8 -top-8 size-28 rounded-full bg-rpb-primary/15 blur-2xl" />
            <div className="relative flex items-start gap-3">
                <span
                    className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl border border-rpb-primary/40 bg-rpb-primary/15 text-rpb-secondary"
                    aria-hidden
                >
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M12 20h9" />
                        <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                    </svg>
                </span>
                <div>
                    <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-rpb-secondary">
                        {eyebrow}
                    </p>
                    <p className="mt-1.5 font-sans text-lg font-semibold leading-snug text-rpb-text">
                        {title}
                    </p>
                    <p className="mt-2 font-mono text-sm leading-relaxed text-rpb-muted">
                        {body}
                    </p>
                </div>
            </div>
        </div>
    </aside>
)

const HeroView: FC<{ id?: number; value?: HeroValue }> = ({ value }) => {
    const v = { ...DEF_VALUE, ...value }

    return (
        <section className="relative w-full overflow-hidden px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-20">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgb(95_160_78_/0.16),transparent_55%)]" />
            <div className="relative mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
                <div className="animate-rise min-w-0 max-w-3xl flex-1">
                    <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.18em] text-rpb-secondary">
                        {v.eyebrow}
                    </p>
                    <h1 className="text-balance font-sans text-4xl font-semibold tracking-tight text-rpb-text sm:text-5xl md:text-6xl">
                        {v.brand}
                    </h1>
                    <p className="mt-5 text-balance font-sans text-xl font-medium leading-snug tracking-tight text-rpb-text/90 sm:text-2xl md:text-[1.75rem]">
                        {v.headline}
                    </p>
                    <p className="animate-rise-delay mt-5 max-w-2xl font-mono text-sm leading-relaxed text-rpb-muted sm:text-[15px]">
                        {v.support}
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <a
                            href={v.primaryHref}
                            className="inline-flex items-center rounded-lg border border-rpb-primary bg-rpb-primary/15 px-5 py-2.5 text-sm font-medium text-rpb-text transition hover:bg-rpb-primary/25"
                        >
                            {v.primaryLabel}
                        </a>
                        <a
                            href={v.secondaryHref}
                            target={
                                v.secondaryHref.startsWith("http")
                                    ? "_blank"
                                    : undefined
                            }
                            rel={
                                v.secondaryHref.startsWith("http")
                                    ? "noreferrer"
                                    : undefined
                            }
                            className="inline-flex items-center rounded-lg border border-rpb-border bg-rpb-elevated/80 px-5 py-2.5 text-sm font-medium text-rpb-text transition hover:border-rpb-secondary/40"
                        >
                            {v.secondaryLabel}
                        </a>
                    </div>
                </div>

                <div className="animate-rise-delay lg:pt-2">
                    <HeroTip
                        eyebrow={v.tipEyebrow}
                        title={v.tipTitle}
                        body={v.tipBody}
                    />
                </div>
            </div>
        </section>
    )
}

const HeroBlock: IBlock<HeroValue> = {
    id: "hero",
    title: "Hero",
    description: "Brand-first hero section",
    image: "",
    value: DEF_VALUE,
    scheme,
    view: HeroView,
}

export default HeroBlock
