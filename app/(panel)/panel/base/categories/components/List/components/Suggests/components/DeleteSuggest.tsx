import React from 'react'

import { IconTrash } from '@tabler/icons-react'
import { api } from '_api/config'
import { useCustomMutation } from 'hooks'
import { toast } from 'react-toastify'
import { Spinner } from '@components'
import {  useCategorySection, useSuggestList } from '(panel)/panel/base/categories/hooks'
import { SuggestEndPoints, SuggestEndPointsType } from '_api/endpoints/suggest'

export const DeleteSuggest = ({ id, title }: { id: string, title: string }) => {

    const { dispatch } = useCategorySection()

    const { refetch } = useSuggestList()


    const { mutate , isLoading } = useCustomMutation<SuggestEndPointsType['DELETE_SINGLE']>({
        mutationFn: () => api.delete(SuggestEndPoints.SINGLE(id)),
        onSuccess: () => {
            toast.success(' پیشنهاد با موفقیت پاک شد.')
            refetch()
            dispatch({ mode: 'list' })
        },
        onError: (data) => {
            toast.error( data.response?.data?.message ?? data?.message )
        }
    })


    const handleDeleteCity = () => {
        if (prompt(`آیا مایل به حذف پیشنهاد ${title} هستید`,'موافقم'))
        {
            mutate({})
        }
    }
    return (
        <>

            <div className='flex flex-row gap-2 items-center justify-between hover:bg-gray-100 transition-all p-1' onClick={() =>handleDeleteCity()}>
                <span>حذف پیشنهاد</span>
                {isLoading ? <Spinner /> : <IconTrash width={20} height={20} className='text-red-500' />}
            </div>
        </>
    )
}
