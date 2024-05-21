'use client'
import React, { useEffect } from 'react'

import { Button, Input } from '@components'
import { IconPhoto, IconUser } from '@tabler/icons-react'
import { useForm } from 'react-hook-form'
import { UserInfoType } from 'types'
import { useCustomMutation, useUserInfo } from '@hooks'
import { api } from '_api/config'
import { UsersEndpoints } from '_api/endpoints/users'
import { toast } from 'react-toastify'
import { createFormData, createMediaUrl } from 'utils'

export const ClientPage = () => {

    const { register, formState: { errors }, handleSubmit, reset, watch } = useForm<UserInfoType<File[] | string>>()

    const { data, isError, refetch } = useUserInfo()

    const { mutate, isLoading } = useCustomMutation({
        mutationFn: (data) => api.patch(UsersEndpoints.SINGLE_USER('24'), createFormData(data)),
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


    const mutateUserInfo = (data: UserInfoType<File[] | string>) => {
        mutate({ ...data, ...(typeof data.avatar?.[0] == 'object' ? ({ avatar: data.avatar?.[0] }) : ({})) })
    }

    const currentFormAvatar = watch('avatar')

    const renderAvatarUrl = () => {
        if (typeof currentFormAvatar == 'string')
            return createMediaUrl(currentFormAvatar)
        else if (currentFormAvatar?.length > 0 && typeof currentFormAvatar?.[0] == 'object') {
            return URL.createObjectURL(currentFormAvatar[0])
        }
        else
            return undefined
    }

    console.log(currentFormAvatar)
    
    if (isError)
        return <div></div>

    else if (data?.data)

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

                <Input
                    label='یوزر نیم'
                    fullWidth
                    register={register('userName', { required: { value: true, message: 'یوزر نیم ضروری می باشد.' } })}
                    error={!!errors.userName}
                    errorText={errors.userName?.message}
                />


                <label htmlFor={'avatar'} className='flex flex-row gap-2 items-center cursor-pointer'>
                    {!!renderAvatarUrl() ? <img src={renderAvatarUrl()} className='w-6 h-6 rounded-circle' /> : <IconPhoto className='w-6 h-6 ' />}

                    <span>عکس پروفایل</span>
                    <input type='file' id={'avatar'}  {...register('avatar')} />
                </label>

                <Button loading={isLoading}>تایید نهایی</Button>
            </form>
        )

    return <div className='flex flex-col gap-2 items-center justify-center'>

        {Array.from(new Array(10)).map((f, index) => <div key={index} className='bg-gray-50 animate-pulse w-full h-6'></div>)}
    </div>
}
