import { variables } from '$lib/variables'
import type PhotosetViewModel from '$types/photosetViewModel'
import "../app.css"
import type { LayoutLoad } from './$types'

export const load: LayoutLoad = async ({ fetch }) => {
  const fetchPhotoset = async (id: string): Promise<PhotosetViewModel> => {
    const url = `${variables.apiPath}/GetPhotoset/${id}`;

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
    return unpackedPhotosets
  }

  const photosetIds = [
    "72157719692677659",
    "72157716844513202",
    "72157719745849615",
    "72157716844520267",
    "72157716840357521",
  ];
  const myRoomId = "72177720305244003"
  const myRoom = await fetchPhotoset(myRoomId)


  const photosets = await fetchAll(photosetIds)
  const photos = photosets.map(photoSet => { return photoSet.photos }).flat()
  photos.sort((a, b) => 0.5 - Math.random())
  return {
    photosets,
    myRoom,
    photos
  }
}
export const prerender = true
