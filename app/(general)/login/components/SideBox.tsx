import React, { ReactNode } from 'react'
import loginPhoto from 'images/loginPhoto.svg'
import Image from 'next/image'
import Link from 'next/link'
import { IconArrowLeft , IconBrandInstagram , IconBrandTwitter , IconBrandWhatsapp ,IconBrandTelegram } from '@tabler/icons-react'

const SocialMediaButton = ({ icon :Icon, link, type }: { icon: typeof IconArrowLeft, link: string, type: 'colored' | 'normal' }) => {

    const appendClassName = type == 'colored' ? 'bg-orange-500 text-white' : 'bg-gray-300 text-gray-800'
    return <Link href={link} className={`rounded-circle p-1.5 aspect-square ${appendClassName}`
    }>
        <Icon width={22.5} height={22.5}/>
    </Link>
}

export const SideBox = () => {
    return (
        <div className='col-span-7 lg:col-span-3 bg-[#F9F9FF] p-2 h-full flex items-center justify-center flex-col gap-4 relative'>
            <Image src={loginPhoto} alt='تصویر ورود به اطلس' />
            <span className='text-h2-bolder'>حس
                &nbsp;
                <span className='text-green-600'>خوب</span>
                &nbsp;
                و خرید مطمئن
            </span>
            <span className='text-h6-normal text-gray-500'>خانه دلخواه تان را به کمک مشاورین متخصص اطلس پیدا کنید.</span>


            <div className='flex flex-row gap-2 items-center lg:absolute bottom-4'>
                <SocialMediaButton icon={IconBrandInstagram} link='www.google.com' type='normal' />
                <SocialMediaButton icon={IconBrandTwitter} link='www.twitter.com' type='normal' />
                <SocialMediaButton icon={IconBrandWhatsapp} link='www.whatsapp' type='colored' />
                <SocialMediaButton icon={IconBrandTelegram} link='www.telegram' type='normal' />
            </div>
            
        </div>
    )
}
