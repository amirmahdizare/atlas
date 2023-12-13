import { IconArrowDownLeft } from '@tabler/icons-react'
import React from 'react'
import { SocialMediaType } from 'types'

export const Item = ({ enTitle, icon: Icon, link, title }: SocialMediaType) => {
    return (
        <a target='_blank' href={link} className='flex flex-row gap-4 items-center justify-around md:justify-center'>
            <div className='bg-anti-flash-white-lighter p-1 aspect-square rounded-circle'>
                <Icon width={25} height={25} />
            </div>

            <div className='flex flex-col gap-1.5'>
                <span className='text-raisin-black text-body-2-bolder'>{title}</span>

                <span className='text-body-3-normal text-french-gray'>{enTitle.toLocaleUpperCase()}</span>

            </div>

            <IconArrowDownLeft width={25} height={25} className='text-robin-egg-blue-00' />


        </a>
    )
}
