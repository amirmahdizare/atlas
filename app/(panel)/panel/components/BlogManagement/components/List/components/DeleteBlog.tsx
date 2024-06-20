import { Button, Spinner } from '@components'
import { useBlogs, useCustomMutation } from '@hooks'
import { IconTrash } from '@tabler/icons-react'
import { api } from '_api/config'
import { BlogEndPoints } from '_api/endpoints/blog'
import React from 'react'
import { toast } from 'react-toastify'

export const DeleteBlog = ({ id }: { id: number }) => {

    const { data, refetch } = useBlogs()


    const { mutate, isLoading } = useCustomMutation({
        mutationFn: () => api.delete(BlogEndPoints.SINGLE(id)),
        mutationKey: ['deleteBlog', id],
        onSuccess: () => {
            toast.success('مقاله با موفقیت پاک شد.')
            refetch()
        },
        onError: (data) => {
            toast.error(data.response?.data.message ?? data.message)
        }
    })


    const handleDeleteBlog = () => {

        const targetBlog = data?.data.find(b => b.id == id)
        if (prompt(`آیا مایل به حذف مقاله "${targetBlog?.title}" هستید ؟ برای تایید دکمه OK را انتخاب کنید`, 'بله')) {
            mutate({})
        }
    }



    return (
        <Button title='حذف' icon={IconTrash} bgColor='white' textColor='red' onClick={isLoading ? undefined : () => handleDeleteBlog()}>
            {isLoading ? <Spinner /> : ''}
        </Button>

    )
}
