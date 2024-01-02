'use client'
import React from 'react'
import { useCitiesSection } from './hooks'
import { List } from './components/List/List'

export const ClientPage = () => {

    const { dispatch, mode } = useCitiesSection()

    return (
        <div className='flex flex-col gap-2'>

            {mode == 'list' ? <List /> : <>Single City</>}

        </div>
    )
}
