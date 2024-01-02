'use client'
import React from 'react'
import { Button } from '@components'
import { IconPlus, IconUsers } from '@tabler/icons-react'

export const ClientPage = () => {
    return (
        <div className='flex flex-col gap-2'>

            <div className='flex flex-row gap-2 justify-between '>
                <div className='flex flex-row gap-1 items-center'>
                    <IconUsers width={25} height={25} className='text-french-gray' />
                    مشاوران اطلس
                </div>


                <Button icon={IconPlus} bgColor='primaryNormal' iconSide='right' onClick={() => { }}>افزودن مشاور</Button>

            </div>


        </div>
    )
}
