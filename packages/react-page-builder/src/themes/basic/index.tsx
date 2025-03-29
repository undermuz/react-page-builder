import { type ComponentProps, type FC, type PropsWithChildren } from "react"
import type { IBlock } from "../../types"

const Container: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
            }}
        >
            {children}
        </div>
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
            style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
            }}
        >
            <select value={0} onChange={(e) => onSelect(e.target.value)}>
                <option value={0} disabled selected>
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
        <div
            data-reactpagebuilder="block-item-actions"
            style={{
                position: "absolute",
                top: "10px",
                left: "0px",
                width: "100%",

                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: "5px",

                backgroundColor: "rgba(0, 0, 0, 0.5)",

                transition: "opacity 0.2s",
            }}
        >
            {children}
        </div>
    )
}

const ItemActionsLeft: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div
            data-reactpagebuilder="block-item-actions-left"
            style={{
                display: "flex",
                flexDirection: "row",
                gap: "5px",
            }}
        >
            {children}
        </div>
    )
}

const ItemActionsRight: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div data-reactpagebuilder="block-item-actions-right">{children}</div>
    )
}

const Item: FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <style>
                {`
                    [data-reactpagebuilder="block-item"] [data-reactpagebuilder="block-item-actions"] {
                        opacity: 0;
                    }

                    [data-reactpagebuilder="block-item"]:hover [data-reactpagebuilder="block-item-actions"] {
                        opacity: 1;
                    }

                    [data-reactpagebuilder="block-item"] [data-reactpagebuilder="btn-remove"] {
                        background-color: rgba(255, 0, 0, 0.5);
                    }
                `}
            </style>

            <div
                data-reactpagebuilder="block-item"
                style={{
                    position: "relative",
                    flexShrink: 0,
                }}
            >
                {children}
            </div>
        </>
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

const Button: FC<PropsWithChildren & ComponentProps<"button">> = ({
    children,
    ...btnProps
}) => {
    return (
        <button
            {...btnProps}
            style={{
                padding: "5px 10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
            }}
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
