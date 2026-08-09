import { useState, type FC } from "react"
import { EnumSchemeItemType } from "@undermuz/react-json-form"
import type { IScheme } from "@undermuz/react-json-form"
import type { IBlock } from "@undermuz/react-page-builder"
import CodePanel from "../../components/CodePanel"

export type CreateStep = {
    id: number
    title: string
    body: string
}

export type CreateBlockValue = {
    title: string
    body: string
    steps: CreateStep[]
    snippet: string
}

type ViewFlavor = "tailwind" | "chakra" | "ant" | "custom"

const VIEW_FLAVORS: { id: ViewFlavor; label: string }[] = [
    { id: "tailwind", label: "Tailwind" },
    { id: "chakra", label: "Chakra" },
    { id: "ant", label: "Ant" },
    { id: "custom", label: "Custom" },
]

const BLOCKS_VIEW_SNIPPET = {
    filename: "PageView.tsx",
    code: `import { BlocksView } from "@undermuz/react-page-builder"
import type { IBlock, IBlockResultValue } from "@undermuz/react-page-builder"
import Hero from "./blocks/hero"

const library: IBlock[] = [Hero]

const value: IBlockResultValue[] = [
  {
    id: 1,
    blockId: "hero",
    value: {
      headline: "Hello",
      body: "Welcome",
    },
  },
]

function PageView() {
  return <BlocksView library={library} value={value} />
}

export default PageView`,
}

const HERO_VIEW_SNIPPETS: Record<ViewFlavor, { filename: string; code: string }> =
    {
        tailwind: {
            filename: "hero/view.tsx",
            code: `import type { FC } from "react"

type HeroValue = { headline: string; body: string }

const HeroView: FC<{ value?: HeroValue }> = ({ value }) => (
  <section className="mx-auto max-w-5xl px-6 py-16">
    <h1 className="text-4xl font-semibold tracking-tight">
      {value?.headline}
    </h1>
    <p className="mt-4 text-lg text-neutral-600">
      {value?.body}
    </p>
  </section>
)

export default HeroView`,
        },
        chakra: {
            filename: "hero/view.tsx",
            code: `import type { FC } from "react"
import { Box, Heading, Text } from "@chakra-ui/react"

type HeroValue = { headline: string; body: string }

const HeroView: FC<{ value?: HeroValue }> = ({ value }) => (
  <Box maxW="5xl" mx="auto" px={6} py={16}>
    <Heading size="2xl">{value?.headline}</Heading>
    <Text mt={4} fontSize="lg" color="gray.600">
      {value?.body}
    </Text>
  </Box>
)

export default HeroView`,
        },
        ant: {
            filename: "hero/view.tsx",
            code: `import type { FC } from "react"
import { Typography } from "antd"

const { Title, Paragraph } = Typography

type HeroValue = { headline: string; body: string }

const HeroView: FC<{ value?: HeroValue }> = ({ value }) => (
  <div style={{ maxWidth: 1024, margin: "0 auto", padding: "64px 24px" }}>
    <Title level={1}>{value?.headline}</Title>
    <Paragraph style={{ fontSize: 18, color: "#595959" }}>
      {value?.body}
    </Paragraph>
  </div>
)

export default HeroView`,
        },
        custom: {
            filename: "hero/view.tsx",
            code: `import type { FC } from "react"
import styles from "./hero.module.css"

type HeroValue = { headline: string; body: string }

const HeroView: FC<{ value?: HeroValue }> = ({ value }) => (
  <section className={styles.hero}>
    <h1 className={styles.title}>{value?.headline}</h1>
    <p className={styles.body}>{value?.body}</p>
  </section>
)

export default HeroView`,
        },
    }

const DEF_VALUE: CreateBlockValue = {
    title: "How to use",
    body: "There is no createBlock helper — export a plain object that satisfies IBlock. The view is just React: pick any UI stack.",
    steps: [
        {
            id: 1,
            title: "1. Types & defaults",
            body: "Shape the value object and provide defaults copied when the block is added.",
        },
        {
            id: 2,
            title: "2. Scheme",
            body: "Describe fields with EnumSchemeItemType for the auto-generated JsonForm dialog.",
        },
        {
            id: 3,
            title: "3. View",
            body: "Render { id?, value? } with your own markup (Tailwind, Chakra, Ant, CSS modules…).",
        },
        {
            id: 4,
            title: "4. Register",
            body: "Push the IBlock into library[] and pass it to BlocksEditor / BlocksView.",
        },
    ],
    snippet: `const scheme: IScheme = {
  id: "hero",
  title: "Hero",
  multiple: false,
  scheme: [
    {
      name: "headline",
      title: "Headline",
      type: EnumSchemeItemType.Text,
      def_value: "Hello",
    },
    {
      name: "body",
      title: "Body",
      type: EnumSchemeItemType.TextBlock,
      def_value: "Welcome",
    },
  ],
}

const Hero: IBlock<HeroValue> = {
  id: "hero",
  title: "Hero",
  description: "Brand-first hero",
  image: "/blocks/hero-preview.png",
  value: {
    headline: "Hello",
    body: "Welcome",
  },
  scheme,
  view: HeroView,
}

export default Hero`,
}

const scheme: IScheme = {
    id: "create-block",
    title: "How to use",
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
            title: "IBlock snippet",
            type: EnumSchemeItemType.TextBlock,
            def_value: DEF_VALUE.snippet,
        },
    ],
}

const CreateBlockView: FC<{ id?: number; value?: CreateBlockValue }> = ({
    value,
}) => {
    const [flavor, setFlavor] = useState<ViewFlavor>("tailwind")
    const v = {
        ...DEF_VALUE,
        ...value,
        steps: value?.steps?.length ? value.steps : DEF_VALUE.steps,
    }
    const viewSample = HERO_VIEW_SNIPPETS[flavor]

    return (
        <section className="w-full px-4 py-12 sm:px-6 sm:py-16">
            <div className="mx-auto max-w-6xl">
                <h2 className="font-sans text-2xl font-semibold tracking-tight text-rpb-text sm:text-3xl">
                    {v.title}
                </h2>
                <p className="mt-3 max-w-3xl font-mono text-sm leading-relaxed text-rpb-muted">
                    {v.body}
                </p>
                <ol className="mt-8 grid gap-4 sm:grid-cols-2">
                    {v.steps.map((step) => (
                        <li
                            key={step.id}
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

                <div className="mt-8 grid gap-6 lg:grid-cols-2">
                    <div>
                        <p className="mb-3 font-mono text-xs uppercase tracking-wider text-rpb-secondary">
                            IBlock definition
                        </p>
                        <CodePanel filename="hero/index.tsx" code={v.snippet} />
                    </div>

                    <div className="flex flex-col gap-6">
                        <div>
                            <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                                <p className="font-mono text-xs uppercase tracking-wider text-rpb-secondary">
                                    HeroView
                                </p>
                                <div
                                    role="group"
                                    aria-label="UI stack for HeroView"
                                    className="inline-flex flex-wrap rounded-full border border-rpb-border bg-rpb-elevated/80 p-1"
                                >
                                    {VIEW_FLAVORS.map((item) => {
                                        const active = flavor === item.id
                                        return (
                                            <button
                                                key={item.id}
                                                type="button"
                                                onClick={() =>
                                                    setFlavor(item.id)
                                                }
                                                className={[
                                                    "rounded-full px-2.5 py-1 font-mono text-[11px] font-medium transition",
                                                    active
                                                        ? "bg-rpb-primary text-white"
                                                        : "text-rpb-muted hover:text-rpb-text",
                                                ].join(" ")}
                                            >
                                                {item.label}
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>
                            <CodePanel
                                filename={viewSample.filename}
                                code={viewSample.code}
                            />
                        </div>

                        <div>
                            <p className="mb-3 font-mono text-xs uppercase tracking-wider text-rpb-secondary">
                                BlocksView
                            </p>
                            <CodePanel
                                filename={BLOCKS_VIEW_SNIPPET.filename}
                                code={BLOCKS_VIEW_SNIPPET.code}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const CreateBlockBlock: IBlock<CreateBlockValue> = {
    id: "create-block",
    title: "How to use",
    description: "How to author a custom IBlock and render with BlocksView",
    image: "",
    value: DEF_VALUE,
    scheme,
    view: CreateBlockView,
}

export default CreateBlockBlock
