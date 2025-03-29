import { Box, Container, HStack, Link, Text } from "@chakra-ui/react"

const DEF_VALUE = {
    title: "Victoria",
    sub_title: "UX / UI / TILDA",
    list: [
        {
            title: "Услуги",
            link: "#services",
        },
        {
            title: "Портфолио",
            link: "#portfolio",
        },
        {
            title: "Этапы работы",
            link: "#stages",
        },
        {
            title: "Обо мне",
            link: "#contacts",
        },
        {
            title: "Контакты",
            link: "#contacts",
        },
    ],
}

export const ChakraHeaderMenu1 = ({ value = DEF_VALUE }) => {
    return (
        <Container maxW="container.xl" py={"20px"}>
            <HStack justify={"space-between"} w={"100%"}>
                <HStack spacing={"20px"}>
                    <Text
                        as={"strong"}
                        fontFamily={"Montserrat"}
                        fontWeight={"700"}
                        fontSize={"25px"}
                    >
                        {value.title}
                    </Text>
                    <Text
                        as={"strong"}
                        fontFamily={"Montserrat"}
                        fontWeight={"700"}
                        fontSize={"17px"}
                    >
                        {value.sub_title}
                    </Text>
                </HStack>
                <HStack spacing={"20px"}>
                    {value.list.map((item, index) => (
                        <Link
                            key={index}
                            href={item.link}
                            fontFamily={"Montserrat"}
                            fontWeight={"600"}
                            fontSize={"18px"}
                        >
                            {item.title}
                        </Link>
                    ))}
                </HStack>
            </HStack>
        </Container>
    )
}
