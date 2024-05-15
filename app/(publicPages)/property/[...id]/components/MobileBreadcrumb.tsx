'use client'
import { IconChevronRight } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Bookmark } from './Bookmark'
import { PropertyDetailType } from 'types'
import { Share } from './Share'

export const MobileBreadcrumb = ({ data }: { data: PropertyDetailType }) => {

    const router = useRouter()

    return (
        <div className='flex flex-row items-center justify-between'>

            <div className='cursor-pointer flex flex-row gap-0.5 text-raisin-black items-center text-body-2-normal pl-4' onClick={() => router.back()}>
                <IconChevronRight width={22.5} height={22.5} />
                <span>بازگشت</span>
            </div>


            <div className='flex flex-row gap-1'>
                <Share id={data.id} data={data} />
                <Bookmark isBookmarked={!!data?.bookmarks.find(i => i?.product?.id == data.id)} id={data?.id} />
            </div>

        </div>
    )
}
