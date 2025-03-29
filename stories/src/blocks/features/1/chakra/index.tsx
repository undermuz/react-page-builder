import { EnumSchemeItemType } from "@undermuz/react-json-form";
import { IScheme } from "@undermuz/react-json-form";
// import { IBlock } from "../../../types"

import DEF_VALUE from "../defaults";
import view from "./view";
import { IBlock } from "@react-page-builder/types";

export interface IFeature1Value {
    title: string;
    subtitle: string;
    description: string;
}

export interface IFeature1 {
    id: string;
    value: IFeature1Value;
}

/*SCHEME BEGIN*/

const WidgetName = "feature1-chakra";
const WidgetTitle = "ChakraUI: Feature 1";

const scheme: IScheme = {
    id: WidgetName,
    scheme: [
        {
            name: "title",
            title: "Title",
            type: EnumSchemeItemType.Text,
            def_value: DEF_VALUE.title,
        },
        {
            name: "subtitle",
            title: "Sub-title",
            type: EnumSchemeItemType.Text,
            def_value: DEF_VALUE.subtitle,
        },
        {
            name: "description",
            title: "Description",
            type: EnumSchemeItemType.TextBlock,
            def_value: DEF_VALUE.description,
        },
    ],
    multiple: false,
    title: WidgetTitle,
};

const setting: IBlock<Partial<IFeature1>> = {
    id: WidgetName,
    title: WidgetTitle,
    description: `Feature 1`,
    image: `/pic/5aec67ad9e3e1ee17dc8717d1e23e8c5zXnwX.png`,
    //@ts-ignore
    value: DEF_VALUE,
    scheme,
    //@ts-ignore
    view,
};

export { scheme };

export default setting;

/*SCHEME END*/
