import type { FC } from "react"
import { EnumSchemeItemType } from "@undermuz/react-json-form"
import type { IScheme } from "@undermuz/react-json-form"
import type { IBlock } from "@undermuz/react-page-builder"
import CodePanel from "../../components/CodePanel"

export type CreateStep = {
    title: string
    body: string
}

export type CreateBlockValue = {
    title: string
    body: string
    steps: CreateStep[]
    snippet: string
}

const DEF_VALUE: CreateBlockValue = {
    title: "Create your own block",
    body: "There is no createBlock helper — export a plain object that satisfies IBlock.",
    steps: [
        {
            title: "1. Types & defaults",
            body: "Shape the value object and provide defaults copied when the block is added.",
        },
        {
            title: "2. Scheme",
            body: "Describe fields with EnumSchemeItemType for the auto-generated JsonForm dialog.",
        },
        {
            title: "3. View",
            body: "Render { id?, value? } with your own markup (Tailwind, CSS, design system).",
        },
        {
            title: "4. Register",
            body: "Push the IBlock into library[] and pass it to BlocksEditor / BlocksView.",
        },
    ],
    snippet: `const Hero: IBlock<HeroValue> = {
  id: "hero",
  title: "Hero",
  description: "Brand-first hero",
  image: "",
  value: { headline: "Hello" },
  scheme: { id: "hero", scheme: [/* fields */] },
  view: HeroView,
}

export default Hero`,
}

const scheme: IScheme = {
    id: "create-block",
    title: "Create block",
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
            name: "steps",
            title: "Steps",
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
                    name: "body",
                    title: "Body",
                    type: EnumSchemeItemType.TextBlock,
                    def_value: "",
                },
            ],
        },
        {
            name: "snippet",
            title: "Snippet",
            type: EnumSchemeItemType.TextBlock,
            def_value: DEF_VALUE.snippet,
        },
    ],
}

const CreateBlockView: FC<{ id?: number; value?: CreateBlockValue }> = ({
    value,
}) => {
    const v = {
        ...DEF_VALUE,
        ...value,
        steps: value?.steps?.length ? value.steps : DEF_VALUE.steps,
    }

    return (
        <section className="w-full px-4 py-12 sm:px-6 sm:py-16">
            <div className="mx-auto max-w-6xl">
                <h2 className="font-sans text-2xl font-semibold tracking-tight sm:text-3xl">
                    {v.title}
                </h2>
                <p className="mt-3 max-w-3xl font-mono text-sm leading-relaxed text-rpb-muted">
                    {v.body}
                </p>
                <ol className="mt-8 grid gap-4 sm:grid-cols-2">
                    {v.steps.map((step, index) => (
                        <li
                            key={`${step.title}-${index}`}
                            className="glass glass-hover rounded-2xl p-5"
                        >
                            <h3 className="font-semibold text-rpb-text">
                                {step.title}
                            </h3>
                            <p className="mt-2 font-mono text-sm leading-relaxed text-rpb-muted">
                                {step.body}
                            </p>
                        </li>
                    ))}
                </ol>
                <div className="mt-8">
                    <CodePanel filename="hero/index.tsx" code={v.snippet} />
                </div>
            </div>
        </section>
    )
}

const CreateBlockBlock: IBlock<CreateBlockValue> = {
    id: "create-block",
    title: "Create a block",
    description: "How to author a custom IBlock",
    image: "",
    value: DEF_VALUE,
    scheme,
    view: CreateBlockView,
}

export default CreateBlockBlock
