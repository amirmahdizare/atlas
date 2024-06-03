import { Button, Spinner } from '@components'
import { useBlogs, useCorps, useCustomMutation } from '@hooks'
import { IconTrash } from '@tabler/icons-react'
import { api } from '_api/config'
import { BlogEndPoints } from '_api/endpoints/blog'
import { CorpEndPoints } from '_api/endpoints/participation'
import React from 'react'
import { toast } from 'react-toastify'

export const DeleteBlog = ({ id }: { id: number }) => {

    const { data, refetch } = useCorps()


    const { mutate, isLoading } = useCustomMutation({
        mutationFn: () => api.delete(CorpEndPoints.SINGLE(id)),
        mutationKey: ['deleteCorp', id],
        onSuccess: () => {
            toast.success('پروژه مشارکت با موفقیت پاک شد.')
            refetch()
        },
        onError: (data) => {
            toast.error(data.response?.data.message ?? data.message)
        }
    })


    const handleDeleteBlog = () => {

        const targetBlog = data?.data.find(b => b.id == id)
        if (prompt(`آیا مایل به حذف پروژه مشارکت "${targetBlog?.title}" هستید ؟ برای تایید دکمه OK را انتخاب کنید`, 'بله')) {
            mutate({})
        }
    }



    return (
        <Button title='حذف' icon={IconTrash} bgColor='white' textColor='secondary' onClick={isLoading ? undefined : () => handleDeleteBlog()}>
            {isLoading ? <Spinner /> : ''}
        </Button>

    )
}
