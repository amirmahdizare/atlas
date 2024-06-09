import { useCustomInfiniteQuery, useCustomQuery } from '@hooks'
import { api } from '_api/config'
import { PropretyEndPoints, PropretyEndPointsType } from '_api/endpoints/property'
import { useCallback } from 'react'
import { useInfiniteQuery } from 'react-query'
import { minuteToMs } from 'utils'
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


export const usePropertyList = (f = 'sdf') => {

    const ProductListLimit = 8

    return useCustomInfiniteQuery<PropretyEndPointsType['LIST']>({
        queryFn: ({ pageParam = 1 }) => api.get(PropretyEndPoints.LIST, { params: { limit: ProductListLimit, page: pageParam } }),
        queryKey: ['propertyList', f],
        cacheTime: minuteToMs(10),
        getNextPageParam: (last, all) => last.data.length == ProductListLimit ? all.length + 1 : undefined
    })
}