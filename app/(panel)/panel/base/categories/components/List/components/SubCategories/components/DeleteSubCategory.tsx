import React from 'react'

import { IconTrash } from '@tabler/icons-react'
import { api } from '_api/config'
import { useCustomMutation } from 'hooks'
import { toast } from 'react-toastify'
import { Spinner } from '@components'
import { useCategoryList, useCategorySection } from '(panel)/panel/base/categories/hooks'
import { CategoryEndPoints, CategoryEndPointsType } from '_api/endpoints/category'
import { SubcategoryEndPoints, SubcategoryEndPointsType } from '_api/endpoints/subcategory'

export const DeleteSubcategory = ({ id, title }: { id: string, title: string }) => {

    const { dispatch } = useCategorySection()

    const { refetch } = useCategoryList()


    const { mutate , isLoading } = useCustomMutation<SubcategoryEndPointsType['DELETE_SINGLE']>({
        mutationFn: () => api.delete(SubcategoryEndPoints.SINGLE(id)),
        onSuccess: () => {
            toast.success('زیر دسته بندی با موفقیت پاک شد.')
            refetch()
            dispatch({ mode: 'list' })
        },
        onError: (data) => {
            toast.error( data.response?.data?.message ?? data?.message )
        }
    })


    const handleDeleteCity = () => {
        if (prompt(`آیا مایل به حذف زیر دسته بندی ${title} هستید`,'بله'))
        {
            mutate({})
        }
    }
    return (
        <>

            <div className='flex flex-row gap-2 items-center justify-between hover:bg-gray-100 transition-all p-1' onClick={() =>handleDeleteCity()}>
                <span>حذف زیر دسته بندی</span>
                {isLoading ? <Spinner /> : <IconTrash width={20} height={20} className='text-red-500' />}
            </div>
        </>
    )
}
