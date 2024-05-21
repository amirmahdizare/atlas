import React, { useState } from 'react'

import { IconMenu, IconMenu2, IconUser, IconX } from '@tabler/icons-react'
import { Menu } from '../Menu/Menu'
import fullogo from 'images/logo-full.svg'
import Image from 'next/image'
import { Button, Divider } from '@components'
import Link from 'next/link'
import ClickAwayListener from 'react-click-away-listener'
import { useUserInfo } from '@hooks'
import { createMediaUrl, translateRole } from 'utils'


export const ResponsiveMenu = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false)


    const { data, isError } = useUserInfo()

    const isUserLoggedIn = !isError

    
    if (data?.data) {
        
        const  { role: { name: roleName }, avatar, lastName, firstName }  = data.data

        return (
            <>
                <IconMenu2 className='cursor-pointer' onClick={() => setIsOpen(true)} />

                <div className={`fixed right-0 top-0 w-screen h-screen  duration-200 transition-all z-10 ${!isOpen ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-1 backdrop-brightness-50'} `}>

                    <ClickAwayListener onClickAway={() => setIsOpen(false)}>

                        <div className='bg-white flex flex-col gap-2 w-fit rounded-l-lg max-h-full overflow-auto p-2 items-stretch relative'>

                            <IconX className='cursor-pointer absolute top-2  left-2 text-gray-500 ' onClick={() => setIsOpen(false)} />

                            <Image src={fullogo} className='max-h-4' alt='لوگوی اطلس' />

                            <Divider />




                            {
                                !isUserLoggedIn
                                    ? <Link href={'/login'} className='flex-1 w-full flex'><Button fullWidth icon={IconUser}>ورود به اطلس</Button></Link>
                                    : <div className='flex flex-row gap-2 items-center'>

                                        <img src={createMediaUrl(avatar)} className='rounded-circle w-5' />
                                        <div className='flex-col flex gap-1'>
                                            <span className='text-raisin-black text-h5-bolder'>{firstName} {lastName}</span>
                                            <span className='text-ultra-violet text-body-3-normal'>{translateRole(roleName)}</span>
                                        </div>

                                    </div>
                            }

                            <Divider />

                            <Menu onClick={() => setIsOpen(false)} />

                        </div>

                    </ClickAwayListener>
                </div>
            </>
        )
    }

    return <>Loading</>
}
