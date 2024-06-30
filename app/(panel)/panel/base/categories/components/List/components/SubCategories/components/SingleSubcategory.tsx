import { IconChevronDown, IconDotsVertical, IconPencil } from '@tabler/icons-react'
import React, { useState } from 'react'
import ClickAwayListener from 'react-click-away-listener'
import { SubCategoryType } from 'types'
import { MutateSubcategory } from './MutateSubcategory'
import { DeleteSubcategory } from './DeleteSubCategory'
import { Filters } from '../../Filters/Filters'

export const SingleSubcategory = (subcategory: SubCategoryType<string, string>) => {


    const { title, enTitle , id , category: {title:catTitle , id:catId} }  = subcategory
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const [more, setMore] = useState<boolean>(false)


    return (
        <div className={`grid grid-cols-3  border bg-gray-200 rounded  p-1 items-center ${isOpen ? 'gap-2' : ''}`}>
            
            <span className='col-span-1 flex flex-row gap-1 items-center cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                <IconChevronDown width={20} height={20} className={`transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                {title}
            </span>
            
            <span className='col-span-1' onClick={() => setIsOpen(!isOpen)}>{enTitle}</span>
            
            <span className='col-span-1 flex flex-row justify-end lg:justify-center'>
                <div className='border rounded-circle bg-anti-flash-white-lighter cursor-pointer hover:bg-gray-200 transition-all text-raisin-black p-0.5  w-fit relative' onClick={() => setMore(true)}>
                    <IconDotsVertical width={15} height={15} />
                    {more &&
                        <ClickAwayListener onClickAway={() => setMore(false)}>

                            <div className='absolute shadow-sm rounded border flex flex-col  items-stretch min-w-[234px] top-full bg-white z-[20] left-1/2 -transla te-x-1/2 text-body-3-normal'>
                                <MutateSubcategory catId={catId} catTitle={catTitle}  mode='edit' subcatId={Number(id)}>
                                    <div className='flex flex-row gap-2 items-center justify-between hover:bg-gray-100 transition-all p-1' >
                                        <span>ویرایش</span>
                                        <IconPencil width={20} height={20} className='text-mint-green' />
                                    </div>
                                </MutateSubcategory>

                                <DeleteSubcategory id={id} title={title} />

                            </div>
                        </ClickAwayListener>
                    }
                </div>
            </span>

            <div className={`col-span-3 transition-all duration-300 over flow-hi dden ${isOpen ? 'max-h-[1000px]' : 'max-h-fit opacity-0'}`}>
               {isOpen &&  <Filters subCategory={subcategory} />}
            </div>
        </div>
    )
}
