import { IScheme } from "@undermuz/react-json-form"
import { EnumSchemeItemType } from "@undermuz/react-json-form"
import { IBlock } from "../../../../types"
import GridText from "./view"
import DEF_VALUE from "../defaults"

const WidgetName = "GridText"
const WidgetTitle = "Текстовая сетка"

export interface IGridTextValueAdvantage {
    title: string
    subtitle: string
    image?: string
}

export interface IGridTextValue {
    title: string
    list: IGridTextValueAdvantage[]
}

export interface IGridText {
    id: string
    value: IGridTextValue
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
    multiple: false,
    title: WidgetTitle,
}

const setting: IBlock = {
    id: WidgetName,
    title: WidgetTitle,
    description: `Для преимуществ`,
    image: `/pic/7baf806ceff92c3c9f65c8c029cdd73eOabFY.png`,
    scheme,
    value: DEF_VALUE,
    //@ts-ignore
    view: GridText,
}

export default setting
