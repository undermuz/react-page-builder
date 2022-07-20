import { ComponentStory, ComponentMeta } from "@storybook/react"
import RsuiteUi from "@undermuz/react-json-form/themes/rsuite"
import { Box } from "grommet"
import { FC, useState } from "react"
import BlocksEditor from "../blocks-editor"
import { IBlockResultValue } from "../types"
import Offer from "./blocks/Offer"

import "rsuite/styles/index.less"

const library = [Offer]

const PageBuilderStory: FC<{}> = () => {
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

export const ExamplePageBuilder = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ExamplePageBuilder.args = {}

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Example/PageBuilder",
    component: PageBuilderStory,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    // argTypes: {
    //     backgroundColor: { control: "color" },
    // },
} as ComponentMeta<typeof PageBuilderStory>
