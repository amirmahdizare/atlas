import React from 'react'

export default function loading() {
    return (
        <div className='grid grid-cols-5 gap-2 lg:gap-2 p-1.5 '>
            <div className='order-1 col-span-5 lg:block hidden h-6 bg-gray-100 animate-pulse rounded'>
            </div>

            <div className='order-1 col-span-5  lg:hidden h-6 bg-gray-100 animate-pulse rounded'>
            </div>

            <div className='order-2 flex flex-col gap-4 lg:gap-5 col-span-5 lg:col-span-3'>
                <div className='lg:hidden'>
                    <div className='bg-gray-50 animate-pulse rounded w-full aspect-video'>

                    </div>
                </div>
                <div className='bg-gray-50 rounded h-10 animate-pulse'></div>
                <div className='bg-gray-50 rounded h-10 animate-pulse'></div>

                <div className='bg-gray-50 rounded h-32 animate-pulse'></div>

                <div className='bg-gray-50 rounded h-4 animate-pulse'></div>

            </div>

            <div className='order-3 flex flex-col gap-4 col-span-5 lg:col-span-2'>
                <div className='lg:flex hidden'>
                    <div className='bg-gray-50 rounded animate-pulse  w-full aspect-video'>

                    </div>
                </div>
                <div className=' fixed w-full bottom-0  h-16 left-0 py-1.5 z-20 border-t-2 border-anti-flash-white-lighter lg:border-none lg:pb-0 bg-seasalt lg:relative'>

                </div>
                <div className='bg-gray-50 rounded h-10 animate-pulse'></div>
            </div>
        </div>
    )
}
