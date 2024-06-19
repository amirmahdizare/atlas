
import { Button } from '@components'
import { IconPhone } from '@tabler/icons-react'
import Image from 'next/image'
import React, { use } from 'react'
import { PropertyDetailType } from 'types'
import { ActionButton } from './components/ActionButton'
import Link from 'next/link'
import { NO_NAME_USER, SAMPLE_AVATAR } from 'variables'
import { createMediaUrl } from 'utils'

export const AgentInfo = ({ data: { user, agentNote } }: { data: PropertyDetailType }) => {

    const isUserAgent = false

    if (!!user) {
        const { avatar, id , firstName, lastName, phoneNumber } = user
        return (
            <div className='bg-seasalt rounded-xs p-1 flex flex-col gap-3'>
                <div className='flex flex-row gap-2 items-center  justify-between'>
                    <Link href={`/agent/${id}`} className='flex flex-row gap-1 items-center' prefetch={false}>

                        <div className='w-5 h-5 aspect-square rounded-circle relative '>
                            <Image fill className='object-cover rounded-circle' src={avatar ? createMediaUrl(avatar) : SAMPLE_AVATAR} alt={`تصویر مشاور ${firstName} ${lastName} | دپارتمان املاک اطلس`} />
                        </div>

                        <div className='flex flex-col gap-1.5'>
                            <span className='text-space-codet text-body-2-bolder line-clamp-1 ' title={`${firstName} ${lastName}`}>{firstName} {lastName ?? NO_NAME_USER}</span>
                            <span className='text-body-3-normal text-ultra-violet'>کارشناس ملک</span>
                        </div>
                    </Link>

                    <span className='sr-only'>شماره تماس مشاور {`${firstName} ${lastName}`} {phoneNumber} دپارتمان املاک اطلس</span>
                    <ActionButton phoneNumber={phoneNumber} />
                </div>

                {!!isUserAgent && <div className='flex flex-col gap-1.5'>
                    <span className='text-space-codet text-body-2-bolder'>یاداشت مشاور</span>

                    <p className='text-ultra-violet text-body-3-normal'>
                        {agentNote}
                    </p>

                </div>}


            </div>
        )
    }
    return <></>
}
