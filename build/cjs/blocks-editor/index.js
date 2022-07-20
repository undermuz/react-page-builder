"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var grommet_1 = require("grommet");
var item_1 = tslib_1.__importDefault(require("./item"));
var array_move_1 = require("array-move");
var BlockWrapper = function (props) {
    var item = props.item, library = props.library, methods = props.methods, editFormTheme = props.editFormTheme;
    var block = (0, react_1.useMemo)(function () { return library.find(function (_b) { return _b.id === item.blockId; }); }, [item.blockId, library]);
    if (!block) {
        return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: ["(Block #", item.blockId, " not found)"] });
    }
    return ((0, jsx_runtime_1.jsx)(item_1.default, tslib_1.__assign({}, item, methods, { block: block, editFormTheme: editFormTheme })));
};
var BlocksEditor = function (props) {
    var library = props.library, value = props.value, editFormTheme = props.editFormTheme, onChange = props.onChange;
    var getUid = (0, react_1.useCallback)(function () {
        var uid = Math.floor(Math.random() * 700000);
        var exist = value.filter(function (item) { return item.id == uid; }).length > 0;
        while (exist) {
            uid = Math.floor(Math.random() * 700000);
            exist = value.filter(function (item) { return item.id == uid; }).length > 0;
        }
        return uid;
    }, [value]);
    var onChangeBlock = (0, react_1.useCallback)(function (blockId, blockValue) {
        onChange(value.map(function (item) {
            if (item.id !== blockId) {
                return item;
            }
            return tslib_1.__assign(tslib_1.__assign({}, item), { value: blockValue });
        }));
    }, [value, onChange]);
    var handleAdd = (0, react_1.useCallback)(function (blockId) {
        var widget = library.find(function (_w) { return _w.id === blockId; });
        if (!widget) {
            throw new Error("Widget not found");
        }
        var def_value = widget.value;
        var item = { id: getUid(), value: def_value, blockId: blockId };
        onChange(tslib_1.__spreadArray(tslib_1.__spreadArray([], value, true), [item], false));
    }, [value, onChange]);
    var onRemove = (0, react_1.useCallback)(function (id) {
        onChange(value.filter(function (_i) { return _i.id !== id; }));
    }, [value, onChange]);
    var onMoveUp = (0, react_1.useCallback)(function (id) {
        var i = value.findIndex(function (_i) { return _i.id === id; });
        if (i === 0) {
            return;
        }
        onChange((0, array_move_1.arrayMoveImmutable)(value, i, i - 1));
    }, [value, onChange]);
    var onMoveDown = (0, react_1.useCallback)(function (id) {
        var i = value.findIndex(function (_i) { return _i.id === id; });
        if (i === value.length - 1) {
            return;
        }
        onChange((0, array_move_1.arrayMoveImmutable)(value, i, i + 1));
    }, [value, onChange]);
    var blockMethods = (0, react_1.useMemo)(function () {
        return {
            onChange: onChangeBlock,
            onRemove: onRemove,
            onMoveUp: onMoveUp,
            onMoveDown: onMoveDown,
        };
    }, [onChangeBlock, onRemove, onMoveUp, onMoveDown]);
    return ((0, jsx_runtime_1.jsxs)(grommet_1.Box, tslib_1.__assign({ direction: "column" }, { children: [(0, jsx_runtime_1.jsx)(grommet_1.Box, tslib_1.__assign({ direction: "row", justify: "between", pad: "small", background: {
                    color: "dark-1",
                    opacity: "weak",
                } }, { children: (0, jsx_runtime_1.jsx)(grommet_1.Menu, { label: "Add a block", items: library.map(function (block) {
                        return {
                            label: block.title,
                            onClick: function () { return handleAdd(block.id); },
                        };
                    }) }) })), value.map(function (item, index) {
                return ((0, jsx_runtime_1.jsx)(BlockWrapper, { item: item, library: library, methods: blockMethods, editFormTheme: editFormTheme }, index));
            })] })));
};
exports.default = BlocksEditor;
