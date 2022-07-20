import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// SYSTEM
import { EnumSchemeItemType } from "@undermuz/react-json-form";
import { Box, Button, Heading, Paragraph } from "grommet";
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
    return (_jsxs(Box, __assign({ background: { color: "neutral-2", opacity: true } }, { children: [_jsxs(Box, __assign({ pad: "xlarge", align: "center" }, { children: [_jsx(Heading, { children: title }), _jsx(Paragraph, { children: subtitle }), show_button && (_jsx(Box, { children: _jsx(Button, { primary: true, size: "large", onClick: onButtonClick, label: button_text }) }))] })), show_adv && advantage.length > 0 && (_jsx(Box, __assign({ pad: "large", background: { color: "neutral-2" } }, { children: _jsx(Box, __assign({ direction: "row", justify: "around" }, { children: advantage.map(function (item, index) { return (_jsxs(Box, { children: [_jsx("img", { src: item.image, alt: "" }), _jsx("span", { children: item.title })] }, index)); }) })) })))] })));
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
            type: EnumSchemeItemType.Text,
            def_value: "",
        },
        {
            name: "subtitle",
            title: "Подзаголовок",
            type: EnumSchemeItemType.TextBlock,
            def_value: "",
        },
        {
            name: "button_text",
            title: "Текст кнопки",
            type: EnumSchemeItemType.Text,
            def_value: "",
        },
        {
            name: "show_button",
            title: "Показывать кнопку?",
            type: EnumSchemeItemType.Checkbox,
            def_value: true,
        },
        {
            name: "show_adv",
            title: "Показывать преимущества",
            type: EnumSchemeItemType.Checkbox,
            def_value: true,
        },
        {
            name: "image",
            title: "Изображение",
            type: EnumSchemeItemType.Files,
            def_value: "",
        },
        {
            name: "advantage",
            title: "Преимущества",
            type: EnumSchemeItemType.Widget,
            multiple: true,
            def_value: "",
            scheme: [
                {
                    name: "title",
                    title: "Заголовок",
                    type: EnumSchemeItemType.Text,
                    def_value: "",
                },
                {
                    name: "image",
                    title: "Изображение",
                    type: EnumSchemeItemType.Files,
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
export default Offer;
