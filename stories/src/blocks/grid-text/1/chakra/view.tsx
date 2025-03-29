import React from "react"
import { IGridText } from "."
import DEF_VALUE from "../defaults"
import { Box, Container, Grid, Heading, Text, VStack } from "@chakra-ui/react"

const ChakraUiGridText: React.FC<Partial<IGridText>> = (props) => {
    const { id = "ChakraUiGridText", value = DEF_VALUE } = props

    const { title = "", list = [] } = value

    return (
        <Container
            id={`${id}`}
            maxW="container.xl"
            p={"block.pad.1"}
            paddingTop={"block.pad.1.top"}
            paddingBottom={"block.pad.1.bot"}
            bgColor={"block.bg"}
        >
            <VStack align={"stretch"} spacing={6}>
                <Box>
                    <Heading as={"h2"}>{title}</Heading>
                </Box>

                <Grid
                    templateColumns={["100%", list.map(() => "1fr").join(" ")]}
                    gap={"block.pad.2"}
                >
                    {list.map((item, index) => (
                        <VStack
                            key={index}
                            bgColor={"white"}
                            spacing={"block.pad.6"}
                            p={"block.pad.3"}
                            rounded={6}
                            align={"stretch"}
                        >
                            <Heading as={"h3"} fontSize={"block.title.2"}>
                                {item.title}
                            </Heading>

                            <Text fontSize={"block.desc.2"}>
                                {item.subtitle}
                            </Text>
                        </VStack>
                    ))}
                </Grid>
            </VStack>
        </Container>
    )
}

export default ChakraUiGridText
