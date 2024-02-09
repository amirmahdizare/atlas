'use client'
import { Button, Input } from '@components'
import { IconArticle, IconPaperclip } from '@tabler/icons-react'
import React from 'react'
import avatar from 'images/agents/dadash.png'
import Image from 'next/image'
export const ClientPage = () => {
    return (
        <div className='grid grid-cols-4 gap-4 '>
            <div className='flex flex-row gap-1 col-span-4 items-center'>
                <IconArticle width={25} height={25} className='text-french-gray' />
                <span className='text-body-2-bolder text-space-codet'>ویرایش اطلاعات کاربری</span>
            </div>

            <div className='col-span-2 flex flex-col gap-2'>
                <div className='flex flex-row gap-0.5 text-h6-bolder'>
                    <span className='text-robin-egg'> اطلاعات</span>
                    <span className='text-raisin-black'>کاربری</span>
                </div>
                <span className='text-ultra-violet'>اطلاعات خود را وارد / ویرایش کنید.</span>
            </div>

            <div className='col-span-4  gap-2 flex flex-col items-stretch  lg:flex-row lg:items-center'>

                <Input label='نام و نام خانوادگی' fullWidth />
                <Input label='شماره موبایل' fullWidth />

            </div>

            <div className='lg:flex flex-row gap-4 hidden lg:col-span-2'></div>

            <div className='flex flex-row gap-4 col-span-4 lg:col-span-2'>
                <Button bgColor='gray' textColor='dark' onClick={() => { }} fullWidth>انصراف</Button>
                <Button bgColor='primaryNormal' textColor='white' fullWidth >ثبت </Button>
            </div>

        </div>
    )
}
