import { IScheme } from "@undermuz/react-json-form"
import { EnumSchemeItemType } from "@undermuz/react-json-form"
import { IBlock } from "../../../../types"
import GridText from "./view"
import DEF_VALUE from "../defaults"

const WidgetName = "ChakraPortfolio1"
const WidgetTitle = "ChakraUI: Портфолио 1"

export interface IPortfolioItems {
    id: string | number
    title: string
    subtitle: string
    subtitle2?: string
    image?: string
    imageSize?: string
    imagePos?: string
    description: string
    tags: Array<{
        title: string
    }>
}

export interface IPortfolioList {
    title: string
    list: IPortfolioItems[]
    isActive?: boolean
}

export interface IPortfolioValue {
    title: string
    list: IPortfolioList[]
}

export interface IPortfolio {
    id: string
    value: IPortfolioValue
}

export const scheme: IScheme = {
    id: WidgetName,
    scheme: [
        {
            name: "title",
            title: "Заголовок",
            type: EnumSchemeItemType.Text,
            def_value: "",
        },
        {
            name: "list",
            title: "Список",
            type: EnumSchemeItemType.Widget,
            multiple: true,
            scheme: [
                {
                    name: "title",
                    title: "Заголовок",
                    type: EnumSchemeItemType.Text,
                    def_value: "",
                },
                {
                    name: "list",
                    title: "Список",
                    type: EnumSchemeItemType.Widget,
                    def_value: "",
                    multiple: true,
                    scheme: [
                        {
                            name: "image",
                            title: "Изображение",
                            type: EnumSchemeItemType.Files,
                            def_value: "",
                        },
                        {
                            name: "title",
                            title: "Заголовок",
                            type: EnumSchemeItemType.Text,
                            def_value: "",
                        },
                        {
                            name: "subtitle",
                            title: "Подзаголовок",
                            type: EnumSchemeItemType.Text,
                            def_value: "",
                        },
                    ],
                },
            ],
        },
    ],
    multiple: false,
    title: WidgetTitle,
}

const setting: IBlock = {
    id: WidgetName,
    title: WidgetTitle,
    description: `Для преимуществ`,
    image: `/pic/7baf806ceff92c3c9f65c8c029cdd73eOabFY.png`,
    scheme,
    //@ts-ignore
    value: DEF_VALUE,
    //@ts-ignore
    view: GridText,
}

export default setting
