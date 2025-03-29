import { tabsAnatomy } from "@chakra-ui/anatomy"
import { createMultiStyleConfigHelpers, extendTheme } from "@chakra-ui/react"
import { Global } from "@emotion/react"

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(tabsAnatomy.keys)

const baseStyle = definePartsStyle({
    tab: {},
    tabpanel: {},
})

const sizes = {
    xl: definePartsStyle({
        root: {
            gap: "2.25rem",
        },
        tab: {
            fontFamily: `"Montserrat", 'Open Sans', sans-serif`,
            fontWeight: "700",
            fontSize: "1.37rem",
            paddingTop: "1.5rem",
            paddingBottom: "1.25rem",
            px: "0",
        },
        tabpanel: {
            py: "0",
            px: "0",
        },
        tablist: {
            gap: "3.75rem",
        },
    }),
}

const tabsTheme = defineMultiStyleConfig({ baseStyle, sizes })

export const chakraBwTheme = extendTheme({
    fonts: {
        heading: `"Montserrat", 'Open Sans', sans-serif`,
        body: `"Rubik", 'Open Sans', sans-serif;`,
    },
    colors: {
        "block.bg": "#F3F3F3",
        "block.bg.2": "#222222",
        "block.text.1": "#222222",
        "block.text.2": "#FFFFFF",
        "grid.text.1": "#222222",
        "grid.text.2": "#5252521A",
        "tabs.list.border": "#E1E1E1",
        "tabs.item.text": "#222222",
        "tabs.item.text.selected": "#222222",
        "tabs.list.border.2": "#545454",
        "tabs.item.text.2": "#FFFFFF",
        "tabs.item.text.2.selected": "#FFFFFF",
        "tabs.item.bg.2": "#313131",
    },
    fontSizes: {
        "block.title.1": "2.5rem",
        "block.title.2": "1.5rem",
        "block.title.3": "1.75rem",
        "block.title.4": "1.25rem",
        "block.title.5": "1rem",
        "block.desc.1": "1.25rem",
        "block.desc.2": "1.12rem",
        "block.desc.3": "1rem",
        "tabs.item": "1.25rem",
        "grid.text": "18px",
        "grid.text.2": "36px",
    },
    space: {
        "block.pad.1": 0,
        "block.pad.1.top": "2.75rem",
        "block.pad.1.top.2": "6.25rem",
        "block.pad.1.bot": "4rem",
        "block.pad.2": "48px",
        "block.pad.3": "40px",
        "block.pad.5": "1.75rem",
        "block.pad.6": "24px",
        "tabs.items": "3.75rem",
    },
    components: {
        Button: {
            variants: {
                "variant.2": {
                    bg: "block.bg.2",
                    color: "block.text.2",
                },
            },
        },
        Tabs: tabsTheme,
    },
})

export const ChakraBwThemeFonts = () => (
    <Global
        styles={`
            @import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap");
            @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");
        `}
    />
)
