import { useCities, useCustomInfiniteQuery, useFullCategories, useSubCities } from '@hooks'
import { api } from '_api/config'
import { PropretyEndPoints, PropretyEndPointsType } from '_api/endpoints/property'
import { NavigateOptions } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useEffect } from 'react'
import { PropertyListFilterType, PropertySearchParams, SubCategoryType } from 'types'
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
    const { data: subcityData } = useSubCities()

    const { data: catData } = useFullCategories()

    const pathname = usePathname()

    // const {} = useSubCities()

    const searchHook = useSearchProperty()

    const { push } = useRouter()

    // const dispatchFilter = useSearchProperty(s => s.dispatch)

    const { featureValues, ...rest } = searchHook.filter


    // const filters = convertUrlToFilter(convertSearchParamToObject(searchParams))



    // if (JSON.stringify(filters) != JSON.stringify(searchHook.filter))
    //     dispatchFilter({filter :filters})


    const especialFilters = rest.productType == 'sell' ? ['price'] : ['prePrice', 'rentPrice']


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
        featureValues: featureValues?.filter(i => especialFilters.indexOf(i.filterId) == -1),

    }


    //Location Generator
    const locationSlug = (): { slug: string, param?: string } => {

        if (!searchHook.filter.location) return { slug: 'all' }

        if (searchHook.filter.location?.length == 1)
            return { slug: locationsData?.data.find(c => c.id == searchHook.filter.location?.[0])?.name.concat('-city') ?? '' }
        else if (searchHook.filter.location?.length > 1)
            return { slug: 'all', param: searchHook.filter.location.map(i => locationsData?.data.find(d => d.id == i)?.name)?.join(',') }

        return { slug: 'all' }
    }


    //Category And Sublocation Generator
    const categorySlug = useCallback((): { slug: string | undefined } => {

        if (searchHook.filter.subCategory && searchHook.filter.subCategory?.length > 0) {

            const allSubcategories = catData?.data.reduce<SubCategoryType<string, string>[]>((pv, cv) => {
                pv.push(...cv.subCategories)
                return pv
            }, [])

            return { slug: allSubcategories?.find(f => f.id == searchHook.filter.subCategory?.[0].toString())?.enTitle.concat('-subcategory') }
        }
        else if (searchHook.filter.category && searchHook.filter.category.length > 0)
            return { slug: catData?.data.find(f => f.id == searchHook.filter.category?.[0].toString())?.enTitle.concat('-category') }

        return { slug: undefined }
    }, [searchHook.filter.subCategory, searchHook.filter.category])



    ///Side Generetor
    const sideSlug = useCallback(() => {
        if (searchHook.filter.productType)
            return searchHook.filter.productType
        return 'all'
    }, [searchHook.filter.productType])



    const sublocationSlug = useCallback(() => {
        if (searchHook.filter.subLocation && searchHook.filter.subLocation?.length == 0)
            return undefined
        else if (searchHook.filter.subLocation)
            return searchHook.filter.subLocation.map(i => subcityData?.data.find(d => d.id == i.toString())).map(i=>i?.name)?.join(',')
    }, [searchHook.filter.subLocation])

    const newFilterQuery =
        '/s/'
            .concat(sideSlug())
            .concat('/')
            .concat(locationSlug().slug ? `${locationSlug().slug}` : '')
            .concat(categorySlug().slug ? `/${categorySlug().slug}` : '')
            .concat(locationSlug().param ? `?cities=${locationSlug().param}` : '?')
            .concat(searchHook.filter.title ? `&title=${searchHook.filter.title}` : '')
            .concat(sublocationSlug() ? `&sublocations=${sublocationSlug()}` : '')



    // const newFilterQuery = `/s/${sideSlug()}/${locationSlug().slug}${categorySlug().slug ? `/${categorySlug().slug}` : ''}${locationSlug().param ? `?cities=${locationSlug().param}` : ''}
    // ${searchHook.filter.title ? `&?title=${searchHook.filter.title}` : ''}`

    useEffect(() => {

        if (locationsData?.data && catData?.data) {
            push(newFilterQuery)
        }
    }, [newFilterQuery])

    const dataQuery = useCustomInfiniteQuery<PropretyEndPointsType['LIST'], { f: string }>({
        queryFn: ({ queryKey, pageParam = 1 }) => api.post(PropretyEndPoints.SEARCH, typeof queryKey[1] == 'string' ? { ...JSON.parse(queryKey[1]), limit: SEARCH_PRODUCT_LIMIT, page: pageParam } : {}),
        queryKey: ['SearchProprtyResults', JSON.stringify(currentFilter)],
        staleTime: minuteToMs(2),
        getNextPageParam: (last, all) => last.data.length == SEARCH_PRODUCT_LIMIT ? all.length + 1 : undefined,
        refetchOnMount: false,
    })


    return { ...searchHook, ...dataQuery }


}

export const useToggleFilter = create<{ isOpen: boolean, setIsOpen: (state: boolean) => void }>((set) => ({
    isOpen: false,
    setIsOpen: (data) => set((state) => ({ ...state, isOpen: data })),
}))

