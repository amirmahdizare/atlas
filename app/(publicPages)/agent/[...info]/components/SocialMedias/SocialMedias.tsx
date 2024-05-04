import React from 'react'
import { socialMedias } from './data.mock'
import { Item } from './Item'

export const SocialMedias = () => {
    return (
        <div className='flex flex-col gap-4  overflow-hidden '>

            <div className='flex flex-col gap-2'>
                <div className='flex flex-row justify-center relative py-2'>
                    <span className='text-h6-bolder text-raisin-black'>با کارشناس در شبکه های اجتماعی همراه باشید.</span>
                    <div className='h-[3px] w-8 bg-robin-egg-blue-00 rounded absolute left-1/2 -translate-x-1/2 bottom-0'></div>
                </div>
                <span className='text-body-2-bolder text-ultra-violet text-center'>خانه دلخواه تان را به کمک مشاورین متخصص اطلس پیدا کنید.</span>
            </div>

            <div className='grid grid-cols-2 gap-4 lg:grid-cols-4 items-center justify-center'>

                {socialMedias.map(item => <Item {...item} />)}

            </div>

        </div>
    )
}
