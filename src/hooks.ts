import { fetchAll, photosetIds, photosets } from "$stores/flickrStore";
import type PhotosetViewModel from "$types/photosetViewModel";
import { get } from "svelte/store";

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