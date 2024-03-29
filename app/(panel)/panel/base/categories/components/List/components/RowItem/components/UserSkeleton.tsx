import React from 'react'

export const UserSkeleton = () => {
    return (
        <div className='grid grid-cols-5 w-full h-4 gap-4  text-space-codet text-body-2-normal items-center animate-pulse  '>
            <div className='col-span-2 flex flex-row gap-1 items-center bg-gray-200 h-4 rounded-sm'>
            </div>

            {/* <div className='col-span-1'>{ad.propertyCount.toLocaleString()}</div> */}

            <span title='تماس' className='col-span-1 hover:text-coral flex flex-row items-center gap-0.5 w-full animate-pulse bg-gray-200 h-4 rounded-sm'>
            </span>            <span title='تماس' className='col-span-1 hover:text-coral flex flex-row items-center gap-0.5 w-full animate-pulse bg-gray-200 h-4 rounded-sm'>
            </span>

            <div className='col-span-1 flex flex-row gap-2 justify-center  animate-pulse bg-gray-200 h-4 rounded-sm'>

                {/* <div className='border rounded-circle bg-anti-flash-white-lighter cursor-pointer hover:bg-gray-200 transition-all text-raisin-black p-0.5 aspect-square relative' >

                </div> */}

            </div>

        </div>
    )
}
