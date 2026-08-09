import type { FC } from "react"
import { EnumSchemeItemType } from "@undermuz/react-json-form"
import type { IScheme } from "@undermuz/react-json-form"
import type { IBlock } from "@undermuz/react-page-builder"
import CodePanel from "../../components/CodePanel"

export type UsageValue = {
    title: string
    body: string
    editorCode: string
}

const DEF_VALUE: UsageValue = {
    title: "Build edit forms",
    body: "Wrap BlocksEditor with a JsonForm theme. Keep page state as IBlockResultValue[] — onChange gives you the full tree to save anywhere.",
    editorCode: `import { useState } from "react"
import {
  BlocksEditor,
  type IBlock,
  type IBlockResultValue,
} from "@undermuz/react-page-builder"
import { UiContext } from "@undermuz/react-json-form"
import BaseTheme from "@undermuz/react-json-form-theme-base"
import "@undermuz/react-json-form-theme-base/styles.css"
import Hero from "./blocks/hero"

const library: IBlock[] = [Hero]

function PageEditor() {
  const [value, setValue] = useState<IBlockResultValue[]>([
    {
      id: 1,
      blockId: "hero",
      value: {
        headline: "Hello",
        body: "Welcome",
      },
    },
  ])

  return (
    <UiContext.Provider value={BaseTheme}>
      <BlocksEditor
        library={library}
        value={value}
        onChange={setValue}
      />
    </UiContext.Provider>
  )
}

export default PageEditor`,
}

const scheme: IScheme = {
    id: "usage",
    title: "Build edit forms",
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
            name: "editorCode",
            title: "Editor code",
            type: EnumSchemeItemType.TextBlock,
            def_value: DEF_VALUE.editorCode,
        },
    ],
}

const UsageView: FC<{ id?: number; value?: UsageValue }> = ({ value }) => {
    const v = { ...DEF_VALUE, ...value }

    return (
        <section className="w-full px-4 py-12 sm:px-6 sm:py-16">
            <div className="mx-auto max-w-6xl">
                <h2 className="font-sans text-2xl font-semibold tracking-tight text-rpb-text sm:text-3xl">
                    {v.title}
                </h2>
                <p className="mt-3 max-w-3xl font-mono text-sm leading-relaxed text-rpb-muted">
                    {v.body}
                </p>
                <div className="mt-8">
                    <p className="mb-3 font-mono text-xs uppercase tracking-wider text-rpb-secondary">
                        BlocksEditor
                    </p>
                    <CodePanel filename="PageEditor.tsx" code={v.editorCode} />
                </div>
            </div>
        </section>
    )
}

const UsageBlock: IBlock<UsageValue> = {
    id: "usage",
    title: "Build edit forms",
    description: "BlocksEditor with state and JsonForm theme",
    image: "",
    value: DEF_VALUE,
    scheme,
    view: UsageView,
}

export default UsageBlock
