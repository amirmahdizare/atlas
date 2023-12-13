'use client'
import { Button } from '@components'
import Link from 'next/link'
import React from 'react'
import photo from 'images/aboutus.png'
import Image from 'next/image'
import vector from 'images/buildingVector.svg'
import { IconArrowDownLeft, IconPhoneCall } from '@tabler/icons-react'

export const HeroSection = () => {
    return (
        <div className='grid grid-cols-2 relative items-center justify-center'>
            <div className=' col-span-2 md:col-span-1 flex flex-col gap-4 p-2 lg:p-4'>

                <span className='text-h3-bolder text-raisin-black leading-5'>دپارتمان اطلس تجربه خرید مطمئن را
                    <br />
                    برای شما رقم میزند...</span>

                <span className='text-ultra-violet text-h6-normal'>خانه دلخواه تان را به کمک مشاورین متخصص اطلس پیدا کنید.</span>

                <div className='flex flex-row gap-2'>

                    <Link href={'/requestproperty'}><Button bgColor='gray' icon={IconArrowDownLeft} textColor='dark' iconSide='left'>درخواست ملک</Button></Link>

                    <Link href={'/contactus'}><Button bgColor='primaryNormal' icon={IconPhoneCall} textColor='white' iconSide='left' >تماس با اطلس</Button></Link>

                </div>


            </div>

            <div className=' col-span-2 md:col-span-1 relative flex flex-row justify-end z-[2] max-w-[330px] md:max-w-none'>

                <Image alt='درباره ما | دپارتمان املاک اطلس' src={photo}  />

            </div>

            <Image alt='وکتور' src={vector} className='absolute lg:-left-20 -bottom-8  ' />

        </div>
    )
}
