import { Box, Button, Heading, Paragraph, Text, List } from "grommet"
import React, {
    MouseEventHandler,
    PropsWithChildren,
    PureComponent,
} from "react"
import styled from "styled-components"
import { IPrice1, IPrice1ValuePrices, IPrice1ValuePricesItem } from "."
import DEF_VALUE from "./defaults"

const exampleButtonClick = () => {
    alert("click")
}

interface IPriceItemProps {
    data: IPrice1ValuePrices
    button_text: string
    onButtonClick?: MouseEventHandler<HTMLAnchorElement> &
        MouseEventHandler<HTMLButtonElement>
}

const PriceItem: React.FC<IPriceItemProps> = ({
    data,
    button_text,
    onButtonClick = exampleButtonClick,
}) => {
    const { title, price, list, is_active } = data

    const color = !is_active ? "light-1" : "accent-1"

    return (
        <Box
            pad="medium"
            basis="1/3"
            justify="center"
            align="center"
            hoverIndicator={{
                background: {
                    color: "accent-1",
                },
            }}
            background={{
                color,
                opacity: "strong",
            }}
            round="small"
        >
            <Heading
                level={3}
                size="small"
                textAlign="center"
                margin={{ top: "none", bottom: "small" }}
            >
                {title}
            </Heading>

            <Text size="xlarge" textAlign="center" weight="bolder">
                {price} ₽
            </Text>

            <Text
                as={"div"}
                size="small"
                textAlign="center"
                margin={{ top: "small" }}
            >
                <List
                    alignSelf="center"
                    data={list}
                    border={false}
                    pad={{ vertical: "xxsmall" }}
                >
                    {(listItem: IPrice1ValuePricesItem) => {
                        return <Text key={listItem.id}>{listItem.title}</Text>
                    }}
                </List>
            </Text>

            <Button
                margin={{ top: "medium" }}
                size="medium"
                primary={is_active}
                onClick={onButtonClick}
                label={button_text}
            />

            {/* <Text>{item.price}</Text>
    {item.list.map((i) => {
        return <Text>{i.title}</Text>
    })} */}
        </Box>
    )
}

const Price1: React.FC<IPrice1> = (props) => {
    const {
        id = 0,
        value = DEF_VALUE,
        onButtonClick = exampleButtonClick,
    } = props

    const {
        title = DEF_VALUE.title,
        subtitle = DEF_VALUE.subtitle,
        button_text = DEF_VALUE.button_text,
        prices = DEF_VALUE.prices,
    } = value

    return (
        <Box background={{ color: "light-3" }} align="center">
            <Box width={"xxlarge"}>
                <Box pad="medium" direction="column" align="center">
                    <Box align="center">
                        <Heading level={2}>{title}</Heading>
                    </Box>

                    <Box align="center">
                        <Paragraph>{subtitle}</Paragraph>
                    </Box>
                </Box>

                {prices.length > 0 && (
                    <Box
                        direction="row-responsive"
                        justify="center"
                        align="start"
                        pad="small"
                        background="light-3"
                        gap="medium"
                        basis="full"
                        width={"100%"}
                    >
                        {prices.map((item, index) => (
                            <PriceItem
                                key={item.id}
                                data={item}
                                button_text={button_text}
                            />
                        ))}
                    </Box>
                )}
            </Box>
        </Box>
    )
}

export default Price1
