'use client'
import React from 'react'
import { useCategorySection } from './hooks'
import { SingleUser } from './components/SingleCategory/SingleCategory'
import { ListSection } from './components/List/ListSection'

export const ClientPage = () => {

    const { mode } = useCategorySection()

    return (
        <div className='flex flex-col gap-2'>

            {mode == 'list' && <ListSection />}

            {mode != 'list' && <SingleUser />}

        </div>
    )
}
