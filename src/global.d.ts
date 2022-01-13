/// <reference types="@sveltejs/kit" />

interface ImportMetaEnv {
    VITE_API_PATH: string
}

export const variables = {
    basePath: import.meta.env.VITE_API_PATH
}
interface ImportMeta {
    readonly env: ImportMetaEnv
}