import { IconChevronLeft } from '@tabler/icons-react'
import React from 'react'
import { PropertyDetailType } from 'types'

export const Breadcrumb = () => {

    const catName = 'مسکونی'
    const name = 'خرید'
    const onvan = 'هشتگرد'
    return (
        <div className='py-0.5 px-1 text-french-gray flex flex-row items-center gap-1 text-body-3-normal bg-seasalt'>

            <span >{name}</span>
            <IconChevronLeft />
            <span>{catName}</span>
            <IconChevronLeft />
            {/* 
            {!!subCategory && <>
                <span>{subCategory?.name}</span>
                <IconChevronLeft />

            </>} */}

            <span className='text-raisin-black text-body-3-bolder'>{onvan}</span>


        </div>
    )
}
