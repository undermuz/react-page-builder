import {
    EnumSchemeItemType,
    IScheme,
    IWidgetSettings,
} from "containers/build/landing/widget-builder/types"
import { MouseEventHandler } from "react"

import DEF_VALUE from "./defaults"
import view from "./view"

export interface IBlog1ValueListItem {
    id: number
    title: string
    description: string
    is_active: boolean
    date: string
}

export interface IBlog1Value {
    title: string
    subtitle: string
    list: IBlog1ValueListItem[]
}

export interface IBlog1 {
    id: number
    value: IBlog1Value
    onButtonClick?: MouseEventHandler<HTMLAnchorElement> &
        MouseEventHandler<HTMLButtonElement>
}

/*SCHEME BEGIN*/

const WidgetName = "Blog1"
const WidgetTitle = "Блог/Новости 1"

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
            name: "list",
            title: "Новости",
            type: EnumSchemeItemType.Widget,
            multiple: true,
            def_value: DEF_VALUE.list,
            scheme: [
                {
                    name: "title",
                    title: "Заголовок",
                    type: EnumSchemeItemType.Text,
                    def_value: "",
                },
                {
                    name: "description",
                    title: "Описание",
                    type: EnumSchemeItemType.Text,
                    def_value: "",
                },
                {
                    name: "date",
                    title: "Дата",
                    type: EnumSchemeItemType.Text,
                    def_value: "",
                },
                {
                    name: "is_active",
                    title: "Активная?",
                    type: EnumSchemeItemType.Checkbox,
                    def_value: false,
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
    description: `Блог/Новости 1`,
    image: `/pic/5aec67ad9e3e1ee17dc8717d1e23e8c5zXnwX.png`,
    value: DEF_VALUE,
    scheme,
    view,
}

export { scheme }

export default setting

/*SCHEME END*/
