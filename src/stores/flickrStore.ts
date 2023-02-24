import type PhotoViewModel from "$types/photoViewModel";
import { emptyPhotosetViewModel, emptyPhotoViewModel } from "$utils/utils";

import type PhotosetViewModel from "src/types/photosetViewModel";
import { writable, type Writable } from "svelte/store";

export const photo: Writable<PhotoViewModel> = writable(emptyPhotoViewModel());
export const photoset: Writable<PhotosetViewModel> = writable(emptyPhotosetViewModel());
export const photosets: Writable<PhotosetViewModel[]> = writable([]);




