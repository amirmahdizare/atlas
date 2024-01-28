import { IconBabyBottle } from '@tabler/icons-react'
import { CategorySpecialField, PropertyType } from 'enums'
import { StaticImageData } from 'next/image'

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
    duration: number,
    likes?:number,
    comments?:number
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
    filters?: Array<CategorySpecialFieldType> ///Fields
}


export interface CategorySpecialFieldType {
    type: 'string' | 'number' | 'boolean'
    filtertype: keyof typeof CategorySpecialField,
    itemKey: keyof PropertyListFilterType
    title: string,
    hint?: string,
    unit?: string,
    isPrimary?: boolean,
    suggest?: Array<
        {
            // itemKey: keyof PropertyListFilterType
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
    price?: string
    // minPrice?: string | number,
    // maxPrice?: string | number,
    metr?: string
    // metrDown?:number,
    // metrUp?:number,
    elevator?: boolean,
    parking?: boolean,
    rooms?: string,
    age?: string
    // subCategory?:string
}

export interface LocationType {
    title: string,
    id: string,
    parentId: string | null
}

export interface AccessType {
    title: string,
    route: string,
    hint?: string,
    isMenuItem?: boolean
}

export interface AdviserType {
    name: string,
    phoneNumber: string,
    username: string,
    img: StaticImageData,
    title?: string
}


export interface GoalType {
    title: string,
    description: string
}

export interface SocialMediaType {
    title: string,
    enTitle: string,
    link: string,
    icon: typeof IconBabyBottle
}

export interface PropertyCUType<MT> {
    isSaved: boolean,
    title: string,
    location: string,
    subLocation?: string,
    category: string,
    subCategory: string
    price: number,
    id?: string,
    labels?: Array<string>
    medias: MT,
    description: string
}

export interface AgentListInfo {
    avatar: string,
    name: string,
    id: string,
    phoneNumber: string,
    propertyCount: number,
    lastActivity: number,
    disabled: boolean
}

export interface AdviserCUType<AT> {
    avatar: AT,
    name: string,
    id: string,
    phoneNumber: string,
    username: string,
    permissions: string[],
    desc?: string
}

export interface CityCUType {
    title: string,
    id?: string,
    enTitle: string,
    subLocations: Array<Omit<CityCUType, 'subLocations'>>
}

export interface RequestItemType {
    title: string,
    fullname: string,
    category: string,
    city: string,
    zone: string,
    id:string
}

export interface BlogListItem {
}