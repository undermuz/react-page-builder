import React from "react"
import { IFeature1 } from "."
import DEF_VALUE from "../defaults"
import {
    Box,
    Container,
    Grid,
    Heading,
    HStack,
    Text,
    VStack,
} from "@chakra-ui/react"

const ImageBox = () => {
    return (
        <Box aspectRatio={1} w={"100%"} bgColor={"gray.800"} rounded={"lg"} />
    )
}

const GridBox = () => {
    return (
        <Box w={"100%"}>
            <ImageBox />
        </Box>
    )
}

const ChakraUIFeature1: React.FC<Partial<IFeature1>> = (props) => {
    const { id = "", value = DEF_VALUE } = props

    const {
        title = DEF_VALUE.title,
        subtitle = DEF_VALUE.subtitle,
        description = DEF_VALUE.description,
    } = value

    return (
        <Container
            id={id}
            maxW="container.xl"
            bgColor={"bg-block"}
            p={"block.pad.1"}
            paddingTop={"block.pad.1.top"}
            paddingBottom={"block.pad.1.bot"}
        >
            <HStack spacing={100} p={6}>
                <VStack
                    justify="center"
                    w={"100%"}
                    spacing={6}
                    align={"stretch"}
                >
                    <VStack justify="center" align={"stretch"} spacing={0}>
                        <Text
                            as="strong"
                            style={{
                                textTransform: "uppercase",
                            }}
                            fontSize={"sm"}
                            color={"gray.500"}
                        >
                            {subtitle}
                        </Text>

                        <Heading as="h2">{title}</Heading>
                    </VStack>

                    <Text
                        style={{
                            lineHeight: "30px",
                        }}
                    >
                        {description}
                    </Text>
                </VStack>

                <Grid
                    w={"100%"}
                    templateRows={"1fr 1fr"}
                    templateColumns={"1fr 1fr"}
                    gap={4}
                >
                    <GridBox />
                    <GridBox />
                    <GridBox />
                    <GridBox />
                </Grid>
            </HStack>
        </Container>
    )
}

export default ChakraUIFeature1
