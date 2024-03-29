import { IconChevronDown } from '@tabler/icons-react'
import React, { useState } from 'react'
import { SubCategoryType } from 'types'

export const SingleSubcategory = ({ title, enTitle}: SubCategoryType<string, string>) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <div className={`grid grid-cols-3  border bg-gray-200 rounded  p-1 items-center ${isOpen ?  'gap-2' : ''}`}>
            <span className='col-span-1 flex flex-row gap-1 items-center cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                <IconChevronDown width={20} height={20} className={`transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                {title}
            </span>
            <span className='col-span-1' onClick={() => setIsOpen(!isOpen)}>{enTitle}</span>
            <span className='col-span-1'>
                عملیات ها
            </span>

            <div className={`col-span-3 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[1000px]' : 'max-h-0 opacity-0'}`}>
                Filter
            </div>
        </div>
    )
}
