import React from 'react'
import { Button, Input, Select, TextArea } from '@components'
import { FormProvider, useForm } from 'react-hook-form'
import { PropertyCUType } from 'types'
import { Medias } from './components/Medias'
import { usePropertySection } from '(panel)/panel/components/PropertyManagement/hooks'
import { Attributes } from './components/Attributes/Attributes'
import { SelectLocations } from './components/SelectLocations'
import { SelectCategory } from './components/SelectCategory'
import { SelectProductType } from './components/SelectProductType'
import { Price } from './components/Price'
import { useCustomMutation } from '@hooks'
import { PropretyEndPoints, PropretyEndPointsType } from '_api/endpoints/property'
import { api } from '_api/config'
import { createFormData } from 'utils'
import { toast } from 'react-toastify'

export const DataForm = () => {

    const { mode, proprtyId } = usePropertySection()

    const methods = useForm<PropertyCUType<{ content: File }>>({
        defaultValues: {
            productType: 'sell'
        }
    })

    const { data, mutate, isLoading } = useCustomMutation<PropretyEndPointsType['CREATE']>({
        mutationKey: mode == 'add' ? 'addProprty' : 'editProperty',
        mutationFn: (data) => mode == 'edit' && typeof proprtyId != 'undefined' ? api.post(PropretyEndPoints.SINGLE(proprtyId), { ...data, features: JSON.stringify(data.features.map(i => ({ filterId: i.filterId, value: i.value?.toString() }))) }) : api.post(PropretyEndPoints.CREATE, createFormData({ ...data, features: JSON.stringify(data.features.map(i => ({ filterId: i.filterId, value: i.value?.toString() }))) }, ['medias'])),
        onSuccess: () => {
            toast.success(`آگهی با موفقیت ${mode == 'add' ? 'ایجاد' : 'ویرایش'} شد.`)
        },
        onError: (e) => {
            toast.error(e.response?.data.message ?? e.message)
        }
    })

    const { register, formState: { errors }, getValues, handleSubmit } = methods

    const { dispatch } = usePropertySection()



    // useEffect(() => {
    //     if (mode)
    //     // fetchData
    // }, [proprtyId])
    const handleMutateProperty = (data: PropertyCUType<{ content: File }>) => {
        mutate({ ...data, medias: data.medias.map(i => i.content), isBookmarked: false, userId: 24 })
        console.log(data)
    }


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

                    <TextArea
                        label='توضیحات'
                        placeholder='مثلا : آپارتمان 200 متری دارای پارکینگ و آسانسور و ...'
                        register={register('description', { required: { value: true, message: 'توضیحات اجباری می باشد.' } })}
                        error={!!errors.description}
                        errorText={errors.description?.message}
                    />

                    <Attributes />

                    <Medias />


                    <div className='flex flex-col gap-2'>
                        <span className='text-french-gray text-body-2-normal  text-right'>برچسب (اختیاری)</span>
                        <div className='flex flex-row gap-4'>
                            <label htmlFor='ca' className='cursor-pointer flex items-center gap-1'>کاسبی
                                <input id='ca' type='checkbox' />
                            </label>

                            <label htmlFor='fori' className='cursor-pointer flex items-center gap-1'>فوری
                                <input id='fori' type='checkbox' />
                            </label>

                        </div>
                    </div>

                    <label htmlFor='isSuggested' className='flex flex-row gap-2 items-center cursor-pointer'>
                        <span className='text-body-2-normal'>آیا آگهی پیشنهادی است ؟ (در صورت پیشنهادی مورد آگهی  این آگهی در صفحه اصلی نمایش داده می شود.)</span>
                        <input id='isSuggested' type='checkbox' {...register('isSuggested')} />
                    </label>

                    <div className='flex flex-col gap-2'>


                        <TextArea
                            label='توضیحات مشاور'
                            placeholder='مثلا : مالک فروشنده و آشنا ...'
                            register={register('agentNote')}
                            error={!!errors.agentNote}
                            errorText={errors.agentNote?.message}
                        />

                        <span className='text-body-3-bolder text-dark-orange'>!! توجه : این قسمت فقط برای مشاورین به نمایش خواهد آمد و کاربران به آن دسترسی ندارند.</span>
                    </div>

                    <div className='flex flex-row gap-4'>

                        <Button bgColor='gray' textColor='dark' onClick={() => dispatch({ mode: 'list', proprtyId: undefined })} fullWidth>انصراف</Button>
                        <Button bgColor='primaryNormal' textColor='white' fullWidth loading={isLoading}>ثبت </Button>

                    </div>
                </div>
            </form>
        </FormProvider>
    )
}
