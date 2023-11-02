import type { Metadata } from 'next'
import './globals.css'
import { IRANYekan, IRANYekanNumber } from './fonts/iranYekan'
import { DesktopHeader } from '@components'


export const metadata: Metadata = {
  title: 'دپارتمان املاک اطلس',
  description: 'دپارتمان املاک اطلس : مرجع تخصصی املاک و مستغلات استان البرز',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir='rtl' className='text-mobile lg:text-desktop '>
      <body className={`${IRANYekan.className} ${IRANYekanNumber.className} text-body-2-normal container mx-auto max-w-[1300px]`}>
        <DesktopHeader />
        {children}
        </body>
    </html>
  )
}
