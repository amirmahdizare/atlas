'use client'
import React, { useState } from 'react'
import { Button, Menu } from '@components'
import { IconChevronDown, IconUser } from '@tabler/icons-react'

export const UserStatus = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const isLoggedIn = true

    if (!isLoggedIn)
        return <Button bgColor='white' icon={IconUser}  textColor='secondary'>ورود / ثبت نام</Button>

    return (
        <div className='flex flex-row gap-1 items-center relative border border-gray-100 rounded-[4px] p-1 cursor-pointer'
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        // onMouseOut={() => setIsOpen(false)}
        >
            <IconUser className='text-robin-egg-lighter' />
            <span>امیر زارع</span>
            <IconChevronDown width={15} height={15} className={isOpen ? 'rotate-180' : ''} />

            <div className={` mt-1  top-full whitespace-nowrap text-body-3-normal right-1/2   translate-x-1/2 shadow border p-1 rounded bg-white absolute  ${isOpen ? '' : 'opacity-0'}`}>
                <Menu onClickLink={()=>{}} />
            </div>

        </div>
    )
}
