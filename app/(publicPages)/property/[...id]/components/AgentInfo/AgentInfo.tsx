
import { Button } from '@components'
import { IconPhone } from '@tabler/icons-react'
import Image from 'next/image'
import React from 'react'
import { PropertyDetailType } from 'types'
import { ActionButton } from './components/ActionButton'
import Link from 'next/link'

export const AgentInfo = ({ data: { agentInfo: { avatar, id, name, phoneNumber }  , agentNote} }: { data: PropertyDetailType }) => {

    const isUserAgent = false
    return (
        <div className='bg-seasalt rounded-xs p-1 flex flex-col gap-3'>
            <div className='flex flex-row gap-2 items-center  justify-between'>
                <Link href={`/agent/${id}`} className='flex flex-row gap-1 items-center' prefetch={false}>

                    <div className='w-5 h-5 aspect-square rounded-circle relative '>
                        <Image fill className='object-cover rounded-circle' src={'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699142400&semt=ais'} alt={`تصویر مشاور ${name} | دپارتمان املاک اطلس`} />
                    </div>

                    <div className='flex flex-col gap-1.5'>
                        <span className='text-space-codet text-body-2-bolder line-clamp-1 ' title={name}>{name}</span>
                        <span className='text-body-3-normal text-ultra-violet'>کارشناس ملک</span>
                    </div>
                </Link>

                <span className='sr-only'>شماره تماس مشاور {name} {phoneNumber} دپارتمان املاک اطلس</span>
                <ActionButton phoneNumber={phoneNumber} />
            </div>

            {!!isUserAgent && <div className='flex flex-col gap-1.5'>
                <span  className='text-space-codet text-body-2-bolder'>یاداشت مشاور</span>

                <p className='text-ultra-violet text-body-3-normal'>
                    {agentNote}
                </p>

            </div>}


        </div>
    )
}
