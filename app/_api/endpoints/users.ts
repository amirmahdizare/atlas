import { ApiGetRequestType, UserType } from "types"

export const AuthEndpoints = Object.freeze({
    GET_USERS: '/users',
})


export interface UsersEndpointType {
    GET_USERS: ApiGetRequestType<{}, Array<UserType>>
}