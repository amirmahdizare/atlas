'use client'

import React from 'react'
import { List } from './components/List/List'
import { useCorpSection } from './hooks'
import { SingleCorp } from './components/SingleCorp/SingleCorp'

export const ClientPage = () => {

    const { mode , corpId  , dispatch} = useCorpSection()

    return (
        <div className='flex flex-col gap-2 max-h-full'>


            {mode == 'list' && <List />}

            {mode != 'list' && <SingleCorp mode={mode} blogId={corpId?.toString()} />}

        </div>
    )
}
