import React from 'react'
import { Button, Input, Select, TextArea } from '@components'
import { FormProvider, useForm } from 'react-hook-form'
import { PropertyCUType } from 'types'
import { Medias } from './components/Medias'
import { usePropertySection } from '(panel)/panel/components/PropertyManagement/hooks'
import { Attributes } from './components/Attributes/Attributes'
import { SelectLocations } from './components/SelectLocations'
import { SelectCategory } from './components/SelectCategory'

export const DataForm = () => {

    const methods = useForm<PropertyCUType<File>>()

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



                <div className='flex flex-col gap-6 pb-2'>

                    <Input
                        placeholder='مثلا : آپارتمان دوبلکس'
                        label='عنوان ملک'
                        register={register('title', { required: { value: true, message: 'عنوان ملک اجباری می باشد' } })}
                        error={!!errors.title}
                        errorText={errors.title?.message}
                    />



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

                    <div className='flex flex-row gap-4'>

                        <Button bgColor='gray' textColor='dark' onClick={() => dispatch({ mode: 'list', proprtyId: undefined })} fullWidth>انصراف</Button>
                        <Button bgColor='primaryNormal' textColor='white' fullWidth >ثبت </Button>

                    </div>
                </div>
            </form>
        </FormProvider>
    )
}
