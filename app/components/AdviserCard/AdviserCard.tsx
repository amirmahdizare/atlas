import { IconPhoneCall } from '@tabler/icons-react'
import React from 'react'
import { AdviserType } from 'types'

export const AdviserCard = ({ img, name, phoneNumber, username, title }: AdviserType) => {
    return (
        <div className='flex flex-col rounded gap-2 overflow-hidden items-stretch bg-white'>

            <img src={img} className='aspect-square w-full' />

            <span className='text-body-2-bolder text-raisin-black px-2'>
                {name}
            </span>

            <div className='flex flex-row gap-2 items-center px-2'>
                <div className='bg-anti-flash-white-lighter flex-1 h-[1px]'></div>
                <span className='text-mint-green text-body-3-normal'>کارشناس املاک</span>

            </div>

            <div className='flex flex-row gap-2 items-center p-2 pt-0 justify-between'>
                <span className='text-gray-400 text-[10px] whitespace-nowrap '>تماس با کارشناس</span>
                <span className='text-raisin-black'>{phoneNumber}</span>
                <a className='bg-anti-flash-white-lighter p-1 rounded hover:bg-green-300 transition-all' href={`tel:${phoneNumber}`}>
                    <IconPhoneCall width={15} height={15} />
                </a>
            </div>




        </div>
    )
}
