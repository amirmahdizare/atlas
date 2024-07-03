'use client'
import { usePathname } from 'next/navigation'
import React from 'react'

export const Spacer = () => {

    const path = usePathname()

    if (path.startsWith('/property'))
        return (
            <div className='h-8 lg:hidden'></div>
        )
}
