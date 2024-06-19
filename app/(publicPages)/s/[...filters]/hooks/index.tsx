import { useCities, useCustomInfiniteQuery, useSubCities } from '@hooks'
import { api } from '_api/config'
import { PropretyEndPoints, PropretyEndPointsType } from '_api/endpoints/property'
import { NavigateOptions } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { PropertyListFilterType, PropertySearchParams } from 'types'
import { URLSearchParams } from 'url'
import { convertSearchParamToObject, minuteToMs } from 'utils'
import { SEARCH_PRODUCT_LIMIT } from 'variables'
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


const validFilters: Array<{ name: keyof PropertySearchParams, type: 'array' | 'single' }> = [
    { name: 'location', type: 'array' },
    { name: 'subLocation', type: 'array' },
    { name: 'category', type: 'array' },
    { name: 'subCategory', type: 'array' },
    { name: 'price', type: 'single' },
    { name: 'prePrice', type: 'single' },
    { name: 'rentPrice', type: 'single' },
    { name: 'productType', type: 'single' },
]

const convertUrlToFilter = (searchObject: { [key: string]: any }) => {

    let newFilter: Partial<PropertySearchParams> = {}


    for (const property in searchObject) {

        const foundedFilter = validFilters?.find(f => f.name == property)

        if (foundedFilter) {

            newFilter = { ...newFilter, [property]: foundedFilter.type == 'array' ? JSON.parse(searchObject[property]) : searchObject[property] }
        }
        // console.log(`${property}: ${object[property]}`);
    }

    console.log(newFilter)

    return newFilter

    // dispatch(newFilter)

}

export const convertClientParamtToUrl = (filter: PropertySearchParams, push: (href: string, options?: NavigateOptions | undefined) => void) => {


}

export const usePropertySearchResults = () => {

    // const searchParams = useSearchParams()

    const { data: locationsData } = useCities()
    // const {} = useSubCities()
    const searchHook = useSearchProperty()

    const { push } = useRouter()

    // const dispatchFilter = useSearchProperty(s => s.dispatch)

    const { featureValues, ...rest } = searchHook.filter


    // const filters = convertUrlToFilter(convertSearchParamToObject(searchParams))



    // if (JSON.stringify(filters) != JSON.stringify(searchHook.filter))
    //     dispatchFilter({filter :filters})


    const especialFilters = rest.productType == 'sell' ? ['price'] : ['prePrice', 'rentPrice']


    //TODO Price Filter

    const especialFiltersObj = featureValues?.reduce<Partial<PropertySearchParams>>((pv, cv) => {
        if (especialFilters.indexOf(cv.filterId) != -1) {
            const keyFilter = especialFilters.find(i => i == cv.filterId)
            if (keyFilter)
                return ({ ...pv, [keyFilter]: cv.value })

        }
        return pv
    }, {})

    const currentFilter: PropertySearchParams = {
        ...rest,
        ...especialFiltersObj,
        ...featureValues?.filter(i => especialFilters.indexOf(i.filterId) == -1),

    }

    const locationSlug = (): { slug: string, param?: string } => {

        if (!searchHook.filter.location) return { slug: 'iran' }

        if (searchHook.filter.location?.length == 1)
            return { slug: locationsData?.data.find(c => c.id == searchHook.filter.location?.[0])?.name.concat('-city') ?? '' }
        else if (searchHook.filter.location?.length > 1)
            return { slug: 'iran', param: searchHook.filter.location.map(i => locationsData?.data.find(d => d.id == i)?.name)?.join(',') }

        return { slug: 'iran' }
    }

    useEffect(() => {
        if (locationsData?.data)
            push(`/s/${locationSlug().slug}${locationSlug().param ? `?cities=${locationSlug().param}` : ''}`)
    }, [searchHook.filter])

    const dataQuery = useCustomInfiniteQuery<PropretyEndPointsType['LIST'], { f: string }>({
        queryFn: ({ queryKey, pageParam = 1 }) => api.post(PropretyEndPoints.SEARCH, typeof queryKey[1] == 'string' ? { ...JSON.parse(queryKey[1]), limit: SEARCH_PRODUCT_LIMIT, page: pageParam } : {}),
        queryKey: ['SearchProprtyResults', JSON.stringify(currentFilter)],
        staleTime: minuteToMs(2),
        getNextPageParam: (last, all) => last.data.length == SEARCH_PRODUCT_LIMIT ? all.length + 1 : undefined,
        onSuccess: (s) => {

            console.log(searchHook.filter)
            // convertClientParamtToUrl(searchHook.filter, push)

            // var


            // const locationSlug = searchHook.filter.location > 1 :

            // const searchQuery = new URLSearchParams([['cities', locationSlug().param ?? '']]).toString()


        }

    })


    return { ...searchHook, ...dataQuery }


}