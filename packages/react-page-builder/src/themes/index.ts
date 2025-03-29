import {
    type ComponentProps,
    createContext,
    useContext,
    type FC,
    type PropsWithChildren,
} from "react"
import { BasicTheme } from "./basic"
import { IBlock } from "../types"

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

export const useTheme = () => {
    const context = useContext(ReactPageBuilderThemeContext)

    if (!context) {
        return BasicTheme
    }

    return context
}
