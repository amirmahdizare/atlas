'use client'
import React from 'react'
import { Button } from '@components'
import { IconPlus, IconUsers } from '@tabler/icons-react'
import { useAdvisersSection } from './hooks'
import { List } from './components/List/List'

export const ClientPage = () => {

    const { mode, dispatch } = useAdvisersSection()

    return (
        <div className='flex flex-col gap-2'>



            {mode == 'list' && <List />}

            {mode != 'list' && <>تک مشاور</>}


        </div>
    )
}
