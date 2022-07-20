import { __assign, __spreadArray } from "tslib";
import { Fragment as _Fragment, jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useCallback, useMemo } from "react";
import { Box, Menu } from "grommet";
import BlockItem from "./item";
import { arrayMoveImmutable } from "array-move";
var BlockWrapper = function (props) {
    var item = props.item, library = props.library, methods = props.methods, editFormTheme = props.editFormTheme;
    var block = useMemo(function () { return library.find(function (_b) { return _b.id === item.blockId; }); }, [item.blockId, library]);
    if (!block) {
        return _jsxs(_Fragment, { children: ["(Block #", item.blockId, " not found)"] });
    }
    return (_jsx(BlockItem, __assign({}, item, methods, { block: block, editFormTheme: editFormTheme })));
};
var BlocksEditor = function (props) {
    var library = props.library, value = props.value, editFormTheme = props.editFormTheme, onChange = props.onChange;
    var getUid = useCallback(function () {
        var uid = Math.floor(Math.random() * 700000);
        var exist = value.filter(function (item) { return item.id == uid; }).length > 0;
        while (exist) {
            uid = Math.floor(Math.random() * 700000);
            exist = value.filter(function (item) { return item.id == uid; }).length > 0;
        }
        return uid;
    }, [value]);
    var onChangeBlock = useCallback(function (blockId, blockValue) {
        onChange(value.map(function (item) {
            if (item.id !== blockId) {
                return item;
            }
            return __assign(__assign({}, item), { value: blockValue });
        }));
    }, [value, onChange]);
    var handleAdd = useCallback(function (blockId) {
        var widget = library.find(function (_w) { return _w.id === blockId; });
        if (!widget) {
            throw new Error("Widget not found");
        }
        var def_value = widget.value;
        var item = { id: getUid(), value: def_value, blockId: blockId };
        onChange(__spreadArray(__spreadArray([], value, true), [item], false));
    }, [value, onChange]);
    var onRemove = useCallback(function (id) {
        onChange(value.filter(function (_i) { return _i.id !== id; }));
    }, [value, onChange]);
    var onMoveUp = useCallback(function (id) {
        var i = value.findIndex(function (_i) { return _i.id === id; });
        if (i === 0) {
            return;
        }
        onChange(arrayMoveImmutable(value, i, i - 1));
    }, [value, onChange]);
    var onMoveDown = useCallback(function (id) {
        var i = value.findIndex(function (_i) { return _i.id === id; });
        if (i === value.length - 1) {
            return;
        }
        onChange(arrayMoveImmutable(value, i, i + 1));
    }, [value, onChange]);
    var blockMethods = useMemo(function () {
        return {
            onChange: onChangeBlock,
            onRemove: onRemove,
            onMoveUp: onMoveUp,
            onMoveDown: onMoveDown,
        };
    }, [onChangeBlock, onRemove, onMoveUp, onMoveDown]);
    return (_jsxs(Box, __assign({ direction: "column" }, { children: [_jsx(Box, __assign({ direction: "row", justify: "between", pad: "small", background: {
                    color: "dark-1",
                    opacity: "weak",
                } }, { children: _jsx(Menu, { label: "Add a block", items: library.map(function (block) {
                        return {
                            label: block.title,
                            onClick: function () { return handleAdd(block.id); },
                        };
                    }) }) })), value.map(function (item, index) {
                return (_jsx(BlockWrapper, { item: item, library: library, methods: blockMethods, editFormTheme: editFormTheme }, index));
            })] })));
};
export default BlocksEditor;
