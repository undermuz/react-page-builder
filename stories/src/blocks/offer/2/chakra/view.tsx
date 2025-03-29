import { FC } from "react"

import DEF_VALUE from "../defaults"
import { IOfferBlock } from "."
import {
    Box,
    Button,
    Container,
    Grid,
    Heading,
    HStack,
    Image,
    Text,
    VStack,
} from "@chakra-ui/react"

const exampleButtonClick = () => {
    alert("click")
}

const ChakraUIOffer2: FC<Partial<IOfferBlock>> = (props) => {
    const { value = DEF_VALUE, onButtonClick = exampleButtonClick } = props

    const {
        title = DEF_VALUE.title,
        subtitle = DEF_VALUE.subtitle,
        show_button = DEF_VALUE.show_button,
        button_text = DEF_VALUE.button_text,
        show_adv = DEF_VALUE.show_adv,
        advantage = DEF_VALUE.advantage,
        image = null,
    } = value

    return (
        <Container
            maxW="container.xl"
            bgColor={"bg-block"}
            p={"block.pad.1"}
            paddingTop={"block.pad.1.top"}
            paddingBottom={"block.pad.1.bot"}
        >
            <Box
                rounded={"1rem"}
                boxShadow={"md"}
                bgColor={"gray.900"}
                color={"gray.100"}
            >
                <Grid templateColumns="7fr 3fr" gap={20} px={"5rem"}>
                    <VStack align={"stretch"} spacing={"3.25rem"} py="2.5rem">
                        <VStack align={"stretch"} spacing={"1.25rem"}>
                            <Heading as={"h1"} fontSize={"block.title.1"}>
                                {title}
                            </Heading>

                            <Text fontSize={"block.desc.1"}>{subtitle}</Text>
                        </VStack>

                        {show_adv && advantage.length > 0 && (
                            <HStack spacing={"2.25rem"}>
                                {advantage.map((item, index) => (
                                    <VStack align={"stretch"} key={index}>
                                        <Text
                                            fontSize={"0.875rem"}
                                            fontFamily={"Rubik"}
                                        >
                                            {item.subtitle}
                                        </Text>
                                        <Text
                                            as={"strong"}
                                            fontFamily={"Montserrat"}
                                            fontWeight={"700"}
                                            fontSize={"1.25rem"}
                                        >
                                            {item.title}
                                        </Text>
                                    </VStack>
                                ))}
                            </HStack>
                        )}

                        {show_button && (
                            <Box>
                                <Button size="lg" onClick={onButtonClick}>
                                    {button_text}
                                </Button>
                            </Box>
                        )}
                    </VStack>

                    <Box>
                        {image === null && (
                            <Box
                                bgColor={"gray.100"}
                                sx={{ aspectRatio: "1" }}
                                rounded={30}
                            />
                        )}

                        {image !== null && (
                            <Box pt={"2rem"} w={"100%"} h={"100%"}>
                                <Box
                                    backgroundImage={`url(${image})`}
                                    backgroundSize={"contain"}
                                    backgroundPosition={"right bottom"}
                                    backgroundRepeat={"no-repeat"}
                                    w={"100%"}
                                    h={"100%"}
                                />
                            </Box>
                            // <Image
                            //     src={image}
                            //     alt="photo"
                            //     h={"100%"}
                            //     objectFit={"cover"}
                            // />
                        )}
                    </Box>
                </Grid>
            </Box>
        </Container>
    )
}

export default ChakraUIOffer2
