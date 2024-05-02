import { ApiGetRequestType, ApiPostRequestType, CategoryFullType, CategoryType_API, RoleType } from "types"

export const CategoryEndPoints = Object.freeze({
    CREATE: '/category/create', ///SuperAdmin , Admin , Agent , User
    LIST: '/category',
    SINGLE: (catId: string) => `/category/${catId}`,
    SINGLE_FULL: (catId: string) => `/category/${catId}/with-relations`,
    ALL_WITH_RELATION: `/category/relations`,
})

export interface CategoryEndPointsType {
    CREATE: ApiPostRequestType<CategoryType_API<undefined>, CategoryType_API<number>>,
    LIST: ApiGetRequestType<{}, CategoryType_API<number>[]>
    UPDATE_SINGLE: ApiGetRequestType<CategoryType_API<number>, CategoryType_API<number>>,
    DELETE_SINGLE: ApiPostRequestType<{}>
    SINGLE_FULL: ApiGetRequestType<{}>,
    ALL_WITH_RELATION: ApiGetRequestType<{}, Array<CategoryFullType>>,
}