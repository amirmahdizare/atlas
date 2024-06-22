import React from 'react'
import { Slider } from './components/Slider/Slider'
import { IconArrowDownLeft } from '@tabler/icons-react'
import Link from 'next/link'
import { ButtonToAll } from '@components'

export const Services = () => {
    return (
        <div className='grid grid-cols-5 gap-4 items-stretch'>

            <div className='col-span-5 lg:col-span-1 flex lg:flex-col flex-row gap-2 justify-between items-center lg:items-start lg:justify-around'>
                <div className='relative text-h3-bolder'>
                    {/* دسترسی سریع */}
                    {/* خدمات املاک اطلس */}
                    دسته بندی املاک
                    <div className='top-full w-1/4 right-0  absolute bg-mint-green mt-1 h-[2px] rounded'></div>
                </div>

                <Link href={'/s/all'} className='lg:flex flex-row gap-1 cursor-pointer hover:text-coral hidden'>
                    <span className='text-mint-green text-body-2-bolder hover:text-coral'>همه آگهی ها</span>
                    <IconArrowDownLeft width={17.5} height={17.5} />
                </Link>

                <ButtonToAll title='همه دسته بندی ها' />



            </div>


            <div className='col-span-5 lg:col-span-4 overflow-hidden'>
                <Slider />
            </div>

        </div>
    )
}
