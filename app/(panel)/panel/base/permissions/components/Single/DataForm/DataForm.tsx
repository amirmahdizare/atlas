import React, { useEffect } from 'react'

import { Button, Input, Select } from '@components'
import { FormProvider, useForm } from 'react-hook-form'
import { usePermissionList, usePermissionsSection } from '../../../hooks'
import { useCustomMutation } from 'hooks'
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
        onError: (data) => {
            toast.error(data.response?.data?.message)
        }
    })


    const { mutate: editMutate, isLoading: editLoading } = useCustomMutation<PermissionEndPointsType['CREATE']>({
        mutationFn: (data) => permissionId ? api.patch(PermissionEndPoints.UPDATE_PERMISSION(permissionId.toString()), data) : Promise.reject(),
        mutationKey: 'editPermission',
        onSuccess: (data, { }) => {
            dispatch({ mode: 'list' });
            refetch();
            toast.success(`دسترسی ${data?.data?.title} با موفقیت به روز رسانی شد.`)
        },
        onError: (data) => {
            toast.error(data.response?.data?.message)
        }
    })

    const methods = useForm<PermissionEndPointsType['CREATE']['REQUEST']>()

    const { register, formState: { errors }, watch, getValues, setValue, handleSubmit, reset } = methods


    watch('action')

    useEffect(() => {
        if (permissionData?.data.find(i => i.id == permissionId)) {
            reset(permissionData?.data.find(i => i.id == permissionId))
        }

    }, [permissionId])


    const handleMutateUser = (data: PermissionEndPointsType['CREATE']['REQUEST']) => {
        if (mode == 'add') {
            mutate({ ...data })
        }
        else if (mode == 'edit')
            editMutate(data)
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


                <div className='flex flex-row gap-4'>

                    <Button bgColor='gray' textColor='dark' onClick={() => dispatch({ mode: 'list', permissionId: undefined })} fullWidth>انصراف</Button>
                    <Button bgColor='primaryNormal' textColor='white' fullWidth loading={isLoading}>ثبت {mode == 'add' ? '' : 'تغییرات'}</Button>

                </div>



            </form>
        </FormProvider>
    )
}
