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

export const DataForm = () => {

    const { dispatch, userId, mode } = useUsersSection()

    const { refetch, data: usersData } = useUserList()


    const { mutate, isLoading } = useCustomMutation<UsersEndpointType['CREATE_USER']>({
        mutationFn: (data) => !!userId && mode == 'edit' ? api.patch(UsersEndpoints.SINGLE_USER(userId.toString()), data) : api.post(UsersEndpoints.CREATE_USER, data),
        mutationKey: 'addUser',
        onSuccess: (data, { firstName }) => {
            dispatch({ mode: 'list' });
            refetch();
            toast.success(`کاربر ${firstName} با موفقیت اضافه شد.`)
        }
    })

    const methods = useForm<UsersEndpointType['CREATE_USER']['REQUEST']>()

    const { register, formState: { errors }, watch, getValues, setValue, handleSubmit, reset } = methods



    // watch('avatar')

    // const avatarImg = () => getValues('avatar')?.[0] ? URL?.createObjectURL(getValues('avatar')?.[0]) : imageSample.src


    useEffect(() => {
        if (usersData?.data.find(i => i.id == userId)) {
            reset(usersData?.data.find(i => i.id == userId))
        }

    }, [userId])


    const handleMutateUser = (data: UsersEndpointType['CREATE_USER']['REQUEST']) => {
        mutate(data)
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
