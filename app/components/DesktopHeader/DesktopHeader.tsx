'use client'
import React from 'react'
import fullLogo from 'images/logo-full.svg'
import Image from 'next/image'
import { AccordionMenu } from './components/AccordionMenu/AccordionMenu'
import Link from 'next/link'
import { UserStatus } from './components/UserStatus/UserStatus'


export const DesktopHeader = () => {
    return (
        <div className='flex flex-row gap-4 items-center justify-between p-1 text-body-2-bolder text-ultra-violet'>
            <Image src={fullLogo} alt='لوگوی دپارتمان اطلس' className='h-5' />

            <Link href={'/'} className='text-robin-egg-lighter  relative'>
                صفحه اصلی
                <div className='w-3/4 bg-robin-egg-lighter h-[1px] top-full mt-1 right-1/2 translate-x-1/2 absolute'></div>
            </Link>

            <AccordionMenu
                title='خرید'
                items={[
                    {
                        link: '#',
                        title: 'خرید آپارتمان در شهرجدید هشتگرد'
                    },
                    {
                        link: '#',
                        title: 'خرید آپارتمان در هشتگرد'
                    },
                    {
                        link: '#',
                        title: 'خرید ویلا در هشتگرد'
                    }
                ]} />


            <AccordionMenu
                title='رهن و اجاره'
                items={[
                    {
                        link: '#',
                        title: 'اجاره آپارتمان در شهرجدید هشتگرد'
                    },
                    {
                        link: '#',
                        title: 'اجاره آپارتمان در هشتگرد'
                    },
                    {
                        link: '#',
                        title: 'اجاره ویلا در هشتگرد'
                    }
                ]} />

            <Link href={'#'}>اخبار و مقالات</Link>


            <UserStatus />
            {/* <Button>sdfds</Button> */}
            {/* <ActionButtons /> */}


        </div>
    )
}
