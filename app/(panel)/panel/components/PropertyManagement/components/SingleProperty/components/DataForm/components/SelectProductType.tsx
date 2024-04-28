import React from 'react'
import { useFormContext } from 'react-hook-form'
import { PropertyCUType } from 'types'

export const SelectProductType = () => {

    const { register, setValue, getValues, watch } = useFormContext<PropertyCUType<File>>()

    const productType = watch('productType')



    return (
        <div className='flex flex-col gap-2'>
            <span className='text-french-gray text-body-2-normal  text-right'>نوع آگهی</span>
            <div className='flex flex-row gap-0.5 text-body-3-normal bo rder  rounded borde r-mint-green'>
                <button type='button' className={`${productType == 'sell' ? 'bg-mint-green text-white' : 'bg-white hover:bg-gray-100 border border-gray-100'} flex-1 p-1 rounded transition-all dur`} onClick={() => setValue('productType', 'sell')}>فروش</button>
                <button type='button' className={`${productType == 'rent' ? 'bg-mint-green text-white' : 'bg-white hover:bg-gray-100 border border-gray-100'} flex-1 p-1 rounded transition-all dur`} onClick={() => setValue('productType', 'rent')}>رهن و اجاره</button>
            </div>
        </div>
    )
}
