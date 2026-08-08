import path from "node:path"
import { fileURLToPath } from "node:url"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

const root = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
    // GitHub Pages project site: https://undermuz.github.io/react-page-builder/
    base: process.env.BASE_PATH || "/",
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: {
            "@undermuz/react-page-builder": path.resolve(
                root,
                "../../packages/react-page-builder/src/index.tsx"
            ),
        },
    },
    server: {
        host: true,
    },
    preview: {
        host: true,
    },
})
