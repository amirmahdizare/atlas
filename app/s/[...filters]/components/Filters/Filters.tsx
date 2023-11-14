import React from 'react'
import { CategoryFilter, SelectType } from './components'

const Divider = () => <div className='bg-anti-flash-white-lighter w-full h-[1px]'></div>

export const Filters = () => {
  return (
    <div className='flex flex-col gap-2'>
        <SelectType />
        <Divider/>
        <CategoryFilter />
        <Divider/>


    </div>
  )
}
