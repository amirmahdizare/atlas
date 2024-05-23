'use client'
import React, { useState } from 'react'
// import { Button, Menu } from '../../../index'
import { Button } from '../.../../../../Button/Button'
import { Menu } from '../.../../../../Menu/Menu'
import { IconChevronDown, IconUser } from '@tabler/icons-react'
import { useUserInfo } from '@hooks'
import Link from 'next/link'
import { SAMPLE_AVATAR, agentRoles } from 'variables'
import { createMediaUrl, isUserAgent } from 'utils'

export const UserStatus = () => {

    const { data, isError, isLoading } = useUserInfo()

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const isLoggedIn = !isError

    if (!isLoggedIn && !isLoading)
        return <Button bgColor='primaryLighter' icon={IconUser} href='/login'>ورود / ثبت نام</Button>

    else if (data) {

        const { lastName, firstName, phoneNumber, avatar, role: { name: roleName } } = data.data

        // if (isUserAgent(data.data.role.name) )
        return (
            <Link href={ '/dashboard'} className='flex flex-row gap-1 items-center relative border border-gray-100 rounded-[4px] p-1 cursor-pointer'
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
            // onMouseOut={() => setIsOpen(false)}
            >
                {/* <IconUser className='text-robin-egg-lighter' /> */}

                <img src={isUserAgent(roleName) ? createMediaUrl(avatar) : SAMPLE_AVATAR} className='w-3 h-3 rounded-circle' />

                <span className='line-clamp-1 whitespace-nowrap text-ellipsis'> {isUserAgent(roleName) ? `${firstName} ${lastName}` : `کاربر ${phoneNumber}`} </span>

                {!isUserAgent(roleName) && <>
                    <IconChevronDown width={15} height={15} className={isOpen ? 'rotate-180' : ''} />

                    <div className={` mt-1  top-full whitespace-nowrap text-body-3-normal right-1/2   translate-x-1/2 shadow border p-1 rounded bg-white absolute  ${isOpen ? '' : 'opacity-0'}`}>
                        <Menu onClickLink={() => { }} />
                    </div></>}

            </Link>
        )

        return <>User</>

    }
    return <div className='bg-gray-50 animate-pulse h-5 w-14 rounded'></div>
}
