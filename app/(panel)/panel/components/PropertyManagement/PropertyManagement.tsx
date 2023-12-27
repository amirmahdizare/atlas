'use client'
import { Button } from '@components'
import { IconFile, IconPlus } from '@tabler/icons-react'
import React from 'react'
import { List } from './components/List/List'

export const PropertyManagement = ({ me }: { me: boolean }) => {
    return (
        <div className='flex flex-col gap-2'>
            <div className='flex flex-row gap-2 justify-between'>

                <div className='flex flex-row gap-1 items-center'>
                    <IconFile width={20} height={20} className='text-french-gray' />
                    <span>لیست فایل ها</span>

                </div>

                <Button icon={IconPlus} bgColor='primaryNormal' iconSide='right' onClick={() => alert('به زودی')}>ثبت آگهی</Button>

            </div>

            <List />
        </div>
    )
}
