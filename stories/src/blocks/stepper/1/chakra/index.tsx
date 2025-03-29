import { IScheme } from "@undermuz/react-json-form"
import { EnumSchemeItemType } from "@undermuz/react-json-form"
import { IBlock } from "../../../../types"
import GridText from "./view"
import DEF_VALUE from "../defaults"

const WidgetName = "ChakraStepper1"
const WidgetTitle = "ChakraUI: Этапы 1"

export interface IStepperItems {
    id: string | number
    title: string
    image: string
}

export interface IStepperList {
    title: string
    image: string
    list: IStepperItems[]
}

export interface IStepperValue {
    title: string
    list: IStepperList[]
}

export interface IStepper {
    id: string
    value: IStepperValue
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
                    name: "title",
                    title: "Изображение",
                    type: EnumSchemeItemType.Files,
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
