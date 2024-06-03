'use client'

import avatar from 'images/agents/dadash.png'

import React, { useEffect } from 'react'
import { Button, Input } from '@components'
import { IconArticle } from '@tabler/icons-react'
import { useForm } from 'react-hook-form'
import { useCustomMutation, useUserInfo } from '@hooks'
import { UserInfoType } from 'types'
import { UsersEndpoints } from '_api/endpoints/users'
import { api } from '_api/config'
import { toast } from 'react-toastify'
import { createFormData } from 'utils'

export const ClientPage = () => {

    const { register, formState: { errors }, handleSubmit, reset, watch } = useForm<UserInfoType<File[] | string>>()

    const { data, isError, refetch } = useUserInfo()

    const { mutate, isLoading } = useCustomMutation({
        mutationFn: (d) => api.patch(UsersEndpoints.SINGLE_USER(data?.data?.id ?? ''), createFormData(d)),
        onSuccess: () => {
            toast.success('مشخصات شما با موفقیت ویرایش شد.')
            refetch()
        },
        onError: () => {
            toast.error('خطا در ویرایش مشخصات شما.')
        }
    })

    useEffect(() => {
        if (typeof data?.data == 'object') {
            const { firstName, lastName, userName, avatar } = data.data
            reset({ firstName, userName, lastName, avatar })
        }
    }, [data?.data])


    const handleReset = () => {
        if (data?.data) {
            const { firstName, lastName, userName, avatar } = data?.data
            reset({ firstName, userName, lastName, avatar })
        }
    }


    return (
        <form className='grid grid-cols-4 gap-4 ' onSubmit={handleSubmit((d) => mutate({firstName:d.firstName ,lastName:d.lastName}))}>
            <div className='flex flex-row gap-1 col-span-4 items-center'>
                <IconArticle width={25} height={25} className='text-french-gray' />
                <span className='text-body-2-bolder text-space-codet'>ویرایش اطلاعات کاربری</span>
            </div>

            <div className='col-span-2 flex flex-col gap-2'>
                <div className='flex flex-row gap-0.5 text-h6-bolder'>
                    <span className='text-robin-egg'> اطلاعات</span>
                    <span className='text-raisin-black'>کاربری</span>
                </div>
                <span className='text-ultra-violet'>اطلاعات خود را وارد / ویرایش کنید.</span>
            </div>

            <div className='col-span-4  gap-2 flex flex-col items-stretch  lg:flex-row lg:items-center'>

                <Input label='نام ' fullWidth register={register('firstName', {
                    required: {
                        value: true,
                        message: 'نام اجباری می باشد'
                    }
                })} />



                <Input label='نام خانوادگی' fullWidth register={register('lastName', {
                    required: {
                        value: true,
                        message: 'نام خانوادگی اجباری می باشد'
                    }
                })} />

            </div>

            {/* <div className='lg:flex flex-row gap-4 hidden lg:col-span-2'></div> */}

            <div className='flex flex-row gap-4 col-span-4 '>
                <Button bgColor='gray' textColor='dark' type='button' onClick={() => handleReset()} fullWidth>انصراف</Button>
                <Button bgColor='primaryNormal' textColor='white' fullWidth loading={isLoading} >ثبت </Button>
            </div>

        </form>
    )
}
