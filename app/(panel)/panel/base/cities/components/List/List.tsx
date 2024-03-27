import { Button, Spinner } from '@components'
import { IconMapPin, IconPlus } from '@tabler/icons-react'
import React from 'react'
import { useCities, useCitiesSection } from '../../hooks'
import { CityItem } from './CityItem'
import { SingleCity } from './components/SingleCity'

export const List = () => {

    const { dispatch } = useCitiesSection()

    const { data, isError } = useCities()



    if (data?.data) {

        const cities = data.data

        return (
            <div className='flex flex-col gap-2'>



                <div className='gap-2 bg-seasalt grid grid-cols-4 p-2 text-center text-body-3-normal text-ultra-violet'>

                    <span className='col-span-1'>نام شهر</span>
                    <span className='col-span-1'>تاریخ ثبت</span>
                    <span className='col-span-1'>تعداد مناطق</span>

                </div>

                {cities.map(city => <CityItem {...city} />)}



            </div>
        )

    }
    else if (isError)
        return <div className='flex flex-col gap-2 items-center justify-center text-red-500 h-full w-full'>خطا در دریافت اطلاعات</div>


    else
        return <Spinner />
}
