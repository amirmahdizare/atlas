'use client'
import { Button } from '@components'
import { IconFile, IconPlus } from '@tabler/icons-react'
import React from 'react'
import { List } from './components/List/List'
import { usePropertySection } from './hooks'
import { SingleProperty } from './components/SingleProperty/SingleProperty'

export const PropertyManagement = ({ me }: { me: boolean }) => {

    const { mode, proprtyId, dispatch } = usePropertySection()

    return (
        <div className='flex flex-col gap-2 max-h-full'>


            <div className={`${mode == 'list' ? '' : 'hidden'}`}>   <List /></div>

            <div className={`${mode != 'list' ? '' : 'hidden'}`}>  <SingleProperty mode={mode == 'list' ? 'add' : 'edit'} propertyId={proprtyId} /></div>

        </div>
    )
}
