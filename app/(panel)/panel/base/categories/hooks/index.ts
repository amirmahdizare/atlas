import { api } from '_api/config'
import { CategoryEndPoints, CategoryEndPointsType } from '_api/endpoints/category'
import { FilterEndPoints, FilterEndPointsType } from '_api/endpoints/filter'
import { ItemsEndPointsType } from '_api/endpoints/items'
import { SubLocationEndPointsType } from '_api/endpoints/location'
import { SubcategoryEndPoints, SubcategoryEndPointsType } from '_api/endpoints/subcategory'
import { SuggestEndPoints, SuggestEndPointsType } from '_api/endpoints/suggest'
import { UsersEndpointType, UsersEndpoints } from '_api/endpoints/users'
import { useCustomQuery } from 'hooks'
import { UseQueryOptions } from 'react-query'
import { toast } from 'react-toastify'
import { CategoryType_API, FilterReadType, SubCategoryType, SubLocationReadType } from 'types'
import { create } from 'zustand'


interface DataType {
    mode: 'list' | 'add' | 'edit',
    catId?: number
}


interface StoreType extends DataType {
    dispatch: (state: DataType) => void
}

export const useCategorySection = create<StoreType>((set) => ({
    mode: 'list',
    dispatch: (newState) => set((state) => ({ ...state, ...newState }))
}))

export const useCategoryList = (data?: UseQueryOptions) => useCustomQuery<CategoryEndPointsType['LIST']>({
    queryKey: 'getCategories',
    queryFn: () => api.get(CategoryEndPoints.LIST),
    onError: () => toast.error('خطا در دریافت لیست دسته بندی ها'),
})


export const useSubCategoryList = (data?: UseQueryOptions) => useCustomQuery<SubcategoryEndPointsType['LIST']>({
    queryKey: 'getSubCategories',
    queryFn: () => api.get(SubcategoryEndPoints.LIST),
    onError: () => toast.error('خطا در دریافت لیست زیردسته بندی ها'),
})



export const useFiltersList = (data?: UseQueryOptions) => useCustomQuery<FilterEndPointsType['LIST']>({
    queryKey: 'getFilters',
    queryFn: () => api.get(FilterEndPoints.LIST),
    onError: () => toast.error('خطا در دریافت لیست ویژگی ها ( فیلد ها) '),
})




export const useSuggestList = (data?: UseQueryOptions) => useCustomQuery<SuggestEndPointsType['LIST']>({
    queryKey: 'getSuggests',
    queryFn: () => api.get(SuggestEndPoints.LIST),
    onError: () => toast.error('خطا در دریافت لیست پیشنهاد ها '),
})


export const useItemsList = (data?: UseQueryOptions) => useCustomQuery<ItemsEndPointsType['LIST']>({
    queryKey: 'getItems',
    queryFn: () => api.get(SuggestEndPoints.LIST),
    onError: () => toast.error('خطا در دریافت لیست آیتم های پیشنهاد '),
})