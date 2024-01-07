'use client'
import { Button } from '@components'
import { IconFile, IconPlus } from '@tabler/icons-react'
import React from 'react'
import { List } from './components/List/List'
import { usePropertySection } from './hooks'
// import { SingleProperty } from './components/SingleProperty/SingleProperty'

export const BlogManagement = ({ me }: { me: boolean }) => {

    const { mode, proprtyId  , dispatch} = usePropertySection()

    return (
        <div className='flex flex-col gap-2 max-h-full'>


            {mode == 'list' && <List />}

            {/* {mode != 'list' && <SingleProperty mode={mode} propertyId={proprtyId} />} */}

        </div>
    )
}
