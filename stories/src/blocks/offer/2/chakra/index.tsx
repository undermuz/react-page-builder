// SYSTEM
import { EnumSchemeItemType } from "@undermuz/react-json-form"
import { IScheme } from "@undermuz/react-json-form"

import { MouseEventHandler } from "react"
import DEF_VALUE from "../defaults"
import view from "./view"
import { IBlock } from "../../../../types"

export interface IOfferBlockValueAdvantage {
    title: string
    subtitle: string
}

export interface IOfferBlockValue {
    title: string
    subtitle: string
    show_button: boolean
    button_text: string
    show_adv: boolean
    image: string | null
    advantage: IOfferBlockValueAdvantage[]
}

export interface IOfferBlock {
    id: number
    value: IOfferBlockValue
    onButtonClick?: MouseEventHandler<HTMLAnchorElement> &
        MouseEventHandler<HTMLButtonElement>
}

/*SCHEME BEGIN*/

const WidgetName = "Offer"
const WidgetTitle = "Оффер"

const scheme: IScheme = {
    id: WidgetName,
    scheme: [
        {
            name: "title",
            title: "Заголовок",
            type: EnumSchemeItemType.Text,
            def_value: "",
        },
        {
            name: "subtitle",
            title: "Подзаголовок",
            type: EnumSchemeItemType.TextBlock,
            def_value: "",
        },
        {
            name: "button_text",
            title: "Текст кнопки",
            type: EnumSchemeItemType.Text,
            def_value: "",
        },
        {
            name: "show_button",
            title: "Показывать кнопку?",
            type: EnumSchemeItemType.Checkbox,
            def_value: true,
        },
        {
            name: "show_adv",
            title: "Показывать преимущества",
            type: EnumSchemeItemType.Checkbox,
            def_value: true,
        },
        {
            name: "image",
            title: "Изображение",
            type: EnumSchemeItemType.Files,
            def_value: "",
        },
        {
            name: "advantage",
            title: "Преимущества",
            type: EnumSchemeItemType.Widget,
            multiple: true,
            def_value: "",
            scheme: [
                {
                    name: "title",
                    title: "Заголовок",
                    type: EnumSchemeItemType.Text,
                    def_value: "",
                },
                {
                    name: "image",
                    title: "Изображение",
                    type: EnumSchemeItemType.Files,
                    def_value: "",
                },
            ],
        },
    ],
    multiple: false,
    title: WidgetTitle,
}

const Offer: IBlock = {
    id: WidgetName,
    title: WidgetTitle,
    description: `Оффер с преимуществами`,
    image: `/pic/5aec67ad9e3e1ee17dc8717d1e23e8c5zXnwX.png`,
    value: DEF_VALUE,
    scheme,
    //@ts-ignore
    view,
}

export default Offer
