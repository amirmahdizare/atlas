import { ApiGetRequestType, ApiPostRequestType, UserListType } from "types"

export const UsersEndpoints = Object.freeze({
    GET_USERS: '/users',
    CREATE_USER: '/users/create',
    UPDATE_USER_ROLE: (id: string) => `/users/${id}/role`,
    UPADTE_USER_PERMISSION: (id: string) => `/users/${id}/permissions`
})


export interface UsersEndpointType {
    GET_USERS: ApiGetRequestType<{}, Array<UserListType>>,
    CREATE_USER: ApiPostRequestType<{ firstName: string, lastName: string, phoneNumber: string }, {
        firstName: string,
        lastName: string,
        phoneNumber: string,
        role: null | { id: number, name: string },
        id: number
    }>,
    UPDATE_USER_ROLE: ApiPostRequestType<{ roleId: number }, {
        firstName: string,
        lastName: string,
        phoneNumber: string,
        role: null | { id: number, name: string },
        id: number
    }>,
    UPADTE_USER_PERMISSION: ApiPostRequestType<{ permissionIds: Array<number> }>
}