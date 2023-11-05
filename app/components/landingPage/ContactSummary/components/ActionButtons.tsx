'use client'
import React from 'react'
import { Button } from '@components'
import { IconMap, IconMap2 } from '@tabler/icons-react'

export const ActionButtons = () => {
    return (
        <div className='flex flex-row gap-1'>
            <Button bgColor='white' icon={IconMap} textColor='dark'>مسیریابی با نشان</Button>
            <Button bgColor='white' icon={IconMap2} textColor='dark'>مسیریابی با گوگل</Button>
        </div>
    )
}
