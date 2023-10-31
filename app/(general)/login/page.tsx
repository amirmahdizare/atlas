import React from 'react'
import { Metadata } from 'next'
import { ClientPage } from './ClientPage'

export const metadata: Metadata = {
    title: 'ورود/ثبت نام به اطلس'
}

export default function page() {
    return (
        <div>
            <ClientPage />
        </div>
    )
}
