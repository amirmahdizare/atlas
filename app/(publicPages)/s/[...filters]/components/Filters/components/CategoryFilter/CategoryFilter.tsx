'use client'
import React, { useState } from 'react'
import { IconArrowLeft, IconArrowRight, IconChevronUp, IconLadder } from '@tabler/icons-react'
// import { categories } from './data.mock'
import { useSearchProperty } from '../../../../hooks'
import { useFullCategories } from '@hooks'

export const CategoryFilter = () => {

    // const [isOpen , setIsOpen] = useState(false)

    const { data, isLoading, isError } = useFullCategories()


    const { filter, dispatchFilter } = useSearchProperty()

    const categories = data?.data

    if (categories)
        return (
            <div className='flex flex-col gap-2 '>

                <div className='flex flex-row gap-4 items-center justify-between cursor-pointer'>
                    <span className='text-space-codet text-body-2-bolder'>دسته بندی</span>
                    {/* <IconChevronUp width={15} height={15} /> */}
                </div>

                {filter.category && <span className='text-ultra-violet text-body-3-light cursor-pointer hover:text-coral flex flex-row gap-0.5 items-center' onClick={() => dispatchFilter({ category: undefined })}>
                    <IconArrowRight width={15} />
                    <span>
                        همه آگهی ها
                    </span>
                </span>}


                {!filter.category && <div className={`px-1 py-0.5 transition-all duration-150 border-r-2 text-body-3-bolder cursor-pointer  ${!filter.category ? 'border-r-robin-egg-blue-00  text-robin-egg-blue-00 font-bold' : 'text-ultra-violet hover:text-coral border-r-white'}`}>
                    همه آگهی ها
                </div>}

                <div className='flex flex-col gap-1  items-start pr-1'>


                    {categories?.map(item => {
                        if ((item.id != filter.category && filter.category) && !item.subCategories.find(i => item.id == filter.category)) return <></>
                        return <div onClick={() => dispatchFilter({ category: item.id })} className={`px-1 py-1 transition-all duration-150 border-r-2 text-body-3-bolder cursor-pointer  ${filter.category == item.id ? 'border-r-robin-egg-blue-00  text-robin-egg-blue-00 font-bold' : 'text-ultra-violet hover:text-coral border-r-white'}`}>
                            <span>{item.title}</span>
                        </div>
                    }

                    )}
                    <div className='flex flex-col gap-1 items-start pr-2'>
                        {categories?.find((i, index, arr) => i.id == filter.category || i.subCategories.find(i => i.id == filter.category))?.subCategories?.map(item => <div onClick={() => dispatchFilter({ category: item.id })} className={`px-1 py-1 transition-all duration-150 border-r-2 text-body-3-bolder cursor-pointer  ${filter.category == item.id ? 'border-r-robin-egg  text-robin-egg font-bold' : 'text-ultra-violet hover:text-coral border-r-white'}`}>
                            <span>{item.title}</span>
                        </div>)}
                    </div>
                </div>







            </div>
        )

    else if (isError)
        return <span className='text-center text-red-500'>خطا در دریافت اطلاعات</span>

    return <div className='flex flex-col gap-2'>
        {[1, 2, 3, 4, 5].map(f => <div className='bg-gray-100 h-6 w-full animate-pulse'></div>)}
    </div>
}
