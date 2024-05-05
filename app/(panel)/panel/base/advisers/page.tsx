import React from 'react'
import { Metadata } from 'next'
import { ClientPage } from './ClientPage'
import { UserManagement } from '(panel)/panel/components/UserManagement/UserManagement'

export const metadata: Metadata = {
    title: 'مدیریت مشاوران'
}

export default function page() {
    return (
        <>
            <UserManagement type='agent' />
        </>
    )
}
