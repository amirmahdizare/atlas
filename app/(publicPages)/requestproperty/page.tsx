import { Metadata } from 'next'
import React from 'react'
import { ClientPage } from './ClientPage'

export const metadata: Metadata = {
    title: 'درخواست ملک از اطلس'
}
export default function page() {
    return (
        <>
        <ClientPage/>
        </>
    )
}
