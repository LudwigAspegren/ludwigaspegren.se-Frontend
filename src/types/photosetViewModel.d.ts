import type photoViewModel from "./photoViewModel";

export default interface PhotosetViewModel {
  title: string;
  id: string;
  photos: photoViewModel[];
}

// export default interface PhotosetViewModel {
//   title: string;
//   id: string;
// }