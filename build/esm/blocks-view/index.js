import { __assign } from "tslib";
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useMemo } from "react";
var BlockItem = function (props) {
    var id = props.id, value = props.value, block = props.block;
    var WidgetView = block.view;
    if (!WidgetView) {
        return null;
    }
    return _jsx(WidgetView, { id: id, value: value });
};
var BlockWrapper = function (props) {
    var item = props.item, library = props.library;
    var block = useMemo(function () { return library.find(function (_b) { return _b.id === item.blockId; }); }, [item.blockId, library]);
    useEffect(function () {
        if (!block) {
            console.error("(Block #".concat(item.blockId, " not found)"));
        }
    }, [block]);
    if (!block) {
        return null;
    }
    return _jsx(BlockItem, __assign({}, item, { block: block }));
};
var BlocksView = function (props) {
    var library = props.library, value = props.value;
    return (_jsx(_Fragment, { children: value.map(function (item, index) {
            return (_jsx(BlockWrapper, { item: item, library: library }, index));
        }) }));
};
export default BlocksView;
