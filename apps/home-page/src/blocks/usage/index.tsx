import type { FC } from "react"
import { EnumSchemeItemType } from "@undermuz/react-json-form"
import type { IScheme } from "@undermuz/react-json-form"
import type { IBlock } from "@undermuz/react-page-builder"
import CodePanel from "../../components/CodePanel"

export type UsageValue = {
    title: string
    body: string
    editorTitle: string
    editorCode: string
    viewTitle: string
    viewCode: string
}

const DEF_VALUE: UsageValue = {
    title: "How to use",
    body: "Build one library array of IBlock definitions. Pass it to BlocksEditor while editing and to BlocksView when rendering the saved page.",
    editorTitle: "Editor",
    editorCode: `import { BlocksEditor } from "@undermuz/react-page-builder"
import { UiContext } from "@undermuz/react-json-form"
import BaseTheme from "@undermuz/react-json-form-theme-base"
import "@undermuz/react-json-form-theme-base/styles.css"

<UiContext.Provider value={BaseTheme}>
  <BlocksEditor
    library={library}
    value={value}
    onChange={setValue}
  />
</UiContext.Provider>`,
    viewTitle: "View",
    viewCode: `import { BlocksView } from "@undermuz/react-page-builder"

<BlocksView library={library} value={value} />`,
}

const scheme: IScheme = {
    id: "usage",
    title: "Usage",
    multiple: false,
    scheme: [
        {
            name: "title",
            title: "Title",
            type: EnumSchemeItemType.Text,
            def_value: DEF_VALUE.title,
        },
        {
            name: "body",
            title: "Body",
            type: EnumSchemeItemType.TextBlock,
            def_value: DEF_VALUE.body,
        },
        {
            name: "editorTitle",
            title: "Editor title",
            type: EnumSchemeItemType.Text,
            def_value: DEF_VALUE.editorTitle,
        },
        {
            name: "editorCode",
            title: "Editor code",
            type: EnumSchemeItemType.TextBlock,
            def_value: DEF_VALUE.editorCode,
        },
        {
            name: "viewTitle",
            title: "View title",
            type: EnumSchemeItemType.Text,
            def_value: DEF_VALUE.viewTitle,
        },
        {
            name: "viewCode",
            title: "View code",
            type: EnumSchemeItemType.TextBlock,
            def_value: DEF_VALUE.viewCode,
        },
    ],
}

const UsageView: FC<{ id?: number; value?: UsageValue }> = ({ value }) => {
    const v = { ...DEF_VALUE, ...value }

    return (
        <section className="w-full px-4 py-12 sm:px-6 sm:py-16">
            <div className="mx-auto max-w-6xl">
                <h2 className="font-sans text-2xl font-semibold tracking-tight sm:text-3xl">
                    {v.title}
                </h2>
                <p className="mt-3 max-w-3xl font-mono text-sm leading-relaxed text-rpb-muted">
                    {v.body}
                </p>
                <div className="mt-8 grid gap-6 lg:grid-cols-2">
                    <div>
                        <p className="mb-3 font-mono text-xs uppercase tracking-wider text-rpb-secondary">
                            {v.editorTitle}
                        </p>
                        <CodePanel
                            filename="PageEditor.tsx"
                            code={v.editorCode}
                        />
                    </div>
                    <div>
                        <p className="mb-3 font-mono text-xs uppercase tracking-wider text-rpb-secondary">
                            {v.viewTitle}
                        </p>
                        <CodePanel filename="PageView.tsx" code={v.viewCode} />
                    </div>
                </div>
            </div>
        </section>
    )
}

const UsageBlock: IBlock<UsageValue> = {
    id: "usage",
    title: "Usage",
    description: "Editor and view usage examples",
    image: "",
    value: DEF_VALUE,
    scheme,
    view: UsageView,
}

export default UsageBlock
