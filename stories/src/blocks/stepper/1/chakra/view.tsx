import React from "react"
import { IStepper } from "."
import DEF_VALUE from "../defaults"
import {
    Box,
    Container,
    Flex,
    Grid,
    Heading,
    HStack,
    Tab,
    TabIndicator,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
} from "@chakra-ui/react"

const ChakraUiStepper1: React.FC<Partial<IStepper>> = (props) => {
    const { id = 0, value = DEF_VALUE } = props

    const { title = "", list = [] } = value

    return (
        <Container
            id={`${id}`}
            maxW="container.xl"
            bgColor={"block.bg.1"}
            color={"block.text.1"}
            p={"block.pad.1"}
            paddingTop={"block.pad.1.top"}
            paddingBottom={"block.pad.1.bot"}
        >
            <Tabs display={"flex"} flexDir={"column"} size={"xl"}>
                <Box position="relative">
                    <HStack justify={"space-between"}>
                        <Heading as={"h2"}>{title}</Heading>

                        <TabList
                            borderColor={"tabs.list.border"}
                            borderBottomWidth={"3px"}
                            gap={"tabs.items"}
                        >
                            {list.map((item, index) => (
                                <Tab
                                    key={index}
                                    color={"tabs.item.text"}
                                    fontSize={"tabs.item"}
                                    _selected={{
                                        color: "tabs.item.text.selected",
                                    }}
                                >
                                    {item.title}
                                </Tab>
                            ))}
                        </TabList>
                    </HStack>

                    <TabIndicator
                        mt="-1.5px"
                        height="2px"
                        bg="tabs.item.text.selected"
                        borderRadius="1px"
                    />
                </Box>

                <TabPanels>
                    {list.map((item, index) => (
                        <TabPanel key={index} p={0}>
                            <Grid
                                key={index}
                                templateColumns={["1fr", "1fr 40%"]}
                                templateRows={["1fr 1fr", "1fr"]}
                                gap={6}
                            >
                                <Grid
                                    key={index}
                                    templateColumns={["1fr", "1fr 1fr"]}
                                    gap={6}
                                >
                                    {item.list.map((item, index) => (
                                        <Grid
                                            key={index}
                                            templateColumns={[
                                                "1fr",
                                                "60px 5fr 1fr",
                                            ]}
                                            gap={`1.25rem`}
                                            border={"1px solid"}
                                            borderColor={"gray.400"}
                                            rounded={"lg"}
                                            alignContent={"center"}
                                            alignItems={"center"}
                                            justifyContent={"center"}
                                            // p={4}
                                            px={`28px`}
                                            py={`18px`}
                                            paddingRight={`14px`}
                                        >
                                            {!item.image && (
                                                <Box
                                                    aspectRatio={"1 / 1"}
                                                    bgColor={"gray.200"}
                                                    rounded={"lg"}
                                                    w={"60px"}
                                                />
                                            )}

                                            {Boolean(item.image) && (
                                                <Box w={"100%"} h={"100%"}>
                                                    <Box
                                                        backgroundImage={`url(${item.image})`}
                                                        backgroundSize={
                                                            "contain"
                                                        }
                                                        backgroundPosition={
                                                            "center"
                                                        }
                                                        backgroundRepeat={
                                                            "no-repeat"
                                                        }
                                                        w={"100%"}
                                                        h={"100%"}
                                                    />
                                                </Box>
                                            )}

                                            <Heading
                                                as={"h4"}
                                                color={"grid.text.1"}
                                                fontSize={"grid.text"}
                                                fontWeight={"bold"}
                                            >
                                                {item.title}
                                            </Heading>

                                            <Flex
                                                justify={"flex-end"}
                                                align={"center"}
                                            >
                                                <Text
                                                    as={"strong"}
                                                    color={"grid.text.2"}
                                                    fontSize={"grid.text.2"}
                                                >
                                                    {index + 1}
                                                </Text>
                                            </Flex>
                                        </Grid>
                                    ))}
                                </Grid>

                                {!item.image && (
                                    <Box
                                        aspectRatio={"1 / 1.1"}
                                        bgColor={"gray.200"}
                                        rounded={"lg"}
                                    />
                                )}

                                {Boolean(item.image) && (
                                    <Box
                                        w={"100%"}
                                        h={"100%"}
                                        bgColor={"white"}
                                    >
                                        <Box
                                            backgroundImage={`url(${item.image})`}
                                            backgroundSize={"contain"}
                                            backgroundPosition={"center"}
                                            backgroundRepeat={"no-repeat"}
                                            w={"100%"}
                                            h={"100%"}
                                        />
                                    </Box>
                                )}
                            </Grid>
                        </TabPanel>
                    ))}
                </TabPanels>
            </Tabs>
        </Container>
    )
}

export default ChakraUiStepper1
