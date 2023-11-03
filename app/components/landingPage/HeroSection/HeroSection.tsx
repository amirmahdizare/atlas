import React from 'react'
import { Button, Input } from '@components'
import Image from 'next/image'
import landingOne from 'images/landingRight.svg'
import landingTwo from 'images/landingLeft.svg'
import { Suggest } from './components/Suggest/Suggest'

export const HeroSection = () => {
    return (
        <div className='grid grid-cols-4 gap-4 '>
            <div className='col-span-4 lg:col-span-2 flex flex-col gap-3 items-stretch lg:items-start text-center lg:text-right'>

                <div className='flex flex-col gap-2'>

                    <span className='text-h2-bolder text-raisin-black'>
                        حس
                        &nbsp;<span className='text-robin-egg'>خوب</span>&nbsp;
                        و خرید مطمئن
                    </span>

                    <p className='leading-3 text-ultra-violet text-h6-normal'>
                        <span>خانه دلخواهتان را به کمک مشاورین متخصص </span>
                        {/* <br /> */}
                        <span>اطلس پیدا کنید</span>
                    </p>
                </div>

                <div className='bg-white p-1 flex flex-row gap-1 lg:gap-4 items-center border border-gray-100  whitespace-nowrap'>
                    <Input customMinWidthClass='-' fullWidth  placeholder='مثلا : ویلا یا خانه' />
                    <Button bgColor='secondary' >جستجو کن !</Button>
                </div>

                <Suggest />

            </div>

            <div className='col-span-4 lg:col-span-2  gap-4 justify-end hidden lg:flex'>

                <Image src={landingOne} alt='دپارتمان املاک اطلس' className='rounded max -h-[400px] ' />
                <Image src={landingTwo} alt='دپارتمان املاک اطلس' className='rounded max -h-[400px] ' />

            </div>

        </div>
    )
}
