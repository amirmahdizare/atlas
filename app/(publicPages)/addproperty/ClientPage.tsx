'use client'
import React, { useState } from 'react'
import { Button, Input, Select, TextArea } from '@components'
import Image from 'next/image'
import upload from 'images/upload.svg'
import vector from 'images/housesVector.svg'
import { IconCheck, IconUpload, IconX } from '@tabler/icons-react'
import { createFormData, isFileSrcImage, isFileSrcVideo } from 'utils'
import { useForm } from 'react-hook-form'
import { BuyOrSellMutateType } from 'types'
import { useCustomMutation, useUserInfo } from '@hooks'
import { BuyOrSellEndPoints, BuyOrSellEndPointsType } from '_api/endpoints/buyOrSell'
import { api } from '_api/config'
import { toast } from 'react-toastify'
import Link from 'next/link'


const RenderContent = ({ file }: { file: File }) => {

    const url = URL.createObjectURL(file)

    if (isFileSrcImage(file.name))
        return <img src={url} className='object-cover h-full w-full ' onClick={() => window.open(url)} />

    else if (isFileSrcVideo(file.name))
        return <video width="100%" height="100%" className='h-full w-full' controls muted >
            <source src={url} type={`video/${file.name.split('.').reverse()[0]}`} />
        </video>


    else return <div className='bg-gray-50 hover:bg-gray-100 rounded cursor-pointer w-full h-full flex gap-1 text-raisin-black text-body-3-light flex-col justify-center items-center' onClick={() => window.open(url)}>
        <span>فایل</span>
        <span className='text-ellipsis line-clamp-2 text-center leading-3'>{file.name.toString().substring(file.name.toString().length - 15)}...</span>

    </div>


}
export const ClientPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<BuyOrSellMutateType<File[]>>()


    const { isLoading, mutate, isError: errorOfMutate, data: resultOfAdd } = useCustomMutation<BuyOrSellEndPointsType['CREATE']>({
        mutationFn: (data) => api.post(BuyOrSellEndPoints.CREATE, createFormData({ ...data , title :data.title.concat('  *  ').concat((new Date()).toLocaleString('fa-ir')), medias: files.array.map(i => i.content) }, ['medias'])),
        mutationKey: ['requestproperty'],
        onSuccess: () => {
            toast.success('درخواست ثبت ملک با موفقیت ارسال شد.')
        },
        onError: () => {
            toast.error('درخواست ثبت ملک خطا روبرو شد.')
        }
    })

    const { isError, data } = useUserInfo()


    const handleMutate = (d: BuyOrSellMutateType<File[]>) => {

        mutate({ ...d, title :d.title.concat('  *  ').concat((new Date()).toLocaleString('fa-ir'))  , side: 'sell' })
    }


    const [files, setFiles] = useState<{ array: Array<{ content: File, id: string }> }>({ array: [] })

    const addMedia = (file: File) => {
        setFiles({ array: [...files.array, { content: file, id: Math.random().toString() }] })
    }

    const removeMedia = (id: string) => {
        setFiles({ array: files.array.filter(item => item.id != id) })
    }

    if (isError)
        return <div className='flex flex-col gap-2 items-center p-2'>
            <span className='text-red-500 text-h5-bolder'>برای ثبت  ملک باید وارد سایت شوید.</span>
            <Link href={'/login?redirectPath=/requestproperty'}>
                <Button>ورود به اطلس</Button>
            </Link>

        </div>


    else if (resultOfAdd?.data)
        return <div className='flex flex-col gap-2 items-center p-2 text-center '>
            <div className='flex flex-col lg:flex-row gap-2 items-center'>
                <IconCheck className='text-green-500 w-4 h-4' />
                <span className='text-green-500 text-h5-bolder leading-3'> ملک شما با موفقیت ارسال شد.مشاوران اطلس در اسرع وقت با شما تماس خواهند گرفت.</span>
            </div>
            <Link href={'/'} prefetch={false}> <Button>بازگشت به صفحه اصلی</Button></Link>
        </div>


    else if (data?.data)
        return (
            <div className='grid grid-cols-3 py-4 gap-2'>

                <form className='col-span-3 lg:col-span-2 flex flex-col gap-3' onSubmit={handleSubmit(handleMutate)}>

                    <div className='flex flex-col gap-2'>
                        <span className='text-h3-bolder'>
                            <span className='text-robin-egg'>ثبت ملک</span>
                            &nbsp;
                            &nbsp;
                            <span className='text-space-codet'>در دپارتمان اطلس</span>
                        </span>
                        <span className='text-ultra-violet'>برای ثبت ملک خود اطلاعات زیر را پر کنید.</span>
                    </div>
                    <Input placeholder='مثلا : آپارتمان دوبلکس' label='عنوان ملک'
                        register={register('title', {
                            required: {
                                value: true,
                                message: 'عنوان وارد نشده است.'
                            }
                        })}
                        error={!!errors?.title}
                        errorText={errors.title?.message}
                    />


                    <TextArea label='توضیحات' placeholder='مثلا : آپارتمان 200 متری دارای پارکینگ و آسانسور و ...'
                        register={register('description', {
                            required: {
                                value: true,
                                message: 'توضیحات وارد نشده است.'
                            }
                        })}
                        rows={5}
                        error={!!errors?.description}
                        errorText={errors.description?.message}
                    />

                    {files?.array?.length != 0 && <div className='grid grid-cols-3 lg:grid-cols-6 gap-2'>
                        {files.array.map(item => <div className='col-span-1 aspect-square relative border rounded p-0.5 cursor-pointer'>
                            <div className='absolute left-1 top-1 text-red-600 cursor-pointer bg-white rounded-circle p-0.5 shadow z-10 hover:bg-gray-50' onClick={() => removeMedia(item.id)}>
                                <IconX width={15} height={15} />
                            </div>
                            <RenderContent file={item.content} />
                        </div>)}
                    </div>}


                    <label className='leading-3 flex flex-row p-4 gap-4 items-center justify-between cursor-pointer bg-seasalt border-ghost-white border-dashed' htmlFor='file-select'>

                        <Image src={upload} alt='آپلود فایل ها' className='hidden lg:block' />

                        <input id='file-select' type='file' hidden onChange={({ target: { files } }) => files?.[0] ? addMedia(files?.[0]) : undefined} />

                        <span className='text-h5-normal text-ultra-violet leading-3 text-center'>افزودن مستندات ، تصاویر ،ویدیو ها آگهی</span>

                        <Button bgColor='primaryNormal' icon={IconUpload} className='pointer-events-none'>افزودن فایل</Button>

                    </label>

                    <div className='flex flex-row gap-4'>

                        <Button bgColor='gray' textColor='dark' fullWidth>انصراف</Button>
                        <Button disabled={isLoading} loading={isLoading} bgColor='secondary' textColor='white' fullWidth>ثبت ملک</Button>

                    </div>



                </form>


                <div className='col-span-3 lg:col-span-1 relative p-4 lg:p-2 hidden lg:block'>
                    <Image src={vector} alt='تصویر خانه' className='object-cover' />
                </div>

            </div>
        )

    return <div className='grid grid-cols-3 py-4 gap-2'>

        <div className='col-span-3 lg:col-span-2 flex flex-col gap-3'>
            {Array.from(new Array(4)).map(i => <div key={i} className='bg-gray-50 rounded animate-pulse h-6'></div>)}
        </div>
        <div className='col-span-3 lg:col-span-1 relative p-4 lg:p-2 hidden lg:block h-full bg-gray-50 animate-pulse '>

        </div>
    </div>
}
