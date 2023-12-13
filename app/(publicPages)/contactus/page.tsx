import React from 'react'
import { Metadata } from 'next'
import { ClientPage } from './ClientPage'

export const metadata: Metadata = {
    title: 'تماس با دپارتمان اطلس'
}
export default function page() {
    return (
        <>
            <ClientPage />
        </>
    )
}
