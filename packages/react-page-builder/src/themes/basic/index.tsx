import {
    type CSSProperties,
    type ComponentProps,
    type FC,
    type PropsWithChildren,
    createContext,
    useContext,
} from "react"
import type { IBlock } from "../../types"

/**
 * Tokens aligned with shadcn/ui default neutral theme:
 * https://ui.shadcn.com/docs/theming
 */
const t = {
    radius: "0.625rem",
    radiusMd: "0.5rem",

    background: "oklch(1 0 0)",
    foreground: "oklch(0.145 0 0)",
    card: "oklch(1 0 0)",
    cardForeground: "oklch(0.145 0 0)",
    accent: "oklch(0.97 0 0)",
    accentForeground: "oklch(0.205 0 0)",
    border: "oklch(0.922 0 0)",
    input: "oklch(0.922 0 0)",
    ring: "oklch(0.708 0 0)",

    overlay: "oklch(0.205 0 0)",
    overlayForeground: "oklch(0.985 0 0)",
    overlayBorder: "oklch(1 0 0 / 10%)",
    overlayMuted: "oklch(0.269 0 0)",
    overlayDestructive: "oklch(0.704 0.191 22.216)",

    fontFamily:
        'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
    shadowSm: "0 1px 2px oklch(0 0 0 / 4%)",
    shadowLg:
        "0 10px 15px -3px oklch(0 0 0 / 18%), 0 4px 6px -4px oklch(0 0 0 / 14%)",
    ringFocus: "0 0 0 3px oklch(0.708 0 0 / 35%)",
} as const

const ActionsSurfaceContext = createContext(false)

const hoverStyles = `
[data-reactpagebuilder="theme"] [data-reactpagebuilder="header-select"]:focus-visible {
    border-color: ${t.ring};
    box-shadow: ${t.ringFocus};
}

[data-reactpagebuilder="theme"] [data-reactpagebuilder="btn"]:hover {
    background: ${t.accent};
    color: ${t.accentForeground};
}

[data-reactpagebuilder="theme"] [data-reactpagebuilder="btn"]:focus-visible,
[data-reactpagebuilder="theme"] [data-reactpagebuilder="btn-remove"]:focus-visible {
    outline: none;
    box-shadow: ${t.ringFocus};
}

[data-reactpagebuilder="theme"] [data-reactpagebuilder="block-item-actions"] [data-reactpagebuilder="btn"]:hover {
    background: ${t.overlayMuted};
    color: ${t.overlayForeground};
}

[data-reactpagebuilder="theme"] [data-reactpagebuilder="btn-remove"]:hover {
    background: oklch(0.704 0.191 22.216 / 18%);
    color: ${t.overlayDestructive};
}

[data-reactpagebuilder="theme"] [data-reactpagebuilder="block-item"]:hover {
    z-index: 2;
}

[data-reactpagebuilder="theme"] [data-reactpagebuilder="block-item"] [data-reactpagebuilder="block-item-actions"] {
    opacity: 0;
    pointer-events: none;
}

[data-reactpagebuilder="theme"] [data-reactpagebuilder="block-item"]:hover [data-reactpagebuilder="block-item-actions"] {
    opacity: 1;
    pointer-events: auto;
}
`

const Container: FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <style>{hoverStyles}</style>
            <div
                data-reactpagebuilder="theme"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                    width: "100%",
                    color: t.foreground,
                    fontFamily: t.fontFamily,
                }}
            >
                {children}
            </div>
        </>
    )
}

const Header: FC<
    PropsWithChildren & {
        library: IBlock[]
        onSelect: (id: string) => void
    }
> = ({ children, library, onSelect }) => {
    return (
        <div
            data-reactpagebuilder="header"
            style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.5rem",
                border: `1px solid ${t.border}`,
                borderRadius: t.radius,
                background: t.card,
                color: t.cardForeground,
                boxShadow: t.shadowSm,
            }}
        >
            <select
                data-reactpagebuilder="header-select"
                defaultValue=""
                onChange={(e) => {
                    const value = e.target.value
                    if (!value) return
                    onSelect(value)
                    e.currentTarget.value = ""
                }}
                style={{
                    height: "2.25rem",
                    padding: "0 0.75rem",
                    border: `1px solid ${t.input}`,
                    borderRadius: t.radiusMd,
                    background: t.background,
                    color: t.foreground,
                    fontSize: "0.875rem",
                    lineHeight: "1.25rem",
                    outline: "none",
                    boxShadow: t.shadowSm,
                    fontFamily: "inherit",
                }}
            >
                <option value="" disabled>
                    Add a block
                </option>

                {library.map((item) => (
                    <option key={item.id} value={item.id}>
                        {item.title}
                    </option>
                ))}
            </select>

            {children}
        </div>
    )
}

const ItemActions: FC<PropsWithChildren> = ({ children }) => {
    return (
        <ActionsSurfaceContext.Provider value={true}>
            <div
                data-reactpagebuilder="block-item-actions"
                style={{
                    position: "absolute",
                    top: "0.5rem",
                    left: "0.5rem",
                    right: "0.5rem",
                    width: "auto",

                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.375rem",

                    border: `1px solid ${t.overlayBorder}`,
                    borderRadius: t.radius,
                    backgroundColor: t.overlay,
                    color: t.overlayForeground,
                    boxShadow: t.shadowLg,

                    transition: "opacity 0.15s ease",

                    zIndex: 100000,
                }}
            >
                {children}
            </div>
        </ActionsSurfaceContext.Provider>
    )
}

const ItemActionsLeft: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div
            data-reactpagebuilder="block-item-actions-left"
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "0.25rem",
            }}
        >
            {children}
        </div>
    )
}

const ItemActionsRight: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div
            data-reactpagebuilder="block-item-actions-right"
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "0.25rem",
            }}
        >
            {children}
        </div>
    )
}

const Item: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div
            data-reactpagebuilder="block-item"
            style={{
                position: "relative",
                flexShrink: 0,
            }}
        >
            {children}
        </div>
    )
}

const ItemWidget: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div
            data-reactpagebuilder="block-item-widget"
            style={{
                width: "100%",
            }}
        >
            {children}
        </div>
    )
}

const Button: FC<
    PropsWithChildren &
        ComponentProps<"button"> & {
            "data-reactpagebuilder"?: string
        }
> = ({ children, style, ...btnProps }) => {
    const inActions = useContext(ActionsSurfaceContext)
    const isRemove = btnProps["data-reactpagebuilder"] === "btn-remove"

    const buttonStyle: CSSProperties = inActions
        ? {
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.375rem",
              height: "1.75rem",
              minWidth: "1.75rem",
              padding: "0 0.5rem",
              border: `1px solid ${isRemove ? "transparent" : t.overlayBorder}`,
              borderRadius: t.radiusMd,
              background: "transparent",
              color: isRemove ? t.overlayDestructive : t.overlayForeground,
              fontSize: "0.875rem",
              fontWeight: 500,
              lineHeight: 1,
              cursor: "pointer",
              fontFamily: "inherit",
              outline: "none",
              transition:
                  "background-color 0.15s, color 0.15s, border-color 0.15s, box-shadow 0.15s",
          }
        : {
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.375rem",
              height: "2rem",
              minWidth: "2rem",
              padding: "0 0.75rem",
              border: `1px solid ${t.border}`,
              borderRadius: t.radiusMd,
              background: t.background,
              color: t.foreground,
              fontSize: "0.875rem",
              fontWeight: 500,
              lineHeight: 1,
              cursor: "pointer",
              fontFamily: "inherit",
              outline: "none",
              transition:
                  "background-color 0.15s, color 0.15s, border-color 0.15s, box-shadow 0.15s",
          }

    return (
        <button
            data-reactpagebuilder="btn"
            {...btnProps}
            style={{ ...buttonStyle, ...style }}
        >
            {children}
        </button>
    )
}

export const BasicTheme = Object.assign(Container, {
    Button,
    Header,
    Item: Object.assign(Item, {
        Actions: Object.assign(ItemActions, {
            Left: ItemActionsLeft,
            Right: ItemActionsRight,
        }),
        Widget: ItemWidget,
    }),
})
