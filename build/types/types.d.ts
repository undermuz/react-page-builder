import { IScheme } from "@undermuz/react-json-form/build/types/types";
import { FunctionComponent } from "react";
export declare type BlockId = string;
export declare type BlockValueItem = Record<string, any>;
export declare type BlockValue = BlockValueItem | BlockValueItem[];
export declare type BlockScheme = IScheme;
export interface IBlockResultValue {
    id: number;
    blockId: BlockId;
    value: BlockValue;
}
export interface IBlock {
    id: BlockId;
    title: string;
    description: string;
    image: string;
    value: BlockValue;
    scheme: BlockScheme;
    view: FunctionComponent<{
        id?: number;
        value?: any;
    }>;
}
