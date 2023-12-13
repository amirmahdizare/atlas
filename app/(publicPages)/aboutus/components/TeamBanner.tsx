import React from 'react'
import Image from 'next/image'
import teamPhoto from 'images/team.png'

export const TeamBanner = () => {
    return (
        <div className='w-full relative h-[250px]'>

            <Image alt='تیم مشاوران دپارتمان املاک اطلس' src={teamPhoto} className=' object-cover  max-h-[230px] ' fill />

            <div className='absolute left-1/2 -translate-x-1/2 bottom-[15%]   bg-[rgba(255,255,255,0.85)] flex flex-row justify-center p-3 lg:p-3 lg:px-6'>

                <span className='text-h3-bolder text-raisin-black opacity-100 z-20 whitespace-nowrap'>تیم ما همیشه همراه شما هستن</span>

                <div className='absolute left-1/2 -translate-x-1/2 h-[2px] bg-mint-green w-8 bottom-0'></div>

            </div>
        </div>
    )
}
