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
    <html lang="en">
      <body className={`${IRANYekan.className} ${IRANYekanNumber.className}`}>{children}</body>
    </html>
  )
}
