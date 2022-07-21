import { ComponentStory, ComponentMeta } from "@storybook/react"
import RsuiteUi from "@undermuz/react-json-form/themes/rsuite"
import { Box } from "grommet"
import React, { FC, useState } from "react"
import BlocksEditor from "../blocks-editor"
import { IBlock, IBlockResultValue } from "../types"

import Offer1 from "@undermuz/grommet-block-templates/offer/1"
import Feature1 from "@undermuz/grommet-block-templates/features/1"
import Price1 from "@undermuz/grommet-block-templates/prices/1"
import Price2 from "@undermuz/grommet-block-templates/prices/2"
import GridText1 from "@undermuz/grommet-block-templates/grid-text/1"

import "rsuite/styles/index.less"

// console.log(Feature1)

const PageBuilderStory: FC<{ library: IBlock[] }> = ({ library }) => {
    const [value, setValue] = useState<IBlockResultValue[]>([])

    return (
        <Box direction="column" fill>
            <BlocksEditor
                value={value}
                editFormTheme={RsuiteUi}
                onChange={(v) => setValue(v)}
                library={library}
            />
        </Box>
    )
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PageBuilderStory> = (args) => {
    return <PageBuilderStory {...args} />
}

export const GrommetUiTemplates = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
GrommetUiTemplates.args = {
    library: [Offer1, Feature1, Price1, Price2, GridText1],
}

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Example/PageBuilder",
    component: PageBuilderStory,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    // argTypes: {
    //     backgroundColor: { control: "color" },
    // },
} as ComponentMeta<typeof PageBuilderStory>
