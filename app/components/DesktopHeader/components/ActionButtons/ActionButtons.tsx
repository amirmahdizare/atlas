'use client'
import React from 'react'
import { Button } from '../../../Button/Button'
import { IconArrowDownLeft, IconPlus } from '@tabler/icons-react'

export const ActionButtons = () => {

    return (
        <div className='flex flex-row gap-2'>
            <Button 
            icon={IconArrowDownLeft} 
            iconSide='left' bgColor='white' textColor='textGray'>درخواست ملک</Button>
            <Button 
            icon={IconPlus} 
            bgColor='secondary' >ثبت آگهی</Button>
        </div>
    )
}
