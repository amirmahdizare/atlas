import { IconArrowDown, IconChevronDown } from '@tabler/icons-react'
import React, { useState } from 'react'
import { FilterReadType } from 'types'

const Cell = ({ colSpan, title, value, className, children, ...props }: { colSpan: number, value: any, title: string } & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) =>
    <div className={`col-span-3 lg:col-span-${colSpan} flex items-center flex-row gap-1 ${className}`} {...props}>
        {children}
        <span className='text-gray-500'>{title}:</span>
        <span>{value}</span>
    </div>


export const SingleFilter = (filter: FilterReadType & { index: number }) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const { filtertype, hint, isPrimary, itemKey, subCategory, title, type, unit, suggests, index } = filter

    return (
        <div className='grid grid-cols-3 gap-2 border-r-2 border pr-1 border-blue-400 border-r-blue-600  p-1 rounded'>

            <Cell colSpan={3} title={'نام'} value={title} className='cursor-pointer' onClick={()=>setIsOpen(!isOpen)}>
                <span className='flex bg-blue-600 text-white rounded-circle w-2 h-2 justify-center items-center align-middle'>{index}</span>
                <IconChevronDown width={20} height={20} className={`transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </Cell>

            {isOpen && <><Cell colSpan={1} title={'نوع'} value={type} />

                <Cell colSpan={1} title={'ویژگی اصلی'} value={isPrimary == 'false' ? 'خیر' : 'بله'} />

                <Cell colSpan={1} title={'فیلد دیتابیس'} value={itemKey} />

                <Cell colSpan={1} title={'نوع فیلتر'} value={filtertype} />

                <Cell colSpan={1} title={'واحد'} value={unit} />

                <Cell colSpan={3} title={'راهنما'} value={hint} /></>}



        </div>
    )
}
