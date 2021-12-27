export default interface MessageViewModel {
    id: number,
    photoId: string,
    title: string,
    message: string,
    user?: string,
    time: Date,
}