import React from 'react'

import { IconTrash } from '@tabler/icons-react'
import { api } from '_api/config'
import { useCities, useCustomMutation } from 'hooks'
import { toast } from 'react-toastify'
import { Spinner } from '@components'
import {  useCitiesSection } from '../../../hooks'
import { LocationEndPoints, LocationEndPointsType } from '_api/endpoints/location'

export const DeleteCity = ({ id, title }: { id: string, title: string }) => {

    const { dispatch } = useCitiesSection()

    const { refetch } = useCities()


    const { mutate , isLoading } = useCustomMutation<LocationEndPointsType['DELETE_SINGLE']>({
        mutationFn: () => api.delete(LocationEndPoints.SINGLE(id)),
        onSuccess: () => {
            toast.success('شهر با موفقیت پاک شد.')
            refetch()
            dispatch({ mode: 'list' })
        },
        onError: (data) => {
            toast.error( data.response?.data?.message ?? data?.message )
        }
    })


    const handleDeleteCity = () => {
        if (prompt(`آیا مایل به حذف شهر ${title} هستید`,'بله'))
        {
            mutate({})
        }
    }
    return (
        <>

            <div className='flex flex-row gap-2 items-center justify-between hover:bg-gray-100 transition-all p-1' onClick={() =>handleDeleteCity()}>
                <span>حذف شهر</span>
                {isLoading ? <Spinner /> : <IconTrash width={20} height={20} className='text-red-500' />}
            </div>
        </>
    )
}
