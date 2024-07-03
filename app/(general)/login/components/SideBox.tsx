'use client'
import React, { ReactNode } from 'react'
import loginPhoto from 'images/loginPhoto.svg'
import Image from 'next/image'
import Link from 'next/link'
import { IconArrowLeft, IconBrandInstagram, IconBrandTwitter, IconBrandWhatsapp, IconBrandTelegram, IconArrowDownLeft, IconPlus, IconPhoneCall, IconMail } from '@tabler/icons-react'
import { Button } from '@components'
import { CONTACT_INFO } from 'variables'
import { createPhoneCallLink } from 'utils'

const SocialMediaButton = ({ icon: Icon, link, type }: { icon: typeof IconArrowLeft, link: string, type: 'colored' | 'normal' }) => {

    const appendClassName = type == 'colored' ? 'bg-coral text-white' : 'bg-gray-300 text-gray-800'
    return <Link href={link} className={`rounded-circle p-1.5 aspect-square ${appendClassName}`
    }>
        <Icon width={22.5} height={22.5} />
    </Link>
}

export const SideBox = () => {
    return (
        <div className='col-span-7 lg:col-span-3 bg-[#F9F9FF] p-2 lg:h-full flex items-center justify-center flex-col gap-4 relative'>

            <div className='hidden lg:flex flex-row absolute top-8 left-8 gap-2 items-center'>
                <Button icon={IconArrowDownLeft} iconSide='left' bgColor='white' href='/requestproperty' textColor='textGray'>درخواست ملک</Button>
                <Button icon={IconPlus} bgColor='secondary'
                    href='/addproperty'

                >ثبت آگهی</Button>

            </div>
            <Image src={loginPhoto} alt='تصویر ورود به اطلس' className='max-w-[300px] lg:max-w-none' />
            <span className='text-h2-bolder lg:block hidden'>حس
                &nbsp;
                <span className='text-green-600'>خوب</span>
                &nbsp;
                _ خرید مطمئن
            </span>
            <span className='text-h6-normal text-gray-500 lg:block hidden'>خانه دلخواه تان را به کمک مشاورین متخصص اطلس پیدا کنید.</span>


            <div className='flex flex-row gap-2 items-center lg:absolute bottom-4'>
                {/* <SocialMediaButton icon={IconBrandInstagram} link='www.google.com' type='normal' /> */}
                <SocialMediaButton icon={IconMail} link={`mailto:${CONTACT_INFO.email}`} type='normal' />
                <SocialMediaButton icon={IconPhoneCall} link={createPhoneCallLink(CONTACT_INFO.phone)} type='colored' />
                {/* <SocialMediaButton icon={IconBrandTelegram} link='www.telegram' type='normal' /> */}
            </div>

        </div>
    )
}
