import React from 'react'
import { Metadata } from 'next'
import { ClientPage } from './ClientPage'

export const metadata: Metadata = {
    title: 'مدیریت کاربران'
}

export default function page() {
    return (
        <>
            <ClientPage />
        </>
    )
}
