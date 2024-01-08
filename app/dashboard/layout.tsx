'use client'

import React, { ReactNode } from 'react'
import { Metadata } from 'next'
import { IconBell, IconHome } from '@tabler/icons-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import logo from 'images/logo-full-white.svg'
import Image from 'next/image'
import avatar from 'images/agents/DADASH.png'

export default function layout({ children }: { children: ReactNode }) {

    const pathname = usePathname()
    return (
        <div className='flex flex-col bg-anti-flash-white-lighter h-full'>
            <div className='flex flex-col bg-raisin-black'>
                <div className='flex flex-row gap-2 justify-between p-2 text-french-gray'>

                    <div className='flex flex-row gap-4 items-center'>
                        <Image src={logo} alt='لوگوی اطلس' />
                        <input placeholder='جستجو' className='p-1 rounded-sm bg-space-codet focus:outline-mint-green outline-1 outline-none text-body-3-normal' />
                    </div>


                    <div className='flex flex-row gap-2 items-center'>

                        <Link href={'/dashboard/profile'} className='flex flex-row gap-2 items-center cursor-pointer'>
                            <Image src={avatar} className='object-cover aspect-square rounded-circle' width={55} height={55} alt='عکس پروفایل' />
                            <span>امیرزارع</span>
                        </Link>

                        <Link href={'/'} className='bg-space-codet aspect-square rounded-circle p-1  cursor-pointer hover:text-gray-50'>
                            <IconHome width={15} height={15} />
                        </Link>

                    </div>

                </div>


                <div className='flex flex-row gap-2 justify-center border-t border-t-gray-700 p-2 text-body-2-normal'>

                    <Link className={pathname == '/dashboard/profile' ? 'rounded-lg text-robin-egg-lighter bg-space-codet p-1.5' : 'text-ultra-violet hover:text-gray-400 p-1.5'} href={'/dashboard/profile'}>ویرایش اطلاعات</Link>
                    <Link className={pathname == '/dashboard/bookmarks' ? 'rounded-lg text-robin-egg-lighter bg-space-codet p-1.5' : 'text-ultra-violet hover:text-gray-400 p-1.5'} href={'/dashboard/bookmarks'}>لیست علاقه مندی ها</Link>

                </div>

            </div>
            <div className='m-2 lg:m-4 bg-white flex-1 p-2'>

            {children}
            </div>
        </div>
    )
}
