'use client'

import { IconChevronRight } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'
import React from 'react'

export const ReturnButton = () => {


    const { back } = useRouter()
    return (
        <div className='cursor-pointer flex flex-row gap-0.5 text-raisin-black items-center text-body-2-normal pl-4 lg:hidden' onClick={() => back()}>
            <IconChevronRight width={22.5} height={22.5} />
            <span>بازگشت</span>
        </div>
    )
}
