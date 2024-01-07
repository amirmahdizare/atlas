import { Metadata } from 'next'
import React from 'react'
import { pageProps } from 'types'
import { ClientPage } from './ClientPage'

export const metadata: Metadata = {
    title: 'صفحه مشاور'
}


export default function page({ params: { id } }: pageProps<{ id: string }>) {
    return (
        <>
            <ClientPage />
        </>
    )
}
