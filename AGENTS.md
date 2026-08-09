# AGENTS.md

Guidance for AI coding agents working in this repository.

## Project

Nx + npm workspaces monorepo for **`@undermuz/react-page-builder`** — a React library that builds pages from UI blocks (`IBlock`) with JSON schemes and auto-generated edit forms (`@undermuz/react-json-form`).

Package is under active development. Prefer small, focused changes. Consumer-facing docs live in root `README.md` — update it when public API or block authoring flow changes.

## Layout

```text
packages/react-page-builder/   # publishable library (source of truth)
apps/home-page/                # marketing / demo Vite app
```

Library source: `packages/react-page-builder/src/`

| Path | Role |
|------|------|
| `types.ts` | `IBlock`, `IBlockResultValue`, value types |
| `blocks-editor/` | Editable page (`library` + `value` + `onChange`) |
| `blocks-view/` | Read-only renderer (same `library` + `value`) |
| `themes/` | Editor chrome theme (`BasicTheme`, context) |
| `dialog/` | Edit dialog wrapping JsonForm |
| `index.tsx` | Public exports |

Build output: `packages/react-page-builder/dist/` (tsup). Do not hand-edit `dist/`.

## Commands

From repo root:

```bash
npm run build              # build all projects
npm run lint               # lint all
npm run test               # test all
npm run dev:home-page      # Vite dev for apps/home-page
npm run deploy:home-page   # build + publish apps/home-page to gh-pages
```

Library package:

```bash
nx build @undermuz/react-page-builder
nx run @undermuz/react-page-builder:lint
```

After changing public API or types, rebuild the package so `dist/` and declaration files stay in sync.

## Domain model (do not invent APIs)

There is **no** registry class, `createBlock`, or `editFormTheme` prop.

- **Block definition** — plain `IBlock`: `id`, `title`, `description`, `image`, `value`, `scheme`, `view`
- **Library** — `IBlock[]` passed as `library` prop
- **Page state** — `IBlockResultValue[]`: `{ id: number, blockId: string, value }`
- Lookup: `library.find(b => b.id === item.blockId)`
- Edit forms: wrap `BlocksEditor` with JsonForm `UiContext.Provider` + a theme (e.g. `@undermuz/react-json-form-theme-base`)
- Editor chrome theming: optional `ReactPageBuilderThemeContext` / `BasicTheme`

`description` and `image` are required by `IBlock` but unused by the default BasicTheme UI today — still keep them on definitions.

Public exports from package root: `BlocksEditor`, `BlocksView`, types, theme helpers. Subpaths: `blocks-editor`, `blocks-view`.

## Consumer blocks (when documenting or demos)

Typical consumer layout (not shipped in this repo):

```text
blocks/<name>/<version>/
  types.ts
  defaults.ts
  scheme.ts          # IScheme + EnumSchemeItemType from react-json-form
  <ui>/view.tsx
  <ui>/index.tsx     # assembles and default-exports IBlock
```

Same `library` array must be used in editor and view. Keep `IBlock.id` stable — it is persisted as `blockId`.

## Coding conventions

- TypeScript + React function components
- Match existing style in the file you edit (imports, naming, formatting)
- Prefer extending current patterns over new abstractions
- Do not add deps unless needed; peer deps are `react` / `react-dom` (>=18)
- Library depends on `@undermuz/react-json-form` for schemes and edit UI
- Avoid drive-by refactors and unrelated file churn
- Do not commit secrets, `.env`, or large generated caches (`.nx/cache`, etc.)

## Docs

- Root `README.md` — how consumers install, author blocks, and use editor/view
- `apps/home-page/DESIGN.md` — design tokens for the home-page app only

When changing `IBlock`, editor/view props, or theming, update `README.md` in the same change.

## Git

- Do not commit unless the user asks
- Do not force-push `master` / `main`
- Default base branch: `master` (see `nx.json`)
