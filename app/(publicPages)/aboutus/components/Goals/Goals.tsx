import React from 'react'
import { goals } from './data.mock'
import { Item } from './components/Item'

export const Goals = () => {
    return (
        <div className='flex flex-col gap-4'>

            <div className='flex flex-row justify-center relative py-2'>
                <span className='text-h6-bolder text-raisin-black'>اهداف دپارتمان املاک اطلس</span>
                <div className='h-[3px] w-8 bg-robin-egg-blue-00 rounded absolute left-1/2 -translate-x-1/2 bottom-0'></div>
            </div>

            <div className='flex flex-col md:flex-row gap-2 px-2'>
                {goals.map(item => <Item {...item} />)}

            </div>

        </div>
    )
}
