import { type FC, useCallback, useMemo } from "react"
import { arrayMoveImmutable } from "array-move"

import type { BlockValue, IBlock, IBlockResultValue } from "../types"

import BlockItem from "./item"
import { useTheme } from "../themes"

interface IBlockMethods {
    onChange: Function
    onRemove: Function
    onMoveUp: Function
    onMoveDown: Function
}

interface IBlockWrapperProps {
    item: IBlockResultValue
    methods: IBlockMethods
    library: IBlock[]
}

const BlockWrapper: FC<IBlockWrapperProps> = (props) => {
    const { item, library, methods } = props

    const block = useMemo(
        () => library.find((_b) => _b.id === item.blockId),
        [item.blockId, library]
    )

    if (!block) {
        return <>(Block #{item.blockId} not found)</>
    }

    return <BlockItem {...item} {...methods} block={block} />
}

interface IBlocksEditorProps {
    value: IBlockResultValue[]
    onChange: (v: IBlockResultValue[]) => void
    library: IBlock[]
}

const BlocksEditor: FC<IBlocksEditorProps> = (props) => {
    const { library, value, onChange } = props

    const getUid = useCallback(() => {
        let uid = Math.floor(Math.random() * 700000)

        let exist = value.filter((item) => item.id == uid).length > 0

        while (exist) {
            uid = Math.floor(Math.random() * 700000)

            exist = value.filter((item) => item.id == uid).length > 0
        }

        return uid
    }, [value])

    const onChangeBlock = useCallback(
        (blockId: number, blockValue: BlockValue) => {
            onChange(
                value.map((item) => {
                    if (item.id !== blockId) {
                        return item
                    }

                    return { ...item, value: blockValue }
                })
            )
        },
        [value, onChange]
    )

    const handleAdd = useCallback(
        (blockId: string) => {
            const widget = library.find((_w) => _w.id === blockId)

            if (!widget) {
                throw new Error("Widget not found")
            }

            const def_value = widget.value

            const item = { id: getUid(), value: def_value, blockId }

            onChange([...value, item])
        },
        [value, onChange]
    )

    const onRemove = useCallback(
        (id: number) => {
            onChange(value.filter((_i) => _i.id !== id))
        },
        [value, onChange]
    )

    const onMoveUp = useCallback(
        (id: number) => {
            const i = value.findIndex((_i) => _i.id === id)

            if (i === 0) {
                return
            }

            onChange(arrayMoveImmutable(value, i, i - 1))
        },
        [value, onChange]
    )

    const onMoveDown = useCallback(
        (id: number) => {
            const i = value.findIndex((_i) => _i.id === id)

            if (i === value.length - 1) {
                return
            }

            onChange(arrayMoveImmutable(value, i, i + 1))
        },
        [value, onChange]
    )

    const blockMethods = useMemo(() => {
        return {
            onChange: onChangeBlock,
            onRemove: onRemove,
            onMoveUp: onMoveUp,
            onMoveDown: onMoveDown,
        }
    }, [onChangeBlock, onRemove, onMoveUp, onMoveDown])

    const Ui = useTheme()

    return (
        <Ui>
            <Ui.Header library={library} onSelect={handleAdd} />
            {/* <Box w={"full"}>
                <Menu>
                    <MenuButton as={Button}>Add a block</MenuButton>
                    <MenuList>
                        {library.map((block) => {
                            return (
                                <MenuItem onClick={() => handleAdd(block.id)}>
                                    {block.title}
                                </MenuItem>
                            )
                        })}
                    </MenuList>
                </Menu>
            </Box> */}

            {value.map((item, index) => {
                return (
                    <BlockWrapper
                        key={index}
                        item={item}
                        library={library}
                        methods={blockMethods}
                    />
                )
            })}
        </Ui>
    )
}

export default BlocksEditor
