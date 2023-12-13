import { VerifyTick } from '@icons'
import React from 'react'

export const Item = ({ description, title }: { title: string, description: string }) => {
    return (
        <div className='bg-white p-2 flex flex-col gap-1 flex-1 items-center'>

            <div className='flex flex-row gap-1 items-center'>
                <VerifyTick />
                <span className='text-raisin-black text-body-2-bolder'>{title}</span>

            </div>

            <span className='text-gray-500 font-bold text-body-3-normal leading-3 text-center '>
                {description}
            </span>

        </div>
    )
}
