import React from 'react'

import { IconTrash } from '@tabler/icons-react'
import { api } from '_api/config'
import { useCustomMutation } from 'hooks'
import { toast } from 'react-toastify'
import { Spinner } from '@components'
import {  useCategorySection, useItemsList, useSuggestList } from '(panel)/panel/base/categories/hooks'
import { ItemsEndPoints, ItemsEndPointsType } from '_api/endpoints/items'

export const DeleteItems = ({ id, title }: { id: string, title: string }) => {

    const { dispatch } = useCategorySection()

    const { refetch } = useItemsList()


    const { mutate , isLoading } = useCustomMutation<ItemsEndPointsType['DELETE_SINGLE']>({
        mutationFn: () => api.delete(ItemsEndPoints.SINGLE(id)),
        onSuccess: () => {
            toast.success(' آیتم با موفقیت پاک شد.')
            refetch()
            dispatch({ mode: 'list' })
        },
        onError: (data) => {
            toast.error( data.response?.data?.message ?? data?.message )
        }
    })


    const handleDeleteCity = () => {
        if (prompt(`آیا مایل به حذف آیتم ${title} هستید`,'موافقم'))
        {
            mutate({})
        }
    }
    return (
        <>

            <div className='flex flex-row gap-2 items-center justify-between hover:bg-gray-100 transition-all p-1' onClick={() =>handleDeleteCity()}>
                <span>حذف آیتم</span>
                {isLoading ? <Spinner /> : <IconTrash width={20} height={20} className='text-red-500' />}
            </div>
        </>
    )
}
