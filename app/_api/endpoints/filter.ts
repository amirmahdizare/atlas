import { ApiGetRequestType, ApiPostRequestType, CategoryType_API, FilterRecordType, SubCategoryType } from "types"

export const FilterEndPoints = Object.freeze({
    CREATE: '/filters/create',
    LIST: '/filters',
    SINGLE: (id: string) => `/filters/${id}`
})

export interface FilterEndPointsType {
    CREATE_ROLE: ApiPostRequestType<FilterRecordType<number>,FilterRecordType<SubCategoryType<string, CategoryType_API<string>>>>,
    LIST: ApiGetRequestType<{}, FilterRecordType<SubCategoryType<string, CategoryType_API<string>>>[]>
    UPDATE_SINGLE: ApiGetRequestType<FilterRecordType<number>,FilterRecordType<SubCategoryType<string, CategoryType_API<string>>>>,
    DELETE_SINGLE: ApiPostRequestType<{}>
}