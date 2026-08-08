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
    ],
}

const HeroView: FC<{ id?: number; value?: HeroValue }> = ({ value }) => {
    const v = { ...DEF_VALUE, ...value }

    return (
        <section className="relative w-full overflow-hidden px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-20">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgb(95_160_78_/0.16),transparent_55%)]" />
            <div className="relative mx-auto flex max-w-6xl flex-col gap-6">
                <div className="animate-rise max-w-4xl">
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
