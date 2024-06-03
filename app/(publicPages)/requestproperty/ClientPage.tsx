'use client'

import React from 'react'

import { Button, Input, TextArea } from '@components'
import Image from 'next/image'
import vector from 'images/requestproperty.svg'
import { useForm } from 'react-hook-form'
import { BuyOrSellMutateType } from 'types'
import { useCustomMutation, useUserInfo } from '@hooks'
import Link from 'next/link'
import { BuyOrSellEndPoints, BuyOrSellEndPointsType } from '_api/endpoints/buyOrSell'
import { api } from '_api/config'
import { toast } from 'react-toastify'
import { IconCheck } from '@tabler/icons-react'

export const ClientPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<BuyOrSellMutateType<File[]>>()


    const { isLoading, mutate, isError: errorOfMutate, data: resultOfAdd } = useCustomMutation<BuyOrSellEndPointsType['CREATE']>({
        mutationFn: (data) => api.post(BuyOrSellEndPoints.CREATE, data),
        mutationKey: ['requestproperty'],
        onSuccess: () => {
            toast.success('درخواست ملک با موفقیت ثبت شد.')
        },
        onError: () => {
            toast.error('درخواست ملک با خطا مواجه شد.')
        }
    })

    const { isError, data } = useUserInfo()


    const handleMutate = (d: BuyOrSellMutateType<File[]>) => {

        mutate({...d,title :d.title.concat('  |  ').concat((new Date()).toLocaleString('fa-ir')) , side:'buy'})
    }

    if (isError)
        return <div className='flex flex-col gap-2 items-center p-2'>
            <span className='text-red-500 text-h5-bolder'>برای ثبت درخواست ملک باید وارد سایت شوید.</span>
            <Link href={'/login?redirectPath=/requestproperty'}>
                <Button>ورود به اطلس</Button>
            </Link>

        </div>


    else if (resultOfAdd?.data)
        return <div className='flex flex-col gap-2 items-center p-2 text-center '>
            <div className='flex flex-col lg:flex-row gap-2 items-center'>
                <IconCheck className='text-green-500 w-4 h-4' />
                <span className='text-green-500 text-h5-bolder leading-3'>درخواست ملک شما با موفقیت ثبت شد.مشاوران اطلس در اسرع وقت با شما تماس خواهند گرفت.</span>
            </div>
            <Link href={'/'} prefetch={false}> <Button>بازگشت به صفحه اصلی</Button></Link>
        </div>

    else if (data?.data)

        return (
            <div className='grid grid-cols-3 py-4 gap-2'>

                <form className='col-span-3 lg:col-span-2 flex flex-col gap-3' onSubmit={handleSubmit(handleMutate)}>

                    <div className='flex flex-col gap-2'>
                        <span className='text-h3-bolder'>
                            <span className='text-robin-egg'>درخواست ملک</span>
                            &nbsp;
                            &nbsp;
                            <span className='text-space-codet'>از دپارتمان اطلس</span>
                        </span>
                        <span className='text-ultra-violet'>برای درخواست ملک مورد نظر خود اطلاعات زیر را پر کنید.</span>
                    </div>

                    <Input placeholder='مثلا : آپارتمان دوبلکس' label='عنوان درخواست ملک'
                        register={register('title', {
                            required: {
                                value: true,
                                message: 'عنوان وارد نشده است.'
                            }
                        })}
                    />


                    <TextArea label='توضیحات' placeholder='مثلا : آپارتمان 200 متری دارای پارکینگ و آسانسور و ...'
                        register={register('description', {
                            required: {
                                value: true,
                                message: 'توضیحات وارد نشده است.'
                            }
                        })}
                        rows={5}
                    />

                    {/* <div className='grid grid-cols-2 gap-2'>

                    <div className='col-span-2 lg:col-span-1'>

                        <Select
                            items={[{ value: 'hashtgerd', lable: 'هشتگرد' }, { lable: 'شهر جدید هشتگرد', value: 'newCirty' }]}
                            onChange={() => { }}
                            value={'hashtgerd'}
                            placeHolder='انتخاب شهر'
                            label='شهر'

                        />
                    </div>

                    <div className='col-span-2 lg:col-span-1'>

                        <Select
                            items={[{ value: 'hashtgerd', lable: 'فاز 7 ' }, { lable: 'فاز 4', value: 'newCirty' }]}
                            onChange={() => { }}
                            value={'hashtgerd'}
                            placeHolder='انتخاب منظقه'
                            label='منطقه'

                        />
                    </div>

                </div>

                <div className='grid grid-cols-2 gap-2'>

                    <div className='col-span-2 lg:col-span-1'>

                        <Select
                            items={[{ value: 'hashtgerd', lable: 'باغ' }, { lable: 'زمین', value: 'newCirty' }]}
                            onChange={() => { }}
                            value={'hashtgerd'}
                            placeHolder='انتخاب دسته بندی'
                            label='دسته بندی'

                        />
                    </div>

                    <div className='col-span-2 lg:col-span-1'>

                        <Select
                            items={[{ value: 'hashtgerd', lable: 'مسکونی' }, { lable: 'اداری', value: 'newCirty' }]}
                            onChange={() => { }}
                            value={'hashtgerd'}
                            placeHolder='انتخاب زیردسته بندی'
                            label='زیر دسته بندی'

                        />
                    </div>

                </div> */}




                    <div className='flex flex-row gap-4'>

                        <Button  bgColor='gray' textColor='dark' fullWidth>انصراف</Button>
                        <Button disabled={isLoading} loading={isLoading} bgColor='secondary' textColor='white' fullWidth>ثبت درخواست</Button>

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
