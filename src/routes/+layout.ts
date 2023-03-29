import { fetchAll, photosetIds } from '$stores/flickrStore'
import '../app.css'

export async function load() {
  const photosets = await fetchAll(photosetIds)
  const photos = photosets.map(photoSet => { return photoSet.photos }).flat()
  return {
    photosets,
    photos
  }
}
export const prerender = true