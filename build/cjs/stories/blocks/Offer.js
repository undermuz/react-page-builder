"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
// SYSTEM
var react_json_form_1 = require("@undermuz/react-json-form");
var grommet_1 = require("grommet");
var DEF_VALUE_ADVANTAGE = [
    { id: 1, title: "С нами проще", image: "" },
    { id: 2, title: "Выгода при первой покупке", image: "" },
    { id: 3, title: "Рост на 146%", image: "" },
];
var DEF_VALUE = {
    title: "Мы лучшие в мире!",
    subtitle: "Закажите сейчас и получите скидку 50%",
    button_text: "Заказать",
    show_button: true,
    show_adv: true,
    image: null,
    advantage: DEF_VALUE_ADVANTAGE,
};
var exampleButtonClick = function () {
    alert("click");
};
var OfferBlock = function (props) {
    var _a = props.value, value = _a === void 0 ? DEF_VALUE : _a, _b = props.onButtonClick, onButtonClick = _b === void 0 ? exampleButtonClick : _b;
    var _c = value.title, title = _c === void 0 ? DEF_VALUE.title : _c, _d = value.subtitle, subtitle = _d === void 0 ? DEF_VALUE.subtitle : _d, _e = value.show_button, show_button = _e === void 0 ? DEF_VALUE.show_button : _e, _f = value.button_text, button_text = _f === void 0 ? DEF_VALUE.button_text : _f, _g = value.show_adv, show_adv = _g === void 0 ? DEF_VALUE.show_adv : _g, _h = value.advantage, advantage = _h === void 0 ? DEF_VALUE.advantage : _h;
    return ((0, jsx_runtime_1.jsxs)(grommet_1.Box, tslib_1.__assign({ background: { color: "neutral-2", opacity: true } }, { children: [(0, jsx_runtime_1.jsxs)(grommet_1.Box, tslib_1.__assign({ pad: "xlarge", align: "center" }, { children: [(0, jsx_runtime_1.jsx)(grommet_1.Heading, { children: title }), (0, jsx_runtime_1.jsx)(grommet_1.Paragraph, { children: subtitle }), show_button && ((0, jsx_runtime_1.jsx)(grommet_1.Box, { children: (0, jsx_runtime_1.jsx)(grommet_1.Button, { primary: true, size: "large", onClick: onButtonClick, label: button_text }) }))] })), show_adv && advantage.length > 0 && ((0, jsx_runtime_1.jsx)(grommet_1.Box, tslib_1.__assign({ pad: "large", background: { color: "neutral-2" } }, { children: (0, jsx_runtime_1.jsx)(grommet_1.Box, tslib_1.__assign({ direction: "row", justify: "around" }, { children: advantage.map(function (item, index) { return ((0, jsx_runtime_1.jsxs)(grommet_1.Box, { children: [(0, jsx_runtime_1.jsx)("img", { src: item.image, alt: "" }), (0, jsx_runtime_1.jsx)("span", { children: item.title })] }, index)); }) })) })))] })));
};
/*SCHEME BEGIN*/
var WidgetName = "Offer";
var WidgetTitle = "Оффер";
var scheme = {
    id: WidgetName,
    name: WidgetName,
    scheme: [
        {
            name: "title",
            title: "Заголовок",
            type: react_json_form_1.EnumSchemeItemType.Text,
            def_value: "",
        },
        {
            name: "subtitle",
            title: "Подзаголовок",
            type: react_json_form_1.EnumSchemeItemType.TextBlock,
            def_value: "",
        },
        {
            name: "button_text",
            title: "Текст кнопки",
            type: react_json_form_1.EnumSchemeItemType.Text,
            def_value: "",
        },
        {
            name: "show_button",
            title: "Показывать кнопку?",
            type: react_json_form_1.EnumSchemeItemType.Checkbox,
            def_value: true,
        },
        {
            name: "show_adv",
            title: "Показывать преимущества",
            type: react_json_form_1.EnumSchemeItemType.Checkbox,
            def_value: true,
        },
        {
            name: "image",
            title: "Изображение",
            type: react_json_form_1.EnumSchemeItemType.Files,
            def_value: "",
        },
        {
            name: "advantage",
            title: "Преимущества",
            type: react_json_form_1.EnumSchemeItemType.Widget,
            multiple: true,
            def_value: "",
            scheme: [
                {
                    name: "title",
                    title: "Заголовок",
                    type: react_json_form_1.EnumSchemeItemType.Text,
                    def_value: "",
                },
                {
                    name: "image",
                    title: "Изображение",
                    type: react_json_form_1.EnumSchemeItemType.Files,
                    def_value: "",
                },
            ],
        },
    ],
    single: true,
    multiple: false,
    title: WidgetTitle,
};
var Offer = {
    id: WidgetName,
    title: WidgetTitle,
    description: "\u041E\u0444\u0444\u0435\u0440 \u0441 \u043F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430\u043C\u0438",
    image: "/pic/5aec67ad9e3e1ee17dc8717d1e23e8c5zXnwX.png",
    value: DEF_VALUE,
    scheme: scheme,
    view: OfferBlock,
};
exports.default = Offer;
