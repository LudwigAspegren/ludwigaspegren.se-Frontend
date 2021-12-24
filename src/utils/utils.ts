import type PhotosetViewModel from "src/types/photosetViewModel";
import type PhotoViewModel from "src/types/photoViewModel";

export const getFlickrObject = <T extends PhotoViewModel | PhotosetViewModel>(id: String, list: Array<T>): T => {
    let ps = list.find((p) => p.title == id);
    return ps ? ps : createEmptyObject<T>();
};

const article: PhotosetViewModel | PhotoViewModel = ({} as any) as PhotosetViewModel | PhotoViewModel;

export const createEmptyObject = <T extends Partial<PhotoViewModel | PhotosetViewModel>>(): (PhotoViewModel | PhotosetViewModel) & T => {
    return Object.assign(article);
};

export const isEmpty = <T>(obj: T) : Boolean => {
    return Object.keys(obj).length === 0;
}