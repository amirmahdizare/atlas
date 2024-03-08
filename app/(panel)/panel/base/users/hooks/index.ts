import { api } from '_api/config'
import { UsersEndpointType, UsersEndpoints } from '_api/endpoints/users'
import { useCustomQuery } from 'hooks'
import { UseQueryOptions } from 'react-query'
import { toast } from 'react-toastify'
import { create } from 'zustand'


interface DataType {
    mode: 'list' | 'add' | 'edit',
    userId?: number
}


interface StoreType extends DataType {
    dispatch: (state: DataType) => void
}

export const useAdvisersSection = create<StoreType>((set) => ({
    mode: 'list',
    dispatch: (newState) => set((state) => ({ ...state, ...newState }))
}))

export const useUserList = (data?: UseQueryOptions) => useCustomQuery<UsersEndpointType['GET_USERS']>({
    queryKey: 'getUsers',
    queryFn: () => api.get(UsersEndpoints.GET_USERS),
    onError: () => toast.error('خطا در دریافت لیست کاربران'),
})