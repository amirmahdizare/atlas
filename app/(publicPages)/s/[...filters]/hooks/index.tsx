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
        featureValues: [],
    }
}))

export const usePropertySearchResults = () => {
    const searchHook = useSearchProperty()

    const { featureValues, ...rest } = searchHook.filter

    // const especialFilters = rest.productType == 'sell' ? ['price'] : ['prePrice', 'rentPrice']


    ///TODO Price Filter

    // const especialFiltersObj = featureValues?.reduce<Partial<PropertySearchParams>>((pv, cv) => {
    //     if (especialFilters.indexOf(cv.filterId) != -1) {
    //         const keyFilter = especialFilters.find(i => i == cv.filterId)
    //         if (keyFilter)
    //             return ({ ...pv, [keyFilter]: cv.value })

    //     }
    //     return pv
    // }, {})

    // const currentFilter: PropertySearchParams = {
    //     ...rest ,
    //     ...especialFiltersObj,
    //     ...featureValues?.filter(i => especialFilters.indexOf(i.filterId) == -1),

    // }

    const dataQuery = useCustomInfiniteQuery<PropretyEndPointsType['LIST'], { f: string }>({
        queryFn: ({ queryKey }) => api.post(PropretyEndPoints.SEARCH, typeof queryKey[1] == 'string' ? JSON.parse(queryKey[1]) : {}),
        queryKey: ['SearchProprtyResults', JSON.stringify(searchHook.filter)],
        staleTime: 1000 * 60 * 5
    })


    return { ...searchHook, ...dataQuery }


}