import { IconChevronLeft } from '@tabler/icons-react'
import React from 'react'
import { PropertyDetailType } from 'types'

export const Breadcrumb = ({data : { category: { name: categoryName }, subCategory, type: { name: typeName } , title }}: {data:PropertyDetailType}) => {
    return (
        <div className='px-2 py-1.5 text-french-gray flex flex-row items-center gap-1 text-body-3-normal bg-seasalt'>

            <span >{typeName}</span>
            <IconChevronLeft />
            <span>{categoryName}</span>
            <IconChevronLeft />

            {!!subCategory && <>
                <span>{subCategory?.name}</span>
                <IconChevronLeft />

            </>}

            <span className='text-raisin-black text-body-3-bolder'>{title}</span>


        </div>
    )
}
