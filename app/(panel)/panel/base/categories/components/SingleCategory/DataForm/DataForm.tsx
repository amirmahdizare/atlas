import { Button, Input } from '@components'
import React, { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useAdvisersSection, useCategoryList } from '../../../hooks'
import { useCustomMutation } from 'hooks'
import { api } from '_api/config'
import { UsersEndpointType, UsersEndpoints } from '_api/endpoints/users'
import { toast } from 'react-toastify'
import { CategoryType_API } from 'types'
import { CategoryEndPoints, CategoryEndPointsType } from '_api/endpoints/category'

export const DataForm = () => {

    const { dispatch, mode } = useAdvisersSection()

    const { refetch, data: usersData } = useCategoryList()


    const { mutate, isLoading } = useCustomMutation<CategoryEndPointsType['CREATE']>({
        mutationFn: (data) => api.post(CategoryEndPoints.CREATE, data),
        mutationKey: 'addUser',
        onSuccess: (data, { title }) => {
            dispatch({ mode: 'list' });
            refetch();
            toast.success(`دسته بندی ${title} با موفقیت اضافه شد.`)
        }
    })

    const methods = useForm<CategoryEndPointsType['CREATE']['REQUEST']>()

    const { register, formState: { errors }, watch, getValues, setValue, handleSubmit, reset } = methods



    const handleMutateUser = (data:CategoryEndPointsType['CREATE']['REQUEST']) => {
        mutate(data)
    }

    return (
        <FormProvider {...methods}>
            <form className='flex flex-col gap-4' onSubmit={handleSubmit(handleMutateUser)}>

                <Input label='نام' register={register('title', {
                    required: {
                        value: true,
                        message: 'نام ضروری است.'
                    }
                })}
                error={!!errors.title}
                errorText={errors.title?.message}
                />

                <Input label='نام انگلیسی' register={register('enTitle', {
                    required: {
                        value: true,
                        message: 'نام انگلیسی ضروری است.'
                    }
                })} 
                error={!!errors.enTitle}
                errorText={errors.enTitle?.message}
                />

                <div className='flex flex-row gap-4'>

                    <Button bgColor='gray' type='button' textColor='dark' onClick={() => dispatch({ mode: 'list', catId: undefined })} fullWidth>انصراف</Button>
                    <Button bgColor='primaryNormal' textColor='white' fullWidth loading={isLoading}>ثبت {mode == 'add' ? '' : 'تغییرات'}</Button>

                </div>



            </form>
        </FormProvider>
    )
}
