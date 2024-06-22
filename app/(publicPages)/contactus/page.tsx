import React, { Suspense } from 'react'
import { Metadata } from 'next'
import { ClientPage } from './ClientPage'
import Loader from 'loading'

export const metadata: Metadata = {
    title: 'تماس با دپارتمان اطلس'
}
export default function page() {
    return (
        <Suspense fallback={<Loader />}>
            <ClientPage />
        </Suspense>
    )
}
