/// <reference types="@sveltejs/kit" />

interface ImportMetaEnv {
    VITE_API_PATH: string
}
interface ImportMeta {
    readonly env: ImportMetaEnv
}