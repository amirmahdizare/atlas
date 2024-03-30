import { IconArrowDown, IconChevronDown, IconDotsVertical, IconPencil } from '@tabler/icons-react'
import React, { useState } from 'react'
import ClickAwayListener from 'react-click-away-listener'
import { FilterReadType } from 'types'
import { MutateFilter } from './MutateFilter'
import { DeleteFilter } from './DeleteFilter'

const Cell = ({ colSpan, title, value, className, children, ...props }: { colSpan: number, value: any, title: string } & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) =>
    <div className={`col-span-3 lg:col-span-${colSpan} flex items-center flex-row gap-1 ${className}`} {...props}>
        {children}
        <span className='text-gray-500'>{title}:</span>
        <span>{value}</span>
    </div>


export const SingleFilter = (filter: FilterReadType & { index: number }) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const { filtertype, hint, isPrimary, itemKey, subCategory :{title :subTitle , id:subId}, title, type, unit, suggests, index , id} = filter
    
    const [more, setMore] = useState<boolean>(false)


    return (
        <div className='grid grid-cols-3 gap-2 border-r-2 border pr-1 border-blue-400 border-r-blue-600  p-1 rounded'>

            <Cell colSpan={3} title={'نام'} value={title} className='cursor-pointer relative' onClick={()=>setIsOpen(!isOpen)}>
                <span className='flex bg-blue-600 text-white rounded-circle w-2 h-2 justify-center items-center align-middle'>{index}</span>
                <IconChevronDown width={20} height={20} className={`transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`} />

                <div  className='border rounded-circle absolute left-0 bg-anti-flash-white-lighter cursor-pointer hover:bg-gray-200 transition-all text-raisin-black p-0.5  w-fit ' onClick={(e) => { e.stopPropagation() ; setMore(true)}}>
                    <IconDotsVertical width={15} height={15} />
                    {more &&
                        <ClickAwayListener onClickAway={() => setMore(false)}>

                            <div className='absolute shadow-sm rounded border flex flex-col  items-stretch min-w-[234px] top-full bg-white z-[20] left-1/2 -transla te-x-1/2 text-body-3-normal'>
                                <MutateFilter parentId={subId} parentTitle={subTitle}  mode='edit' recordId={filter.id.toString()}>
                                    <div className='flex flex-row gap-2 items-center justify-between hover:bg-gray-100 transition-all p-1' >
                                        <span>ویرایش</span>
                                        <IconPencil width={20} height={20} className='text-mint-green' />
                                    </div>
                                </MutateFilter>

                                <DeleteFilter id={id} title={title} />

                            </div>
                        </ClickAwayListener>
                    }
                </div>
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
