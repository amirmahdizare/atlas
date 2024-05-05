'use client'
import React, { useEffect } from 'react'
import { useUsersSection } from './hooks'
import { SingleUser } from './components/SingleUser/SingleUser'
import { ListSection } from './components/List/ListSection'

export const UserManagement = ({ type }: { type: 'agent' | 'user' }) => {

    const { mode, dispatch } = useUsersSection()

    useEffect(() => {
        if (type == 'user')
            dispatch({ type: type, mode })
        else if (type == 'agent')
            dispatch({ type: type, mode })
    }, [type])

    return (
        <div className='flex flex-col gap-2'>

            {mode == 'list' && <ListSection />}

            {mode != 'list' && <SingleUser />}

        </div>
    )
}
