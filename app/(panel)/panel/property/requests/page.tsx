import { ManageRequests } from '(panel)/panel/components/ManageRequests/ManageRequests'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "درخواست های خرید/فروش"
}
export default function page() {
  return (
    <div className=''>
      <ManageRequests />
    </div>
  )
}
