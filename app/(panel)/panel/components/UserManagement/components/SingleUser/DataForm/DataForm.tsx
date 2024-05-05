import { Button, Input, TextArea } from '@components'
// import Image from 'next/image'
import React, { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useUsersSection, useUserList } from '../../../hooks'
// import imageSample from 'images/image.svg'
// import { accesses } from '(panel)/panel/data.mock'
import { useCustomMutation, useCustomQuery } from 'hooks'
import { api } from '_api/config'
import { UsersEndpointType, UsersEndpoints } from '_api/endpoints/users'
import { toast } from 'react-toastify'
import { IconUser } from '@tabler/icons-react'
import { NO_PHOTO_IMAGE } from 'variables'
import { createFormData, createMediaUrl } from 'utils'


export interface FormData {
    firstName: string,
    lastName: string,
    phoneNumber: string,
    avatar: File[],
    userName: string | null
}

export const DataForm = () => {

    const { dispatch, userId, mode, type } = useUsersSection()

    const { refetch, data: usersData } = useUserList()

    const typeName = type == 'agent' ? 'مشاور' : 'کاربر'

    const { mutate, isLoading } = useCustomMutation<UsersEndpointType['CREATE_USER']>({
        mutationFn: (data) => !!userId && mode == 'edit' ? api.patch(UsersEndpoints.SINGLE_USER(userId.toString()), createFormData(data)) : api.post(UsersEndpoints.CREATE_USER, createFormData(data)),
        mutationKey: ['MutateUser', mode],
        onSuccess: (data, { firstName }) => {
            dispatch({ mode: 'list' });
            refetch();
            toast.success(`${typeName} ${firstName} با موفقیت اضافه شد.`)
        }
    })

    const methods = useForm<FormData>()

    const { register, formState: { errors }, watch, getValues, setValue, handleSubmit, reset } = methods


    watch('avatar')
    // watch('avatar')

    // const avatarImg = () => getValues('avatar')?.[0] ? URL?.createObjectURL(getValues('avatar')?.[0]) : imageSample.src


    useEffect(() => {
        if (usersData?.data.find(i => i.id == userId)) {
            reset(usersData?.data.find(i => i.id == userId))
        }

    }, [userId])


    const handleMutateUser = ({ avatar, ...data }: FormData) => {
        mutate({ ...data, ...(typeof avatar?.[0] == 'object' ? ({ avatar: avatar?.[0] }) : ({})) })
    }


    const imageUrl = () => {
        const avatar = getValues('avatar')

        if (!avatar) return NO_PHOTO_IMAGE
        if (typeof avatar == 'object')
            return URL.createObjectURL(avatar?.[0])
        else if (typeof avatar == 'string')
            return createMediaUrl(avatar)
        else
            return NO_PHOTO_IMAGE
    }

    return (
        <FormProvider {...methods}>
            <form className='flex flex-col gap-4' onSubmit={handleSubmit(handleMutateUser)}>

                <Input label='نام ' register={register('firstName', {
                    required: {
                        value: true,
                        message: 'شماره تلفن ضروری است.'
                    }
                })} />

                <Input label='نام خانوادگی ' register={register('lastName', {
                    required: {
                        value: true,
                        message: 'شماره تلفن ضروری است.'
                    }
                })} />


                {type == 'agent' && <><Input label='یوزرنیم' register={register('userName', {
                    // required: {
                    //     value: true,
                    //     message: 'یوزرنیم ضروری است.'
                    // }
                })} />


                    <div className='flex flex-row gap-2 items-center'>
                        <IconUser />

                        <span>تصویر پروفایل</span>

                        <input type='file' {...register('avatar')} />

                        <img src={imageUrl()} className='w-10 aspect-square rounded object-cover' />



                    </div></>}

                <Input type='tel' label='شماره تلفن' register={register('phoneNumber',
                    {
                        pattern: {
                            value: /^09\d{9}/g,
                            message: 'شماره تلفن به درستی وارد نشده است.'
                        },
                        required: {
                            value: true,
                            message: 'شماره تلفن ضروری است.'
                        }
                    })}
                    error={!!errors?.phoneNumber}
                    errorText={errors?.phoneNumber?.message}
                    readOnly={mode == 'edit'}
                    disabled={mode == 'edit'}
                />

                {/* {register('')} */}

                {/* <TextArea label='درباره مشاور' register={register('desc')} /> */}

                {/* <div className='flex flex-col gap-2'>
                    <span className='text-body-3-bolder text-ultra-violet'>تصویر پروفایل مشاور</span>
                    <label className='border border-dashed border-ghost-white rounded flex flex-row gap-2 justify-between cursor-pointer p-2 items-center' htmlFor='adviser-avatar'>
                        <div className='flex flex-row gap-2 items-center'>
                            {getValues('avatar') ? <img src={avatarImg()} className='w-8 object-cover aspect-square rounded-circle shadow border' /> : <Image className='w-6 object-cover aspect-square rounded-circle shadow' src={imageSample} alt='تصویر' />}
                            <span className='text-body-3-normal'>
                                {getValues('avatar') ? 'برای تغییر پروفایل ، تصویر جدید انتخاب کنید' : 'تصویر خود را اضافه کنید.'}
                            </span>

                        </div>

                        <input type='file' hidden id='adviser-avatar' {...register('avatar')} />

                        <Button bgColor='secondary' className='pointer-events-none'>
                            {!getValues('avatar') ? 'افزودن' : 'تغییر'}
                        </Button>

                    </label>

                </div> */}


                {/* <div className='flex flex-col gap-3'>
                    <span className='text-body-3-bolder text-ultra-violet '>دسترسی های مشاور</span>
                    {accesses.map(item => <label className='flex flex-row gap-1 cursor-pointer items-start ' htmlFor={item.route}>
                        <input type='checkbox' className='mt-0.5 accent-mint-green' id={item.route} />
                        <div className='flex flex-col gap-1'>
                            <span className='text-body-3-bolder text-ultra-violet'>{item.title}</span>
                            <span className='text-body-3-normal leading-3 text-gray-500'>{item.hint}</span>
                        </div>
                    </label>)}
                </div> */}
                <div className='flex flex-row gap-4'>

                    <Button bgColor='gray' textColor='dark' onClick={() => dispatch({ mode: 'list', userId: undefined })} fullWidth>انصراف</Button>
                    <Button bgColor='primaryNormal' textColor='white' fullWidth loading={isLoading}>ثبت {mode == 'add' ? '' : 'تغییرات'}</Button>

                </div>



            </form>
        </FormProvider>
    )
}
