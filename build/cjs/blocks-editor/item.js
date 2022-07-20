"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var grommet_1 = require("grommet");
var Icons = tslib_1.__importStar(require("grommet-icons"));
var react_json_form_1 = tslib_1.__importStar(require("@undermuz/react-json-form"));
var BlockEditForm = function (props) {
    var id = props.id, scheme = props.scheme, value = props.value, theme = props.theme, onChange = props.onChange, onClose = props.onClose;
    var handleChange = (0, react_1.useCallback)(function (value) {
        onChange(id, value);
    }, [id, onChange]);
    if (!scheme) {
        return null;
    }
    return ((0, jsx_runtime_1.jsx)(react_json_form_1.UiContext.Provider, tslib_1.__assign({ value: theme }, { children: (0, jsx_runtime_1.jsx)(react_json_form_1.default, tslib_1.__assign({}, scheme, { value: value, header: (0, jsx_runtime_1.jsx)(grommet_1.Button, { size: "small", hoverIndicator: true, label: "Close", icon: (0, jsx_runtime_1.jsx)(Icons.Close, { size: "small" }), onClick: onClose }), onChange: handleChange })) })));
};
var ActionBar = (0, styled_components_1.default)(grommet_1.Box)(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n    position: absolute;\n    top: 10px;\n    left: 0px;\n    width: 100%;\n\n    opacity: 0;\n    transition: opacity 0.2s;\n"], ["\n    position: absolute;\n    top: 10px;\n    left: 0px;\n    width: 100%;\n\n    opacity: 0;\n    transition: opacity 0.2s;\n"])));
var Cont = (0, styled_components_1.default)(grommet_1.Box)(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n    position: relative;\n    flex-shrink: 0;\n\n    :hover {\n        ", " {\n            opacity: 1;\n        }\n    }\n"], ["\n    position: relative;\n    flex-shrink: 0;\n\n    :hover {\n        ", " {\n            opacity: 1;\n        }\n    }\n"])), ActionBar);
var BlockItem = function (props) {
    var id = props.id, value = props.value, block = props.block, editFormTheme = props.editFormTheme, onChange = props.onChange;
    var _a = (0, react_1.useState)(false), isEditing = _a[0], setEditing = _a[1];
    var WidgetView = block.view, scheme = block.scheme;
    var handleRemove = (0, react_1.useCallback)(function () {
        if (window.confirm("This block will be deleted. Are you sure?")) {
            props.onRemove(id);
        }
    }, [id]);
    if (!WidgetView) {
        return null;
    }
    return ((0, jsx_runtime_1.jsxs)(Cont, { children: [isEditing && ((0, jsx_runtime_1.jsx)(grommet_1.Layer, { children: (0, jsx_runtime_1.jsx)(grommet_1.Box, tslib_1.__assign({ width: "large" }, { children: (0, jsx_runtime_1.jsx)(BlockEditForm, { id: id, scheme: scheme, value: value, theme: editFormTheme, onChange: onChange, onClose: function () { return setEditing(false); } }) })) })), (0, jsx_runtime_1.jsxs)(ActionBar, tslib_1.__assign({ direction: "row", justify: "between", pad: "small", background: {
                    color: "dark-1",
                    opacity: "weak",
                } }, { children: [(0, jsx_runtime_1.jsx)(grommet_1.Box, tslib_1.__assign({ direction: "row" }, { children: (0, jsx_runtime_1.jsx)(grommet_1.Box, tslib_1.__assign({ round: "full", overflow: "hidden", background: "status-critical" }, { children: (0, jsx_runtime_1.jsx)(grommet_1.Button, { size: "small", hoverIndicator: true, icon: (0, jsx_runtime_1.jsx)(Icons.Trash, { size: "small" }), onClick: handleRemove }) })) })), (0, jsx_runtime_1.jsxs)(grommet_1.Box, tslib_1.__assign({ direction: "row" }, { children: [(0, jsx_runtime_1.jsx)(grommet_1.Button, { size: "small", hoverIndicator: true, onClick: function () { return props.onMoveUp(id); }, icon: (0, jsx_runtime_1.jsx)(Icons.Up, { size: "small" }) }), (0, jsx_runtime_1.jsx)(grommet_1.Button, { size: "small", hoverIndicator: true, onClick: function () { return props.onMoveDown(id); }, icon: (0, jsx_runtime_1.jsx)(Icons.Down, { size: "small" }) }), (0, jsx_runtime_1.jsx)(grommet_1.Button, { size: "small", primary: true, hoverIndicator: true, icon: (0, jsx_runtime_1.jsx)(Icons.Edit, { size: "small" }), label: "Edit", onClick: function () { return setEditing(true); } })] }))] })), (0, jsx_runtime_1.jsx)(grommet_1.Box, { children: (0, jsx_runtime_1.jsx)(WidgetView, { id: id, value: value }) })] }));
};
exports.default = BlockItem;
var templateObject_1, templateObject_2;
