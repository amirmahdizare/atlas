'use client'
import React from 'react'
import { Button } from '../../../Button/Button'
import { IconArrowDownLeft, IconPlus } from '@tabler/icons-react'
import { useUserInfo } from '@hooks'
import { isUserAgent, translateRole } from 'utils'
import { Exit } from '@components'

export const ActionButtons = () => {

    const { data, isError, isLoading } = useUserInfo()


    if (isError)
        return (
            <div className='flex flex-row gap-2'>
                <Button
                    icon={IconArrowDownLeft}
                    iconSide='left' bgColor='gray' textColor='textGray' href='/requestproperty'>درخواست ملک</Button>
                <Button
                    icon={IconPlus}
                    bgColor='secondary'
                    href='/addproperty'
                >ثبت آگهی</Button>
            </div>
        )

    else if (data?.data) {
        const { role: { name } } = data.data

        if (isUserAgent(name)) {
            return <div className='flex flex-row gap-2 items-center'>
                <Button
                    // icon={IconArrowDownLeft}
                    iconSide='left' bgColor='gray' textColor='textGray' href='/panel'>رفتن به پنل {translateRole(name)}</Button>
                <Button
                    // icon={IconPlus}
                    bgColor='secondary'
                    href='/panel/property/list'
                >ثبت آگهی</Button>
                <Exit/>
            </div>
        }

        else
            return (
                <div className='flex flex-row gap-2 items-center'>
                    <Button
                        icon={IconArrowDownLeft}
                        iconSide='left' bgColor='gray' textColor='textGray' href='/requestproperty'>درخواست ملک</Button>
                    <Button
                        icon={IconPlus}
                        bgColor='secondary'
                        href='/addproperty'
                    >ثبت آگهی</Button>
                    <Exit/>
                </div>
            )


    }
    return <div className='flex flex-row gap-2'>
        <div className='bg-gray-50 animate-pulse h-5 w-14 rounded'></div>
        <div className='bg-gray-50 animate-pulse h-5 w-14 rounded'></div>
    </div>
}
