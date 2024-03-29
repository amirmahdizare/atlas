'use client'
import React from 'react'
import { useAdvisersSection } from './hooks'
import { SingleUser } from './components/SingleCategory/SingleCategory'
import { ListSection } from './components/List/ListSection'

export const ClientPage = () => {

    const { mode } = useAdvisersSection()

    return (
        <div className='flex flex-col gap-2'>

            {mode == 'list' && <ListSection />}

            {mode != 'list' && <SingleUser />}

        </div>
    )
}
