import React, { useEffect } from 'react'
import { Select } from '@components'
import { useCities, useSubCities } from '@hooks'
import { useFormContext } from 'react-hook-form'
import { PropertyCUType } from 'types'

export const SelectLocations = () => {

    const { register, setValue, getValues, formState: { errors }, watch, resetField } = useFormContext<PropertyCUType<File>>()

    watch(['location', 'subLocation'])

    const { data, isLoading, isError } = useCities()

    const { data: subCitiesData, isLoading: subCityLoading } = useSubCities()

    register('location', { required: { value: true, message: 'انتخاب شهر اجباری است.' } })
    register('subLocation', { required: { value: true, message: 'انتخاب منطقه اجباری است.' } })
    useEffect(() => {


    }, [])


    return (
        <>
            <div className='col-span-2 lg:col-span-1'>


                {isLoading && <div className='h-3 w-full rounded bg-gray-50 animate-ping'></div>}

                {isError && <div className='text-red-500'>خطا در دریافت لیست شهرها</div>}

                {data?.data && <Select
                    items={data?.data.map(i => ({ lable: i.faTitle, value: i.id.toString() }))}
                    onChange={(v) => { setValue('location', v); resetField('subLocation') }}
                    value={getValues('location')}
                    placeHolder='انتخاب شهر'
                    label='شهر'
                    error={!!errors.location}
                    errorText={errors.location?.message}
                />}
            </div>

            <div className='col-span-2 lg:col-span-1'>

                {subCityLoading && <div className='h-3 w-full rounded bg-gray-50 animate-ping'></div>}

                {isError && <div className='text-red-500'>خطا در دریافت لیست مناطق</div>}

                {subCitiesData?.data && <Select
                    items={subCitiesData?.data.filter(i => getValues('location') && i.parentLocation?.id == getValues('location') ? true : false).map(i => ({ lable: i.faTitle, value: i.id.toString() }))}
                    onChange={(v) => setValue('subLocation', v)}
                    value={getValues('subLocation') ?? ''}
                    placeHolder='انتخاب منطقه'
                    label='منطقه'
                    error={!!errors.subLocation}
                    errorText={errors.subLocation?.message}
                />}
            </div>
        </>
    )
}
