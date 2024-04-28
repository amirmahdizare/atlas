import { ApiGetRequestType, ApiPostRequestType, CategoryType_API, FilterRecordType, PropertyCUType, SubCategoryType, SuggestMutateType, SuggestReadType } from "types"

export const PropretyEndPoints = Object.freeze({
    CREATE: '/products/create',
    LIST: '/products',
    SINGLE: (id: string) => `/products/${id}`
})

export interface PropretyEndPointsType {
    CREATE: ApiPostRequestType<PropertyCUType<File | string>, PropertyCUType<string>>,
    LIST: ApiGetRequestType<{}, PropertyCUType<string>[]>
    UPDATE_SINGLE: ApiGetRequestType<SuggestMutateType, PropertyCUType<string>>,
    DELETE_SINGLE: ApiPostRequestType<{}>
}