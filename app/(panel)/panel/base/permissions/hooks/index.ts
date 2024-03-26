import { api } from '_api/config'
import { PermissionEndPoints, PermissionEndPointsType } from '_api/endpoints/permission'
import { useCustomQuery } from 'hooks'
import { UseQueryOptions } from 'react-query'
import { toast } from 'react-toastify'
import { create } from 'zustand'


interface DataType {
    mode: 'list' | 'add' | 'edit',
    permissionId?: number
}


interface StoreType extends DataType {
    dispatch: (state: DataType) => void
}

export const usePermissionsSection = create<StoreType>((set) => ({
    mode: 'list',
    dispatch: (newState) => set((state) => ({ ...state, ...newState }))
}))

export const usePermissionList = (data?: UseQueryOptions) => useCustomQuery<PermissionEndPointsType['GET_LIST']>({
    queryKey: 'getPermissions',
    queryFn: () => api.get(PermissionEndPoints.GET_LIST),
    onError: () => toast.error('خطا در دریافت لیست دسترسی ها'),
})