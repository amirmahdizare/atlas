import { ApiGetRequestType, ApiPostRequestType, CityType, RoleType } from "types"

export const LocationEndPoints = Object.freeze({
    CREATE_CITY: '/locations/create', ///SuperAdmin , Admin , Agent , User
    GET_LIST: '/locations',
    SINGLE: (roleId: string) => `/locations/${roleId}`
})

export interface LocationEndPointsType {
    CREATE_ROLE: ApiPostRequestType<{ name: string }, CityType>,
    GET_LIST: ApiGetRequestType<{}, CityType[]>
    EDIT_SINGLE: ApiPostRequestType<CityType, CityType>
    DELETE_SINGLE: ApiPostRequestType<{}>
}