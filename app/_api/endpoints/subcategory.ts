import { ApiGetRequestType, ApiPostRequestType, CategoryType_API, SubCategoryType } from "types"

export const SubcategoryEndPoints = Object.freeze({
    CREATE: '/sub-categories/create', 
    LIST: '/sub-categories',
    SINGLE: (id: string) => `/sub-categories/${id}`,
    SINGLE_FULL: (catId: string) => `/sub-categories/${catId}/with-relations`,
    ALL_WITH_RELATION:  `/sub-categories/relations`,
})

export interface SubcategoryEndPointsType {
    CREATE: ApiPostRequestType<SubCategoryType<undefined, string>, SubCategoryType<string, string>>,
    LIST: ApiGetRequestType<{}, SubCategoryType<string, string>[]>
    UPDATE_SINGLE: ApiGetRequestType<SubCategoryType<undefined, string>, SubCategoryType<string, string>>,
    DELETE_SINGLE: ApiPostRequestType<{}>,
    SINGLE_FULL: ApiGetRequestType<{}>,
    ALL_WITH_RELATION: ApiGetRequestType<{}>,
}