import type PhotosetViewModel from "src/types/photosetViewModel";
import type PhotoViewModel from "src/types/photoViewModel";

export const emptyPhotoViewModel = (): PhotoViewModel => {
    return {
        title: '',
        uri: '',
        id: '',
        album: '',
    }

}
export const emptyPhotosetViewModel = (): PhotosetViewModel => {
    return {
        title: '',
        id: '',
        photos: [],
    }

}

export const getPhoto = (id: String, list: Array<PhotoViewModel>): PhotoViewModel => {
    let ps = list.find((p) => p.title == id);
    return ps ? ps : emptyPhotoViewModel();
};
export const getPhotoset = (id: String, list: Array<PhotosetViewModel>): PhotosetViewModel => {
    let ps = list.find((p) => p.title == id);
    return ps ? ps : emptyPhotosetViewModel();
};


type Article = PhotosetViewModel | PhotoViewModel;

export function isEmpty(obj: Article) {
    return Object.keys(obj).length === 0;
}