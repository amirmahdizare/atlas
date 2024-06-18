'use client'
import React, { useState } from 'react'
import { CategoryFilter, SelectArea, SelectCity, SelectType } from './components'
import { usePropertySearchResults, useSearchProperty } from '../../hooks/index'
// import { categories } from './components/CategoryFilter/data.mock'
import { BooleanFilter, OneButtonFilter, OneSelectFilter, RangeFilter } from './components/FilterTypes'
import { useFullCategories } from '@hooks'
import { PriceFilter } from './components/FilterTypes/PriceFilter/PriceFilter'
import { Button, Spinner } from '@components'
import { IconFilter, IconX } from '@tabler/icons-react'
import { PropertyDetailType } from 'types'
import { SEARCH_PRODUCT_LIMIT } from 'variables'

const Divider = () => <div className='bg-anti-flash-white-lighter w-full h-[1px]'></div>

export const Filters = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false)

  const { filter } = useSearchProperty()

  const { data, isLoading, isError } = useFullCategories()

  const { data: searchResult, isError: searchResultError, isFetching } = usePropertySearchResults()
  const categories = data?.data

  const allProprties = searchResult?.pages.reduce<Array<PropertyDetailType>>((pv, cv) => {
    pv.push(...cv.data)
    return pv
  }, [])


  if (categories)

    return (
      <>
      <div className='flex flex-row gap-2 items-center justify-between lg:hidden'>
        <span className='text-body-1-bolder'>جستجوی ملک در اطلس</span>

        <Button bgColor='secondary' icon={IconFilter} onClick={() => setIsOpen(true)}>فیلتر</Button>
      </div>
        <div className={` flex-col gap-2 ${isOpen ? 'fixed top-0 left-0 w-full h-screen overflow-auto bg-white p-2.5 lg:p-0 lg:w-auto lg:static lg:top-0 z-50 flex' : 'hidden lg:flex'}`}>
          <div className='lg:hidden cursor-pointer float-left flex flex-row justify-between items-center' onClick={() => setIsOpen(false)}>
            <span className='text-body-2-bolder'>فیلتر ملک</span>
            <IconX className='text-gray-500' />
          </div>
          <SelectType />
          <Divider />
          <CategoryFilter />
          <PriceFilter />
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

          {isFetching && <div className='flex flex-row justify-center w-full lg:hidden'><Spinner /></div>}
          {Array.isArray(allProprties) && !isFetching && <Button onClick={() => setIsOpen(false)} loading={isLoading}> مشاهده  {allProprties && allProprties?.length > SEARCH_PRODUCT_LIMIT ? `+${SEARCH_PRODUCT_LIMIT}` : allProprties?.length} نتیجه</Button>}
          {searchResultError && !isFetching && <span className='text-red-500 lg:hidden text-center'>خطا در دریافت اطلاعات</span>}

        </div>
      </>
    )

  else if (isError)
    return <span className='text-center text-red-500'>خطا در دریافت اطلاعات</span>

  return <div className='flex flex-col gap-2'>
    {[1, 2, 3, 4, 5].map(f => <div className='bg-gray-100 h-3 w-full animate-pulse'></div>)}
  </div>
}
