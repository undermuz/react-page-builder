import { type FC, useCallback, useState } from "react"
import styled from "styled-components"

import type { BlockScheme, BlockValue, IBlock } from "../types"
import type { FunctionOnChange, JsonFormUi } from "@undermuz/react-json-form"

import {
    DeleteIcon,
    ChevronUpIcon,
    ChevronDownIcon,
    EditIcon,
} from "@chakra-ui/icons"

import JsonForm, { UiContext } from "@undermuz/react-json-form"
import {
    Box,
    Button,
    Flex,
    HStack,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Spacer,
} from "@chakra-ui/react"

interface IWidgetEdit {
    id: number
    scheme: BlockScheme
    value: BlockValue
    theme: JsonFormUi
    onChange: Function
}

const BlockEditForm: FC<IWidgetEdit> = (props) => {
    const { id, scheme, value, theme, onChange } = props

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
            <JsonForm {...scheme} value={value} onChange={handleChange} />
        </UiContext.Provider>
    )
}

const ActionBar = styled(Flex)`
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

const BlockItem: FC<IBlockItem> = (props) => {
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
        <Cont w="full">
            <Modal isOpen={isEditing} onClose={() => setEditing(false)}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Edit block</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {isEditing && (
                            <BlockEditForm
                                id={id}
                                scheme={scheme}
                                value={value}
                                theme={editFormTheme}
                                onChange={onChange}
                            />
                        )}
                    </ModalBody>
                </ModalContent>
            </Modal>

            <ActionBar p="2" bg="blackAlpha.500">
                <HStack>
                    <Button onClick={() => props.onMoveUp(id)}>
                        <ChevronUpIcon />
                    </Button>

                    <Button onClick={() => props.onMoveDown(id)}>
                        <ChevronDownIcon />
                    </Button>

                    <Button onClick={() => setEditing(true)}>
                        <EditIcon />
                    </Button>
                </HStack>

                <Spacer />

                <HStack>
                    <Button colorScheme="red" onClick={handleRemove}>
                        <DeleteIcon />
                    </Button>
                </HStack>
            </ActionBar>

            <Box w="full">
                <WidgetView id={id} value={value} />
            </Box>
        </Cont>
    )
}

export default BlockItem
