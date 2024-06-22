'use client'

import React from 'react'
import { Button } from '@components'
import { IconArrowDownLeft } from '@tabler/icons-react'
import Link from 'next/link'

export const ButtonToAll = ({ title = 'همه آگهی ها', href = '/s/all' }: { title?: string, href?: string }) => {
    return (
        <Link href={href} className='flex flex-row gap-1 cursor-pointer hover:text-coral lg:hidden'>
            <Button iconSide='left' icon={IconArrowDownLeft}>
                {title}
            </Button>
        </Link>
    )
}
