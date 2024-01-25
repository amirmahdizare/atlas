import React from 'react'
import { Metadata } from 'next'
import { ClientPage } from './ClientPage'

export const metadata: Metadata = {
    title: "مقالات اطلس"
}

export default function page() {
    return (
        <>
            <ClientPage />
        </>
    )
}
