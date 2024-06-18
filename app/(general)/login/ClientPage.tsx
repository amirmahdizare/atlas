
'use client'

import React from 'react'
import { SideBox } from './components/SideBox'
import Image from 'next/image'
import fullLogo from 'images/logo-full.svg'
import { DataForm } from './components/DataForm/DataForm'
import { Spinner, StickyMobileHeader } from '@components'
import { useUserInfo } from '@hooks'
import { redirect } from 'next/navigation'
import Link from 'next/link'


export const ClientPage = () => {

    const { data, isError } = useUserInfo()

    if (!!data?.data?.id)
        return redirect('/')
    else if (!data?.data?.id)
        return (
            <div className='container max-w-[1400px] mx-auto h-full pt-8 lg:pt-0'>
                <div className='grid grid-cols-7 gap-1 lg:gap-4  h-full'>

                    <StickyMobileHeader />

                    <div className='col-span-7 lg:col-span-4 flex flex-col items-center justify-center gap-3  p-2 relative'>

                        <div className='w-[133px] aspect-[2/1] relat ive absolute top-4 right-4 lg:block hidden'>
                            <Image src={fullLogo} alt='لوگوی دپارتمان املاک اطلس' fill />
                        </div>

                        <div className='min- w-2/3 lg:w-fit'>
                            <DataForm />
                        </div>

                        <Link href={'/'} className='hover:text-coral '>بازگشت به صفحه اصلی</Link>
                    </div>



                    <SideBox />


                </div>

            </div>
        )

    return <div className='h-full w-full rounded animate-pulse bg-gray-50 flex flex-row justify-center items-center'>
        <Spinner />
    </div>
}
