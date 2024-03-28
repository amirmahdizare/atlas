import { ApiGetRequestType, ApiPostRequestType, CategoryType_API, FilterRecordType, SubCategoryType, SuggestMutateType, SuggestReadType } from "types"

export const SuggestEndPoints = Object.freeze({
    CREATE: '/suggests/create',
    LIST: '/suggests',
    SINGLE: (id: string) => `/suggests/${id}`
})

export interface SuggestEndPointsType {
    CREATE_ROLE: ApiPostRequestType<SuggestMutateType ,SuggestReadType>,
    LIST: ApiGetRequestType<{}, SuggestReadType[]>
    UPDATE_SINGLE: ApiGetRequestType<SuggestMutateType , SuggestReadType>,
    DELETE_SINGLE: ApiPostRequestType<{}>
}