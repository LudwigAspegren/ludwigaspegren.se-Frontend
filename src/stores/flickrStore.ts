import type PhotosetViewModel from "src/types/photosetViewModel";
import { writable } from "svelte/store";
import type { Writable } from "svelte/store";
import type PhotoViewModel from "$types/photoViewModel";
export const photo: Writable<PhotoViewModel> = writable({} as PhotoViewModel);
export const photoset: Writable<PhotosetViewModel> = writable({} as PhotosetViewModel);
export const photosets: Writable<PhotosetViewModel[]> = writable([]);
const fetchPhotoset = async (id: string): Promise<PhotosetViewModel> => {
    const url = `https://localhost:62727/api/flickr/photosets/${id}`;
    const res = await fetch(url);
    const data: PhotosetViewModel = await res.json();
    return data;
}

const fetchAll = async (ids: string[]) => {
    const requests: Promise<PhotosetViewModel>[] = [];
    for (const id of ids) {
        let request = fetchPhotoset(id)
        requests.push(request)
    }
    const promises = Promise.all(requests)
    const unpackedPhotosets = (await promises).map(r => r)
    photosets.set(unpackedPhotosets);
}

export const photosetIds = [
    "72157719692677659",
    "72157716844513202",
    "72157719745849615",
    "72157716844520267",
    "72157716840357521",
];

fetchAll(photosetIds)