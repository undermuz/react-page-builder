import { useState, type FC } from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";

import type { Meta, StoryObj } from "@storybook/react";
import type { IBlock, IBlockResultValue } from "@react-page-builder/types";

import BlocksEditor from "@react-page-builder/blocks-editor";
import ChakraUi from "@undermuz/react-json-form-theme-chakra";

import { UiContext } from "@undermuz/react-json-form";

import { chakraBwTheme, ChakraBwThemeFonts } from "../themes/chakra/chakra-bw";

import Offer1 from "../blocks/offer/2/chakra";
import Feature1 from "../blocks/features/1/chakra";
import Portfolio1 from "../blocks/portfolio/1/chakra";
import Stepper1 from "../blocks/stepper/1/chakra";
import GridText1 from "../blocks/grid-text/1/chakra";

const PageBuilderStory: FC<{ library: IBlock[] }> = ({ library }) => {
    const [value, setValue] = useState<IBlockResultValue[]>([]);

    return (
        <ChakraProvider theme={chakraBwTheme}>
            <ChakraBwThemeFonts />

            <UiContext.Provider value={ChakraUi}>
                <Box w={"100vw"}>
                    <BlocksEditor
                        value={value}
                        onChange={(v) => setValue(v)}
                        library={library}
                    />
                </Box>
            </UiContext.Provider>
        </ChakraProvider>
    );
};

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Example/Button",
    component: PageBuilderStory,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: "centered",
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {},
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {},
} satisfies Meta<typeof PageBuilderStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        library: [Offer1, Feature1, Portfolio1, Stepper1, GridText1],
    },
};
