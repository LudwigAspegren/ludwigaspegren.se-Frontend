import { fetchAll, photosetIds, photosets } from "$stores/flickrStore";
import type PhotosetViewModel from "$types/photosetViewModel";
import type { ServerRequest } from "@sveltejs/kit/types/hooks";
import { get } from "svelte/store";

export interface GetSession<Locals = Record<string, any>, Body = unknown, Session = any> {
    (request: ServerRequest<Locals, Body>): Session | Promise<Session>;
}

export async function getSession(request: any) {
    console.log("session running")
    let prop: PhotosetViewModel[];
    if (get(photosets).length === 0) {
        prop = await fetchAll(photosetIds)
    } else {
        prop = get(photosets)
    }
    return {
        response: prop
    }
}