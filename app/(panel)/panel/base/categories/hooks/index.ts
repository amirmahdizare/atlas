import { api } from '_api/config'
import { CategoryEndPoints, CategoryEndPointsType } from '_api/endpoints/category'
import { SubLocationEndPointsType } from '_api/endpoints/location'
import { UsersEndpointType, UsersEndpoints } from '_api/endpoints/users'
import { useCustomQuery } from 'hooks'
import { UseQueryOptions } from 'react-query'
import { toast } from 'react-toastify'
import { SubLocationReadType } from 'types'
import { create } from 'zustand'


interface DataType {
    mode: 'list' | 'add' | 'edit',
    catId?: number
}


interface StoreType extends DataType {
    dispatch: (state: DataType) => void
}

export const useAdvisersSection = create<StoreType>((set) => ({
    mode: 'list',
    dispatch: (newState) => set((state) => ({ ...state, ...newState }))
}))

export const useCategoryList = (data?: UseQueryOptions) => useCustomQuery<CategoryEndPointsType['LIST']>({
    queryKey: 'getCategories',
    queryFn: () => api.get(CategoryEndPoints.LIST),
    onError: () => toast.error('خطا در دریافت لیست دسته بندی ها'),
})


export const useSubCategoryList = (data?: UseQueryOptions) => useCustomQuery<SubLocationEndPointsType['GET_LIST']>({
    queryKey: 'getSubCategories',
    queryFn: () => api.get(CategoryEndPoints.LIST),
    onError: () => toast.error('خطا در دریافت لیست زیردسته بندی ها'),
})