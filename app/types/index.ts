import { CategorySpecialField, PropertyType } from 'enums'

export interface PropertyListItemType {
    img: string,
    isSaved: boolean,
    title: string,
    location: string,
    subLocation?: string,
    price: number,
    id: string,
    agentInfo?: {
        avatar: string,
        username: string,
        name: string,
        phoneNumber: string
    }
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
    id: string,
    title: string,
    location: string,
    subLocation?: string,
    price: number,
    metr: number,
    description: string, ///markdown HTML 
    agentInfo: {
        avatar: string,
        name: string,
        id: string,
        phoneNumber: string
    },
    type: {
        name: string,
        id: string
    }
    agentNote: string,
    privateNote: string,
    category: {
        id: string,
        name: string
    },
    subCategory?: {
        id: string,
        name: string
    },
    medias?: string[],
    isBookmarked: boolean
}


export interface CategoryType {
    title: string,
    enTitle: string,
    id: string,
    subCategories: Array<Omit<CategoryType, 'subCategories'>>,
    filters?: Array<CategorySpecialFieldType> ///Coming Soon
}


export interface CategorySpecialFieldType {
    type: keyof typeof CategorySpecialField,
    itemkey?:keyof PropertyListFilterType
    title: string,
    hint?: string,
    unit?: string
    suggest?: Array<
        {
            itemKey: keyof PropertyListFilterType
            title: string,
            items: Array<{ value: number | string, title: string }>
        }
    >
}

export interface PropertyListFilterType {
    type: keyof typeof PropertyType,
    category?: string,
    city?: Array<{ value: string, title: string }>,
    zone?: Array<{ value: string, title: string }>,
    minPrice?: string | number,
    maxPrice?: string | number,
    metrDown?:number,
    metrUp?:number,
    elevator?:boolean,
    parking?:boolean
    // subCategory?:string
}

export interface LocationType {
    title: string,
    id: string,
    parentId: string | null
}

