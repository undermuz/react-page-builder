// SYSTEM
import { EnumSchemeItemType } from "@undermuz/react-json-form"
import { IScheme } from "@undermuz/react-json-form/build/types/types"

import { Box, Button, Heading, Paragraph } from "grommet"
import React, { MouseEventHandler } from "react"
import { IBlock } from "../../types"

interface IOfferBlockValueAdvantage {
    title: string
    image: string
}

interface IOfferBlockValue {
    title: string
    subtitle: string
    show_button: boolean
    button_text: string
    show_adv: boolean
    image: string | null
    advantage: IOfferBlockValueAdvantage[]
}

interface IOfferBlock {
    id: number
    value: IOfferBlockValue
    onButtonClick?: MouseEventHandler<HTMLAnchorElement> &
        MouseEventHandler<HTMLButtonElement>
}

const DEF_VALUE_ADVANTAGE = [
    { id: 1, title: "С нами проще", image: "" },
    { id: 2, title: "Выгода при первой покупке", image: "" },
    { id: 3, title: "Рост на 146%", image: "" },
]

const DEF_VALUE = {
    title: "Мы лучшие в мире!",
    subtitle: "Закажите сейчас и получите скидку 50%",
    button_text: "Заказать",
    show_button: true,
    show_adv: true,
    image: null,
    advantage: DEF_VALUE_ADVANTAGE,
}

const exampleButtonClick = () => {
    alert("click")
}

const OfferBlock: React.FC<Partial<IOfferBlock>> = (props) => {
    const { value = DEF_VALUE, onButtonClick = exampleButtonClick } = props

    const {
        title = DEF_VALUE.title,
        subtitle = DEF_VALUE.subtitle,
        show_button = DEF_VALUE.show_button,
        button_text = DEF_VALUE.button_text,
        show_adv = DEF_VALUE.show_adv,
        advantage = DEF_VALUE.advantage,
    } = value

    return (
        <Box background={{ color: "neutral-2", opacity: true }}>
            <Box pad="xlarge" align="center">
                <Heading>{title}</Heading>

                <Paragraph>{subtitle}</Paragraph>

                {show_button && (
                    <Box>
                        <Button
                            primary
                            size="large"
                            onClick={onButtonClick}
                            label={button_text}
                        />
                    </Box>
                )}
            </Box>

            {show_adv && advantage.length > 0 && (
                <Box pad="large" background={{ color: "neutral-2" }}>
                    <Box direction="row" justify="around">
                        {advantage.map((item, index) => (
                            <Box key={index}>
                                <img src={item.image} alt="" />

                                <span>{item.title}</span>
                            </Box>
                        ))}
                    </Box>
                </Box>
            )}
        </Box>
    )
}

/*SCHEME BEGIN*/

const WidgetName = "Offer"
const WidgetTitle = "Оффер"

const scheme: IScheme = {
    id: WidgetName,
    name: WidgetName,
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
    single: true,
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
    view: OfferBlock,
}

export default Offer
