import { Metadata } from 'next'
import React from 'react'
import { ClientPage } from './ClientPage'

export const metadata: Metadata = {
    title: 'درباره اطلس'
}

export default function page() {
    return (
        <>
            <ClientPage />
        </>
    )
}
