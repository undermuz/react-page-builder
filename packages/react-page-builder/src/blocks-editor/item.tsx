import { type FC, useCallback, useState } from "react"

import Modal from "react-modal"

import type { BlockScheme, BlockValue, IBlock } from "../types"
import type { FunctionOnChange } from "@undermuz/react-json-form"
import type { IBlockMethods } from "."

import { FaAngleUp, FaAngleDown, FaTrash } from "react-icons/fa"
import { FaPencil } from "react-icons/fa6"

import JsonForm from "@undermuz/react-json-form"
import { useTheme } from "../themes"

interface IWidgetEdit {
    id: number
    scheme: BlockScheme
    value: BlockValue
    onChange: IBlockMethods["onChange"]
}

const BlockEditForm: FC<IWidgetEdit> = (props) => {
    const { id, scheme, value, onChange } = props

    const handleChange: FunctionOnChange = useCallback(
        (value: BlockValue) => {
            onChange(id, value)
        },
        [id, onChange]
    )

    if (!scheme) {
        return null
    }

    return <JsonForm {...scheme} value={value} onChange={handleChange} />
}

type IBlockItem = {
    id: number
    value: BlockValue
    block: IBlock
} & IBlockMethods

const BlockItem: FC<IBlockItem> = (props) => {
    const { id, value, block, onChange } = props

    const [isEditing, setEditing] = useState<boolean>(false)

    const { view: WidgetView, scheme } = block

    const handleRemove = useCallback(() => {
        if (window.confirm("This block will be deleted. Are you sure?")) {
            props.onRemove(id)
        }
    }, [id])

    const Ui = useTheme()

    if (!WidgetView) {
        return null
    }

    return (
        <Ui.Item>
            <Modal
                isOpen={isEditing}
                onRequestClose={() => setEditing(false)}
                contentLabel="Edit block"
            >
                {isEditing && (
                    <BlockEditForm
                        id={id}
                        scheme={scheme}
                        value={value}
                        onChange={onChange}
                    />
                )}
            </Modal>

            <Ui.Item.Actions>
                <Ui.Item.Actions.Left>
                    <Ui.Button onClick={() => props.onMoveUp(id)}>
                        <FaAngleUp />
                    </Ui.Button>

                    <Ui.Button onClick={() => props.onMoveDown(id)}>
                        <FaAngleDown />
                    </Ui.Button>

                    <Ui.Button onClick={() => setEditing(true)}>
                        <FaPencil />
                    </Ui.Button>
                </Ui.Item.Actions.Left>

                <Ui.Item.Actions.Right>
                    <Ui.Button
                        data-reactpagebuilder="btn-remove"
                        onClick={handleRemove}
                    >
                        <FaTrash />
                    </Ui.Button>
                </Ui.Item.Actions.Right>
            </Ui.Item.Actions>

            <Ui.Item.Widget>
                <WidgetView id={id} value={value} />
            </Ui.Item.Widget>
        </Ui.Item>
    )
}

export default BlockItem
