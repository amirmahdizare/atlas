import { ApiGetRequestType, ApiPostRequestType, CategoryType_API, RoleType } from "types"

export const CategoryEndPoints = Object.freeze({
    CREATE: '/category/create', ///SuperAdmin , Admin , Agent , User
    LIST: '/category',
    SINGLE: (catId: string) => `/category/${catId}`
})

export interface CategoryEndPointsType {
    CREATE_ROLE: ApiPostRequestType<CategoryType_API<undefined>, CategoryType_API<string>>,
    LIST: ApiGetRequestType< {},CategoryType_API<string>[]>
    UPDATE_SINGLE: ApiGetRequestType<CategoryType_API<string>, CategoryType_API<string>>,
    DELETE_SINGLE : ApiPostRequestType<{}>
}