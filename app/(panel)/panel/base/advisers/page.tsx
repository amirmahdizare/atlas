import React from 'react'
import { Metadata } from 'next'
import { ClientPage } from './ClientPage'

export const metadata: Metadata = {
    title: 'مدیریت مشاوران'
}

export default function page() {
    return (
        <>
            <ClientPage />
        </>
    )
}
