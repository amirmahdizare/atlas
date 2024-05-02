import { useCustomInfiniteQuery, useCustomQuery } from '@hooks'
import { api } from '_api/config'
import { PropretyEndPoints, PropretyEndPointsType } from '_api/endpoints/property'
import { useInfiniteQuery } from 'react-query'
import { create } from 'zustand'


interface DataType {
    mode: 'list' | 'add' | 'edit',
    proprtyId?: string
}


interface StoreType extends DataType {
    dispatch: (state: DataType) => void
}

export const usePropertySection = create<StoreType>((set) => ({
    mode: 'list',
    dispatch: (newState) => set((state) => ({ ...state, ...newState }))
}))


export const usePropertyList = () => {
    return useCustomInfiniteQuery<PropretyEndPointsType['LIST']>({
        queryFn: () => api.get(PropretyEndPoints.LIST),
        queryKey: 'propertyList',
    })
}