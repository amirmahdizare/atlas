'use client'
import { Button } from '@components'
import { IconCopy, IconMessage, IconPhone } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'
import { toast } from 'react-toastify'
import { copyLink, createPhoneCallLink } from 'utils'

export const ActionButton = ({ phoneNumber }: { phoneNumber: string }) => {
    return (
        <div className='flex flex-row gap-1 items-center'>
            <Link href={`sms:+${phoneNumber}?&body=سلام وقت بخیر امکان بازدید وجود داره؟`} className='lg:hidden'> <span className='sr-only'>پیامک به مشاور</span> <Button icon={IconMessage} bgColor='white' textColor='textGray' ></Button></Link>
            <div className='flex flex-row gap-1.5 items-center'>
                <Link href={createPhoneCallLink(phoneNumber)}><Button icon={IconPhone} bgColor='primaryNormal'>تماس با مشاور</Button></Link>
                <IconCopy className='cursor-pointer text-gray-400 hidden lg:flex hover:text-gray-500' onClick={() => {
                    copyLink(phoneNumber)
                    toast.success('شماره مشاور با موفقیت کپی شد')
                }} />

            </div>
        </div>

    )
}
