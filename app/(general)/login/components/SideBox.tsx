import React from 'react'
import loginPhoto from 'images/loginPhoto.svg'
import Image from 'next/image'

export const SideBox = () => {
    return (
        <div className='col-span-7 lg:col-span-3 bg-[#F9F9FF] p-2 h-full flex items-center justify-center flex-col gap-4'>
            <Image src={loginPhoto} alt='تصویر ورود به اطلس' />
            <span className='text-h2-bolder'>حس
                &nbsp;
                <span className='text-green-600'>خوب</span>
                &nbsp;
                و خرید مطمئن
            </span>
            <span className='text-h6-normal text-gray-500'>خانه دلخواه تان را به کمک مشاورین متخصص اطلس پیدا کنید.</span>

        </div>
    )
}
