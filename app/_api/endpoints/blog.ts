import { ApiGetRequestType, ApiPostRequestType, BlogItemTypeAPI, BlogReadType, FilterMutateType, FilterReadType, FilterRecordType } from "types"

export const BlogEndPoints = Object.freeze({
    CREATE: '/blogs/create',
    LIST: '/blogs',
    SINGLE: (id: number) => `/blogs/${id}`
})

export interface BlogEndPointsType {
    CREATE: ApiPostRequestType<BlogItemTypeAPI<undefined , undefined >, BlogItemTypeAPI<string , string>>,
    LIST: ApiGetRequestType<{}, BlogReadType[]>
    UPDATE_SINGLE: ApiGetRequestType<BlogItemTypeAPI<undefined , undefined >, BlogItemTypeAPI<string , string>>,
    DELETE_SINGLE: ApiPostRequestType<{}>
}