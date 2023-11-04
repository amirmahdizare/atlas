export interface PropertyListItemType {
    img: string,
    isSaved: boolean,
    title: string,
    location: string,
    subLocation?: string,
    price: number,
    id: string
}


export interface BlogItemType {
    title: string,
    createdAt: number,
    summary: string,
    img:string,
    id: string,
    duration:number
}