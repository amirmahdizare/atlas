'use client'
import React from 'react'

import { useTags } from '@hooks'
import { IconPlus, IconTag } from '@tabler/icons-react'
import { SingleTag } from './components/SingleTag'
import { Button } from '@components'
import { MutateTag } from './components/MutateTag'

export const ClientPage = () => {

    const { data, isError } = useTags()

    if (data?.data) {

        const tags = data.data
        return (
            <div className='flex flex-col gap-2'>
                <div className='flex flex-row gap-2 justify-between '>
                    <div className='flex flex-row gap-1 items-center'>
                        <IconTag width={25} height={25} className='text-french-gray' />
                        لیست برچسب ها
                    </div>

                    <MutateTag mode='add'>
                        <Button
                            icon={IconPlus}
                            bgColor='primaryNormal'
                            iconSide='right'
                        >
                            افزودن تگ
                        </Button>
                    </MutateTag>

                </div>
                <div className='bg-gray-50 grid grid-cols-3 p-1 py-2 text-body-3-normal'>
                    <span className='col-span-1'>نام</span>
                    <span className='col-span-1'>پیش نمایش</span>
                    <span className='col-span-1'>عملیات ها</span>

                </div>

                {tags.map(item => <SingleTag key={item?.id} {...item} />)}
            </div>
        )
    }
    else if (isError)
        return <span className='text-red-500'>خطا در دریافت اطلاعات تگ ها</span>

    return <div className='flex flex-col gap-2'>
        {Array.from(new Array(10)).map((i, index) => <div key={index} className='h-4 rounded w-full bg-gray-50'></div>)}
    </div>
}
