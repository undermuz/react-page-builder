"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamplePageBuilder = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var rsuite_1 = tslib_1.__importDefault(require("@undermuz/react-json-form/themes/rsuite"));
var grommet_1 = require("grommet");
var react_1 = require("react");
var blocks_editor_1 = tslib_1.__importDefault(require("../blocks-editor"));
var _1_1 = tslib_1.__importDefault(require("@undermuz/grommet-block-templates/offer/1"));
var _1_2 = tslib_1.__importDefault(require("@undermuz/grommet-block-templates/features/1"));
require("rsuite/styles/index.less");
var library = [_1_1.default, _1_2.default];
// console.log(Feature1)
var PageBuilderStory = function () {
    var _a = (0, react_1.useState)([]), value = _a[0], setValue = _a[1];
    return ((0, jsx_runtime_1.jsx)(grommet_1.Box, tslib_1.__assign({ direction: "column", fill: true }, { children: (0, jsx_runtime_1.jsx)(blocks_editor_1.default, { value: value, editFormTheme: rsuite_1.default, onChange: function (v) { return setValue(v); }, library: library }) })));
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
var Template = function (args) {
    return (0, jsx_runtime_1.jsx)(PageBuilderStory, tslib_1.__assign({}, args));
};
exports.ExamplePageBuilder = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
exports.ExamplePageBuilder.args = {};
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
exports.default = {
    title: "Example/PageBuilder",
    component: PageBuilderStory,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    // argTypes: {
    //     backgroundColor: { control: "color" },
    // },
};
