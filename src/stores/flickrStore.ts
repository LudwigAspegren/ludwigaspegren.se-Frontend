import { variables } from "$lib/variables";
import type PhotoViewModel from "$types/photoViewModel";
import { emptyPhotosetViewModel, emptyPhotoViewModel } from "$utils/utils";
import type PhotosetViewModel from "src/types/photosetViewModel";
import { writable, type Writable } from "svelte/store";
export const photo: Writable<PhotoViewModel> = writable(emptyPhotoViewModel());
export const photoset: Writable<PhotosetViewModel> = writable(emptyPhotosetViewModel());
export const photosets: Writable<PhotosetViewModel[]> = writable([]);


const fetchPhotoset = async (id: string): Promise<PhotosetViewModel> => {
    const url = `${variables.apiPath}/GetPhotoset/${id}`;
    const res = await fetch(url);
    const data: PhotosetViewModel = await res.json();
    return data;
}

export const fetchAll = async (ids: string[]) => {
    const requests: Promise<PhotosetViewModel>[] = [];
    for (const id of ids) {
        let request = fetchPhotoset(id)
        requests.push(request)
    }
    const promises = Promise.all(requests)
    const unpackedPhotosets = (await promises).map(r => r)
    photosets.set(unpackedPhotosets);
    return unpackedPhotosets
}

export const photosetIds = [
    "72157719692677659",
    "72157716844513202",
    "72157719745849615",
    "72157716844520267",
    "72157716840357521",
];

