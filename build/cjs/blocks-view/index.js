"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var BlockItem = function (props) {
    var id = props.id, value = props.value, block = props.block;
    var WidgetView = block.view;
    if (!WidgetView) {
        return null;
    }
    return (0, jsx_runtime_1.jsx)(WidgetView, { id: id, value: value });
};
var BlockWrapper = function (props) {
    var item = props.item, library = props.library;
    var block = (0, react_1.useMemo)(function () { return library.find(function (_b) { return _b.id === item.blockId; }); }, [item.blockId, library]);
    (0, react_1.useEffect)(function () {
        if (!block) {
            console.error("(Block #".concat(item.blockId, " not found)"));
        }
    }, [block]);
    if (!block) {
        return null;
    }
    return (0, jsx_runtime_1.jsx)(BlockItem, tslib_1.__assign({}, item, { block: block }));
};
var BlocksView = function (props) {
    var library = props.library, value = props.value;
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: value.map(function (item, index) {
            return ((0, jsx_runtime_1.jsx)(BlockWrapper, { item: item, library: library }, index));
        }) }));
};
exports.default = BlocksView;
