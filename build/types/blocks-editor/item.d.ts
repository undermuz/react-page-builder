import React from "react";
import { BlockValue, IBlock } from "../types";
import { JsonFormUi } from "@undermuz/react-json-form/build/types/types";
interface IBlockItem {
    id: number;
    value: BlockValue;
    block: IBlock;
    editFormTheme: JsonFormUi;
    onChange: Function;
    onRemove: Function;
    onMoveUp: Function;
    onMoveDown: Function;
}
declare const BlockItem: React.FC<IBlockItem>;
export default BlockItem;
