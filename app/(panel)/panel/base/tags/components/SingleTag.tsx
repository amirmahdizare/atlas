import { IconPencil, IconTrash } from '@tabler/icons-react'
import React from 'react'
import { TagReadType } from 'types'
import { MutateTag } from './MutateTag'
import { useCustomMutation, useTags } from '@hooks'
import { api } from '_api/config'
import { TagsEndPoints } from '_api/endpoints/tag'
import { toast } from 'react-toastify'
import { Spinner } from '@components'

export const SingleTag = ({ backgrondColor, textColor, name, id }: TagReadType) => {

    const { refetch } = useTags()

    const { mutate, isLoading } = useCustomMutation({
        mutationKey: ['deleteTag', id],
        mutationFn: () => api.delete(TagsEndPoints.SINGLE(id)),
        onSuccess: () => {
            toast.success('برچسب با موفقیت حذف شد.')
            refetch()
        },
        onError: (d) => {
            toast.error(d?.response?.data.message ?? d?.message)
        }
    })

    const handleDelete = () => {
        if (prompt(`آیا مایل به حذف برچسب "${name}" هستید ؟`, 'بله'))
            mutate({})
    }

    return (
        <div className='grid grid-cols-3 items-center gap-2'>
            <span className='col-span-1'>{name}</span>
            <span className='col-span-1 p-1 rounded w-fit' style={{ backgroundColor: backgrondColor, color: textColor }} >{name}</span>

            <span className='col-span-1 flex flex-row gap-2 items-center text-body-2-light'>
                {isLoading ? <Spinner /> : <IconTrash className='text-red-500 cursor-pointer h-2.5 aspect-square' onClick={handleDelete} />}
                <MutateTag mode='edit' recordId={id ?? ''}><IconPencil className='text-mint-green h-2.5 aspect-square' /></MutateTag>
            </span>

        </div>
    )
}
