'use client'
import { Button } from '@components'
import { IconMessage, IconPhone } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'

export const ActionButton = ({ phoneNumber }: { phoneNumber: string }) => {
    return (
        <div className='flex flex-row gap-1 items-center'>
            <Link href={`sms:+${phoneNumber}?&body=سلام وقت بخیر امکان بازدید وجود داره؟`}> <Button icon={IconMessage} bgColor='white' textColor='textGray' ></Button></Link>
            <Link href={`tel:${phoneNumber}`}><Button icon={IconPhone} bgColor='primaryNormal'>تماس با مشاور</Button></Link>
        </div>

    )
}
