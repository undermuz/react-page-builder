import React, { MouseEventHandler, useCallback, useState } from "react"
import styled from "styled-components"

import { Box, Button, Layer } from "grommet"
import * as Icons from "grommet-icons"

import { BlockScheme, BlockValue, IBlock } from "../types"
import {
    FunctionOnChange,
    JsonFormUi,
} from "@undermuz/react-json-form/build/types/types"

import JsonForm, { UiContext } from "@undermuz/react-json-form"

interface IWidgetEdit {
    id: number
    scheme: BlockScheme
    value: BlockValue
    theme: JsonFormUi
    onChange: Function
    onClose: MouseEventHandler<HTMLAnchorElement> &
        MouseEventHandler<HTMLButtonElement>
}

const BlockEditForm: React.FC<IWidgetEdit> = (props) => {
    const { id, scheme, value, theme, onChange, onClose } = props

    const handleChange: FunctionOnChange = useCallback(
        (value: BlockValue) => {
            onChange(id, value)
        },
        [id, onChange]
    )

    if (!scheme) {
        return null
    }

    return (
        <UiContext.Provider value={theme}>
            <JsonForm
                {...scheme}
                value={value}
                header={
                    <Button
                        size="small"
                        hoverIndicator
                        label="Close"
                        icon={<Icons.Close size="small" />}
                        onClick={onClose}
                    />
                }
                onChange={handleChange}
            />
        </UiContext.Provider>
    )
}

const ActionBar = styled(Box)`
    position: absolute;
    top: 10px;
    left: 0px;
    width: 100%;

    opacity: 0;
    transition: opacity 0.2s;
`

const Cont = styled(Box)`
    position: relative;
    flex-shrink: 0;

    :hover {
        ${ActionBar} {
            opacity: 1;
        }
    }
`

interface IBlockItem {
    id: number
    value: BlockValue
    block: IBlock
    editFormTheme: JsonFormUi
    onChange: Function
    onRemove: Function
    onMoveUp: Function
    onMoveDown: Function
}

const BlockItem: React.FC<IBlockItem> = (props) => {
    const { id, value, block, editFormTheme, onChange } = props

    const [isEditing, setEditing] = useState<boolean>(false)

    const { view: WidgetView, scheme } = block

    const handleRemove = useCallback(() => {
        if (window.confirm("This block will be deleted. Are you sure?")) {
            props.onRemove(id)
        }
    }, [id])

    if (!WidgetView) {
        return null
    }

    return (
        <Cont>
            {isEditing && (
                <Layer>
                    <Box width={"large"}>
                        <BlockEditForm
                            id={id}
                            scheme={scheme}
                            value={value}
                            theme={editFormTheme}
                            onChange={onChange}
                            onClose={() => setEditing(false)}
                        />
                    </Box>
                </Layer>
            )}

            <ActionBar
                direction="row"
                justify="between"
                pad="small"
                background={{
                    color: "dark-1",
                    opacity: "weak",
                }}
            >
                <Box direction="row">
                    <Box
                        round="full"
                        overflow="hidden"
                        background="status-critical"
                    >
                        <Button
                            size="small"
                            hoverIndicator
                            icon={<Icons.Trash size="small" />}
                            onClick={handleRemove}
                        />
                    </Box>
                </Box>

                <Box direction="row">
                    <Button
                        size="small"
                        hoverIndicator
                        onClick={() => props.onMoveUp(id)}
                        icon={<Icons.Up size="small" />}
                    />

                    <Button
                        size="small"
                        hoverIndicator
                        onClick={() => props.onMoveDown(id)}
                        icon={<Icons.Down size="small" />}
                    />

                    <Button
                        size="small"
                        primary
                        hoverIndicator
                        icon={<Icons.Edit size="small" />}
                        label="Edit"
                        onClick={() => setEditing(true)}
                    />
                </Box>
            </ActionBar>

            <Box>
                <WidgetView id={id} value={value} />
            </Box>
        </Cont>
    )
}

export default BlockItem
