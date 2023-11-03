import React from 'react'
import photo from 'images/landingLeft.svg'

export const Suggest = () => {
    return (


            <div className='flex flex-row gap-2 text-h6-normal'>

                <div className='flex flex-col gap-1.5 text-center'>
                    <span className='text-ghost-white'>AMLAKATLAS</span>
                    <span className='text-coral text-h3-bolder'>پیشنهاد</span>
                    <span className='text-raisin-black text-h3-bolder'>اطلس</span>
                </div>

                <div className='flex flex-row gap-2 text-white'>

                    <div className='flex flex-col gap-4 items-end justify-end backdrop-brightness-50 rounded w-[120px] p-1' style={{ backgroundImage: `url(${photo.src})` }}>
                        <span className='text-body-3-bolder text-white line-cla mp-2 text-ellipsis overfl ow-hidden whitespace-pre-wrap'>فروش ویلا 115 متر</span>
                    </div>


                    <div className='flex flex-col gap-4 items-end justify-end brightne ss-75 rounded aspect-square object-cover w-[120px] p-1' style={{ backgroundImage: `url(${photo.src})` }}>
                        <span className='text-body-3-bolder text-white line-cl amp-2 text-ellipsis overflo w-hidden whitespace-pre-wrap'>فروش ویلا 115 مترsdfsdfdsfsdfsdfsdfsdfdssdfdsf</span>
                    </div>

                </div>
            </div>


    )
}
