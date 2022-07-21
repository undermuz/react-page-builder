import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import RsuiteUi from "@undermuz/react-json-form/themes/rsuite";
import { Box } from "grommet";
import { useState } from "react";
import BlocksEditor from "../blocks-editor";
import Offer1 from "@undermuz/grommet-block-templates/offer/1";
import Feature1 from "@undermuz/grommet-block-templates/features/1";
import "rsuite/styles/index.less";
var library = [Offer1, Feature1];
// console.log(Feature1)
var PageBuilderStory = function () {
    var _a = useState([]), value = _a[0], setValue = _a[1];
    return (_jsx(Box, __assign({ direction: "column", fill: true }, { children: _jsx(BlocksEditor, { value: value, editFormTheme: RsuiteUi, onChange: function (v) { return setValue(v); }, library: library }) })));
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
var Template = function (args) {
    return _jsx(PageBuilderStory, __assign({}, args));
};
export var ExamplePageBuilder = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ExamplePageBuilder.args = {};
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Example/PageBuilder",
    component: PageBuilderStory,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    // argTypes: {
    //     backgroundColor: { control: "color" },
    // },
};
