import React, { useEffect } from 'react'
import { Button, Input, TextArea } from '@components'
import { IconInfoCircle, IconUpload } from '@tabler/icons-react'
import { useBlogsSection } from '../../../hooks'
import { useForm } from 'react-hook-form'
import { BlogItemTypeAPI } from 'types'
import { useBlogs, useCustomMutation } from '@hooks'
import { BlogEndPoints, BlogEndPointsType } from '_api/endpoints/blog'
import { api } from '_api/config'
import { toast } from 'react-toastify'
import { createFormData } from 'utils'

export const DataForm = () => {

    const { refetch, data: blogsData } = useBlogs()

    const { dispatch, blogId, mode } = useBlogsSection()

    const modeTitle = mode == 'add' ? 'افزودن' : 'ویرایش'

    const { register, handleSubmit, formState: { errors }, watch, reset } = useForm<BlogItemTypeAPI<undefined, File>>()

    const { mutate, isLoading } = useCustomMutation<BlogEndPointsType['CREATE']>(
        {
            mutationKey: 'mutateBlog',
            mutationFn: (data) => mode == 'edit' && blogId ? api.patch(BlogEndPoints.SINGLE(blogId), data) : api.post(BlogEndPoints.CREATE, data),
            onSuccess: () => {
                toast.success(`${modeTitle} مقاله با موفقیت انجام شد.`)
                refetch()
                dispatch({ mode: 'list', blogId: undefined })
            },
            onError: (data) => {
                toast.error(data.response?.data?.message ?? data.message)
            }
        }
    )

    const handleMutate = (data: BlogItemTypeAPI<undefined, File>) => {

        var currentImages: string[] = []


        // UnComment After Resolving Images
        // if (mode == 'edit' && blogId) {
        //     const targetBlog = blogsData?.data.find(a => a.id == blogId)
        //     if (targetBlog?.images)
        //         currentImages = targetBlog?.images
        // }


        mutate(createFormData({ ...data, userId: 21, images: [...currentImages, ...Array.from(data.images)] }, ['images']))
    }

    useEffect(() => {
        if (mode == 'edit' && blogId) {
            const targetBlog = blogsData?.data.find(a => a.id == blogId)
            if (targetBlog) {
                const { createTime, updateTime, id, tags, user, suggest_productId, images, ...others } = targetBlog
                reset(others)
            }
        }
    }, [mode])

    return (
        <form className='grid grid-cols-3 gap-2' onSubmit={handleSubmit(handleMutate)}>

            <div className='col-span-3 lg:col-span-2 flex flex-col gap-2 justify-around'>
                <Input label='عنوان مقاله' register={register('title', {
                    required: {
                        value: true,
                        message: 'عنوان مقاله ضروری است'
                    }
                })}
                    error={!!errors?.title}
                    errorText={errors?.title?.message}
                />
                <Input label='مدت زمان مطالعه (به دقیقه)' register={register('duration', {
                    required: {
                        value: true,
                        message: 'مدت زمان مطالعه ضروری است.'
                    }

                })}
                    type='number'
                />

            </div>

            <div className='flex flex-col gap-2 col-span-3 lg:col-span-1'>
                <span className='text-body-3-normal text-ultra-violet'>افزودن تصاویر مقاله</span>

                <label className=' bg-anti-flash-white flex gap-2 flex-col items-center justify-center cursor-pointer p-2 min-h-[200px] rounded-sm' htmlFor='blogPhoto'>

                    <Button className='pointer-events-none' bgColor='gray' textColor='dark' icon={IconUpload}>افزودن تصویر</Button>

                    <input type='file' hidden id='blogPhoto' {...register('images', {
                        required: mode == 'add' ? {
                            value: true,
                            message: 'تصویر مقاله ضروری است.'
                        } : undefined
                    })} />

                    {!!errors.images && <span className='text-red-500 font-bold'>تصویر مقاله ضروری است.</span>}

                    <div className='flex flex-row gap-1'>
                        <IconInfoCircle width={15} height={15} />
                        <span className='text-ultra-violet text-body-3-light'>تصاویر شما باید کمتر 6 مگابایت باشند.</span>
                    </div>

                </label>
            </div>


            <div className='col-span-3 '>
                <TextArea register={register('summary', {
                    required: {
                        value: true,
                        message: 'خلاصه مقاله ضروری است.'
                    }
                })}
                    error={!!errors?.summary}
                    errorText={errors.summary?.message}
                    style={{ minHeight: '150px' }}
                    placeholder='خلاصه مقاله' />
            </div>

            <div className='col-span-3 '>
                <TextArea register={register('description', {
                    required: {
                        value: true,
                        message: 'متن مقاله ضروری است.'
                    }
                })}
                    error={!!errors?.summary}
                    errorText={errors.summary?.message}
                    style={{ minHeight: '150px' }}
                    placeholder='متن  مقاله' />
            </div>


            <div className='flex flex-row gap-2 col-span-3'>
                <Button bgColor='gray' type='button' textColor='dark' onClick={() => dispatch({ mode: 'list' })} fullWidth>انصراف</Button>
                <Button bgColor='primaryNormal' textColor='white' fullWidth loading={isLoading}>ثبت {mode == 'edit' ? 'تغییرات' : ''} مقاله</Button>
            </div>


        </form>
    )
}
