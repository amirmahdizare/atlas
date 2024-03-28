import { ApiGetRequestType, ApiPostRequestType, ItemsMutateType, ItemsReadType } from "types"

export const ItemsEndPoints = Object.freeze({
    CREATE: '/items/create',
    LIST: '/items',
    SINGLE: (id: string) => `/items/${id}`
})

export interface ItemsEndPointsType {
    CREATE_ROLE: ApiPostRequestType<ItemsMutateType, ItemsReadType>,
    LIST: ApiGetRequestType<{}, ItemsReadType[]>
    UPDATE_SINGLE: ApiGetRequestType<ItemsMutateType, ItemsReadType>,
    DELETE_SINGLE: ApiPostRequestType<{}>
}