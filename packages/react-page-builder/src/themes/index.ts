import {
    type ComponentProps,
    createContext,
    useContext,
    type FC,
    type PropsWithChildren,
} from "react"
import type { IBlock } from "../types"

import { BasicTheme } from "./basic"

export type ReactPageBuilderTheme = FC<PropsWithChildren> & {
    Header: FC<
        PropsWithChildren & {
            library: IBlock[]
            onSelect: (id: string) => void
        }
    >
    Item: FC<PropsWithChildren> & {
        Actions: FC<PropsWithChildren> & {
            Left: FC<PropsWithChildren>
            Right: FC<PropsWithChildren>
        }
        Widget: FC<PropsWithChildren>
    }
    Button: FC<PropsWithChildren & ComponentProps<"button">>
}

export const ReactPageBuilderThemeContext =
    createContext<ReactPageBuilderTheme | null>(null)

export const useTheme = (): ReactPageBuilderTheme => {
    const context = useContext(ReactPageBuilderThemeContext)

    if (!context) {
        return BasicTheme
    }

    return context
}
