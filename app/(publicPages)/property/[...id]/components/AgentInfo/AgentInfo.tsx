'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { PropertyDetailType } from 'types'
import { ActionButton } from './components/ActionButton'
import Link from 'next/link'
import { NO_NAME_USER, SAMPLE_AVATAR } from 'variables'
import { copyLink, createMediaUrl, createPhoneCallLink } from 'utils'
import { Button, Modal } from '@components'
import { IconArrowUp, IconArrowUpRight, IconCopy } from '@tabler/icons-react'
import { toast } from 'react-toastify'

export const AgentInfo = ({ data: { user, agentNote } }: { data: PropertyDetailType }) => {

    const [open, setOpen] = useState<boolean>(false)

    if (!!user) {

        const { avatar, id, firstName, lastName, phoneNumber } = user

        const pageHref = `/agent/${id}/${firstName.replaceAll(' ', '-')}-${lastName.replaceAll(' ', '-')}`

        return (
            <div className='bg-seasalt rounded-xs p-1 flex flex-col gap-3 '>

                <div className='flex flex-row gap-2 items-center  justify-between'>

                    <div className='flex flex-row gap-1 items-center cursor-pointer hover:text-coral' onClick={() => setOpen(true)} >

                        <div className='w-6 h-6 aspect-square rounded-circle relative '>
                            <Image fill className='object-cover rounded-circle' src={avatar ? createMediaUrl(avatar) : SAMPLE_AVATAR} alt={`تصویر مشاور ${firstName} ${lastName} | دپارتمان املاک اطلس`} />
                        </div>

                        <div className='flex flex-col gap-1.5'>
                            <span className='text-space-codet text-body-1-bolder line-clamp-1 lg:text-body-2-bolder hover:text-coral' title={`${firstName} ${lastName}`}>{firstName} {lastName ?? NO_NAME_USER}</span>
                            <span className='text-body-2-normal lg:text-body-3-normal text-ultra-violet hover:text-coral'>کارشناس ملک</span>
                        </div>

                    </div>

                    <Modal
                        open={open}
                        setOpen={setOpen}
                        fitHeight
                        fitWidth
                    >

                        <div className='flex flex-col gap-3 items-center justify-center p-1'>
                            <img src={avatar ? createMediaUrl(avatar) : SAMPLE_AVATAR} className='rounded-circle w-24 aspect-square object-cover' />

                            <span className='font-bold text-h3-bolder lg:text-body-1-bolder'>{firstName} {lastName}</span>

                            <div className='flex flex-row gap-2 items-center text-body-1-normal lg:text-body-2-normal '>
                                <Link href={pageHref} className='text-gray-700 font-semibold'>{phoneNumber}</Link>
                                <IconCopy  className='cursor-pointer text-gray-500' onClick={() => {
                                    copyLink(phoneNumber)
                                    toast.success('شماره مشاور با موفقیت کپی شد')
                                }} />

                            </div>

                            <div className='flex flex-row gap-1 text-body-1-normal lg:text-body-2-normal items-center'>
                                <ActionButton isPopUp phoneNumber={phoneNumber} />
                                <Link href={pageHref}><Button bgColor='secondary' icon={IconArrowUpRight}>صفحه مشاور</Button></Link>

                            </div>



                        </div>

                    </Modal>

                    <span className='sr-only'>شماره تماس مشاور {`${firstName} ${lastName}`} {phoneNumber} دپارتمان املاک اطلس</span>

                    <ActionButton isPopUp={false} phoneNumber={phoneNumber} />

                </div>


            </div>
        )
    }
    return <></>
}
