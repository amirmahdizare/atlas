import React, { useEffect } from 'react'
import { Select } from '@components'
import { useFullCategories } from '@hooks'
import { useFormContext } from 'react-hook-form'
import { PropertyCUType } from 'types'

export const SelectCategory = () => {


    const { register, formState: { errors }, getValues, setValue, watch, resetField } = useFormContext<PropertyCUType<File>>()

    const { data: fullData, isError, isLoading } = useFullCategories()

    watch(['category', 'subCategory'])

    register('category', { required: { value: true, message: 'انتخاب دسته بندی اجباری است.' } })
    register('subCategory', { required: { value: true, message: 'انتخاب زیر دسته بندی اجباری است.' } })
    useEffect(() => {


    }, [])

    return (
        <>

            <div className='col-span-2 lg:col-span-1'>

                {isLoading && <div className='h-3 w-full rounded bg-gray-50 animate-ping'></div>}

                {isError && <div className='text-red-500'>خطا در دریافت دسته بندی ها</div>}

                {fullData?.data && <Select
                    items={fullData?.data.map(i => ({ lable: i.title, value: i.id.toString() }))}
                    onChange={(v) => { setValue('category', v); resetField('subCategory') }}
                    value={getValues('category')}
                    placeHolder='انتخاب دسته بندی'
                    label='دسته بندی'
                    error={!!errors.category && !getValues('category')}
                    errorText={errors.category?.message}
                />}
            </div>

            <div className='col-span-2 lg:col-span-1'>

                {isLoading && <div className='h-3 w-full rounded bg-gray-50 animate-ping'></div>}

                {isError && <div className='text-red-500'>خطا در دریافت زیردسته بندی ها</div>}

                {fullData?.data && <Select
                    items={fullData?.data?.find(i => i.id == getValues('category')?.toString())?.subCategories?.map(i => ({ lable: i.title, value: i.id.toString() })) ?? []}
                    onChange={(v) => resetField('subCategory', { defaultValue: v })}
                    value={getValues('subCategory')}
                    placeHolder='انتخاب زیردسته بندی'
                    label='زیر دسته بندی'
                    error={!!errors.subCategory}
                    errorText={errors.subCategory?.message}
                />}
            </div>
        </>
    )
}
