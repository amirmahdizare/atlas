'use client'
import React from 'react'
import {  usePermissionsSection } from './hooks'
import { SingleUser } from './components/SingleUser/SingleUser'
import { ListSection } from './components/List/ListSection'

export const ClientPage = () => {

    const { mode } = usePermissionsSection()

    return (
        <div className='flex flex-col gap-2'>

            {mode == 'list' && <ListSection />}

            {mode != 'list' && <SingleUser />}

        </div>
    )
}
