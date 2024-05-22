'use client'

import React from 'react'
import { useTags } from '@hooks'
import { useFormContext } from 'react-hook-form'
import { PropertyCUType } from 'types'

export const Tags = () => {

    const { data, isLoading, isError } = useTags()

    const { setValue, formState: { errors }, watch } = useFormContext<PropertyCUType<string>>()

    const currentTags = watch('tagIds') ?? []


    const toggleTag = (tagId: number) => {

        if (currentTags?.findIndex(i => i == tagId) != -1) {
            setValue('tagIds', currentTags?.filter(i => i != tagId))
        }
        else
            setValue('tagIds', [...(currentTags ?? []), tagId])

    }

    if (data?.data) {


        const tags = data?.data

        return (
            <div className='flex flex-col gap-2'>
                <span className='text-french-gray text-body-2-normal  text-right'>برچسب (اختیاری)</span>
                <span className='text-gray-500 text-body-3-normal'>برای انتخاب روی هر برچسب کلیک کنید</span>

                <div className='flex flex-row gap-1 items-center flex-wrap'>


                    {tags?.map(item => {

                        const isSelected = currentTags?.indexOf(item.id) != -1
                        return <label htmlFor={item.id.toString()} onClick={() => toggleTag(item.id)} className={`cursor-pointer flex flex-row gap-1 items-center p-1 border rounded ${isSelected ? 'border-mint-green' : 'border-gray-300'}`}>
                            <input type='checkbox' checked={isSelected} />

                            <div style={{ backgroundColor: item.backgrondColor, color: item.textColor }} className='px-1 py-0.5 rounded text-body-3-normal'>
                                {item.name}
                            </div>



                        </label>
                    })}

                </div>






            </div>
        )
    }

    else if (isError)
        return <span className='text-red-500 text-center w-full'>خطا در دریافت برچسب ها</span>

    return <div className='bg-gray-50 animate-pulse h-4 w-full rounded'></div>
}
