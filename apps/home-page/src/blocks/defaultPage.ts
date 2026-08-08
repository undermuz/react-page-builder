import type { IBlockResultValue } from "@undermuz/react-page-builder"
import HeroBlock from "./hero"
import HighlightsBlock from "./highlights"
import ModesBlock from "./modes"
import InstallBlock from "./install"
import UsageBlock from "./usage"
import CreateBlockBlock from "./create-block"
import CodeWindowBlock from "./code-window"
import EcosystemBlock from "./ecosystem"

function instance(
    id: number,
    block: { id: string; value: IBlockResultValue["value"] }
): IBlockResultValue {
    return {
        id,
        blockId: block.id,
        value: structuredClone(block.value),
    }
}

/** Educational seed layout for the landing demo. */
export const DEFAULT_PAGE: IBlockResultValue[] = [
    instance(101, HeroBlock),
    instance(102, HighlightsBlock),
    instance(103, ModesBlock),
    instance(104, InstallBlock),
    instance(105, UsageBlock),
    instance(106, CreateBlockBlock),
    instance(107, CodeWindowBlock),
    instance(108, EcosystemBlock),
]
