import { getPhotoset } from '$utils/utils';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, parent }) => {
  let data = await parent();
  let currentPhotoset = getPhotoset(params.photoset, data.photosets)
  return { currentPhotoset }
}