import { variables } from "$lib/variables";
import type PhotosetViewModel from "$types/photosetViewModel";
import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = async ({ fetch }) => {
    const fetchPhotoset = async (id: string): Promise<PhotosetViewModel> => {
        const url = `${variables.apiPath}/GetPhotoset/${id}`;

        const res = await fetch(url);
        const data: PhotosetViewModel = await res.json();
        return data;
    }
    let serieID = 
}    