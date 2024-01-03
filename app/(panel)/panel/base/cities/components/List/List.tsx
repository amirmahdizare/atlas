import { Button } from '@components'
import { IconMapPin, IconPlus } from '@tabler/icons-react'
import React from 'react'
import { useCitiesSection } from '../../hooks'
import { cities } from '../../data.mock'
import { CityItem } from './CityItem'
import { AddCity } from './components/AddCity'

export const List = () => {

    const { dispatch } = useCitiesSection()

    return (
        <div className='flex flex-col gap-2'>

            <div className='flex flex-row gap-2 justify-between '>
                <div className='flex flex-row gap-1 items-center'>
                    <IconMapPin width={25} height={25} className='text-french-gray' />
                    لیست شهرها
                </div>

                <AddCity />

            </div>

            <div className='gap-2 bg-seasalt grid grid-cols-4 p-2 text-center text-body-3-normal text-ultra-violet'>

                <span className='col-span-1'>نام شهر</span>
                <span className='col-span-1'>تاریخ ثبت</span>
                <span className='col-span-1'>تعداد مناطق</span>

            </div>

            {cities.map(city => <CityItem {...city} />)}




        </div>
    )
}
