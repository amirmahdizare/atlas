import { Button } from '@components'
import { IconMapPin, IconPlus, IconUsers } from '@tabler/icons-react'
import React from 'react'
import { List } from './List/List'
import { useCitiesSection } from '../hooks'
import { SingleCity } from './List/components/SingleCity'

export const ListSection = () => {

    const { dispatch } = useCitiesSection()

    return (
        <div className='flex flex-col gap-2'>
            <div className='flex flex-row gap-2 justify-between '>
                <div className='flex flex-row gap-1 items-center'>
                    <IconMapPin width={25} height={25} className='text-french-gray' />
                    لیست شهرها
                </div>

                <SingleCity mode='add' >

                    <Button
                        icon={IconPlus}
                        bgColor='primaryNormal'
                        iconSide='right'
                    >
                        افزودن شهر
                    </Button>
                </SingleCity>

            </div>
            <List />


        </div>
    )
}
