import { Button } from '@components'
import { IconMapPin, IconPlus } from '@tabler/icons-react'
import React from 'react'
import { useCitiesSection } from '../../hooks'

export const List = () => {

    const { dispatch } = useCitiesSection()
    
    return (
        <div className='flex flex-row gap-2 justify-between '>
            <div className='flex flex-row gap-1 items-center'>
                <IconMapPin width={25} height={25} className='text-french-gray' />
                لیست شهرها
            </div>


            <Button
                icon={IconPlus}
                bgColor='primaryNormal'
                iconSide='right'
                onClick={() => dispatch({ mode: 'add', cityId: undefined })}
            >
                افزودن شهر
            </Button>

        </div>
    )
}
