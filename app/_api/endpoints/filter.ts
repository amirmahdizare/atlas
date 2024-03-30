import { ApiGetRequestType, ApiPostRequestType, CategoryType_API, FilterMutateType, FilterReadType, FilterRecordType, SubCategoryType } from "types"

export const FilterEndPoints = Object.freeze({
    CREATE: '/filters/create',
    LIST: '/filters',
    SINGLE: (id: string) => `/filters/${id}`
})

export interface FilterEndPointsType {
    CREATE: ApiPostRequestType<FilterMutateType,FilterRecordType>,
    LIST: ApiGetRequestType<{}, FilterReadType[]>
    UPDATE_SINGLE: ApiGetRequestType<FilterMutateType , FilterReadType>,
    DELETE_SINGLE: ApiPostRequestType<{}>
}