import React from 'react'
import { PropertyDetailType } from 'types'

export const Descriptions = ({ data: { description, title } }: { data: PropertyDetailType }) => {
  return (
    <div className='flex flex-col gap-2'>
      <span className='text-body-1-bolder text-space-codet'>توضیحات</span>
      <p className='text-ultra-violet leading-3' dangerouslySetInnerHTML={{ __html: description ?? '' }} title={`توضیحات ${title} | دپارتمان املاک اطلس`} />

    </div>
  )
}
