'use client'
import React from 'react'
import { Button } from '../../../Button/Button'
import { IconArrowDownLeft, IconPlus } from '@tabler/icons-react'

export const ActionButtons = () => {

    return (
        <div className='flex flex-row gap-2'>
            <Button 
            icon={IconArrowDownLeft} 
            iconSide='left' bgColor='gray' textColor='textGray' href='requestproperty'>درخواست ملک</Button>
            <Button 
            icon={IconPlus} 
            bgColor='secondary'
            href='/addproperty'
            >ثبت آگهی</Button>
        </div>
    )
}
