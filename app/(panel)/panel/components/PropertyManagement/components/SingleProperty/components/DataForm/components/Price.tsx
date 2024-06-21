import React, { useEffect } from 'react'

import { useFormContext } from 'react-hook-form'
import { NumericFormat } from 'react-number-format'
import { PropertyCUType } from 'types'


const inputClassName = `rounded-[4px] py-1.5 px-1 
text-body-2-normal
outline-none
focus:text-space-codet
text-french-gray
focus:bg-white 

 [&:not(:placeholder-shown)]:border
 [&:not(:placeholder-shown)]:text-space-codet
focus: border

      bg-seasalt
lg:min-w-[300px] min-w-[150px]`

export const Price = () => {

    const { setValue, getValues, register, unregister, formState: { errors }, watch, resetField } = useFormContext<PropertyCUType<File>>()

    const productType = getValues('productType')


    useEffect(() => {
        if (productType == 'rent') {
            unregister('price')
            register('prePrice', { required: { value: true, message: 'مبلغ پیش پرداخت وارد نشده است.' } })
            register('rentPrice', { required: { value: true, message: 'مبلغ اجاره وارد نشده است.' } })
        }
        else if (productType == 'sell') {
            unregister('rentPrice');
            unregister('prePrice')
            register('price', { required: { value: true, message: 'قیمت وارد نشده است.' } })
        }
    })

    const returnClassName = (isError: boolean) => `${inputClassName} ${!!isError ? 'border-imperial-red bg-white' : ' [&:not(:focus):placeholder-shown]:border-anti-flash-white-lighter border-ultra-violet'}`

    return (
        <div className='flex flex-col gap-3'>

            {productType == 'sell' &&
                <div className='flex flex-col gap-1.5'>
                    <span className='text-french-gray text-body-2-normal  text-right'>قیمت (تومان)</span>


                    <NumericFormat
                        className={returnClassName(!!errors.price)}
                        onValueChange={(e) => resetField('price', { defaultValue: Number(e.floatValue) })}
                        value={getValues('price')}
                        thousandSeparator
                        placeholder='مثلا : 500,000,000'


                    />

                    {errors.price && <span className='text-bittersweet text-body-3-normal'>{errors.price.message}</span>}

                </div>
            }


            {productType == 'rent' && <>
                <div className='flex flex-col gap-1.5'>
                    <span className='text-french-gray text-body-2-normal  text-right'>پیش پرداخت (تومان)</span>


                    <NumericFormat
                        className={returnClassName(!!errors.prePrice)}
                        onValueChange={(e) => resetField('prePrice', { defaultValue: Number(e.floatValue) })}
                        value={getValues('prePrice')}
                        thousandSeparator
                        placeholder='مثلا : 1,000,000,000'

                    />

                    {errors.prePrice && <span className='text-bittersweet text-body-2-normal'>{errors.prePrice.message}</span>}

                </div>


                <div className='flex flex-col gap-1.5'>
                    <span className='text-french-gray text-body-2-normal  text-right'> اجاره (تومان)</span>


                    <NumericFormat
                        className={returnClassName(!!errors.rentPrice)}
                        onValueChange={(e) => resetField('rentPrice', { defaultValue: Number(e.floatValue) })}
                        value={getValues('rentPrice')}
                        thousandSeparator
                        placeholder='مثلا : 15,000,000'

                    />

                    {errors.rentPrice && <span className='text-bittersweet text-body-2-normal'>{errors.rentPrice.message}</span>}

                </div>



            </>}




        </div>
    )
}
