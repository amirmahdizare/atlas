import { ApiGetRequestType, ApiPostRequestType, BuyOrSellMutateType, BuyOrSellReadType, CategoryType_API, FilterMutateType, FilterReadType, FilterRecordType, SubCategoryType } from "types"

export const BuyOrSellEndPoints = Object.freeze({
    CREATE: '/sale-or-buy',
    LIST: '/sale-or-buy',
    SINGLE: (id: string) => `/sale-or-buy/${id}`
})

export interface BuyOrSellEndPointsType {
    CREATE: ApiPostRequestType<BuyOrSellMutateType<File[]>,BuyOrSellReadType>,
    LIST: ApiGetRequestType<{}, BuyOrSellReadType[]>
    UPDATE_SINGLE: ApiGetRequestType<BuyOrSellMutateType<File[]> , BuyOrSellReadType>,
    DELETE_SINGLE: ApiPostRequestType<{}>
}