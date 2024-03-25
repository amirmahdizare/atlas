import { ApiGetRequestType, ApiPostRequestType, RoleType } from "types"

export const RoleEndPoints = Object.freeze({
    CREATE_ROLE: '/roles/create', ///SuperAdmin , Admin , Agent , User
    GET_ROLES: '/roles',
    GET_ROLES_INFO: (roleId: string) => `/roles/${roleId}`
})

export interface RoleEndPointsType {
    CREATE_ROLE: ApiPostRequestType<{ name: string }, { name: string, id: string }>,
    GET_ROLES: ApiGetRequestType< {},RoleType[]>
    GET_ROLE_INFO: ApiGetRequestType<{}, { id: number, name: string }>
}