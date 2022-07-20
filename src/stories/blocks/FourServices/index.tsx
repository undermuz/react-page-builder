import {
    EnumSchemeItemType,
    IScheme,
    IWidgetSettings,
} from "containers/build/landing/widget-builder/types"
import { MouseEventHandler } from "react"

import DEF_VALUE from "./defaults"
import view from "./view"

export interface IFourServicesValueService {
    description: string
    text: string
}

export interface IFourServicesValueServices {
    first_service: IFourServicesValueService
    second_service: IFourServicesValueService
    third_service: IFourServicesValueService
    fourth_service: IFourServicesValueService
}

export interface IFourServicesValue {
    main: {
        title: string
    }
    services: IFourServicesValueServices
}

export interface IFourServices {
    id: number
    value: IFourServicesValue
    onButtonClick?: MouseEventHandler<HTMLAnchorElement> &
        MouseEventHandler<HTMLButtonElement>
}

/*SCHEME BEGIN*/

const WidgetName = "FourServices"
const WidgetTitle = `Блок "4 сервиса`

const scheme: IScheme = {
    id: WidgetName,
    name: WidgetName,
    title: WidgetTitle,
    single: true,
    multiple: false,
    scheme: [
        {
            name: "main",
            title: "Основное",
            scheme: [
                {
                    name: "title",
                    title: "Заголовок",
                    type: EnumSchemeItemType.Text,
                    def_value: "",
                    is_require: true,
                },
            ],
        },
        {
            name: "services",
            title: "Сервисы",
            scheme: [
                {
                    name: "first_service",
                    title: "Первый сервис",
                    type: EnumSchemeItemType.Widget,
                    def_value: {},
                    scheme: [
                        {
                            name: "description",
                            title: "Подзаголовок",
                            type: EnumSchemeItemType.TextBlock,
                            def_value: "",
                            is_require: true,
                        },
                        {
                            name: "text",
                            title: "Содержание",
                            type: EnumSchemeItemType.TextEditor,
                            def_value: "",
                        },
                    ],
                },
                {
                    name: "second_service",
                    title: "Второй сервис",
                    type: EnumSchemeItemType.Widget,
                    def_value: {},
                    scheme: [
                        {
                            title: "Подзаголовок",
                            name: "description",
                            type: EnumSchemeItemType.TextBlock,
                            def_value: "",
                            is_require: true,
                        },
                        {
                            title: "Содержание",
                            name: "text",
                            type: EnumSchemeItemType.TextEditor,
                            def_value: "",
                        },
                    ],
                },
                {
                    name: "third_service",
                    title: "Третий сервис",
                    type: EnumSchemeItemType.Widget,
                    def_value: {},
                    scheme: [
                        {
                            title: "Подзаголовок",
                            name: "description",
                            type: EnumSchemeItemType.TextBlock,
                            def_value: "",
                            is_require: true,
                        },
                        {
                            title: "Содержание",
                            name: "text",
                            type: EnumSchemeItemType.TextEditor,
                            def_value: "",
                        },
                    ],
                },
                {
                    name: "fourth_service",
                    title: "Четвертый сервис",
                    type: EnumSchemeItemType.Widget,
                    def_value: {},
                    scheme: [
                        {
                            title: "Подзаголовок",
                            name: "description",
                            type: EnumSchemeItemType.TextBlock,
                            def_value: "",
                            is_require: true,
                        },
                        {
                            title: "Содержание",
                            name: "text",
                            type: EnumSchemeItemType.TextEditor,
                            def_value: "",
                        },
                    ],
                },
            ],
        },
    ],
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
