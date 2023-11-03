import React from 'react'
import photo from 'images/landingLeft.svg'

export const Suggest = () => {


    const sample = <div className='flex flex-col gap-4 items-end justify-end brightne ss-75 rounded aspect-square object-cover w-[100px] lg:w-[120px] p-1 shrink-0' style={{ backgroundImage: `url(${photo.src})` }}>
        <span className='text-body-3-bolder text-white line-cl amp-2 text-ellipsis overflo w-hidden whitespace-pre-wrap'>فروش ویلا 115 متر</span>
    </div>
    return (


        <div className='grid grid-cols-3 lg:grid-cols-5 text-h6-normal gap-3 lg:gap-1 items-center lg:items-start '>

            <div className='col-span-3 lg:col-span-1 flex flex-row lg:flex-col gap-0.5 lg:gap-1.5 text-center'>
                <span className='text-ghost-white lg:block hidden'>AMLAKATLAS</span>
                <span className='text-coral text-h3-bolder'>پیشنهـــاد</span>
                <span className='text-raisin-black text-h3-bolder'>اطلــــس</span>
            </div>

            <div className='flex flex-row col-span-3 lg:col-span-4 gap-2 text-white overflow-auto '>
                {sample}
                {sample}
                {sample}
                {sample}
                {sample}
                {sample}

            </div>
        </div>


    )
}
