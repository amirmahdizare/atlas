import { api } from '_api/config'
import { LocationEndPoints, LocationEndPointsType } from '_api/endpoints/location'
import { useCustomQuery } from 'hooks'
import { UseQueryOptions } from 'react-query'
import { toast } from 'react-toastify'
import { create } from 'zustand'


interface DataType {
    mode: 'list' | 'add' | 'edit',
    cityId?:string
}


interface StoreType extends DataType {
    dispatch: (state: DataType) => void
}

export const useCitiesSection = create<StoreType>((set) => ({
    mode: 'list',
    dispatch: (newState) => set((state) => ({ ...state , ...newState }))
}))

export const useCities = (data?: UseQueryOptions) => useCustomQuery<LocationEndPointsType['GET_LIST']>({
    queryKey: 'getCities',
    queryFn: () => api.get(LocationEndPoints.GET_LIST),
    onError: () => toast.error('خطا در دریافت لیست شهرها'),
})