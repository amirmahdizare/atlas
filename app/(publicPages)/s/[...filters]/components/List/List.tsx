
'use client'
import React from 'react'
import { properties } from './data.mock'
import { PropertyListCard } from '../PropertyListCard/PropertyListCard'
import { usePropertySearchResults } from '../../hooks'
import { PropertyDetailType } from 'types'

export const List = () => {

    const { data, isLoading, isError } = usePropertySearchResults()

    const allProprties = data?.pages.reduce<Array<PropertyDetailType>>((pv, cv) => {
        pv.push(...cv.data)
        return pv
    }, [])

    if (allProprties && allProprties?.length > 0)
        return (
            <div className='grid grid-cols-2 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-1'>
                {allProprties?.map(item => <div className='col-span-1'>
                    <PropertyListCard {...item} />
                </div>)}

            </div>
        )

    else if (isError)
        return <span>خطا در دریافت آگهی ها</span>

    return <div className='grid grid-cols-2 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 '>
        {Array.from(new Array(20)).map((i, index) => <div key={index} className='col-span-1 bg-gray-100 animate-pulse  w-full aspect-[10/16]'></div>)}
    </div>
}
