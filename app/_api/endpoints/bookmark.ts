import { ApiGetRequestType, ApiPostRequestType, BlogItemTypeAPI, BlogReadType, BookmarkRecordType, FilterMutateType, FilterReadType, FilterRecordType, PropertyDetailType } from "types"

export const  BookmarkEndPoints = Object.freeze({
    ON: (pId: string) => `/bookmarks/${pId}`,
    OFF: (pId: string) => `/bookmarks/${pId}`,
    GET_ALL: '/bookmarks/my_bookmark',

})

export interface  BookmarkEndPointsType {
    ON: ApiPostRequestType<{}>,
    GET_ALL: ApiGetRequestType<{}, BookmarkRecordType[]>
    OFF: ApiPostRequestType<{}>

}