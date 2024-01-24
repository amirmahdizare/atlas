'use client'
import React from 'react'
import { useRequestSection } from './hooks'
import { List } from './components/List/List'
import { SingleRequest } from './components/SingleRequest/SingleRequest'

export const ManageRequests = () => {

    const { mode } = useRequestSection()

    return (
        <div className='flex flex-col gap-2'>

            {mode == 'list' && <List />}

            {mode != 'list' && <SingleRequest />}

        </div>
    )
}
