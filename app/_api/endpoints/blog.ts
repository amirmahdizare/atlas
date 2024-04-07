import { ApiGetRequestType, ApiPostRequestType, BlogItemTypeAPI, FilterMutateType, FilterReadType, FilterRecordType } from "types"

export const BlogEndPoints = Object.freeze({
    CREATE: '/blogs/create',
    LIST: '/blogs',
    SINGLE: (id: string) => `/blogs/${id}`
})

export interface BlogEndPointsType {
    CREATE: ApiPostRequestType<BlogItemTypeAPI<undefined, File>, BlogItemTypeAPI<string , string>>,
    LIST: ApiGetRequestType<{}, BlogItemTypeAPI<string, string>[]>
    UPDATE_SINGLE: ApiGetRequestType<BlogItemTypeAPI<undefined , File>, BlogItemTypeAPI<string , string>>,
    DELETE_SINGLE: ApiPostRequestType<{}>
}