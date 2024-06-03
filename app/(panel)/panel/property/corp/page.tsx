import React from 'react'

import { Metadata } from 'next'
import { ClientPage } from './ClientPage'

export const metadata: Metadata = {
  title: 'مدیریت پروژه های مشارکت'
}

export default function page() {
  return (
    <>
      <ClientPage />
    </>
  )
}
