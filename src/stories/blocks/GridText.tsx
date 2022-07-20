import { Box, Card, Grid, Heading, Paragraph, ResponsiveContext } from "grommet"
import React, { Component, useContext } from "react"
import {
    EnumSchemeItemType,
    IScheme,
    IWidgetSettings,
} from "../widget-builder/types"

const WidgetName = "GridText"
const WidgetTitle = "Текстовая сетка"

interface IGridTextValueAdvantage {
    title: string
    subtitle: string
    image?: string
}

interface IGridTextValue {
    title: string
    list: IGridTextValueAdvantage[]
}

interface IGridText {
    id: number
    value: IGridTextValue
}

const DEF_VALUE_LIST = [
    {
        title: "Надежность",
        subtitle:
            "ываываа ываыа вы выа  аыаыавыаывавыаыва выа ывавыавыа вы авы аыва",
    },
    {
        title: "Скорость",
        subtitle:
            "ываываа ываыа вы выа  аыаыавыаывавыаыва выа ывавыавыа вы авы аыва",
    },
    {
        title: "Эффективность",
        subtitle:
            "ываываа ываыа вы выа  аыаыавыаывавыаыва выа ывавыавыа вы авы аыва",
    },
    {
        title: "Цена",
        subtitle:
            "ываываа ываыа вы выа  аыаыавыаывавыаыва выа ывавыавыа вы авы аыва",
    },
    {
        title: "Гарантия",
        subtitle:
            "ываываа ываыа вы выа  аыаыавыаывавыаыва выа ывавыавыа вы авы аыва",
    },
    {
        title: "Справедливость",
        subtitle:
            "ываываа ываыа вы выа  аыаыавыаывавыаыва выа ывавыавыа вы авы аыва",
    },
]

const DEF_VALUE = {
    title: "Приемущества",
    list: DEF_VALUE_LIST,
}

const GridText: React.FC<IGridText> = (props) => {
    const { id = 0, value = DEF_VALUE } = props

    const { title = "", list = [] } = value

    const size = useContext(ResponsiveContext)

    return (
        <Box pad={"large"}>
            <Box align="center" pad="large">
                <h2>{title}</h2>
            </Box>

            <Box pad={"large"}>
                <Grid columns={size !== "small" ? "small" : "100%"} gap="small">
                    {list.map((item, index) => (
                        <Card pad="medium" key={index}>
                            {/* {Boolean(item.image) && (
                                <div className="img">
                                    <img src={item.image} />
                                </div>
                            )} */}

                            <div>
                                <Heading level={4}>{item.title}</Heading>

                                <Paragraph size="small">
                                    {item.subtitle}
                                </Paragraph>
                            </div>
                        </Card>
                    ))}
                </Grid>
            </Box>
        </Box>
    )
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
    single: true,
    multiple: false,
    title: WidgetTitle,
    name: WidgetName,
}

const setting: IWidgetSettings = {
    id: WidgetName,
    title: WidgetTitle,
    description: `Для преимуществ`,
    image: `/pic/7baf806ceff92c3c9f65c8c029cdd73eOabFY.png`,
    scheme,
    value: DEF_VALUE,
    view: GridText,
}

export default setting
