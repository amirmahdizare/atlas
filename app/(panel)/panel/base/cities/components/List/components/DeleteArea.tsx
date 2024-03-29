import React from 'react'

import { IconTrash } from '@tabler/icons-react'
import { api } from '_api/config'
import { useCustomMutation } from 'hooks'
import { toast } from 'react-toastify'
import { Spinner } from '@components'
import { useCities, useCitiesSection, useSubCities } from '../../../hooks'
import { LocationEndPoints, LocationEndPointsType, SubLocationEndPoints, SubLocationEndPointsType } from '_api/endpoints/location'

export const DeleteArea = ({ id, title }: { id: string, title: string }) => {

    const { dispatch } = useCitiesSection()

    const { refetch } = useSubCities()


    const { mutate , isLoading } = useCustomMutation<SubLocationEndPointsType['DELETE_SINGLE']>({
        mutationFn: () => api.delete(SubLocationEndPoints.SINGLE(id)),
        onSuccess: () => {
            toast.success('منطقه با موفقیت پاک شد.')
            refetch()
            dispatch({ mode: 'list' })
        },
        onError: (data) => {
            toast.error( data.response?.data?.message ?? data?.message )
        }
    })


    const handleDeleteCity = () => {
        if (prompt(`آیا مایل به حذف منطقه ${title} هستید`,'بله'))
        {
            mutate({})
        }
    }
    return (
        <>

            {/* <div className='flex flex-row gap-2 items-center justify-between hover:bg-gray-100 transition-all p-1' onClick={() =>handleDeleteCity()}> */}
                {/* <span>حذف منطقه</span> */}
                {isLoading ? <Spinner /> : <IconTrash onClick={()=>handleDeleteCity()} width={20} height={20} className='text-red-500 cursor-pointer' />}
            {/* </div> */}
        </>
    )
}
