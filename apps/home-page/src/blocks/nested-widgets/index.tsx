import type { FC, ReactNode } from "react"
import { EnumSchemeItemType } from "@undermuz/react-json-form"
import type { IScheme, ISchemeItem } from "@undermuz/react-json-form"
import type { IBlock } from "@undermuz/react-page-builder"
import CodePanel from "../../components/CodePanel"

/** One node in a recursive widget tree — children may nest forever at runtime. */
export type NestNode = {
    /** Required by react-json-form ArrayForm for Widget(multiple) items */
    id: number
    label: string
    note: string
    children: NestNode[]
}

export type NestedWidgetsValue = {
    title: string
    body: string
    root: NestNode
    snippet: string
}

const MAX_SCHEME_DEPTH = 5

function nestScheme(depth: number): ISchemeItem[] {
    const fields: ISchemeItem[] = [
        {
            name: "label",
            title: "Label",
            type: EnumSchemeItemType.Text,
            def_value: "",
        },
        {
            name: "note",
            title: "Note",
            type: EnumSchemeItemType.Text,
            def_value: "",
        },
    ]

    if (depth > 1) {
        fields.push({
            name: "children",
            title: `Nested widgets (depth ${MAX_SCHEME_DEPTH - depth + 2})`,
            type: EnumSchemeItemType.Widget,
            multiple: true,
            scheme: nestScheme(depth - 1),
        })
    }

    return fields
}

const DEF_VALUE: NestedWidgetsValue = {
    title: "Unlimited widget nesting",
    body: "EnumSchemeItemType.Widget can contain another Widget — and another. Nest as deep as your scheme allows; the value is a plain JSON tree.",
    root: {
        id: 1,
        label: "Root widget",
        note: "Top-level node",
        children: [
            {
                id: 2,
                label: "Section A",
                note: "Widget inside root",
                children: [
                    {
                        id: 3,
                        label: "Group A1",
                        note: "Widget inside section",
                        children: [
                            {
                                id: 4,
                                label: "Leaf A1a",
                                note: "Widget inside group",
                                children: [],
                            },
                            {
                                id: 5,
                                label: "Leaf A1b",
                                note: "Sibling leaf",
                                children: [],
                            },
                        ],
                    },
                ],
            },
            {
                id: 6,
                label: "Section B",
                note: "Another branch",
                children: [
                    {
                        id: 7,
                        label: "Group B1",
                        note: "Keep nesting in Edit mode",
                        children: [],
                    },
                ],
            },
        ],
    },
    snippet: `{
  name: "children",
  title: "Nested widgets",
  type: EnumSchemeItemType.Widget,
  multiple: true,
  scheme: [
    { name: "label", type: EnumSchemeItemType.Text },
    { name: "note", type: EnumSchemeItemType.Text },
    {
      name: "children",
      type: EnumSchemeItemType.Widget,
      multiple: true,
      scheme: [
        { name: "label", type: EnumSchemeItemType.Text },
        { name: "note", type: EnumSchemeItemType.Text },
        {
          name: "children",
          type: EnumSchemeItemType.Widget,
          multiple: true,
          scheme: [
            { name: "label", type: EnumSchemeItemType.Text },
            { name: "note", type: EnumSchemeItemType.Text },
            {
              name: "children",
              type: EnumSchemeItemType.Widget,
              multiple: true,
              scheme: [
                { name: "label", type: EnumSchemeItemType.Text },
                { name: "note", type: EnumSchemeItemType.Text },
              ],
            },
          ],
        },
      ],
    },
  ],
}
// Each array item in value must include a unique numeric id.`,
}

const scheme: IScheme = {
    id: "nested-widgets",
    title: "Nested widgets",
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
            name: "root",
            title: "Root widget",
            type: EnumSchemeItemType.Widget,
            multiple: false,
            scheme: nestScheme(MAX_SCHEME_DEPTH),
        },
        {
            name: "snippet",
            title: "Scheme snippet",
            type: EnumSchemeItemType.TextBlock,
            def_value: DEF_VALUE.snippet,
        },
    ],
}

function NestTree({
    node,
    depth = 0,
}: {
    node: NestNode
    depth?: number
}): ReactNode {
    const kids = Array.isArray(node.children) ? node.children : []

    return (
        <li className="list-none">
            <div
                className="glass glass-hover rounded-xl px-4 py-3"
                style={{ marginLeft: depth * 12 }}
            >
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-rpb-secondary">
                        depth {depth}
                    </span>
                    <p className="font-semibold text-rpb-text">{node.label}</p>
                </div>
                {node.note ? (
                    <p className="mt-1 font-mono text-sm text-rpb-muted">
                        {node.note}
                    </p>
                ) : null}
            </div>
            {kids.length > 0 ? (
                <ul className="mt-2 space-y-2 border-l border-rpb-border/80 pl-3 sm:pl-4">
                    {kids.map((child) => (
                        <NestTree
                            key={child.id}
                            node={child}
                            depth={depth + 1}
                        />
                    ))}
                </ul>
            ) : null}
        </li>
    )
}

const NestedWidgetsView: FC<{ id?: number; value?: NestedWidgetsValue }> = ({
    value,
}) => {
    const v = {
        ...DEF_VALUE,
        ...value,
        root: value?.root
            ? { ...DEF_VALUE.root, ...value.root, children: value.root.children ?? [] }
            : DEF_VALUE.root,
    }

    return (
        <section className="w-full px-4 py-12 sm:px-6 sm:py-16">
            <div className="mx-auto max-w-6xl">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-rpb-secondary">
                    Nesting
                </p>
                <h2 className="mt-2 font-sans text-2xl font-semibold tracking-tight sm:text-3xl">
                    {v.title}
                </h2>
                <p className="mt-3 max-w-3xl font-mono text-sm leading-relaxed text-rpb-muted">
                    {v.body}
                </p>

                <div className="mt-8 grid gap-8 lg:grid-cols-2">
                    <div>
                        <p className="mb-3 font-mono text-xs uppercase tracking-wider text-rpb-secondary">
                            Live tree
                        </p>
                        <ul className="space-y-2">
                            <NestTree node={v.root} />
                        </ul>
                        <p className="mt-4 font-mono text-xs text-rpb-muted">
                            Switch to Edit and open this block — expand children
                            widgets inside widgets (scheme depth up to{" "}
                            {MAX_SCHEME_DEPTH}).
                        </p>
                    </div>
                    <div>
                        <p className="mb-3 font-mono text-xs uppercase tracking-wider text-rpb-secondary">
                            Scheme pattern
                        </p>
                        <CodePanel
                            filename="nested-scheme.ts"
                            code={v.snippet}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

const NestedWidgetsBlock: IBlock<NestedWidgetsValue> = {
    id: "nested-widgets",
    title: "Nested widgets",
    description: "Demo of Widget inside Widget nesting",
    image: "",
    value: DEF_VALUE,
    scheme,
    view: NestedWidgetsView,
}

export default NestedWidgetsBlock
