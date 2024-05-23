import { AgentNoteMutateType, AgentNoteReadType, ApiGetRequestType, ApiPostRequestType } from "types"

export const AgentNoteEndPoints = Object.freeze({
    CREATE: '/agent-notes',
    LIST: '/agent-notes',
    SINGLE: (catId: string) => `/agent-notes/${catId}`,
    BY_PRODUCT: (pId: string) => `/agent-notes/by-product/${pId}`
})

export interface AgentNoteEndPointsType {
    CREATE: ApiPostRequestType<AgentNoteMutateType, AgentNoteReadType>,
    LIST: ApiGetRequestType<{}, AgentNoteReadType[]>
    UPDATE_SINGLE: ApiGetRequestType<AgentNoteMutateType, AgentNoteReadType>,
    DELETE_SINGLE: ApiPostRequestType<{}>,
    BY_PRODUCT:ApiGetRequestType<{},AgentNoteReadType[]>
}