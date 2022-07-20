import { FC } from "react";
import { IBlock, IBlockResultValue } from "../types";
import { JsonFormUi } from "@undermuz/react-json-form/build/types/types";
interface IBlocksEditorProps {
    value: IBlockResultValue[];
    onChange: (v: IBlockResultValue[]) => void;
    library: IBlock[];
    editFormTheme: JsonFormUi;
}
declare const BlocksEditor: FC<IBlocksEditorProps>;
export default BlocksEditor;
