'use client'
import { Button } from '@components'
import { IconMessage, IconPhone } from '@tabler/icons-react'
import React from 'react'

export const ActionButton = ({ phoneNumber }: { phoneNumber: string }) => {
    return (
        <div className='flex flex-row gap-1 items-center'>
            <Button icon={IconMessage} href={`sms:+${phoneNumber}?&body=سلام وقت بخیر امکان بازدید وجود داره؟`} bgColor='white' textColor='textGray' ></Button>
            <Button icon={IconPhone} bgColor='primaryNormal' href={`tel:${phoneNumber}`}>تماس با مشاور</Button>
        </div>

    )
}
