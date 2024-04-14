import React, { useState } from 'react'

import { IconMenu, IconMenu2, IconUser, IconX } from '@tabler/icons-react'
import { Menu } from '../Menu/Menu'
import fullogo from 'images/logo-full.svg'
import Image from 'next/image'
import { Button, Divider } from '@components'
import Link from 'next/link'
import ClickAwayListener from 'react-click-away-listener'


export const ResponsiveMenu = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const isUserLoggedIn = true

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
                                    <img src='https://files.namnak.com/users/sf/aup/202303/96_pics/%D9%85%D8%AD%D9%85%D8%AF%D8%B1%D8%B6%D8%A7-%DA%AF%D9%84%D8%B2%D8%A7%D8%B1.jpg' className='w-7 aspect-square rounded-circle' />
                                    <span className='text-h5-bolder text-ellipsis overflow-hidden line-clamp-1'>امیرزارع</span>
                                </div>
                        }

                        <Divider />

                        <Menu onClick={()=>setIsOpen(false)} />

                    </div>

                </ClickAwayListener>
            </div>
        </>
    )
}
