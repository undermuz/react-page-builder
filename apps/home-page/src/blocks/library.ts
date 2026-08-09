import type { IBlock } from "@undermuz/react-page-builder"
import HeroBlock from "./hero"
import HighlightsBlock from "./highlights"
import ModesBlock from "./modes"
import InstallBlock from "./install"
import UsageBlock from "./usage"
import CreateBlockBlock from "./create-block"
import CodeWindowBlock from "./code-window"
import NestedWidgetsBlock from "./nested-widgets"
import EcosystemBlock from "./ecosystem"

export const library: IBlock[] = [
    HeroBlock,
    HighlightsBlock,
    ModesBlock,
    InstallBlock,
    CreateBlockBlock,
    UsageBlock,
    NestedWidgetsBlock,
    CodeWindowBlock,
    EcosystemBlock,
]
