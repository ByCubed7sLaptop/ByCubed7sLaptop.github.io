import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";

import {dirname, resolve} from "node:path";
import {fileURLToPath} from "node:url";

// https://vite.dev/config/
const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                plasma: resolve(__dirname, "plasma/index.html")
            }
        }
    }
});
