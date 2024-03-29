import { IconBabyBottle } from '@tabler/icons-react'
import { CategorySpecialField, PermissionBackendRoutes, PropertyType } from 'enums'
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
    likes?: number,
    comments?: number
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
    id: string
}

export interface BlogDetailType {

    title: string,
    createdAt: number,
    description: string,
    img: string,
    id: string,
    duration: number,
    likes?: number,
    comments?: number
}

export interface ApiPostRequestType<RD = any, S = any, E = ErrorResponseType> {
    REQUEST: RD
    RESPONSE: {
        SUCCESS: S,
        ERROR: E
    }
}

export interface ApiGetRequestType<PT extends object = {}, S = any, E = ErrorResponseType> {
    PARAMS: PT
    RESPONSE: {
        SUCCESS: S,
        ERROR: E
    }
}

export interface ErrorResponseType {
    message: string,
    error: string,
    statusCode: number
}

export type RoleTypeName = 'user' | 'superAdmin' | 'adviser'

export interface UserListType {
    id: number,
    firstName: string,
    lastName: string,
    userName: null | string,
    phoneNumber: string, //Without Zero
    role: {
        id: number,
        name: RoleTypeName
    } | null
}

export interface RoleType {
    id: number,
    name: RoleTypeName
}

export interface PermissionType<IT> {
    id: IT,
    route: number,
    title: string,
    isMenuItem: boolean,
    hint: string,
    action: keyof typeof PermissionBackendRoutes
}

export interface CityType {
    name: string,
    id: number,
    createTime: string /// 2024-03-05,
    updateTime: string /// 2024-03-05
}

export interface SubLocationBaseType { 
    name:string
}

export  interface SubLocationMutationType extends SubLocationBaseType {
    parentLocationId:string
}

export  interface SubLocationReadType extends SubLocationBaseType {
    parentLocation:CityType,
    createTime:string,
    updateTime:string,
    id:string
}


export interface CategoryType_API<T = undefined> {
    title: string,
    enTitle: string,
    id: T
}


export interface SubCategoryType<IDT, CT> extends CategoryType_API<IDT> {
    category: CategoryType_API<CT>,
    products?: Array<any>
    filters?: Array<any>
}


export interface FilterRecordType {
    title: string,
    filterType: keyof typeof CategorySpecialField,
    hint: string,
    type: 'string' | 'number' | 'boolean',
    itemKey: keyof PropertyListFilterType,
    unit: string,
    isPrimary: boolean,
    suggests?: []
}
export interface FilterMutateType extends FilterRecordType { subCategoryId: string }
export interface FilterReadType extends FilterRecordType { subCategory: SubCategoryType<string, CategoryType_API<string>> }




///Suggest 

export interface SuggestBaseType {
    title: string
}


export interface SuggestMutateType extends SuggestBaseType {
    filterId: number
}



export interface SuggestReadType extends SuggestBaseType {
    filter: FilterReadType
    id: string
}

///Items 

export interface ItemsBaseType {
    title: string,
    value: string
}

export interface ItemsMutateType {
    suggestId: string
}

export interface ItemsReadType {
    suggest: SuggestReadType
}