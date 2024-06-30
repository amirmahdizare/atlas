import React, { useState } from 'react'

import { IconChevronDown, IconDotsVertical, IconPencil } from '@tabler/icons-react'
import ClickAwayListener from 'react-click-away-listener'
import { CategoryType_API } from 'types'
import { useCategorySection } from '../../../../hooks'
import { DeleteCategory } from './components/DeleteCategory'
import { SubCategories } from '../SubCategories/SubCategories'



export const RowItem = (ad: CategoryType_API<string>) => {

    const [more, setMore] = useState<boolean>(false)

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const { dispatch } = useCategorySection()

    console.log(ad)

    return (
        <div className={`grid grid-cols-5  p-1.5 text-space-codet text-body-2-normal items-center translate-all duration-300 bg-gray-50 ${isOpen ? 'gap-3' : ''}`}>

            <span className='col-span-2 flex flex-row gap-1 items-center cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                <IconChevronDown className={`transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                {ad.title}
            </span>

            <span className='col-span-2'>
                {ad.enTitle}
            </span>

            <div className='col-span-1 flex flex-row gap-2 justify-center'>

                <div className='border rounded-circle bg-anti-flash-white-lighter cursor-pointer hover:bg-gray-200 transition-all text-raisin-black p-0.5 aspect-square relative' onClick={() => setMore(true)}>
                    <IconDotsVertical width={15} height={15} />
                    {more &&
                        <ClickAwayListener onClickAway={() => setMore(false)}>

                            <div className='absolute shadow-sm rounded border flex flex-col  items-stretch min-w-[234px] top-full bg-white z-10 left-1/2 -transla te-x-1/2 text-body-3-normal'>
                                <div className='flex flex-row gap-2 items-center justify-between hover:bg-gray-100 transition-all p-1' onClick={() => dispatch({ mode: 'edit', catId: Number(ad.id) })}>
                                    <span>ویرایش</span>
                                    <IconPencil width={20} height={20} className='text-mint-green' />
                                </div>

                                <DeleteCategory id={ad.id} title={ad.title} />

                            </div>
                        </ClickAwayListener>
                    }
                </div>

            </div>

            <div className={`col-span-5 transition-all duration-300 over flow-h idden ${isOpen ? 'max-h-[1000px]' : 'max-h-0 opacity-0'}`}>
                {isOpen && <SubCategories catTitle={ad.title} catId={ad.id} />}
            </div>

        </div>
    )
}
