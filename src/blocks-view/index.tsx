import { FC, useEffect, useMemo } from "react"
import { BlockValue, IBlock, IBlockResultValue } from "../types"

interface IBlockItem {
    id: number
    value: BlockValue
    block: IBlock
}

const BlockItem: FC<IBlockItem> = (props) => {
    const { id, value, block } = props

    const { view: WidgetView } = block

    if (!WidgetView) {
        return null
    }

    return <WidgetView id={id} value={value} />
}

interface IBlockWrapperProps {
    item: IBlockResultValue
    library: IBlock[]
}

const BlockWrapper: FC<IBlockWrapperProps> = (props) => {
    const { item, library } = props

    const block = useMemo(
        () => library.find((_b) => _b.id === item.blockId),
        [item.blockId, library]
    )

    useEffect(() => {
        if (!block) {
            console.error(`(Block #${item.blockId} not found)`)
        }
    }, [block])

    if (!block) {
        return null
    }

    return <BlockItem {...item} block={block} />
}

interface IBlocksViewProps {
    value: IBlockResultValue[]
    library: IBlock[]
}

const BlocksView: FC<IBlocksViewProps> = (props) => {
    const { library, value } = props

    return (
        <>
            {value.map((item, index) => {
                return (
                    <BlockWrapper item={item} key={index} library={library} />
                )
            })}
        </>
    )
}

export default BlocksView
