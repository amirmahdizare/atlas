'use client'
import React from 'react'
import { CategoryFilter, SelectArea, SelectCity, SelectType } from './components'
import { useSearchProperty } from '../../hooks/index'
import { categories } from './components/CategoryFilter/data.mock'
import { BooleanFilter, OneButtonFilter, OneSelectFilter, RangeFilter } from './components/FilterTypes'

const Divider = () => <div className='bg-anti-flash-white-lighter w-full h-[1px]'></div>

export const Filters = () => {

  const { filter } = useSearchProperty()

  return (
    <div className='flex flex-col gap-2'>
      <SelectType />
      <Divider />
      <CategoryFilter />
      <Divider />
      <SelectCity />
      <SelectArea />
      {!!filter?.category
        ? categories.find(i => i.id == filter?.category)?.filters?.map(item => {
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
}
