'use client'

import React, { ReactNode } from 'react'
import { IconHome } from '@tabler/icons-react'
import Link from 'next/link'
import { redirect, usePathname } from 'next/navigation'
import logo from 'images/logo-full-white.svg'
import Image from 'next/image'
import { useUserInfo } from '@hooks'
import { createMediaUrl } from 'utils'
import { SAMPLE_AVATAR } from 'variables'
import { Exit } from '@components'

export default function layout({ children }: { children: ReactNode }) {

    const { data, isLoading, isError } = useUserInfo()


    if (isError)
        return redirect('/')

    else if (data?.data) {

        const { avatar, firstName, lastName, role, phoneNumber } = data.data

        const pathname = usePathname()

        return (
            <div className='flex flex-col bg-anti-flash-white-lighter   max-h-full'>
                <div className='flex flex-col bg-raisin-black'>
                    <div className='flex flex-row gap-2 justify-between p-2 text-french-gray'>

                        <div className='flex flex-row gap-4 items-center'>
                            <Image src={logo} alt='لوگوی اطلس' className='w-8 lg:w-12' />
                            {/* <input placeholder='جستجو' className='p-1 rounded-sm bg-space-codet focus:outline-mint-green outline-1 outline-none text-body-3-normal' /> */}
                        </div>


                        <div className='flex flex-row gap-2 items-center'>

                            <Link href={'/dashboard/profile'} className='flex flex-row gap-2 items-center cursor-pointer'>
                                <Image src={SAMPLE_AVATAR} className='object-cover aspect-square rounded-circle w-4 lg:w-6' width={200} height={200} alt='عکس پروفایل' />
                                
                                <div className='flex flex-col gap-1.5  text-right'>
                                    <span>{firstName ?? '-'} {lastName ?? '-'}</span>
                                    <span className='text-body-3-normal'>{phoneNumber}</span>
                                </div>

                            </Link>

                            <Link href={'/'} className='bg-space-codet aspect-square rounded-circle p-1  cursor-pointer hover:text-gray-50'>
                                <IconHome width={20} height={20} />
                            </Link>

                            <Exit/>

                        </div>

                    </div>


                    <div className='flex flex-row gap-2 justify-center border-t border-t-gray-700 p-2 text-body-2-normal'>

                        <Link className={pathname == '/dashboard/profile' ? 'rounded-lg text-robin-egg-lighter bg-space-codet p-1.5' : 'text-ultra-violet hover:text-gray-400 p-1.5'} href={'/dashboard/profile'}>ویرایش اطلاعات</Link>
                        <Link className={pathname == '/dashboard/bookmarks' ? 'rounded-lg text-robin-egg-lighter bg-space-codet p-1.5' : 'text-ultra-violet hover:text-gray-400 p-1.5'} href={'/dashboard/bookmarks'}>لیست نشان شده ها</Link>

                    </div>

                </div>
                <div className='m-2 lg:m-4 bg-white flex-1 flex p-2  h- fit box-border overflow-auto'>

                    {children}
                </div>
            </div>
        )
    }

    return <div className='flex flex-col gap-2 items-center '>

        {Array.from(new Array(10)).map(i => <div className='bg-gray-20 w-full h-6 rounded animate-pulse'></div>)}

    </div>
}
