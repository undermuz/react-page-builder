import { FC } from "react";
import { IBlock, IBlockResultValue } from "../types";
interface IBlocksViewProps {
    value: IBlockResultValue[];
    library: IBlock[];
}
declare const BlocksView: FC<IBlocksViewProps>;
export default BlocksView;
