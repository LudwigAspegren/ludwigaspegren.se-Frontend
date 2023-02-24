import {
  emptyPhotoViewModel
} from '$utils/utils';
import type { PageLoad } from './$types';
export const load: PageLoad = async ({ params, parent }) => {
  let data = await parent()
  let currentPhoto = data.photos.find((p) => p.id == params.photo);
  return { currentPhoto: currentPhoto ? currentPhoto : emptyPhotoViewModel() };
}