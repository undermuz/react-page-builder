import {
    type CSSProperties,
    type MouseEvent,
    type ReactNode,
    type RefObject,
    type DialogHTMLAttributes,
    forwardRef,
    useCallback,
    useState,
    useEffect,
    useRef,
} from "react"

export const useDialog = () => {
    const [isOpen, setIsOpen] = useState(false)

    const open = useCallback(() => setIsOpen(true), [])
    const close = useCallback(() => setIsOpen(false), [])

    return { isOpen, open, close }
}

export interface DialogProps extends DialogHTMLAttributes<HTMLDialogElement> {
    isOpen: boolean
    onClose: () => void
    children?: ReactNode
    closeableOutside?: boolean
}

const dialogStyles: CSSProperties = {
    position: "fixed",
    inset: 0,
    margin: "auto",
    padding: "24px",
    width: "min(92vw, 640px)",
    maxHeight: "min(85vh, 720px)",
    height: "fit-content",
    overflow: "auto",
    border: "1px solid #d0d0d0",
    borderRadius: "8px",
    backgroundColor: "#fff",
    color: "#111",
    boxShadow: "0 16px 48px rgba(0, 0, 0, 0.24)",
}

const Dialog = forwardRef<HTMLDialogElement, DialogProps>(
    (props, _forwardRef) => {
        const {
            isOpen,
            onClose,
            children,
            closeableOutside,
            style,
            ...rest
        } = props

        const _ref = useRef<HTMLDialogElement>(null)
        const mouseDownTarget = useRef<EventTarget | null>(null)

        const ref = (_forwardRef as RefObject<HTMLDialogElement>) || _ref

        const closeModal = useCallback(() => {
            ref.current?.close()

            onClose()
        }, [onClose, ref])

        // Close only when both mousedown and click hit the backdrop.
        // Prevents closing after native pickers (file/color) return focus
        // with a click that lands outside the dialog content.
        const onDialogMouseDown = useCallback(
            (e: MouseEvent<HTMLDialogElement>) => {
                mouseDownTarget.current = e.target
            },
            [],
        )

        const onDialogClick = useCallback(
            (e: MouseEvent<HTMLDialogElement>) => {
                if (!closeableOutside) return

                const isBackdropClick =
                    mouseDownTarget.current === e.currentTarget &&
                    e.target === e.currentTarget

                mouseDownTarget.current = null

                if (isBackdropClick) {
                    closeModal()
                }
            },
            [closeableOutside, closeModal],
        )

        useEffect(() => {
            const dialog = ref?.current

            if (!dialog) return

            if (isOpen) {
                dialog.showModal()

                return
            }

            dialog.close()
        }, [isOpen])

        return (
            <>
                <style>
                    {`
                        dialog[data-reactpagebuilder="dialog"]::backdrop {
                            background-color: rgba(0, 0, 0, 0.45);
                        }
                    `}
                </style>

                <dialog
                    {...rest}
                    data-reactpagebuilder="dialog"
                    ref={ref}
                    onClose={onClose}
                    onMouseDown={onDialogMouseDown}
                    onClick={onDialogClick}
                    style={{ ...dialogStyles, ...style }}
                >
                    {children}
                </dialog>
            </>
        )
    },
)

Dialog.displayName = "Dialog"

export { Dialog }
