import { IconArrowDownLeft, IconPhoneCall } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'
import { UserInfoType } from 'types'
import { createMediaUrl, createPhoneCallLink } from 'utils'
import { NO_NAME_USER } from 'variables'

export const AdviserCard = ({ avatar, firstName, lastName, userName, phoneNumber, id }: UserInfoType<string>) => {

    const agentName = firstName || lastName ? `${firstName}  ${lastName}` : NO_NAME_USER

    return (
        <Link className='flex flex-col rounded gap-2 overflow-hidden items-stretch bg-white hover:shadow my-0.5 relative' href={`/agent/${id}/${agentName}`}>

            <div className='relative'>
                <img src={createMediaUrl(avatar)} className='aspect-square w-full object-cover ' />
                <div className='rounded-circle bg-coral p-0.5 lg:p-1 aspect-square border-2 border-white flex flex-row absolute text-white left-3 bottom-0 translate-y-1/2'>
                    <IconArrowDownLeft width={25} height={25} />
                </div>
            </div>

            <span className='text-body-2-bolder text-raisin-black px-2'>
                {agentName}
            </span>

            <div className='flex flex-row gap-2 items-center px-2'>
                <div className='bg-anti-flash-white-lighter flex-1 h-[1px]'></div>
                <span className='text-mint-green text-body-3-normal'>کارشناس املاک</span>

            </div>

            <a className='flex flex-row gap-2 items-center px-2 pb-1 pt-0 justify-between' onClick={(e) => e.stopPropagation()} href={createPhoneCallLink(phoneNumber)}>
                <span className='text-gray-400 text-[10px] whitespace-nowrap '>تماس</span>
                <span className='text-raisin-black'>{phoneNumber}</span>
                <span className='bg-anti-flash-white-lighter p-1 rounded hover:bg-green-300 transition-all' >
                    <IconPhoneCall width={15} height={15} />
                </span>
            </a>






        </Link>
    )
}
