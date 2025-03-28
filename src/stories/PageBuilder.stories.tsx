import { type FC, useState } from "react"

import type { ComponentStory, ComponentMeta } from "@storybook/react"
import { ChakraProvider } from "@chakra-ui/react"
import ChakraUi from "@undermuz/react-json-form-theme-chakra"
import { Box } from "grommet"

import BlocksEditor from "../blocks-editor"

import type { IBlock, IBlockResultValue } from "../types"

import Offer1 from "@undermuz/grommet-block-templates/offer/1"
import Feature1 from "@undermuz/grommet-block-templates/features/1"
import Price1 from "@undermuz/grommet-block-templates/prices/1"
import Price2 from "@undermuz/grommet-block-templates/prices/2"
import GridText1 from "@undermuz/grommet-block-templates/grid-text/1"

const PageBuilderStory: FC<{ library: IBlock[] }> = ({ library }) => {
    const [value, setValue] = useState<IBlockResultValue[]>([])

    return (
        <ChakraProvider>
            <Box direction="column" fill>
                <BlocksEditor
                    value={value}
                    onChange={(v) => setValue(v)}
                    editFormTheme={ChakraUi}
                    library={library}
                />
            </Box>
        </ChakraProvider>
    )
}

const Template: ComponentStory<typeof PageBuilderStory> = (args) => {
    return <PageBuilderStory {...args} />
}

export const GrommetUiTemplates = Template.bind({})

GrommetUiTemplates.args = {
    library: [Offer1, Feature1, Price1, Price2, GridText1],
}

export default {
    title: "Example/PageBuilder",
    component: PageBuilderStory,
} as ComponentMeta<typeof PageBuilderStory>
