'use client'
import React, { ReactNode } from 'react'
import fullogo from 'images/logo-full.svg'
import Image from 'next/image'
import { IconBell, IconInfoCircle } from '@tabler/icons-react'
import { Monitor, UserEdit } from 'icons'
import { MenuItem } from './components/MenuItem'
import { MenuCollection } from './components/MenuCollection'
import { accesses } from './data.mock'

export default function layout({ children }: { children: ReactNode }) {
    return (
        <div className='grid grid-cols-6 flex-1 border rounded border-gray-100'>

            <div className='col-span-1 p-2 flex flex-col justify-start gap-4 border-l'>
                <Image src={fullogo} className='max-h-5' alt='لوگوی اطلس' />

                <span className='text-body-2-normal-normal text-french-gray'>منو</span>

                <div className='flex flex-col gap-3'>

                    <MenuItem isLink icon={UserEdit} link='panel/profile' title='اطلاعات کاربری' />
                    <MenuCollection baseLink='base' icon={Monitor} items={accesses} title='اطلاعات پایه' />
                    {/* <a href='/panel/info'>ویرایش اطلاعات</a>
                    <a href='/panel/dsf'>ویرایش اطلاعات</a>
                    <a href='/panel/dsf'>ویرایش اطلاعات</a>
                    <a href='/panel/dsf'>ویرایش اطلاعات</a>
                    <a href='/panel/dsf'>ویرایش اطلاعات</a> */}
                </div>

                {/* <div className='flex flex-col gap-1'>
                    <a href='/panel/dsf'>ویرایش اطلاعات</a>
                    <a href='/panel/dsf'>ویرایش اطلاعات</a>
                </div> */}



            </div>

            <div className='col-span-5 flex flex-col'>
                <div className='flex flex-row gap-2 p-2'>
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
                <div className='bg-seasalt p-4 roudned flex-1 flex flex-col'>
                    <div className='bg-white flex-1 p-2 overflow-auto'>
                        {children}
                    </div>
                </div>
            </div>

        </div>
    )
}
