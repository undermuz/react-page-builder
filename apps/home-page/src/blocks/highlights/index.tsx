import type { FC } from "react"
import { EnumSchemeItemType } from "@undermuz/react-json-form"
import type { IScheme } from "@undermuz/react-json-form"
import type { IBlock } from "@undermuz/react-page-builder"

export type HighlightItem = {
    id: number
    title: string
    description: string
}

export type HighlightsValue = {
    title: string
    subtitle: string
    items: HighlightItem[]
    cardOneTitle: string
    cardOneBody: string
    cardTwoTitle: string
    cardTwoBody: string
}

const DEF_VALUE: HighlightsValue = {
    title: "Why this library",
    subtitle: "Everything on this page is a block you can edit above.",
    items: [
        {
            id: 1,
            title: "JSON page state",
            description:
                "Save IBlockResultValue[] anywhere — API, CMS, or sessionStorage.",
        },
        {
            id: 2,
            title: "Scheme → edit form",
            description:
                "react-json-form builds the dialog from your IScheme automatically.",
        },
        {
            id: 3,
            title: "Same library twice",
            description:
                "BlocksEditor for authors, BlocksView for the public site.",
        },
    ],
    cardOneTitle: "Your UI, your code",
    cardOneBody:
        "Blocks are plain React views — Tailwind, CSS modules, any design system. No locked templates.",
    cardTwoTitle: "Forms write themselves",
    cardTwoBody:
        "Describe fields once in a JSON scheme — authors get a full edit dialog with zero form boilerplate.",
}

const scheme: IScheme = {
    id: "highlights",
    title: "Highlights",
    multiple: false,
    scheme: [
        {
            name: "title",
            title: "Title",
            type: EnumSchemeItemType.Text,
            def_value: DEF_VALUE.title,
        },
        {
            name: "subtitle",
            title: "Subtitle",
            type: EnumSchemeItemType.Text,
            def_value: DEF_VALUE.subtitle,
        },
        {
            name: "items",
            title: "Checklist",
            type: EnumSchemeItemType.Widget,
            multiple: true,
            scheme: [
                {
                    name: "title",
                    title: "Title",
                    type: EnumSchemeItemType.Text,
                    def_value: "",
                },
                {
                    name: "description",
                    title: "Description",
                    type: EnumSchemeItemType.TextBlock,
                    def_value: "",
                },
            ],
        },
        {
            name: "cardOneTitle",
            title: "Card 1 title",
            type: EnumSchemeItemType.Text,
            def_value: DEF_VALUE.cardOneTitle,
        },
        {
            name: "cardOneBody",
            title: "Card 1 body",
            type: EnumSchemeItemType.Text,
            def_value: DEF_VALUE.cardOneBody,
        },
        {
            name: "cardTwoTitle",
            title: "Card 2 title",
            type: EnumSchemeItemType.Text,
            def_value: DEF_VALUE.cardTwoTitle,
        },
        {
            name: "cardTwoBody",
            title: "Card 2 body",
            type: EnumSchemeItemType.Text,
            def_value: DEF_VALUE.cardTwoBody,
        },
    ],
}

const HighlightsView: FC<{ id?: number; value?: HighlightsValue }> = ({
    value,
}) => {
    const v = {
        ...DEF_VALUE,
        ...value,
        items: value?.items?.length ? value.items : DEF_VALUE.items,
    }

    return (
        <section className="w-full px-4 py-12 sm:px-6 sm:py-16">
            <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="glass glass-hover rounded-2xl p-6 sm:p-8">
                    <p className="font-mono text-xs uppercase tracking-[0.16em] text-rpb-secondary">
                        Highlights
                    </p>
                    <h2 className="mt-2 font-sans text-2xl font-semibold tracking-tight sm:text-3xl">
                        {v.title}
                    </h2>
                    <p className="mt-2 font-mono text-sm text-rpb-muted">
                        {v.subtitle}
                    </p>
                    <ul className="mt-6 space-y-4">
                        {v.items.map((item, index) => (
                            <li key={`${item.title}-${index}`} className="flex gap-3">
                                <span
                                    className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-rpb-success/15 text-rpb-success"
                                    aria-hidden
                                >
                                    ✓
                                </span>
                                <div>
                                    <p className="font-medium text-rpb-text">
                                        {item.title}
                                    </p>
                                    <p className="mt-0.5 font-mono text-sm text-rpb-muted">
                                        {item.description}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                    <article className="glass glass-hover rounded-2xl p-5">
                        <p className="font-mono text-xs uppercase tracking-wider text-rpb-secondary">
                            {v.cardOneTitle}
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-rpb-muted">
                            {v.cardOneBody}
                        </p>
                    </article>
                    <article className="glass glass-hover rounded-2xl p-5">
                        <p className="font-mono text-xs uppercase tracking-wider text-rpb-secondary">
                            {v.cardTwoTitle}
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-rpb-muted">
                            {v.cardTwoBody}
                        </p>
                    </article>
                </div>
            </div>
        </section>
    )
}

const HighlightsBlock: IBlock<HighlightsValue> = {
    id: "highlights",
    title: "Highlights",
    description: "Bento-style feature highlights",
    image: "",
    value: DEF_VALUE,
    scheme,
    view: HighlightsView,
}

export default HighlightsBlock
