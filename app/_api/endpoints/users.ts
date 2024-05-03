import { ApiGetRequestType, ApiPostRequestType, UserInfoType, UserListType } from "types"

export const UsersEndpoints = Object.freeze({
    GET_USERS: '/users',
    CREATE_USER: '/users/create',
    SINGLE_USER:  (id: string) => `/users/${id}`,
    UPDATE_USER_ROLE: (id: string) => `/users/${id}/role`,
    UPADTE_USER_PERMISSION: (id: string) => `/users/${id}/permissions`,
    USER_INFO: '/users/user_info'
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
    SINGLE_USER: ApiPostRequestType<UserInfoType<File>, UserInfoType<string>>
    UPADTE_USER_PERMISSION: ApiPostRequestType<{ permissionIds: Array<number> }>,
    USER_INFO: ApiGetRequestType<{}, UserInfoType<string>>
}