import { ApiPostRequestType } from "types"

export const RoleEndPoints = Object.freeze({
    CREATE_ROLE: '/roles/create', ///SuperAdmin , Admin , Agent , User
})

export interface RoleEndPointsType {
    CREATE_ROLE: ApiPostRequestType<{ name: string }, { name: string, id: string }>
}