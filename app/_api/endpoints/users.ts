import { UserInfo } from "os"
import { ApiGetRequestType, ApiPostRequestType, UserInfoType, UserListType } from "types"

export const UsersEndpoints = Object.freeze({
    GET_USERS: '/users',
    CREATE_USER: '/users/create',
    SINGLE_USER: (id: string) => `/users/${id}`,
    UPDATE_USER_ROLE: (id: string) => `/users/${id}/role`,
    UPADTE_USER_PERMISSION: (id: string) => `/users/${id}/permissions`,
    USER_INFO: '/users/user_info',
    GET_AGENTS: '/users/get_all/agents'
})


export interface UsersEndpointType {
    GET_USERS: ApiGetRequestType<{}, Array<UserListType>>,
    CREATE_USER: ApiPostRequestType<{
        firstName: string, lastName: string, phoneNumber: string, avatar?: File,
        userName?: string | null
    }, {
        firstName: string,
        lastName: string,
        phoneNumber: string,
        role: null | { id: number, name: string },
        id: number,
        avatar: File,
        userName: string
    }>,
    UPDATE_USER_ROLE: ApiPostRequestType<{ roleId: number }, {
        firstName: string,
        lastName: string,
        phoneNumber: string,
        role: null | { id: number, name: string },
        id: number,
        avatar: File,
        userName: string
    }>,
    SINGLE_USER: ApiPostRequestType<UserInfoType<File>, UserInfoType<string>>
    GET_SINGLE: ApiGetRequestType<{}, UserInfoType<string>>
    UPADTE_USER_PERMISSION: ApiPostRequestType<{ permissionIds: Array<number> }>,
    USER_INFO: ApiGetRequestType<{}, UserInfoType<string>>,
    GET_AGENTS: ApiGetRequestType<{}, UserInfoType<string>[]>
}