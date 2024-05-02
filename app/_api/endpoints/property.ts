import { ApiGetRequestType, ApiPostRequestType, CategoryType_API, FilterRecordType, PropertyCUType, PropertyDetailType, SubCategoryType, SuggestMutateType, SuggestReadType } from "types"

export const PropretyEndPoints = Object.freeze({
    CREATE: '/products/create',
    LIST: '/products',
    SINGLE: (id: string) => `/products/${id}`
})

export interface PropretyEndPointsType {
    CREATE: ApiPostRequestType<PropertyCUType<File | string>, PropertyDetailType>,
    LIST: ApiGetRequestType<{}, PropertyDetailType[]>
    UPDATE_SINGLE: ApiGetRequestType<SuggestMutateType, PropertyDetailType>,
    DELETE_SINGLE: ApiPostRequestType<{}>
}