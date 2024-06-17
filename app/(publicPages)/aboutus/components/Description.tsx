import React from 'react'
import { DESCRIPTION } from 'variables'

export const Description = () => {
    return (
        <div className='flex flex-col gap-4 px-1'>

            <div className='flex flex-row justify-center relative py-2'>
                <span className='text-h6-bolder text-raisin-black'>درباره دپارتمان املاک اطلس</span>
                <div className='h-[3px] w-8 bg-robin-egg-blue-00 rounded absolute left-1/2 -translate-x-1/2 bottom-0'></div>
            </div>

            <span className='text-ultra-violet text-body-2-normal leading-3'>
                {DESCRIPTION}
            </span>

        </div>
    )
}
