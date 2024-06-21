'use client'
import { Button } from '@components'
import { IconFile, IconPlus } from '@tabler/icons-react'
import React from 'react'
import { List } from './components/List/List'
import { usePropertySection } from './hooks'
import { SingleProperty } from './components/SingleProperty/SingleProperty'

export const PropertyManagement = () => {

    const { mode, proprtyId, dispatch } = usePropertySection()

    return (
        <div className='flex flex-col gap-2 max- h-full'>


            <div className={`${mode == 'list' ? 'flex flex-col h-full' : 'hidden'}`}>   <List /></div>

            <div className={`${mode != 'list' ? '' : 'hidden'}`}>  <SingleProperty  propertyId={proprtyId} /></div>

        </div>
    )
}
