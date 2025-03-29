import React from "react"
import { IPortfolio } from "."
import DEF_VALUE from "../defaults"
import {
    Badge,
    Box,
    Button,
    Container,
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
    VStack,
} from "@chakra-ui/react"

const ChakraUiPortfolio1: React.FC<Partial<IPortfolio>> = (props) => {
    const { id = 0, value = DEF_VALUE } = props

    const { title = "", list = [] } = value

    return (
        <Box
            id={`${id}`}
            bgColor={"block.bg.2"}
            color={"block.text.2"}
            w={"100%"}
            mt={"2.75rem"}
        >
            <Container
                maxW="container.xl"
                p={"block.pad.1"}
                paddingTop={"block.pad.1.top.2"}
                paddingBottom={"block.pad.1.bot"}
            >
                <VStack align={"stretch"} spacing={"block.pad.5"}>
                    <Box>
                        <Heading as={"h2"}>{title}</Heading>
                    </Box>

                    <Tabs display={"flex"} flexDir={"column"} size={"xl"}>
                        <Box position="relative">
                            <TabList
                                borderColor={"tabs.list.border.2"}
                                borderBottomWidth={"3px"}
                                gap={"tabs.items"}
                            >
                                {list.map((item, index) => (
                                    <Tab
                                        key={index}
                                        color={"tabs.item.text.2"}
                                        fontSize={"tabs.item"}
                                        _selected={{
                                            color: "tabs.item.text.2.selected",
                                        }}
                                    >
                                        {item.title}
                                    </Tab>
                                ))}
                            </TabList>

                            <TabIndicator
                                mt="-1.5px"
                                height="2px"
                                bg="tabs.item.text.2.selected"
                                borderRadius="1px"
                            />
                        </Box>

                        <TabPanels>
                            {list.map((item, index) => (
                                <TabPanel key={index}>
                                    <VStack align={"stretch"} spacing={"5rem"}>
                                        {item.list.map((item, index) => (
                                            <Grid
                                                key={index}
                                                templateColumns={[
                                                    "1fr",
                                                    "1fr 1fr",
                                                ]}
                                                templateRows={[
                                                    "1fr 1fr",
                                                    "1fr",
                                                ]}
                                                gap={0}
                                                bgColor={"tabs.item.bg.2"}
                                            >
                                                {!item.image && (
                                                    <Box
                                                        bgColor={"gray.100"}
                                                        rounded={"lg"}
                                                        w={"100%"}
                                                        h={"100%"}
                                                    />
                                                )}

                                                {Boolean(item.image) && (
                                                    <Box
                                                        w={"100%"}
                                                        h={"100%"}
                                                        p={"1.2rem"}
                                                    >
                                                        <Box
                                                            backgroundImage={`url(${item.image})`}
                                                            backgroundSize={
                                                                item.imageSize ||
                                                                "contain"
                                                            }
                                                            backgroundPosition={
                                                                item.imagePos ||
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

                                                <VStack
                                                    align={"stretch"}
                                                    gap={"2.5rem"}
                                                    minH={"30rem"}
                                                    py={"2.5rem"}
                                                    px={"2.5rem"}
                                                    paddingLeft={"3.75rem"}
                                                >
                                                    <VStack
                                                        align={"stretch"}
                                                        gap={"12px"}
                                                    >
                                                        <Heading
                                                            as="h3"
                                                            fontSize={
                                                                "block.title.3"
                                                            }
                                                        >
                                                            {item.title}
                                                        </Heading>

                                                        <Text
                                                            as={"p"}
                                                            fontSize={
                                                                "block.title.4"
                                                            }
                                                            fontWeight={"300"}
                                                        >
                                                            {item.subtitle}
                                                        </Text>
                                                    </VStack>

                                                    <VStack
                                                        align={"stretch"}
                                                        gap={"20px"}
                                                    >
                                                        <HStack>
                                                            {item.tags.map(
                                                                (
                                                                    item,
                                                                    index
                                                                ) => (
                                                                    <Badge
                                                                        key={
                                                                            index
                                                                        }
                                                                        variant="outline"
                                                                        textTransform={
                                                                            "none"
                                                                        }
                                                                        color={
                                                                            "white"
                                                                        }
                                                                        fontWeight={
                                                                            "400"
                                                                        }
                                                                        fontSize={
                                                                            "13px"
                                                                        }
                                                                        lineHeight={
                                                                            "28px"
                                                                        }
                                                                        py={
                                                                            "2px"
                                                                        }
                                                                        px={
                                                                            "12px"
                                                                        }
                                                                    >
                                                                        {
                                                                            item.title
                                                                        }
                                                                    </Badge>
                                                                )
                                                            )}
                                                        </HStack>
                                                        <VStack
                                                            align={"stretch"}
                                                            gap={"12px"}
                                                        >
                                                            <Text
                                                                as="strong"
                                                                fontSize={
                                                                    "block.title.5"
                                                                }
                                                            >
                                                                {item.subtitle2}
                                                            </Text>
                                                            <Text
                                                                as={"p"}
                                                                fontWeight={
                                                                    "300"
                                                                }
                                                                fontSize={
                                                                    "block.desc.3"
                                                                }
                                                            >
                                                                {
                                                                    item.description
                                                                }
                                                            </Text>
                                                        </VStack>
                                                    </VStack>
                                                </VStack>
                                            </Grid>
                                        ))}
                                    </VStack>
                                </TabPanel>
                            ))}
                        </TabPanels>
                    </Tabs>
                </VStack>
            </Container>
        </Box>
    )
}

export default ChakraUiPortfolio1
