'use client'
import { Button } from '@components'
import Link from 'next/link'
import React from 'react'
import photo from 'images/aboutus.png'
import Image from 'next/image'
import vector from 'images/buildingVector.svg'
import { IconArrowDownLeft, IconBell, IconCopy, IconPhoneCall } from '@tabler/icons-react'
// import avatar from 'images/agents/dadash.png'
import { UserFullInfo } from 'types'
import { NO_NAME_USER } from 'variables'
import { copyLink, createMediaUrl, createPhoneCallLink } from 'utils'
import { toast } from 'react-toastify'

export const HeroSection = ({ data }: { data: UserFullInfo }) => {

    const { firstName, lastName, phoneNumber, avatar } = data

    const agentName = firstName || lastName ? `${firstName}  ${lastName}` : NO_NAME_USER

    return (
        <div className='grid grid-cols-3 relative items-center justify-center bg-white'>
            <div className=' col-span-3 md:col-span-2 flex flex-col gap-4 p-1.5 lg:p-4 order-2 lg:order-1'>

                <div className='flex flex-col gap-2'>
                    <span className='text-h3-bolder leading-4 whitespace-break-spaces flex flex-col lg:flex-row lg:gap-2 gap-1'>
                        <div className='flex flex-row gap-0.5 items-center justify-between'>

                            <span className='text-space-codet'>{agentName}</span>

                            <div className='flex flex-row gap-1 items-center text-body-1-normal lg:text-body-2-normal  p-1.5 rounded lg:hidden'>
                                <Link href={createPhoneCallLink(phoneNumber)} className='text-gray-700 font-semibold'>{phoneNumber}</Link>
                                <IconCopy className='cursor-pointer text-gray-500' onClick={() => {
                                    copyLink(phoneNumber)
                                    toast.success('شماره مشاور با موفقیت کپی شد')
                                }} />

                            </div>

                        </div>
                        <span className='text-robin-egg'>کارشناس دپارتمان اطلس</span>
                    </span>
                    <p className='leading-3 text-ultra-violet text-h6-normal'>
                        <span>خانه دلخواهتان را به کمک مشاور {agentName}  </span>
                        <span> پیدا کنید </span>
                    </p>

                    {/* <p className='text-body-2-normal text-ultra-violet leading-3'>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،
                    </p> */}

                </div>

                <div className='flex flex-row gap-2   items-start lg:items-center'>


                    <div className='flex flex-col lg:flex-row gap-2 items-center'>

                        <div className=' flex-row gap-2 items-center text-body-1-normal lg:text-body-2-normal border border-gray-200 p-1.5 rounded hidden lg:flex'>
                            <Link href={createPhoneCallLink(phoneNumber)} className='text-gray-700 font-semibold'>{phoneNumber}</Link>
                            <IconCopy className='cursor-pointer text-gray-500' onClick={() => {
                                copyLink(phoneNumber)
                                toast.success('شماره مشاور با موفقیت کپی شد')
                            }} />

                        </div>
                        <a href={createPhoneCallLink(phoneNumber)}><Button bgColor='secondary' icon={IconArrowDownLeft} textColor='white' iconSide='left' href='requestproperty'>تماس با مشاور</Button></a>



                    </div>

                    <Link href={'#properties'}><Button bgColor='gray' icon={IconBell} textColor='dark' iconSide='left' >آگهی ها</Button></Link>

                </div>


            </div>

            <div className=' col-span-3 md:col-span-1 relative flex flex-row justify-center z-[2] p-4 order-1 lg:order-2 '>

                <img alt='درباره ما | دپارتمان املاک اطلس' src={createMediaUrl(avatar)} className='rounded-lg aspect-square max- w-full lg:w-full  object-cover  max-h-[250px] max-w-[250px] md:max-w-none md:max-h-none' />

            </div>

            {/* <Image alt='وکتور' src={vector} className='absolute lg:-left-20 -bottom-8  ' /> */}

        </div>
    )
}
