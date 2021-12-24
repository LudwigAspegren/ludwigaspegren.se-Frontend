import type { flickrViewModel } from "./flickrViewModel";

export default interface PhotoViewModel {
  title: string;
  uri: string;
  id?: string;
  album?: string;
}
