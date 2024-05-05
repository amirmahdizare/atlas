
'use client'
import React from 'react'

import { Button } from '@components'
import Link from 'next/link'
import Layout from './layout'
import logo from 'images/logo-full.svg'
import Image from 'next/image'

export default function error() {
    return (
        <div className='flex flex-col gap-4 h-full justify-center items-center'>


            <Image src={logo} alt='لوگوی اطلس' className='max- w-16' />

            <span className='text-bittersweet text-h5-bolder'>عملیات با خطا روبرو شد</span>

            <Link href={'/'}><Button>بازگشت به صفحه نخست</Button></Link>

        </div>
    )
}
