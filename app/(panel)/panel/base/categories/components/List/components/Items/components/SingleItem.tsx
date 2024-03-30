import { IconChevronDown, IconDotsVertical, IconPencil } from '@tabler/icons-react';
import React, { useState } from 'react'
import ClickAwayListener from 'react-click-away-listener';
import { ItemsReadType } from 'types'
import { MutateItem } from './MutateItem';

export const SingleItem = ({ suggest, title, value, index  , id:itemId}: ItemsReadType & { index: number }) => {


    const [open, setOpen] = useState<boolean>(false)

    const [more, setMore] = useState<boolean>(false)


    return (
        <div className='flex flex-col gap-2 justify-between  border-r-yellow-500 border-r-2 pr-1'>

            <div className='flex flex-row gap-2 justify-between items-center'>

                <div className='flex flex-row gap-1 cursor-pointer' onClick={() => setOpen(!open)}>
                    <span className='flex bg-yellow-600 text-white rounded-circle w-2 h-2 justify-center items-center align-middle'>{index}</span>
                    <IconChevronDown width={20} height={20} className={`transition-all duration-300 ${open ? 'rotate-180' : ''}`} />
                    <span>
                        {title}
                    </span>
                </div>

                <span onClick={() => setOpen(!open)}>
                    <span className='text-gray-400'>مقدار : </span>
                    {value}</span>

                <div className='border rounded-circle shrink-0 relative bg-anti-flash-white-lighter cursor-pointer hover:bg-gray-200 transition-all text-raisin-black p-0.5  w-fit ' onClick={(e) => { e.stopPropagation(); setMore(true) }}>
                    <IconDotsVertical width={15} height={15} />
                    {more &&
                        <ClickAwayListener onClickAway={() => setMore(false)}>

                            <div className='absolute shadow-sm rounded border flex flex-col  items-stretch min-w-[234px] top-full bg-white z-[20] left-1/2 -transla te-x-1/2 text-body-3-normal'>
                               <MutateItem parentId={suggest.id} parentTitle={suggest.title} mode='edit' recordId={itemId.toString()}>
                                    <div className='flex flex-row gap-2 items-center justify-between hover:bg-gray-100 transition-all p-1' >
                                        <span>ویرایش</span>
                                        <IconPencil width={20} height={20} className='text-mint-green' />
                                    </div>
                                </MutateItem>

                                  {/*<DeleteSuggest id={id} title={title} /> */}

                            </div>
                        </ClickAwayListener>
                    }
                </div>

            </div>


        </div>
    )
}
