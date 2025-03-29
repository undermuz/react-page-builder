import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@react-page-builder": path.resolve(
                __dirname,
                "../packages/react-page-builder/src"
            ),
        },
    },
});
