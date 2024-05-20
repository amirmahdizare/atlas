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
import { createFormData, createMediaUrl } from 'utils'
import ReactQuill from 'react-quill';
import { } from 'react-quill';

export const DataForm = () => {

    const { refetch, data: blogsData } = useBlogs()

    const { dispatch, blogId, mode } = useBlogsSection()


    const modeTitle = mode == 'add' ? 'افزودن' : 'ویرایش'

    const { register, handleSubmit, formState: { errors }, watch, reset, getValues, setValue } = useForm<BlogItemTypeAPI<undefined, File | string | undefined>>()

    watch(['description'])

    const currentImage = watch('images')

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

    const handleMutate = (data: BlogItemTypeAPI<undefined, File | string | undefined>) => {

        var currentImages: string[] = []


        // UnComment After Resolving Images
        // if (mode == 'edit' && blogId) {
        //     const targetBlog = blogsData?.data.find(a => a.id == blogId)
        //     if (targetBlog?.images)
        //         currentImages = targetBlog?.images
        // }


        mutate(createFormData({ ...data, images: [...currentImages, ...Array.from(data.images)] }, ['images']))
    }

    useEffect(() => {
        if (mode == 'edit' && blogId) {
            const targetBlog = blogsData?.data.find(a => a.id == blogId)
            if (targetBlog) {
                const { createTime, updateTime, id, tags, user, suggest_productId, ...others } = targetBlog
                reset(others)
            }
        }
    }, [mode])


    const RenderImageBox = () => {

        if (!currentImage)
            return <>
                <Button className='pointer-events-none' bgColor='gray' textColor='dark' icon={IconUpload}>افزودن تصویر</Button>
                <div className='flex flex-row gap-1'>
                    <IconInfoCircle width={15} height={15} />
                    <span className='text-ultra-violet text-body-3-light'>تصاویر شما باید کمتر 6 مگابایت باشند.</span>
                </div></>

        else if (typeof currentImage?.[0] == 'string') {

            return <img src={createMediaUrl(currentImage[0])} className='w-full aspect-square object-cover' />
        }

        else if (typeof currentImage?.[0] == 'object') {
            const imageLink = URL.createObjectURL(currentImage[0])
            return <img src={imageLink} className='w-full aspect-square object-cover' />
        }

        return <>
            <Button className='pointer-events-none' bgColor='gray' textColor='dark' icon={IconUpload}>افزودن تصویر</Button>
            <div className='flex flex-row gap-1'>
                <IconInfoCircle width={15} height={15} />
                <span className='text-ultra-violet text-body-3-light'>تصاویر شما باید کمتر 6 مگابایت باشند.</span>
            </div></>

    }

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
                    error={!!errors?.duration}
                    errorText={errors?.duration?.message}
                    type='number'
                />

            </div>

            <div className='flex flex-col gap-2 col-span-3 lg:col-span-1'>
                <span className='text-body-3-normal text-ultra-violet'>افزودن تصاویر مقاله</span>

                <label className=' bg-anti-flash-white flex gap-2 flex-col items-center justify-center cursor-pointer p-2 min-h-[200px] rounded-sm' htmlFor='blogPhoto'>

                    <RenderImageBox />


                    {!!errors.images && <span className='text-red-500 font-bold'>تصویر مقاله ضروری است.</span>}

                    <input type='file' hidden id='blogPhoto' {...register('images', {
                        required: mode == 'add' ? {
                            value: true,
                            message: 'تصویر مقاله ضروری است.'
                        } : undefined
                    })} />

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

            <div className='col-span-3 !text-right'>

                <div className='mb-2 flex text-french-gray text-body-2-normal  text-right'>متن مقاله</div>



                <ReactQuill modules={{
                    toolbar: [
                        [{ 'header': '1' }, { 'header': '2' }, { 'header': '3' }, { 'header': '4' }],
                        [{ size: [] }],
                        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                        ['link', 'image', 'video'],
                        [{ 'list': 'ordered' }, { 'list': 'bullet' },
                        { 'indent': '-1' }, { 'indent': '+1' }],
                        ['clean']
                    ]
                }} className='!text-right' theme="snow" value={getValues('description')} onChange={(value: string) => { setValue('description', value) }} />
                {/* <TextArea register={register('description', {
                    required: {
                        value: true,
                        message: 'متن مقاله ضروری است.'
                    }
                })}
                    error={!!errors?.summary}
                    errorText={errors.summary?.message}
                    style={{ minHeight: '150px' }}
                    placeholder='متن  مقاله' /> */}
            </div>


            <div className='flex flex-row gap-2 col-span-3'>
                <Button bgColor='gray' type='button' textColor='dark' onClick={() => dispatch({ mode: 'list' })} fullWidth>انصراف</Button>
                <Button bgColor='primaryNormal' textColor='white' fullWidth loading={isLoading}>ثبت {mode == 'edit' ? 'تغییرات' : ''} مقاله</Button>
            </div>


        </form>
    )
}
