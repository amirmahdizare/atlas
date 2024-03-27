'use client'
import React from 'react'
import { useCitiesSection } from './hooks'
import { ListSection } from './components/ListSection'

export const ClientPage = () => {

    const { dispatch, mode } = useCitiesSection()

    return (
        <div className='flex flex-col gap-2'>

            {mode == 'list' ? <ListSection /> : <>Single City</>}

        </div>
    )
}
