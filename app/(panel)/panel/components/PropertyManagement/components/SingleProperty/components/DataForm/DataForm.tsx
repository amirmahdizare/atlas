import React from 'react'
import { Button, Input, Select, TextArea } from '@components'
import { FormProvider, useForm } from 'react-hook-form'
import { PropertyCUType } from 'types'
import { Medias } from './components/Medias'
import { usePropertySection } from '(panel)/panel/components/PropertyManagement/hooks'

export const DataForm = () => {

    const methods = useForm<PropertyCUType<File>>()

    const { dispatch } = usePropertySection()

    const { mode, proprtyId } = usePropertySection()

    // useEffect(() => {
    //     if (mode)
    //     // fetchData
    // }, [proprtyId])

    return (
        <FormProvider {...methods}>


            <div className='flex flex-col gap-4 pb-2'>

                <Input placeholder='مثلا : آپارتمان دوبلکس' label='عنوان ملک' />

                <Input placeholder='مثلا :  علی رضایی' label='نام و نام خانوادگی' />


                <div className='grid grid-cols-2 gap-2'>

                    <div className='col-span-2 lg:col-span-1'>

                        <Select
                            items={[{ value: 'hashtgerd', lable: 'هشتگرد' }, { lable: 'شهر جدید هشتگرد', value: 'newCirty' }]}
                            onChange={() => { }}
                            value={'hashtgerd'}
                            placeHolder='انتخاب شهر'
                            label='شهر'

                        />
                    </div>

                    <div className='col-span-2 lg:col-span-1'>

                        <Select
                            items={[{ value: 'hashtgerd', lable: 'فاز 7 ' }, { lable: 'فاز 4', value: 'newCirty' }]}
                            onChange={() => { }}
                            value={'hashtgerd'}
                            placeHolder='انتخاب منظقه'
                            label='منطقه'

                        />
                    </div>

                </div>

                <div className='grid grid-cols-2 gap-2'>

                    <div className='col-span-2 lg:col-span-1'>

                        <Select
                            items={[{ value: 'hashtgerd', lable: 'باغ' }, { lable: 'زمین', value: 'newCirty' }]}
                            onChange={() => { }}
                            value={'hashtgerd'}
                            placeHolder='انتخاب دسته بندی'
                            label='دسته بندی'

                        />
                    </div>

                    <div className='col-span-2 lg:col-span-1'>

                        <Select
                            items={[{ value: 'hashtgerd', lable: 'مسکونی' }, { lable: 'اداری', value: 'newCirty' }]}
                            onChange={() => { }}
                            value={'hashtgerd'}
                            placeHolder='انتخاب زیردسته بندی'
                            label='زیر دسته بندی'

                        />
                    </div>

                </div>

                <TextArea label='توضیحات' placeholder='مثلا : آپارتمان 200 متری دارای پارکینگ و آسانسور و ...' />

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

                    <Button  bgColor='gray' textColor='dark' onClick={() => dispatch({ mode: 'list', proprtyId: undefined })} fullWidth>انصراف</Button>
                    <Button  bgColor='primaryNormal' textColor='white'fullWidth >ثبت </Button>

                </div>
            </div>
        </FormProvider>
    )
}
