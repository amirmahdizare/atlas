import type { Metadata } from 'next'
import './globals.css'
import { IRANYekan, IRANYekanNumber } from './fonts/iranYekan'


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
      <body className={`${IRANYekan.className} ${IRANYekanNumber.className} text-body-2-normal`}>
        {children}
        </body>
    </html>
  )
}
