import React, { useCallback, useEffect } from 'react'
import { Button, Input, TextArea } from '@components'
import { IconInfoCircle, IconUpload } from '@tabler/icons-react'
import { useCorpSection } from '../../../hooks'
import { useForm } from 'react-hook-form'
import { BlogItemTypeAPI } from 'types'
import { useBlogs, useCorps, useCustomMutation } from '@hooks'
import { BlogEndPoints, BlogEndPointsType } from '_api/endpoints/blog'
import { api } from '_api/config'
import { toast } from 'react-toastify'
import { convertMediaUrlToFile, createFormData, createMediaUrl } from 'utils'
import ReactQuill from 'react-quill';
import { } from 'react-quill';
import { CorpEndPoints, CorpEndPointsType } from '_api/endpoints/participation'

export const DataForm = () => {

    const { refetch, data: blogsData } = useCorps()

    const { dispatch, corpId, mode } = useCorpSection()


    const modeTitle = mode == 'add' ? 'افزودن' : 'ویرایش'

    const { register, handleSubmit, formState: { errors }, watch, reset, getValues, setValue } = useForm<CorpEndPointsType['CREATE']['REQUEST']>()

    watch(['description'])

    const currentImage = watch('medias')

    const { mutate, isLoading } = useCustomMutation<CorpEndPointsType['CREATE']>(
        {
            mutationKey: 'mutateCorp',
            mutationFn: async (data) => {


                if (mode == 'edit' && corpId) {
                    var currentImages: (File | undefined)[] = []
                    if (blogsData?.data.find(a => a.id == corpId)?.medias)
                        currentImages = await Promise.all(blogsData?.data?.find(a => a.id == corpId)?.medias.map(async i => convertMediaUrlToFile(createMediaUrl(i))) ?? [])

                    return api.patch(CorpEndPoints.SINGLE(corpId), createFormData({ ...data, medias: [...currentImages, ...Array.from(data.medias)] }, ['medias']))
                }
                else
                    return api.post(CorpEndPoints.CREATE, createFormData({ ...data }, ['medias']))
            },
            onSuccess: () => {
                toast.success(`${modeTitle} پروژه مشارکت با موفقیت انجام شد.`)
                refetch()
                dispatch({ mode: 'list', corpId: undefined })
            },
            onError: (data) => {
                toast.error(data.response?.data?.message ?? data.message)
            }
        }
    )

    const handleMutate = (data: CorpEndPointsType['CREATE']['REQUEST']) => {

        var currentImages: string[] = []


        // UnComment After Resolving Images
        // if (mode == 'edit' && blogId) {
        //     const targetBlog = blogsData?.data.find(a => a.id == blogId)
        //     if (targetBlog?.images)
        //         currentImages = targetBlog?.images
        // }


        mutate({ ...data })
    }

    useEffect(() => {
        if (mode == 'edit' && corpId) {
            const targetBlog = blogsData?.data.find(a => a.id == corpId)
            if (targetBlog) {
                const { user, id, medias, ...others } = targetBlog
                reset(others)
            }
        }
    }, [mode])


    const RenderImageBox = useCallback(() => {

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

    }, [currentImage])

    return (
        <form className='grid grid-cols-3 gap-2' onSubmit={handleSubmit(handleMutate)}>

            <div className='col-span-3 lg:col-span-2 flex flex-col gap-2 justify-around'>
                <Input label='عنوان پروژه مشارکت' register={register('title', {
                    required: {
                        value: true,
                        message: 'عنوان پروژه مشارکت ضروری است'
                    }
                })}
                    error={!!errors?.title}
                    errorText={errors?.title?.message}
                />

                <div className='flex flex-row gap-2'>
                    <span className='text-french-gray text-body-2-normal  text-right'>طرف آگهی دهنده </span>

                    <label className='flex flex-row gap-2 items-center'>
                        <span>مالک</span>
                        <input type='radio' value={'owner'} {...register('side', { required: { value: true, message: 'طرفی که این فایل را ایجاد می کند باید مشخص باشد' } })} />
                    </label>

                    <label className='flex flex-row gap-2 items-center'>
                        <span>سازنده</span>
                        <input type='radio' value={'owner'} {...register('side', { required: { value: true, message: 'طرفی که این فایل را ایجاد می کند باید مشخص باشد' } })} />
                    </label>
                </div>

                {!!errors?.side && <span className='text-red-500 '>{errors?.side?.message}</span>}
                
                {/* <Input label='مدت زمان مطالعه (به دقیقه)' register={register('duration', {
                    required: {
                        value: true,
                        message: 'مدت زمان مطالعه ضروری است.'
                    }

                })}
                    error={!!errors?.duration}
                    errorText={errors?.duration?.message}
                    type='number'
                /> */}

            </div>

            <div className='flex flex-col gap-2 col-span-3 lg:col-span-1'>
                <span className='text-body-3-normal text-ultra-violet'>افزودن تصویر پروژه مشارکت</span>

                <label className=' bg-anti-flash-white flex gap-2 flex-col items-center justify-center cursor-pointer p-2 min-h-[200px] rounded-sm' htmlFor='blogPhoto'>

                    <RenderImageBox />


                    {!!errors.medias && <span className='text-red-500 font-bold'>تصویر پروژه مشارکت ضروری است.</span>}

                    <input type='file' hidden id='blogPhoto' {...register('medias', {
                        required: mode == 'add' ? {
                            value: true,
                            message: 'تصویر پروژه مشارکت ضروری است.'
                        } : undefined
                    })} />

                </label>
            </div>


            <div className='col-span-3 !text-right'>

                <div className='mb-2 flex text-french-gray text-body-2-normal  text-right'>متن پروژه مشارکت</div>



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
                        message: 'متن پروژه مشارکت ضروری است.'
                    }
                })}
                    error={!!errors?.summary}
                    errorText={errors.summary?.message}
                    style={{ minHeight: '150px' }}
                    placeholder='متن  پروژه مشارکت' /> */}
            </div>


            <div className='flex flex-row gap-2 col-span-3'>
                <Button bgColor='gray' type='button' textColor='dark' onClick={() => dispatch({ mode: 'list' })} fullWidth>انصراف</Button>
                <Button bgColor='primaryNormal' textColor='white' fullWidth loading={isLoading}>ثبت {mode == 'edit' ? 'تغییرات' : ''} پروژه مشارکت</Button>
            </div>


        </form>
    )
}
