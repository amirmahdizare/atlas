'use client'
import React from 'react'

import { Button, Input } from '@components'
import { IconPhoto, IconUser } from '@tabler/icons-react'
import { useForm } from 'react-hook-form'
import { UserInfoType } from 'types'
import { useCustomMutation, useUserInfo } from '@hooks'
import { api } from '_api/config'
import { UsersEndpoints } from '_api/endpoints/users'
import { toast } from 'react-toastify'
import { createFormData } from 'utils'

export const ClientPage = () => {

    const { register, formState: { errors }, handleSubmit } = useForm<UserInfoType<File[]>>()

    //TODO User Id Must Fetch From User Info 
    // const { data , isLoading  } = useUserInfo()

    const { mutate, isLoading } = useCustomMutation({
        mutationFn: (data) => api.patch(UsersEndpoints.SINGLE_USER('24'), createFormData(data)),
        onSuccess: () => {
            toast.success('مشخصات شما با موفقیت ویرایش شد.')
        },
        onError: () => {
            toast.error('خطا در ویرایش مشخصات شما.')
        }
    })


    const mutateUserInfo = (data: UserInfoType<File[]>) => {
        mutate({ ...data, avatar: data.avatar?.[0] })
    }

    return (
        <form className='flex flex-col gap-2' onSubmit={handleSubmit(mutateUserInfo)}>
            <div className='flex flex-row gap-2 justify-between '>

                <div className='flex flex-row gap-1 items-center'>
                    <IconUser width={25} height={25} className='text-french-gray' />
                    <span>ویرایش اطلاعات کاربری</span>
                </div>

            </div>
            <Input
                label='نام'
                fullWidth
                register={register('firstName')} />

            <Input
                label='نام خانوادگی'
                fullWidth
                register={register('lastName', { required: { value: true, message: 'نام خانوادگی ضروری می باشد.' } })}
                error={!!errors.lastName}
                errorText={errors.lastName?.message}
            />

            <label htmlFor={'avatar'} className='flex flex-row gap-2 items-center cursor-pointer'>
                <IconPhoto />
                <span>عکس پروفایل</span>
                <input type='file' id={'avatar'}  {...register('avatar')} />
            </label>

            <Button loading={isLoading}>تایید نهایی</Button>
        </form>
    )
}
