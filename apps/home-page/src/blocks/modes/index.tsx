import type { FC } from "react"
import { EnumSchemeItemType } from "@undermuz/react-json-form"
import type { IScheme } from "@undermuz/react-json-form"
import type { IBlock } from "@undermuz/react-page-builder"

export type ModesValue = {
    title: string
    intro: string
    editTitle: string
    editBody: string
    viewTitle: string
    viewBody: string
}

const DEF_VALUE: ModesValue = {
    title: "Edit mode vs View mode",
    intro: "This landing page uses the same library for both. The toggle at the top only swaps the renderer — not the data.",
    editTitle: "BlocksEditor",
    editBody:
        "Use when authors build a page: pick a block from the library, reorder with up/down, open the JSON form dialog to edit fields, or remove a section. State is IBlockResultValue[] you own.",
    viewTitle: "BlocksView",
    viewBody:
        "Use on the public site (or SSR): pass the same library and the saved value. Each instance resolves library.find(b => b.id === blockId) and renders that block’s view with no editor chrome.",
}

const scheme: IScheme = {
    id: "modes",
    title: "Modes",
    multiple: false,
    scheme: [
        {
            name: "title",
            title: "Title",
            type: EnumSchemeItemType.Text,
            def_value: DEF_VALUE.title,
        },
        {
            name: "intro",
            title: "Intro",
            type: EnumSchemeItemType.TextBlock,
            def_value: DEF_VALUE.intro,
        },
        {
            name: "editTitle",
            title: "Edit column title",
            type: EnumSchemeItemType.Text,
            def_value: DEF_VALUE.editTitle,
        },
        {
            name: "editBody",
            title: "Edit column body",
            type: EnumSchemeItemType.TextBlock,
            def_value: DEF_VALUE.editBody,
        },
        {
            name: "viewTitle",
            title: "View column title",
            type: EnumSchemeItemType.Text,
            def_value: DEF_VALUE.viewTitle,
        },
        {
            name: "viewBody",
            title: "View column body",
            type: EnumSchemeItemType.TextBlock,
            def_value: DEF_VALUE.viewBody,
        },
    ],
}

const ModesView: FC<{ id?: number; value?: ModesValue }> = ({ value }) => {
    const v = { ...DEF_VALUE, ...value }

    return (
        <section className="w-full px-4 py-12 sm:px-6 sm:py-16">
            <div className="mx-auto max-w-6xl">
                <h2 className="font-sans text-2xl font-semibold tracking-tight sm:text-3xl">
                    {v.title}
                </h2>
                <p className="mt-3 max-w-3xl font-mono text-sm leading-relaxed text-rpb-muted">
                    {v.intro}
                </p>
                <div className="mt-8 grid gap-4 md:grid-cols-2">
                    <article className="glass glass-hover rounded-2xl p-6">
                        <p className="inline-flex rounded-full bg-rpb-primary/15 px-3 py-1 font-mono text-xs uppercase tracking-wider text-rpb-secondary">
                            Edit
                        </p>
                        <h3 className="mt-4 text-xl font-semibold">
                            {v.editTitle}
                        </h3>
                        <p className="mt-3 font-mono text-sm leading-relaxed text-rpb-muted">
                            {v.editBody}
                        </p>
                    </article>
                    <article className="glass glass-hover rounded-2xl p-6">
                        <p className="inline-flex rounded-full bg-white/10 px-3 py-1 font-mono text-xs uppercase tracking-wider text-rpb-text">
                            View
                        </p>
                        <h3 className="mt-4 text-xl font-semibold">
                            {v.viewTitle}
                        </h3>
                        <p className="mt-3 font-mono text-sm leading-relaxed text-rpb-muted">
                            {v.viewBody}
                        </p>
                    </article>
                </div>
            </div>
        </section>
    )
}

const ModesBlock: IBlock<ModesValue> = {
    id: "modes",
    title: "Edit vs View",
    description: "Explains editor and view modes",
    image: "",
    value: DEF_VALUE,
    scheme,
    view: ModesView,
}

export default ModesBlock
