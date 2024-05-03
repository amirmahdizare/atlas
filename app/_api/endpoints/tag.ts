import { ApiGetRequestType, ApiPostRequestType, CategoryType_API, FilterRecordType, PropertyCUType, PropertyDetailType, PropertySearchParams, SubCategoryType, SuggestMutateType, SuggestReadType, TagMutateType, TagReadType, } from "types"

export const TagsEndPoints = Object.freeze({
    CREATE: '/tag/create',
    LIST: '/tag',
    SINGLE: (id: string) => `/tag/${id}`,
})

export interface TagsEndPointsType {
    CREATE: ApiPostRequestType<TagMutateType, TagReadType>,
    LIST: ApiGetRequestType<{}, TagReadType[]>
    UPDATE_SINGLE: ApiGetRequestType<TagMutateType, TagReadType>,
    DELETE_SINGLE: ApiPostRequestType<{}>
}