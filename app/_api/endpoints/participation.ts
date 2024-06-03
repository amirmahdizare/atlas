import { ApiGetRequestType, ApiPostRequestType, CorpMutateType, CorpReadType, ItemsMutateType, ItemsReadType } from "types"

export const CorpEndPoints = Object.freeze({
    CREATE: '/participation',
    LIST: '/participation',
    SINGLE: (id: string) => `/participation/${id}`
})

export interface CorpEndPointsType {
    CREATE: ApiPostRequestType<CorpMutateType <File>, CorpReadType>,
    LIST: ApiGetRequestType<{}, CorpReadType[]>
    UPDATE_SINGLE: ApiGetRequestType<CorpMutateType<File>, CorpReadType>,
    DELETE_SINGLE: ApiPostRequestType<{}>
}