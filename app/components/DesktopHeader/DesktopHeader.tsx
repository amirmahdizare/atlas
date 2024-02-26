'use client'
import React from 'react'
import fullLogo from 'images/logo-full.svg'
import Image from 'next/image'
import { AccordionMenu } from './components/AccordionMenu/AccordionMenu'
import Link from 'next/link'
import { UserStatus } from './components/UserStatus/UserStatus'
import { ActionButtons } from './components/ActionButtons/ActionButtons'
// import { ActionButtons } from './components/ActionButtons/ActionButtons'


export const DesktopHeader = () => {
    return (
        <div className='lg:flex flex-row gap-4 items-center justify-between p-2 text-body-3-bolder text-ultra-violet hidden'>
            <Link href={'/'}><Image src={fullLogo} alt='لوگوی دپارتمان اطلس' className='h-5' /></Link>

            <div className='flex flex-row gap-5 items-center justify-between'>

                <Link href={'/'} className='text-robin-egg-lighter  relative'>
                    صفحه اصلی
                    <div className='w-3/4 bg-robin-egg-lighter h-[1px] top-full mt-1 right-1/2 translate-x-1/2 absolute'></div>
                </Link>

                {/* <AccordionMenu
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
                    ]} /> */}


                {/* <AccordionMenu
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
                    ]} /> */}

                <Link href={'/blogs'} className='hover:text-coral'>اخبار و مقالات</Link>
                <Link href={'/blogs'} className='hover:text-coral'>درباره ما</Link>
                <Link href={'/blogs'} className='hover:text-coral'>تماس با ما</Link>

            </div>
            <div className='flex flex-row gap-4 items-center'>

            <UserStatus />
            <ActionButtons />

            </div>

        </div>
    )
}
