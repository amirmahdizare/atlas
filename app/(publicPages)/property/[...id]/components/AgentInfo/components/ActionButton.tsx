'use client'
import { Button } from '@components'
import { IconMessage, IconPhone } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'
import { createPhoneCallLink } from 'utils'

export const ActionButton = ({ phoneNumber }: { phoneNumber: string }) => {
    return (
        <div className='flex flex-row gap-1 items-center'>
            <Link href={`sms:+${phoneNumber}?&body=سلام وقت بخیر امکان بازدید وجود داره؟`} className='lg:hidden'> <span className='sr-only'>پیامک به مشاور</span> <Button icon={IconMessage} bgColor='white' textColor='textGray' ></Button></Link>
            <Link href={createPhoneCallLink(phoneNumber)}><Button icon={IconPhone} bgColor='primaryNormal'>تماس با مشاور</Button></Link>
        </div>

    )
}
