# @undermuz/react-page-builder

(⚠️⚠️⚠️ THIS PACKAGE IS UNDER DEVELOPING ⚠️⚠️⚠️)

React library to compose pages from **UI blocks** described by JSON schemes, with an auto-generated edit form for each block.

[NPM: @undermuz/react-page-builder](https://www.npmjs.com/package/@undermuz/react-page-builder)

## Install

```bash
npm i -S @undermuz/react-page-builder
```

You also need a theme for the edit forms (powered by [`@undermuz/react-json-form`](https://www.npmjs.com/package/@undermuz/react-json-form)):

```bash
npm i -S @undermuz/react-json-form-theme-base
```

## Concepts

| Term | Meaning |
|------|---------|
| **Block definition** (`IBlock`) | A reusable block type: id, defaults, edit scheme, and view component |
| **Library** (`IBlock[]`) | Array of block definitions you pass to the editor / viewer |
| **Page value** (`IBlockResultValue[]`) | Saved page state: ordered list of block *instances* |

A page instance looks like:

```ts
{
  id: 123456,           // unique instance id (number)
  blockId: "feature1",  // must match some IBlock.id from the library
  value: { /* fields edited via the scheme */ }
}
```

The same `library` must be used in both **editor** and **view**. Resolution is simply: `library.find(b => b.id === item.blockId)`.

## Create your own block

There is no `createBlock` helper — export a plain object that satisfies `IBlock`.

A practical layout (used in real projects):

```text
blocks/
  feature/
    1/
      types.ts       # value shape
      defaults.ts    # default value for new instances
      scheme.ts      # edit form scheme (react-json-form)
      tailwind/      # or any UI implementation
        view.tsx     # React component
        index.tsx    # assembles IBlock and exports it
```

### 1. Types

```ts
// types.ts
export interface IFeatureValue {
  title: string
  subtitle: string
  description: string
}
```

### 2. Defaults

Copied when the user adds the block in the editor:

```ts
// defaults.ts
import type { IFeatureValue } from "./types"

const DEF_VALUE: IFeatureValue = {
  title: "Look at our products",
  subtitle: "Buy more, get more",
  description: "Lorem ipsum…",
}

export default DEF_VALUE
```

### 3. Scheme (edit form)

`scheme` is an `IScheme` from `@undermuz/react-json-form`. Field `name`s become keys on `value`.

```ts
// scheme.ts
import { EnumSchemeItemType } from "@undermuz/react-json-form"
import type { IScheme } from "@undermuz/react-json-form"
import DEF_VALUE from "./defaults"

export const WidgetName = "feature1"
export const WidgetTitle = "Feature 1"
export const WidgetDescription = "Simple feature section"

const scheme: IScheme = {
  id: WidgetName,
  title: WidgetTitle,
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
      name: "description",
      title: "Description",
      type: EnumSchemeItemType.TextBlock,
      def_value: DEF_VALUE.description,
    },
  ],
}

export default scheme
```

Useful field types from `EnumSchemeItemType`:

- `Text`, `TextBlock`, `Checkbox`, `Select`
- `Files` — file / image upload
- `Widget` — nested object / list (`multiple: true` for arrays)

Example of a nested list field:

```ts
{
  name: "items",
  title: "Items",
  type: EnumSchemeItemType.Widget,
  multiple: true,
  scheme: [
    { name: "title", title: "Title", type: EnumSchemeItemType.Text, def_value: "" },
    { name: "image", title: "Image", type: EnumSchemeItemType.Files, def_value: "" },
  ],
}
```

### 4. View component

Receives `{ id?, value? }` from the library. Fall back to defaults so the block still renders when fields are empty:

```tsx
// view.tsx
import type { FC } from "react"
import DEF_VALUE from "../defaults"
import type { IFeatureValue } from "../types"

const FeatureView: FC<{ id?: number; value?: IFeatureValue }> = (props) => {
  const { id, value = DEF_VALUE } = props
  const {
    title = DEF_VALUE.title,
    subtitle = DEF_VALUE.subtitle,
    description = DEF_VALUE.description,
  } = value

  return (
    <section id={id ? String(id) : undefined}>
      <strong>{subtitle}</strong>
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  )
}

export default FeatureView
```

### 5. Assemble `IBlock`

```tsx
// index.tsx
import type { IBlock } from "@undermuz/react-page-builder"
import DEF_VALUE from "../defaults"
import scheme, {
  WidgetDescription,
  WidgetImage,
  WidgetName,
  WidgetTitle,
} from "../scheme"
import view from "./view"
import type { IFeatureValue } from "../types"

const Feature1: IBlock<IFeatureValue> = {
  id: WidgetName,                 // stable string key → stored as blockId
  title: WidgetTitle,             // label in "Add a block"
  description: WidgetDescription, // required by type
  image: WidgetImage,             // required by type
  value: DEF_VALUE,               // defaults for new instances
  scheme,                         // powers the edit dialog
  view,                           // renders in editor + public page
}

export default Feature1
```

`IBlock` shape:

```ts
interface IBlock<T = unknown> {
  id: string
  title: string
  description: string
  image: string
  value: BlockValue
  scheme: IScheme
  view: FC<{ id?: number; value?: T }>
}
```

## Use the library

Collect your blocks into one array and pass it to both editor and view.

```tsx
import { useState } from "react"
import {
  BlocksEditor,
  BlocksView,
  type IBlock,
  type IBlockResultValue,
} from "@undermuz/react-page-builder"

// Edit-form theme (required for a usable editor)
import { UiContext } from "@undermuz/react-json-form"
import BaseTheme from "@undermuz/react-json-form-theme-base"
import "@undermuz/react-json-form-theme-base/styles.css"

import Feature1 from "./blocks/feature/1/tailwind"
import Offer2 from "./blocks/offer/2/tailwind"

const library: IBlock[] = [Feature1, Offer2]

// Editor — build / rearrange / edit blocks
function PageEditor() {
  const [value, setValue] = useState<IBlockResultValue[]>([])

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

// Public page — same library + same saved value
function PageView({ value }: { value: IBlockResultValue[] }) {
  return <BlocksView library={library} value={value} />
}
```

Persist `value` (`IBlockResultValue[]`) however you like (API, localStorage, CMS). On the public site, load that JSON and render with `BlocksView`.

## Tips

1. Keep `id` stable — renaming it breaks saved pages that already store that `blockId`.
2. Use the **same** `library` in editor and view; a missing `blockId` shows an error in the editor and renders nothing in the view.
3. Wrap `BlocksEditor` with `UiContext.Provider` and a JsonForm theme, otherwise the edit dialog has no UI chrome.
4. Prefer copying defaults when adding blocks (the editor already copies `block.value`); avoid mutating the shared default object after export.
5. Style and markup of `view` are entirely yours (Tailwind, CSS modules, design system, etc.) — the library only mounts your component with `{ id, value }`.

## Exports

From `@undermuz/react-page-builder`:

| Export | Purpose |
|--------|---------|
| `BlocksEditor` | Editable page builder |
| `BlocksView` | Read-only renderer |
| `IBlock`, `IBlockResultValue`, `BlockId`, `BlockValue`, `BlockScheme` | Types |
| `BasicTheme`, `ReactPageBuilderThemeContext`, `useTheme` | Optional editor chrome theming |

Also available as subpaths: `@undermuz/react-page-builder/blocks-editor`, `@undermuz/react-page-builder/blocks-view`.
