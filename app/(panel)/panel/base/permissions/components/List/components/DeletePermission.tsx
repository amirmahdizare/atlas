import React from 'react'

import { IconTrash } from '@tabler/icons-react'
import { api } from '_api/config'
import { PermissionEndPoints, PermissionEndPointsType } from '_api/endpoints/permission'
import { useCustomMutation } from 'hooks'
import { toast } from 'react-toastify'
import { usePermissionList, usePermissionsSection } from '../../../hooks'
import { Spinner } from '@components'

export const DeletePermission = ({ id, title }: { id: string, title: string }) => {

    const { dispatch } = usePermissionsSection()

    const { refetch } = usePermissionList()


    const { mutate, isLoading } = useCustomMutation<PermissionEndPointsType['DELETE_PERMISSION']>({
        mutationFn: () => api.delete(PermissionEndPoints.UPDATE_PERMISSION(id)),
        onSuccess: () => {
            toast.success('دسترسی با موفقیت پاک شد.')
            refetch()
            dispatch({ mode: 'list' })
        },
        onError: () => {
            toast.error('حذف دسترسی با خطا روبرو شد.')
        }
    })


    const handleDeletePermission = () => {
        if (prompt(`آیا مایل به حذف دسترسی ${title} هستید`, 'بله')) {
            mutate({})
        }
    }
    return (
        <>

            <div className='flex flex-row gap-2 items-center justify-between hover:bg-gray-100 transition-all p-1' onClick={() => handleDeletePermission()}>
                <span>حذف دسترسی</span>
                {isLoading ? <Spinner /> : <IconTrash width={20} height={20} className='text-red-500' />}
            </div>
        </>
    )
}
