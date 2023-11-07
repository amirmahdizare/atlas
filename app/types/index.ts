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
    img: string,
    id: string,
    duration: number
}

export type pageProps<PT = {}, SP = {}> = {
    params: {
        [Property in keyof PT]: PT[Property];
    },
    searchParams: {
        [Property in keyof SP]: SP[Property];
    }
}

export interface PropertyDetailType {
    id:string,
    title: string,
    location: string,
    subLocation?: string,
    price: number,
    metr:number,
    description: string, ///markdown HTML 
    agentInfo: {
        avatar: string,
        name: string,
        id: string
    },
    type:{
        name:string,
        id:string
    }
    agentNote: string,
    privateNote: string,
    category: {
        id:string,
        name:string
    },
    subCategory?: {
        id:string,
        name:string
    },
    medias?: string[],
    isBookmarked: boolean
}
