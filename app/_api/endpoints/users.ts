import { ApiGetRequestType, ApiPostRequestType, UserType } from "types"

export const AuthEndpoints = Object.freeze({
    GET_USERS: '/users',
    CREATE_USER: '/users/create'
})


export interface UsersEndpointType {
    GET_USERS: ApiGetRequestType<{}, Array<UserType>>,
    CREATE_USER: ApiPostRequestType<{ firstName: string, lastName: string, phoneNumber: string }, {
        firstName: string,
        lastName: string,
        phoneNumber: string,
        role: null | { id: number, name: string },
        id: number
    }>
}