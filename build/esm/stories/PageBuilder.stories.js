import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import RsuiteUi from "@undermuz/react-json-form/themes/rsuite";
import { Box } from "grommet";
import { useState } from "react";
import BlocksEditor from "../blocks-editor";
import Offer1 from "@undermuz/grommet-block-templates/offer/1";
import Feature1 from "@undermuz/grommet-block-templates/features/1";
import Price1 from "@undermuz/grommet-block-templates/prices/1";
import Price2 from "@undermuz/grommet-block-templates/prices/2";
import GridText1 from "@undermuz/grommet-block-templates/grid-text/1";
import "rsuite/styles/index.less";
// console.log(Feature1)
var PageBuilderStory = function (_a) {
    var library = _a.library;
    var _b = useState([]), value = _b[0], setValue = _b[1];
    return (_jsx(Box, __assign({ direction: "column", fill: true }, { children: _jsx(BlocksEditor, { value: value, editFormTheme: RsuiteUi, onChange: function (v) { return setValue(v); }, library: library }) })));
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
var Template = function (args) {
    return _jsx(PageBuilderStory, __assign({}, args));
};
export var GrommetUiTemplates = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
GrommetUiTemplates.args = {
    library: [Offer1, Feature1, Price1, Price2, GridText1],
};
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Example/PageBuilder",
    component: PageBuilderStory,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    // argTypes: {
    //     backgroundColor: { control: "color" },
    // },
};
