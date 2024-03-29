import { ApiGetRequestType, ApiPostRequestType, CategoryType_API, SubCategoryType } from "types"

export const SubcategoryEndPoints = Object.freeze({
    CREATE: '/sub-categories/create', 
    LIST: '/sub-categories',
    SINGLE: (id: string) => `/sub-categories/${id}`
})

export interface SubcategoryEndPointsType {
    CREATE_ROLE: ApiPostRequestType<SubCategoryType<undefined, string>, SubCategoryType<string, string>>,
    LIST: ApiGetRequestType<{}, SubCategoryType<string, string>[]>
    UPDATE_SINGLE: ApiGetRequestType<SubCategoryType<undefined, string>, SubCategoryType<string, string>>,
    DELETE_SINGLE: ApiPostRequestType<{}>
}