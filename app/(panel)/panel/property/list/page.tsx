import { PropertyManagement } from '(panel)/panel/components/PropertyManagement/PropertyManagement'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'مدیریت همه آگهی ها'
}
export default function page() {
    return (
        <PropertyManagement />
    )
}
