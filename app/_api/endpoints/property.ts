import { ApiGetRequestType, ApiPostRequestType, CategoryType_API, FilterRecordType, PropertyCUType, PropertyDetailType, PropertySearchParams, SubCategoryType, SuggestMutateType, SuggestReadType } from "types"

export const PropretyEndPoints = Object.freeze({
    CREATE: '/products/create',
    LIST: '/products',
    SINGLE: (id: string) => `/products/${id}`,
    SEARCH: `/products/search`,
    TOGGLE_ACTIVE:(id:string)=>`/products/${id}/active`
})

export interface PropretyEndPointsType {
    CREATE: ApiPostRequestType<PropertyCUType<File | string>, PropertyDetailType>,
    LIST: ApiGetRequestType<{}, PropertyDetailType[]>
    UPDATE_SINGLE: ApiGetRequestType<SuggestMutateType, PropertyDetailType>,
    DELETE_SINGLE: ApiPostRequestType<{}>
    SEARCH:ApiPostRequestType<PropertySearchParams , PropertyDetailType[]>,
    TOGGLE_ACTIVE:ApiPostRequestType<{active:boolean} , PropertyDetailType>
}