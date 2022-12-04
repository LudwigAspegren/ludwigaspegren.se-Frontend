import type { Matcher } from "vite";

export const match: Matcher = (param) => {
    return param.length === 11
}