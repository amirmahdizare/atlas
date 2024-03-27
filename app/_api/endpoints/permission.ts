import { ApiGetRequestType, ApiPostRequestType, PermissionType, RoleType } from "types"

export const PermissionEndPoints = Object.freeze({
    CREATE: '/permission/create', ///SuperAdmin , Admin , Agent , User
    GET_LIST: '/permission/get_all',
    GET_SINGLE: (perId: string) => `/permission/${perId}`,
    UPDATE_PERMISSION: (perId: string) => `/permission/${perId}`
})

export interface PermissionEndPointsType {
    CREATE: ApiPostRequestType<PermissionType<string>, PermissionType<string>>,
    GET_LIST: ApiGetRequestType<{}, PermissionType<string>[]>
    GET_SINGLE: ApiGetRequestType<{}, { id: number, name: string }>,
    UPDATE_PERMISSION: ApiGetRequestType<PermissionType<string>>,
    DELETE_PERMISSION: ApiPostRequestType<{}>
}