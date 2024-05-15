import { AgentNoteMutateType, AgentNoteReadType, ApiGetRequestType, ApiPostRequestType } from "types"

export const PrivateEndPoints = Object.freeze({
    CREATE: '/private_notes/create',
    LIST: '/private_notes',
    SINGLE: (catId: string) => `/private_notes/${catId}`,
    BY_PRODUCT: (pId: string) => `/private-notes/by-product/${pId}`
})

export interface PrivateEndPointsType {
    CREATE: ApiPostRequestType<AgentNoteMutateType, AgentNoteReadType>,
    LIST: ApiGetRequestType<{}, AgentNoteReadType>
    UPDATE_SINGLE: ApiGetRequestType<AgentNoteMutateType, AgentNoteReadType>,
    DELETE_SINGLE: ApiPostRequestType<{}>,
    BY_PRODUCT:ApiGetRequestType<{},AgentNoteReadType>
}