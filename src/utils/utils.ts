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
    let ps = list.find((p) => p.id == id);
    return ps ? ps : emptyPhotoViewModel();
};

export const getPhotoset = (id: String, list: Array<PhotosetViewModel>): PhotosetViewModel => {
    let ps = list.find((p) => p.id == id);
    return ps ? ps : emptyPhotosetViewModel();
};

export const changePhotoQuality = (quality: string, photo: PhotoViewModel): PhotoViewModel => {
    let suffix = `_${quality}.jpg`
    let modifiedPhoto = { ...photo }
    // modifiedPhoto.uri = photo.uri.replace('_b.jpg', suffix)
    modifiedPhoto.uri = photo.uri.slice(0, -6) + suffix
    return (modifiedPhoto)
}

export let changeAlbumQuality = (quality: string, album: Array<PhotoViewModel>): Array<PhotoViewModel> => {
    for (let [i, photo] of album.entries()) {
        album[i] = changePhotoQuality(quality, photo)
    }
    return album;
}


export function isEmpty<T>(obj: T) {
    return Object.keys(obj).length === 0;
}

export enum qualities {
    tiny = "t",
    small = "z",
    medium = "b",
    large = "k"
}

export const checkImgLoading = (img: HTMLImageElement) => {
    const removeLoadingClass = () => {
        img.classList.remove('loading')
        img.classList.add('fade-in')
    }
    img.addEventListener('load', removeLoadingClass)
    if (img.complete) img.classList.remove('loading')

    document.body.style.overflow = 'hidden'
    return () => (document.body.style.overflow = 'scroll')
}