'use client'
import { Button } from '@components'
import Link from 'next/link'
import React from 'react'
import photo from 'images/contactus.png'
import Image from 'next/image'
import vector from 'images/buildingVector.svg'
import { IconArrowDownLeft, IconPhoneCall } from '@tabler/icons-react'

export const HeroSection = () => {
    return (
        <div className='grid grid-cols-2 gap-4 relative items-start justify-start bg-white -mb-4 '>
            <div className=' col-span-2 md:col-span-1 flex flex-col gap-4 p-2 lg:p-4 justify-center lg:mt-8'>

                <span className='text-h3-bolder text-raisin-black leading-5'>با مجموعه اطلس درتماس باشید.</span>

                <span className='text-ultra-violet text-h6-normal'>خانه دلخواه تان را به کمک مشاورین متخصص اطلس پیدا کنید.</span>

                <div className='flex flex-row gap-2'>

                    <Link href={'/requestproperty'}><Button bgColor='gray' icon={IconArrowDownLeft} textColor='dark' iconSide='left'>درخواست ملک</Button></Link>

                    <a href={`tel:+02644250952`}><Button bgColor='primaryNormal' icon={IconPhoneCall} textColor='white' iconSide='left' >تماس با اطلس</Button></a>

                </div>


            </div>

            <div className=' col-span-2 md:col-span-1 relative flex flex-row justify-end z-[2] max -w- [330px] md:max-w-none'>

                <Image alt='درباره ما | دپارتمان املاک اطلس' src={photo} className='max-w-[320px] lg:max-w-[350px]'  />

            </div>

            <Image alt='وکتور' src={vector} className='absolute lg:-left-20 -bottom-8  ' />

        </div>
    )
}
