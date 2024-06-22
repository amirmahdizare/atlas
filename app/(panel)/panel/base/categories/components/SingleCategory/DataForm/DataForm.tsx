import React, { useEffect } from 'react'

import { Button, Input } from '@components'
import { FormProvider, useForm } from 'react-hook-form'
import { useCategorySection, useCategoryList } from '../../../hooks'
import { useCustomMutation } from 'hooks'
import { api } from '_api/config'
import { toast } from 'react-toastify'
import { CategoryEndPoints, CategoryEndPointsType } from '_api/endpoints/category'
import { CategoryType_API } from 'types'
import { SEO_WORD_REGEX } from 'variables'

export const DataForm = () => {

    const { dispatch, mode, catId } = useCategorySection()

    const { refetch, data: categoriesData } = useCategoryList()


    const { mutate, isLoading } = useCustomMutation<CategoryEndPointsType['CREATE']>({
        mutationFn: (data) => mode == 'edit' && catId ? api.patch(CategoryEndPoints.SINGLE(catId.toString()), data) : api.post(CategoryEndPoints.CREATE, data),
        mutationKey: [mode == 'add' ? 'addCategory' : 'editCategory', catId],
        onSuccess: (data, { title }) => {
            dispatch({ mode: 'list' });
            refetch();
            toast.success(`دسته بندی ${title} با موفقیت اضافه شد.`)
        }
    })

    const methods = useForm<CategoryEndPointsType['CREATE']['REQUEST']>()

    const { register, formState: { errors }, watch, getValues, setValue, handleSubmit, reset } = methods

    useEffect(() => {

        const selectedCat = categoriesData?.data.find(i => i.id == catId)
        if (selectedCat) {
            const { id, ...items } = selectedCat
            reset(items)
        }

    }, [catId])


    const handleMutateUser = (data: CategoryEndPointsType['CREATE']['REQUEST']) => {
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
                    },
                    pattern: {
                        value: SEO_WORD_REGEX,
                        message: 'فرمت نام انگلیسی درست نیست.'
                    }
                })}
                    error={!!errors.enTitle}
                    errorText={errors.enTitle?.message}
                />

                <span>مثال : apartment یا bagh-vila (بدون فاصله داخل کلمه فقط حروف و عدد و خط تیره)</span>

                <div className='flex flex-row gap-4'>

                    <Button bgColor='gray' type='button' textColor='dark' onClick={() => dispatch({ mode: 'list', catId: undefined })} fullWidth>انصراف</Button>
                    <Button bgColor='primaryNormal' textColor='white' fullWidth loading={isLoading}>ثبت {mode == 'add' ? '' : 'تغییرات'}</Button>

                </div>



            </form>
        </FormProvider>
    )
}
