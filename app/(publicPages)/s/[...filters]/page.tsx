import { Metadata } from 'next'
import React from 'react'
import { pageProps } from 'types'
import { Breadcrumb } from './components'
import { ClientPage } from './ClientPage'


export const metadata: Metadata = {
    title: 'جستجوی ملک در دپارتمان املاک اطلس'
}

export default function page({ params: { filters } }: pageProps<{ filters: Array<string> }, { [key: string]: any }>) {

    return (
        <div className='flex flex-col gap-2'>
            {/* <Breadcrumb /> */}
            <ClientPage />
        </div>
    )
}
