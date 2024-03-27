import React, { useEffect } from 'react'

import { Button, Input, Select } from '@components'
import { FormProvider, useForm } from 'react-hook-form'
import { usePermissionList, usePermissionsSection } from '../../../hooks'
import { useCustomMutation, useCustomQuery } from 'hooks'
import { api } from '_api/config'
import { toast } from 'react-toastify'
import { PermissionEndPoints, PermissionEndPointsType } from '_api/endpoints/permission'
import { PermissionBackendRoutes } from 'enums'

export const DataForm = () => {

    const { dispatch, permissionId, mode } = usePermissionsSection()

    const { refetch, data: permissionData } = usePermissionList()


    const { mutate, isLoading } = useCustomMutation<PermissionEndPointsType['CREATE']>({
        mutationFn: (data) => api.post(PermissionEndPoints.CREATE, data),
        mutationKey: 'addPermission',
        onSuccess: (data, { }) => {
            dispatch({ mode: 'list' });
            refetch();
            toast.success(`دسترسی ${data?.data?.title} با موفقیت اضافه شد.`)
        },
        onError:(data)=>{
            toast.error(data.response?.data?.message)
        }
    })

    const methods = useForm<PermissionEndPointsType['CREATE']['REQUEST']>()

    const { register, formState: { errors }, watch, getValues, setValue, handleSubmit, reset } = methods


    watch('action')

    useEffect(() => {
        // if (permissionData?.data.find(i => i.id == permissionId)) {
        //     reset(permissionData?.data.find(i => i.id == permissionId))
        // }

    }, [permissionId])


    const handleMutateUser = (data: PermissionEndPointsType['CREATE']['REQUEST']) => {
        mutate({ ...data })
    }

    return (
        <FormProvider {...methods}>
            <form className='flex flex-col gap-4' onSubmit={handleSubmit(handleMutateUser)}>

                <Input label='عنوان' register={register('title', {
                    required: {
                        value: true,
                        message: 'عنوان ضروری است.'
                    }
                })} />

                <Select
                    items={Object.keys(PermissionBackendRoutes).map((i, index, arr) => ({ lable: i, value: Object.values(PermissionBackendRoutes)[index] }))}
                    onChange={(value: keyof typeof PermissionBackendRoutes) => setValue('action', value)}
                    value={getValues('action')}
                />


                <Input label='مسیر' register={register('route', {
                    required: {
                        value: true,
                        message: 'مسیر ضروری است.'
                    },
                    
                })} 
                dir='ltr'
                placeholder='مثال : /base/users'
                />

                <Input label='راهنما / توضیح' register={register('hint',
                    {
                        required: {
                            value: true,
                            message: 'توضیح ضروری است.'
                        }
                    })}
                    error={!!errors?.hint}
                    errorText={errors?.hint?.message}
                />

                <label className='flex flex-row gap-1 items-center'>
                    <input type='checkbox' {...register('isMenuItem')} />
                    <span>آیا منو می باشد؟</span>
                </label>


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

                    <Button bgColor='gray' textColor='dark' onClick={() => dispatch({ mode: 'list', permissionId: undefined })} fullWidth>انصراف</Button>
                    <Button bgColor='primaryNormal' textColor='white' fullWidth loading={isLoading}>ثبت {mode == 'add' ? '' : 'تغییرات'}</Button>

                </div>



            </form>
        </FormProvider>
    )
}
