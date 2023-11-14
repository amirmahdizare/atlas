import React from 'react'
import { CategoryFilter, SelectType } from './components'

export const Filters = () => {
  return (
    <div className='flex flex-col gap-3'>
        <SelectType />

        <CategoryFilter />


    </div>
  )
}
