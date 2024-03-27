'use client'
import React from 'react'
import {  usePermissionsSection } from './hooks'
import { Single } from './components/Single/Single'
import { ListSection } from './components/List/ListSection'

export const ClientPage = () => {

    const { mode } = usePermissionsSection()

    return (
        <div className='flex flex-col gap-2'>

            {mode == 'list' && <ListSection />}

            {mode != 'list' && <Single />}

        </div>
    )
}
