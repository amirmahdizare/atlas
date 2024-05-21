'use client'
import React from 'react'
import { CategoryFilter, SelectArea, SelectCity, SelectType } from './components'
import { useSearchProperty } from '../../hooks/index'
// import { categories } from './components/CategoryFilter/data.mock'
import { BooleanFilter, OneButtonFilter, OneSelectFilter, RangeFilter } from './components/FilterTypes'
import { useFullCategories } from '@hooks'

const Divider = () => <div className='bg-anti-flash-white-lighter w-full h-[1px]'></div>

export const Filters = () => {

  const { filter } = useSearchProperty()

  const { data, isLoading, isError } = useFullCategories()

  const categories = data?.data


  if (categories)

    return (
      <div className='flex flex-col gap-2'>
        <SelectType />
        <Divider />
        <CategoryFilter />
        <Divider />
        <SelectCity />
        <SelectArea />
        {!!filter?.subCategory
          ? categories?.find(i => i.id == filter?.category?.[0].toString())?.subCategories.find(s => s.id == filter.subCategory?.[0].toString())?.filters.map(item => {
            if (item.filtertype == 'RANGE')
              return <>
                <Divider />
                <RangeFilter  {...item} />
              </>

            else if (item.filtertype == 'BOOLEAN')
              return <>
                <Divider />
                <BooleanFilter {...item} />
              </>

            else if (item.filtertype == 'ONESELECTRANGE')
              return <>
                <Divider />
                <OneSelectFilter {...item} />
              </>

            else if (item.filtertype == 'ONEBUTTON')
              return <>
                <Divider />
                <OneButtonFilter {...item} />
              </>



            return <></>
          })
          : undefined}


      </div>
    )

  else if (isError)
    return <span className='text-center text-red-500'>خطا در دریافت اطلاعات</span>

  return <div className='flex flex-col gap-2'>
    {[1, 2, 3, 4, 5].map(f => <div className='bg-gray-100 h-3 w-full animate-pulse'></div>)}
  </div>
}
