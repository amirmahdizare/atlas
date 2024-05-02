import { IconChevronLeft } from '@tabler/icons-react'
import React from 'react'
import { PropertyDetailType } from 'types'
import { convertProductType } from 'utils'

export const Breadcrumb = ({ data }: { data: PropertyDetailType }) => {

    console.log(data)

    if (data.category && data.subCategory) {

        console.log(data)

        const { category, subCategory, productType, title } = data
        return (
            <div className='px-2 py-1.5 text-french-gray flex flex-row items-center gap-1 text-body-3-normal bg-seasalt'>

                <span >{convertProductType(productType)}</span>
                <IconChevronLeft />
                <span>{category?.title}</span>
                <IconChevronLeft />

                {!!subCategory?.title && <>
                    <span>{subCategory?.title}</span>
                    <IconChevronLeft />

                </>}

                <span className='text-raisin-black text-body-3-bolder'>{title}</span>


            </div>
        )
    }

    return <></>
}
