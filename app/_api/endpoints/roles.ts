import { ApiGetRequestType, ApiPostRequestType } from "types"

export const RoleEndPoints = Object.freeze({
    CREATE_ROLE: '/roles/create', ///SuperAdmin , Admin , Agent , User
    GET_ROLE_INFO: '/roles'
})

export interface RoleEndPointsType {
    CREATE_ROLE: ApiPostRequestType<{ name: string }, { name: string, id: string }>,
    GET_ROLE_INFO: ApiGetRequestType<{}, { id: number, name: string }>
}