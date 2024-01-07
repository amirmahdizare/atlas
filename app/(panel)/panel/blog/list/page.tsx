import { BlogManagement } from '(panel)/panel/components/BlogManagement/BlogManagement'
import { Metadata } from 'next'
import React from 'react'


export const metadata: Metadata = {
    title: 'مدیریت مقالات'
}

export default function page() {
    return (
        <>
            <BlogManagement me={false} />
        </>
    )
}
