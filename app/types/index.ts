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

export interface LocationType {
    id: number
    name: string
    faTitle: string
    createTime: string
    updateTime: string
}

export interface PropertyDetailType {
    active:boolean,
    id: string,
    title: string,
    location: LocationType | null,
    subLocation: LocationType | null,
    price: string | null
    prePrice: string | null
    rentPrice: string | null
    metr: number,
    description: string, ///markdown HTML 
    productType: ProductType
    user: {
        id: number
        firstName: any
        lastName: any
        userName: any
        avatar: any
        phoneNumber: string
    } | null,
    agentNote: string | "",
    category: {
        id: number,
        title: string,
        enTitle: string

    } | null,
    subCategory: {
        id: number,
        title: string,
        enTitle: string

    } | null,

    medias?: string[],
    features: Array<{
        filterId: string,
        value: string | number | boolean,
        id: string
    }>
    // isBookmarked: boolean,
    createTime: string
    updateTime: string,
    bookmarks: BookmarkRecordType[]
    privateNotes: string[]
    isSuggested: boolean,
    tags?: TagReadType[]
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
    isPrimary?: 'true' | 'false',
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
    subCategory?: string
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

// export interface LocationType {
//     title: string,
//     id: string,
//     parentId: string | null
// }

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


export type ProductType = 'rent' | 'sell' | 'buy'

export interface PropertyCUType<MT> {
    title: string,
    location: number,
    subLocation?: number,
    medias: MT[],
    category: number,
    description: string
    subCategory: number
    price?: number,
    prePrice?: number,
    metr: number,
    productType: ProductType
    rentPrice?: number,
    agentNote?: string,
    features: Array<{
        filterId: string,
        value?: string | number | boolean
    }>
    id?: string,
    tagIds?: Array<number>
    isSuggested: boolean,
    isBookmarked?: boolean,
    userId?: number,
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

export type RoleTypeName = 'user' | 'superAdmin' | 'agent' | 'admin' | 'guest'

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
    action: typeof PermissionBackendRoutes.BLOG_CREATE

    // keyof  typeof  PermissionBackendRoutes
}

export interface CityType {
    name: string,
    id: number,
    createTime: string /// 2024-03-05,
    updateTime: string /// 2024-03-05,
    faTitle: string
}

export interface SubLocationBaseType {
    name: string,
    faTitle: string
}

export interface SubLocationMutationType extends SubLocationBaseType {
    parentLocationId: string
}

export interface SubLocationReadType extends SubLocationBaseType {
    parentLocation: CityType | null,
    createTime: string,
    updateTime: string,
    id: string
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
    filtertype: keyof typeof CategorySpecialField,
    hint: string,
    type: 'string' | 'number' | 'boolean',
    itemKey: keyof PropertyListFilterType,
    unit: string,
    isPrimary: 'false' | 'true',
    suggests?: []
}
export interface FilterMutateType extends FilterRecordType { subCategoryId: string }
export interface FilterReadType extends FilterRecordType { subCategory: SubCategoryType<string, CategoryType_API<string>>, id: string }




///Suggest 

export interface SuggestBaseType {
    title: string
}


export interface SuggestMutateType extends SuggestBaseType {
    filterId: string
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

export interface ItemsMutateType extends ItemsBaseType {
    suggestId: string
}

export interface ItemsReadType extends ItemsBaseType {
    suggest: SuggestReadType,
    id: string
}


export interface FullFilterType extends Omit<FilterReadType, 'suggests'> {
    suggests: (Omit<SuggestReadType, 'items'> & { items: ItemsReadType[] })[]
}

export interface CategoryFullType extends CategoryType_API<string> {
    subCategories: (Omit<SubCategoryType<string, string>, 'filters'> &
    {
        filters: (FilterReadType & {
            suggests: (SuggestReadType & {
                items: ItemsReadType[]
            })[]
        })[]
    })[]
}



export interface BlogItemTypeAPI<IDT, IMT> {
    title: string
    summary: string
    description: string
    duration: number
    userId?: number
    suggest_productId?: string[],
    images: IMT[],
    id: IDT
}


export interface BlogReadType {
    id: number,
    title: string,
    summary: string,
    description: string,
    images: string[],
    suggest_productId: [],
    duration: number,
    createTime: string,
    updateTime: string,
    user: {
        id: number,
        firstName: null | string,
        lastName: null | string,
        userName: null | string,
        phoneNumber: string
    },
    tags: []
}


export interface AgentNoteMutateType {
    note: string,
    productId: string
}

export interface AgentNoteReadType {
    id: string
    note: string,
    user: UserFullInfo,
    product: PropertyDetailType | null
}


export interface PropertySearchParams {
    featureValues?: Array<{ filterId: string, value: string | number | boolean }>,
    userId?: string,
    location?: number[],
    subLocation?: number[],
    category?: number[],
    subCategory?: number[],
    productType?: ProductType,
    price?: string,
    prePrice?: string,
    rentPrice?: string,
    title?:string
}


export interface UserInfoType<T> {
    userName: string
    firstName: string
    lastName: string,
    avatar: T,
    phoneNumber: string
    id?: string,
    role: { id: string, name: RoleTypeName },
    permissions: PermissionType<string>[]
}

export interface TagReadType {
    name: string,
    // title: string,
    textColor: string,
    backgrondColor: string,
    id: number
}

export interface TagMutateType {
    name: string,
    title: string,
    textColor: string,
    backgrondColor: string,
    color?: string,
}

export interface UserFullInfo {
    userName: string
    firstName: string
    lastName: string,
    avatar: string,
    phoneNumber: string
    id: string,
    tags: [],
    privateNotes: [], //TODO
    bookmarks: [], //TODO,
    permissions: Array<PermissionType<string>>,
    blogs: BlogReadType[],
    products: PropertyDetailType[],
    role: { id: number, name: RoleTypeName }
}


export interface BookmarkRecordType {
    user: UserInfoType<string>,
    product: PropertyDetailType,
    id: string
}

export interface CorpMutateType<FT> {
    title: string
    description: string
    side: 'owner' | 'creator',
    medias: FT[]
}

export interface CorpReadType extends CorpMutateType<string> {
    id: number,
    user: Omit<UserListType, 'role'>
}

export interface BuyOrSellMutateType<FT> {
    title: string,
    description: string,
    side: 'sell' | 'buy',
    medias: FT
}

export interface BuyOrSellReadType extends BuyOrSellMutateType<string[]> {
    id: number,
    user: Omit<UserListType, 'role'>
}