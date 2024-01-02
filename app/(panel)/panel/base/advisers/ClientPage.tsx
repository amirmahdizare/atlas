'use client'
import React from 'react'
import { useAdvisersSection } from './hooks'
import { List } from './components/List/List'
import { SingleAdviser } from './components/SingleAdviser/SingleAdviser'

export const ClientPage = () => {

    const { mode } = useAdvisersSection()

    return (
        <div className='flex flex-col gap-2'>

            {mode == 'list' && <List />}

            {mode != 'list' && <SingleAdviser />}

        </div>
    )
}
