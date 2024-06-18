'use client'

import React, { useEffect } from 'react'
import { Button, Input, Select, TextArea } from '@components'
import { FormProvider, useForm } from 'react-hook-form'
import { PropertyCUType, PropertyDetailType } from 'types'
import { Medias } from './components/Medias'
import { usePropertyList, usePropertySection } from '(panel)/panel/components/PropertyManagement/hooks'
import { Attributes } from './components/Attributes/Attributes'
import { SelectLocations } from './components/SelectLocations'
import { SelectCategory } from './components/SelectCategory'
import { SelectProductType } from './components/SelectProductType'
import { Price } from './components/Price'
import { useCustomMutation, useUserInfo } from '@hooks'
import { PropretyEndPoints, PropretyEndPointsType } from '_api/endpoints/property'
import { api } from '_api/config'
import { convertMediaUrlToFile, createFormData, createMediaUrl, getBase64Image, isBoolean, isNumber } from 'utils'
import { toast } from 'react-toastify'
import { Tags } from './components/Tags'
import ReactQuill from 'react-quill'
import { useMutation } from 'react-query'
import { AxiosError, AxiosResponse } from 'axios'

export const DataForm = () => {

    const { mode, proprtyId, dispatch } = usePropertySection()

    const { data: propertyData, isFetching, isFetched, isError, refetch } = usePropertyList()

    const { data: userInfo } = useUserInfo()

    const methods = useForm<PropertyCUType<{ content: File | string }>>({
        defaultValues: {
            productType: 'sell'
        }
    })

    const { data, mutate, isLoading } = useCustomMutation<PropretyEndPointsType['CREATE']>({
        mutationKey: mode == 'add' ? 'addProprty' : 'editProperty',
        mutationFn: async (data) => {

            if (mode == 'edit' && typeof proprtyId != 'undefined') {
                const mappedMedias = await Promise.all(data.medias.filter(i => typeof i == 'string').map(async i => await convertMediaUrlToFile(i.toString())))
                return api.patch(PropretyEndPoints.SINGLE(proprtyId), createFormData({ ...data, tagIds: data.tagIds?.length == 1 ? JSON.stringify([...data.tagIds, ...data.tagIds]) : JSON.stringify(data.tagIds), features: JSON.stringify(data.features.map(i => ({ filterId: i.filterId, value: i.value?.toString() }))), medias: [...data.medias.filter(i => typeof i == 'object'), ...mappedMedias] }, ['medias']))

            }
            // ,tagIds: JSON.stringify(data.tagIds) TODO Tags
            return api.post(PropretyEndPoints.CREATE, createFormData({ ...data, tagIds: data.tagIds?.length == 1 ? JSON.stringify([...data.tagIds, ...data.tagIds]) : JSON.stringify(data.tagIds), features: JSON.stringify(data.features.map(i => ({ filterId: i.filterId, value: i.value?.toString() }))) }, ['medias']))
        }
        ,
        onSuccess: (e, v) => {
            if (userInfo?.data.role.name != 'superAdmin') {
                return toggle({ active: false, id: e.data.id })
            }
            toast.success(`آگهی با موفقیت ${mode == 'add' ? 'ایجاد' : 'ویرایش'} شد.`)
            dispatch({ mode: 'list', proprtyId: undefined })
            refetch()

        },
        onError: (e, v) => {
            // console.log(e)
            const errorResponse = e.response?.data.message as unknown as string[]
            if (Array.isArray(errorResponse)) {
                toast.warning('برخی ویژگی ها به درستی وارد نشده اند.')
                // errorResponse.forEach(e => { setError(e.split(' ')?.[0] as any, { message: 'به درستی وارد نشده است.' }) })
                //     errorResponse.forEach(e => { 

                //         setError(e.split(' ')?.[0] as any, { message: 'به درستی وارد نشده است.' }) 
                // })
            }
            else {

                toast.error(`خطا در ${mode == 'add' ? 'ایجاد' : 'ویرایش'} آگهی`)
            }
            // setError(``)
        }
    })


    const { mutate: toggle, isLoading: toggleLoading } = useMutation<AxiosResponse, AxiosError<any>, { active: boolean, id: string }>({
        mutationFn: (d) => api.patch(PropretyEndPoints.TOGGLE_ACTIVE(d.id), { active: d.active }),
        onSuccess: () => {
            toast.success(`آگهی با موفقیت ${mode == 'add' ? 'ایجاد' : 'ویرایش'} شد. پس از تایید مدیریت به نمایش خواهد آمد.`)
            dispatch({ mode: 'list', proprtyId: undefined })
            refetch()
        },
        onError: (e) => {
            toast.error(e.response?.data.message ?? e.message)
        }
    })

    const { register, formState: { errors }, getValues, handleSubmit, reset, setValue, watch, setError } = methods
    console.log(errors)

    watch(['description', 'tagIds'])


    const allProprties = propertyData?.pages?.reduce<Array<PropertyDetailType>>((pv, cv) => {
        pv.push(...cv.data)
        return pv
    }, [])

    console.log(allProprties)


    useEffect(() => {
        if (mode == 'edit') {
            const targetProperty = allProprties?.find(i => i.id == proprtyId)
            if (targetProperty) {
                const { location, subLocation, category, subCategory, tags, user, medias, price, rentPrice, prePrice, features, ...restProperty } = targetProperty
                console.log('Here', allProprties)
                reset({
                    ...restProperty,
                    category: category?.id ?? undefined,
                    subCategory: subCategory?.id ?? undefined,
                    location: location?.id ?? undefined,
                    subLocation: subLocation?.id,
                    price: typeof price == 'string' ? Number(price) : undefined,
                    prePrice: typeof prePrice == 'string' ? Number(prePrice) : undefined,
                    rentPrice: typeof rentPrice == 'string' ? Number(rentPrice) : undefined,
                    medias: medias?.map(i => ({ content: createMediaUrl(i) })),
                    features: features.map(i => {
                        if (isBoolean(i.value))
                            return ({ ...i, value: i.value == 'true' ? true : false })
                        else if (isNumber(i.value))

                            return ({ ...i, value: Number(i.value) })

                        return i
                    }),
                    tagIds: tags?.map(i => i.id)
                })
            }
        }
    }, [proprtyId, mode, isFetched])

    const handleMutateProperty = (data: PropertyCUType<{ content: File | string }>) => {
        const { prePrice, price, rentPrice, ...restData } = data
        mutate({ ...restData, medias: data.medias.map(i => i.content), isBookmarked: false, ...(data.productType == 'sell' ? ({ rentPrice: 0, prePrice: 0, price }) : ({ price: 0, rentPrice, prePrice })) })
        // console.log(data)
    }

    // if (document?.querySelector('#media-1') != null) {
    // console.log(document.querySelector('#media-0')  ? getBase64Image(document.querySelector('#media-0') as any ):'' )
    // }


    return (

        <FormProvider {...methods} >
            <form onSubmit={handleSubmit(handleMutateProperty)}>

                <div className='flex flex-col gap-4 pb-2'>


                    <SelectProductType />



                    <Input
                        placeholder='مثلا : آپارتمان دوبلکس'
                        label='عنوان آگهی'
                        register={register('title', { required: { value: true, message: 'عنوان آگهی اجباری می باشد' } })}
                        error={!!errors.title}
                        errorText={errors.title?.message}
                    />

                    <Input
                        placeholder='مثلا : 30'
                        label='متراژ (متر مربع)'
                        register={register('metr', { required: { value: true, message: 'متراژ آگهی اجباری می باشد' }, pattern: { value: /[0-9]/g, message: 'متراژ به درستی وارد نشده است.' } })}
                        error={!!errors.metr}
                        errorText={errors.metr?.message}
                        type='number'
                        min={1}
                    />


                    <Price />


                    <div className='grid grid-cols-2 gap-2'>
                        <SelectLocations />
                    </div>

                    <div className='grid grid-cols-2 gap-2'>
                        <SelectCategory />
                    </div>


                    <ReactQuill modules={{
                        toolbar: [
                            [{ 'header': '1' }, { 'header': '2' }, { 'header': '3' }, { 'header': '4' }],
                            [{ size: [] }],
                            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                            ['link', 'image', 'video'],
                            [{ 'list': 'ordered' }, { 'list': 'bullet' },
                            { 'indent': '-1' }, { 'indent': '+1' }],
                            ['clean']
                        ]
                    }} className='!text-right' theme="snow" value={getValues('description')} onChange={(value: string) => { setValue('description', value) }} />


                    {!!errors?.description && <span className='text-red-500 text-body-3-normal'>{errors.description.message}</span>}
                    {/* <TextArea
                        label='توضیحات'
                        placeholder='مثلا : آپارتمان 200 متری دارای پارکینگ و آسانسور و ...'
                        register={register('description', { required: { value: true, message: 'توضیحات اجباری می باشد.' } })}
                        error={!!errors.description}
                        errorText={errors.description?.message}
                    /> */}

                    <Attributes initialSubCategoryId={allProprties?.find(i => i.id == proprtyId)?.subCategory?.id ?? undefined} />

                    <Medias />

                    <Tags />

                    {/* <div className='flex flex-col gap-2'>
                        <span className='text-french-gray text-body-2-normal  text-right'>برچسب (اختیاری)</span>
                        <div className='flex flex-row gap-4'>
                            <label htmlFor='ca' className='cursor-pointer flex items-center gap-1'>کاسبی
                                <input id='ca' type='checkbox' />
                            </label>

                            <label htmlFor='fori' className='cursor-pointer flex items-center gap-1'>فوری
                                <input id='fori' type='checkbox' />
                            </label>

                        </div>
                    </div> */}

                    <label htmlFor='isSuggested' className='flex flex-row gap-2 items-center cursor-pointer'>
                        <span className='text-body-2-normal'>آیا آگهی پیشنهادی است ؟ (در صورت پیشنهادی مورد آگهی  این آگهی در صفحه اصلی نمایش داده می شود.)</span>
                        <input id='isSuggested' type='checkbox' {...register('isSuggested')} />
                    </label>

                    {/* <div className='flex flex-col gap-2'>


                        <TextArea
                            label='توضیحات مشاور'
                            placeholder='مثلا : مالک فروشنده و آشنا ...'
                            register={register('agentNote')}
                            error={!!errors.agentNote}
                            errorText={errors.agentNote?.message}
                        />

                        <span className='text-body-3-bolder text-dark-orange'>!! توجه : این قسمت فقط برای مشاورین به نمایش خواهد آمد و کاربران به آن دسترسی ندارند.</span>
                    </div> */}

                    <div className='flex flex-row gap-4'>

                        <Button bgColor='gray' textColor='dark' onClick={() => dispatch({ mode: 'list', proprtyId: undefined })} fullWidth>انصراف</Button>
                        <Button bgColor='primaryNormal' textColor='white' fullWidth loading={isLoading}>ثبت </Button>

                    </div>
                </div>
            </form>
        </FormProvider>
    )
}
