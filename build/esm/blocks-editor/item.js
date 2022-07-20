import { __assign, __makeTemplateObject } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useState } from "react";
import styled from "styled-components";
import { Box, Button, Layer } from "grommet";
import * as Icons from "grommet-icons";
import JsonForm, { UiContext } from "@undermuz/react-json-form";
var BlockEditForm = function (props) {
    var id = props.id, scheme = props.scheme, value = props.value, theme = props.theme, onChange = props.onChange, onClose = props.onClose;
    var handleChange = useCallback(function (value) {
        onChange(id, value);
    }, [id, onChange]);
    if (!scheme) {
        return null;
    }
    return (_jsx(UiContext.Provider, __assign({ value: theme }, { children: _jsx(JsonForm, __assign({}, scheme, { value: value, header: _jsx(Button, { size: "small", hoverIndicator: true, label: "Close", icon: _jsx(Icons.Close, { size: "small" }), onClick: onClose }), onChange: handleChange })) })));
};
var ActionBar = styled(Box)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: absolute;\n    top: 10px;\n    left: 0px;\n    width: 100%;\n\n    opacity: 0;\n    transition: opacity 0.2s;\n"], ["\n    position: absolute;\n    top: 10px;\n    left: 0px;\n    width: 100%;\n\n    opacity: 0;\n    transition: opacity 0.2s;\n"])));
var Cont = styled(Box)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    position: relative;\n    flex-shrink: 0;\n\n    :hover {\n        ", " {\n            opacity: 1;\n        }\n    }\n"], ["\n    position: relative;\n    flex-shrink: 0;\n\n    :hover {\n        ", " {\n            opacity: 1;\n        }\n    }\n"])), ActionBar);
var BlockItem = function (props) {
    var id = props.id, value = props.value, block = props.block, editFormTheme = props.editFormTheme, onChange = props.onChange;
    var _a = useState(false), isEditing = _a[0], setEditing = _a[1];
    var WidgetView = block.view, scheme = block.scheme;
    var handleRemove = useCallback(function () {
        if (window.confirm("This block will be deleted. Are you sure?")) {
            props.onRemove(id);
        }
    }, [id]);
    if (!WidgetView) {
        return null;
    }
    return (_jsxs(Cont, { children: [isEditing && (_jsx(Layer, { children: _jsx(Box, __assign({ width: "large" }, { children: _jsx(BlockEditForm, { id: id, scheme: scheme, value: value, theme: editFormTheme, onChange: onChange, onClose: function () { return setEditing(false); } }) })) })), _jsxs(ActionBar, __assign({ direction: "row", justify: "between", pad: "small", background: {
                    color: "dark-1",
                    opacity: "weak",
                } }, { children: [_jsx(Box, __assign({ direction: "row" }, { children: _jsx(Box, __assign({ round: "full", overflow: "hidden", background: "status-critical" }, { children: _jsx(Button, { size: "small", hoverIndicator: true, icon: _jsx(Icons.Trash, { size: "small" }), onClick: handleRemove }) })) })), _jsxs(Box, __assign({ direction: "row" }, { children: [_jsx(Button, { size: "small", hoverIndicator: true, onClick: function () { return props.onMoveUp(id); }, icon: _jsx(Icons.Up, { size: "small" }) }), _jsx(Button, { size: "small", hoverIndicator: true, onClick: function () { return props.onMoveDown(id); }, icon: _jsx(Icons.Down, { size: "small" }) }), _jsx(Button, { size: "small", primary: true, hoverIndicator: true, icon: _jsx(Icons.Edit, { size: "small" }), label: "Edit", onClick: function () { return setEditing(true); } })] }))] })), _jsx(Box, { children: _jsx(WidgetView, { id: id, value: value }) })] }));
};
export default BlockItem;
var templateObject_1, templateObject_2;
