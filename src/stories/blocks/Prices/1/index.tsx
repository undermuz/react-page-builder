import {
    EnumSchemeItemType,
    IScheme,
    IWidgetSettings,
} from "containers/build/landing/widget-builder/types"
import { MouseEventHandler } from "react"

import DEF_VALUE from "./defaults"
import view from "./view"

export interface IPrice1ValuePricesItem {
    id: number
    title: string
}

export interface IPrice1ValuePrices {
    id: number
    title: string
    price: number
    is_active: boolean
    list: IPrice1ValuePricesItem[]
}

export interface IPrice1Value {
    title: string

    subtitle: string
    button_text: string
    prices: IPrice1ValuePrices[]
}

export interface IPrice1 {
    id: number
    value: IPrice1Value
    onButtonClick?: MouseEventHandler<HTMLAnchorElement> &
        MouseEventHandler<HTMLButtonElement>
}

/*SCHEME BEGIN*/

const WidgetName = "Price1"
const WidgetTitle = "Прайсы 1"

const scheme: IScheme = {
    id: WidgetName,
    scheme: [
        {
            name: "title",
            title: "Заголовок",
            type: EnumSchemeItemType.Text,
            def_value: DEF_VALUE.title,
        },
        {
            name: "subtitle",
            title: "Подзаголовок",
            type: EnumSchemeItemType.TextBlock,
            def_value: DEF_VALUE.subtitle,
        },
        {
            name: "prices",
            title: "Цены",
            type: EnumSchemeItemType.Widget,
            multiple: true,
            def_value: DEF_VALUE.prices,
            scheme: [
                {
                    name: "title",
                    title: "Заголовок",
                    type: EnumSchemeItemType.Text,
                    def_value: "",
                },
                {
                    name: "price",
                    title: "Значение",
                    type: EnumSchemeItemType.Text,
                    def_value: "",
                },
                {
                    name: "is_active",
                    title: "Активная?",
                    type: EnumSchemeItemType.Checkbox,
                    def_value: false,
                },
                {
                    name: "list",
                    title: "Пункты",
                    type: EnumSchemeItemType.Widget,
                    multiple: true,
                    def_value: [],
                    scheme: [
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
    single: true,
    multiple: false,
    title: WidgetTitle,
    name: WidgetName,
}

const setting: IWidgetSettings = {
    id: WidgetName,
    title: WidgetTitle,
    description: `Прайсы 1`,
    image: `/pic/5aec67ad9e3e1ee17dc8717d1e23e8c5zXnwX.png`,
    value: DEF_VALUE,
    scheme,
    view,
}

export { scheme }

export default setting

/*SCHEME END*/
