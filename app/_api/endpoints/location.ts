import { ApiGetRequestType, ApiPostRequestType, CityType, RoleType, SubLocationMutationType, SubLocationReadType } from "types"

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


export const SubLocationEndPoints = Object.freeze({
    CREATE_CITY: '/sublocations/create', 
    GET_LIST: '/sublocations',
    SINGLE: (roleId: string) => `/sublocations/${roleId}`
})

export interface SubLocationEndPointsType {
    CREATE_ROLE: ApiPostRequestType<SubLocationMutationType, SubLocationReadType>,
    GET_LIST: ApiGetRequestType<{}, SubLocationReadType[]>
    EDIT_SINGLE: ApiPostRequestType<SubLocationMutationType, SubLocationReadType>
    DELETE_SINGLE: ApiPostRequestType<{}>
}
