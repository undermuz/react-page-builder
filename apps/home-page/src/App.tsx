import { useEffect, useState } from "react"
import {
    BlocksEditor,
    BlocksView,
    type IBlockResultValue,
} from "@undermuz/react-page-builder"
import { UiContext } from "@undermuz/react-json-form"
import BaseTheme from "@undermuz/react-json-form-theme-base"
import "@undermuz/react-json-form-theme-base/styles.css"

import AppChrome from "./components/AppChrome"
import type { AppMode } from "./components/ModeToggle"
import { library } from "./blocks/library"
import { DEFAULT_PAGE } from "./blocks/defaultPage"
import {
    clearPageValue,
    loadPageValue,
    savePageValue,
} from "./lib/storage"

function App() {
    const [mode, setMode] = useState<AppMode>("view")
    const [value, setValue] = useState<IBlockResultValue[]>(() =>
        loadPageValue(DEFAULT_PAGE)
    )

    useEffect(() => {
        savePageValue(value)
    }, [value])

    const onReset = () => {
        clearPageValue()
        setValue(structuredClone(DEFAULT_PAGE))
    }

    return (
        <div data-rpb-landing className="flex min-h-screen w-full flex-col">
            <AppChrome mode={mode} onModeChange={setMode} onReset={onReset} />

            <main className="flex-1">
                {mode === "edit" ? (
                    <UiContext.Provider value={BaseTheme}>
                        <div className="mx-auto max-w-6xl px-2 py-4 sm:px-4">
                            <BlocksEditor
                                library={library}
                                value={value}
                                onChange={setValue}
                            />
                        </div>
                    </UiContext.Provider>
                ) : (
                    <BlocksView library={library} value={value} />
                )}
            </main>
        </div>
    )
}

export default App
