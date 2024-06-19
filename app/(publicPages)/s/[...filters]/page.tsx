import { Metadata } from 'next'
import React from 'react'
import { pageProps } from 'types'
import { Breadcrumb } from './components'
import { ClientPage } from './ClientPage'
import { Converter } from './components/Converter'


export const metadata: Metadata = {
    title: 'جستجوی ملک در دپارتمان املاک اطلس'
}

export default function page({ params}: pageProps<{ filters: Array<string> }, { [key: string]: any }>) {

    // console.log(params)
    return (
        <div className='flex flex-col gap-2'>
            {/* <Breadcrumb /> */}
            <Converter filters={params.filters} />
            <ClientPage />
        </div>
    )
}
