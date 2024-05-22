'use client'
import React, { useState } from 'react'
import { Menu as MenuIcon } from 'icons'
import logofull from 'images/logo-full.svg'
import Image from 'next/image'
import { Menu } from '../Menu/Menu'
import { IconArrowBack, IconPower, IconX } from '@tabler/icons-react'
import ClickAwayListener from 'react-click-away-listener';
import logo from 'images/atlaslight.svg'
import Link from 'next/link'
import { createMediaUrl, translateRole } from 'utils'
import { useUserInfo } from '@hooks'
import { Divider, Exit } from '@components'

export const StickyMobileHeader = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const { data, isError, isLoading } = useUserInfo()


    return (
        <div className='flex flex-row gap-4 shadow items-center p-1.5 justify-around fixed lg:hidden top-0 right-0 w-full bg-white z-20'>

            <div className='cursor-pointer   p-0.1' onClick={() => setIsOpen(!isOpen)}> <MenuIcon /></div>
            <Link href={'/'}><Image src={logofull} className='h-6' alt='لوگوی دپارتمان املاک اطلس' /></Link>
            <div className='cursor-pointer hover:bg-gray-50 rounded-circle opacity-0 -z-10'> <MenuIcon /></div>

            <div className={`h-screen w-screen backdrop-brightness-50 fixed top-0 left-0 z-[2] ${isOpen ? 'opacity-1' : 'opacity-0 pointer-events-none'}`}>

            </div>
            <ClickAwayListener onClickAway={() => setIsOpen(false)}>

                <div className={`flex flex-col items-start p-2 gap-2 shadow transition-all duration-300 fixed right-0 z-[3] rounded-b h-[calc(100vh-100px)] top-0 bg-white ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>

                    <div className='flex flex-row gap-2 justify-between items-center'>
                        <Image src={logo} className='w-5 h-5' alt='لوگوی دپارتمان اطلس' />
                        <div className='cursor-pointer float-left border rounded-circle p-1' onClick={() => setIsOpen(!isOpen)}><IconX width={20} height={20} /></div>
                    </div>

                    <Divider />

                    {data?.data && <div className='flex flex-row gap-2 items-center'>

                        <img src={createMediaUrl(data.data.avatar)} className='rounded-circle w-5' />
                        <div className='flex-col flex gap-1'>
                            <span className='text-raisin-black text-h5-bolder'>{data.data.firstName} {data.data.lastName}</span>
                            <span className='text-ultra-violet text-body-3-normal'>{translateRole(data.data.role.name)}</span>
                        </div>

                    </div>}

                    <Divider />

                    <Menu onClickLink={() => setIsOpen(false)} />
                    <Divider />

                    {!!data?.data && <Exit><div className='flex flex-row gap-1 border rounded border-red-500 text-red-500  items-center w-fit px-1.5 py-0.5'>
                        <IconPower />
                        <span>خروج</span>
                    </div></Exit>}
                </div>
            </ClickAwayListener>

        </div>
    )

}
