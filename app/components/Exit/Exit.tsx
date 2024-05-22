'use client'
import { IconPower } from '@tabler/icons-react'
import { redirect, useRouter } from 'next/navigation'
import React, { ReactNode } from 'react'
import { clearToken } from 'utils'

export const Exit = ({ children }: { children?: ReactNode }) => {

    const router = useRouter()


    const handleExit = () => {

        if (prompt('آیا مطمئن هستید که میخواهید خارج شوید؟', 'بله')) {
            clearToken()
            window.location.href='/'
            // router.push('/')
        }
    }
    return (
        <div title='خروج' className={`flex shrink-0 aspect-square w-4 h-4 flex-row  items-center justify-center rounded-circle p-0.5 cursor-pointer ${children ? '' : 'bg-red-500'}`} onClick={handleExit}>
            {children ?? <IconPower className=' text-white' />}
        </div>
    )
}
