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

export const DataForm = () => {

    const methods = useForm<PropertyCUType<File>>({
        defaultValues: {
            productType: 'sell'
        }
    })

    const { register, formState: { errors }, getValues, handleSubmit } = methods

    const { dispatch } = usePropertySection()


    const { mode, proprtyId } = usePropertySection()

    // useEffect(() => {
    //     if (mode)
    //     // fetchData
    // }, [proprtyId])

    console.log(errors)

    const handleMutateProperty = (data: PropertyCUType<File>) => {
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
                        <Button bgColor='primaryNormal' textColor='white' fullWidth >ثبت </Button>

                    </div>
                </div>
            </form>
        </FormProvider>
    )
}
