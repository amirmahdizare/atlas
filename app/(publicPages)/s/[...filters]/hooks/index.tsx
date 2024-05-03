import { useCustomInfiniteQuery } from '@hooks'
import { api } from '_api/config'
import { PropretyEndPoints, PropretyEndPointsType } from '_api/endpoints/property'
import { PropertyListFilterType, PropertySearchParams } from 'types'
import { create } from 'zustand'


interface DataType {
    cardMode: 'block' | 'row',
    filter: PropertySearchParams
}

interface StoreType extends DataType {
    dispatch: (data: Partial<DataType>) => void,
    dispatchFilter: (data: Partial<PropertySearchParams>) => void
}

export const useSearchProperty = create<StoreType>((set) => ({
    cardMode: 'block',
    dispatch: (data) => set((state) => ({ ...state, ...data })),
    dispatchFilter: (filter) => set((state) => ({ ...state, filter: { ...state.filter, ...filter } })),
    filter: {
    }
}))

export const usePropertySearchResults = () => {
    const searchHook = useSearchProperty()

    const dataQuery = useCustomInfiniteQuery<PropretyEndPointsType['LIST'], { f: string }>({
        queryFn: ({ queryKey }) => api.post(PropretyEndPoints.SEARCH, queryKey[1]),
        queryKey: ['SearchProprtyResults', searchHook.filter]
    })


    return { ...searchHook, ...dataQuery }


}