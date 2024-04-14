'use client'
import React, { ReactNode } from 'react'
import fullogo from 'images/logo-full.svg'
import Image from 'next/image'
import { IconBell, IconUser } from '@tabler/icons-react'
import { Monitor } from 'icons'
import { Menu } from './components/Menu/Menu'
import { ResponsiveMenu } from './components/ResponsiveMenu/ResponsiveMenu'
import Link from 'next/link'

export default function layout({ children }: { children: ReactNode }) {
    return (
        <div className='grid grid-cols-5 flex-1 border rounded border-gray-100'>

            <div className='col-span-1 p-2 hidden lg:flex flex-col justify-start gap-4 border-l'>
                
                <Link href={'/'}><Image src={fullogo} className='max-h-5' alt='لوگوی اطلس' /></Link>

                <span className='text-body-2-normal-normal text-french-gray'>منو</span>

                <Menu />

                {/* <div className='flex flex-col gap-3'>

                    <MenuItem isLink icon={UserEdit} link='panel/profile' title='اطلاعات کاربری' />
                    <MenuCollection baseLink='base' icon={Monitor} items={accesses} title='اطلاعات پایه' />
                    <MenuCollection baseLink='property' icon={ContactInfo} items={accesses} title='آگهی (فایل) ها' />
                    <MenuCollection baseLink='blog' icon={ContactInfo} items={accesses} title='مقالات' />

                </div> */}

            </div>

            <div className='col-span-5 lg:col-span-4 flex flex-col max-h-screen'>

                <div className='lg:flex flex-row gap-2 p-2 hidden'>
                    <div className='flex flex-row gap-2 items-center justify-between flex-1'>
                        <div className='flex flex-row gap-2 items-center'>
                            <div className='flex flex-row gap-1 items-center'>
                                <Monitor className='text-robin-egg' />
                                <span className='text-raisin-black text-h5-bolder'>پنل مدیریت</span>
                            </div>
                            <input className='border p-1 rounded' placeholder='جستجو' />
                        </div>
                        <IconBell />
                    </div>

                </div>

                <div className='flex flex-row gap-2 justify-between p-1.5 shadow border-b lg:hidden items-center'>

                    <ResponsiveMenu />

                    <Link href={'/'}><Image src={fullogo} className='max-h-5 aspect-video flex-1' alt='لوگوی اطلس' /></Link>



                    <div className=' flex flex-row gap-1 items-center border rounded p-0.5 border-gray-100'>
                        <span className='text-body-2-bolder'>پنل مدیریت</span>
                        <IconUser />
                    </div>



                </div>


                <div className='bg-seasalt lg:p-4 roudned flex-1 flex flex-col overflow-auto max-h-full' >
                    <div className='bg-white flex-1 p-2 overflow-auto'>
                        {children}
                    </div>
                </div>
            </div>

        </div>
    )
}
