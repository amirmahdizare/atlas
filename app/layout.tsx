import type { Metadata, Viewport } from 'next'
import './globals.css'
import { IRANYekan, IRANYekanNumber } from './fonts/iranYekan'
import { ClientLayout } from 'ClientLayout';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import 'react-quill/dist/quill.snow.css';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: 'دپارتمان املاک اطلس',
  description: 'دپارتمان املاک اطلس : مرجع تخصصی املاک و مستقلات استان البرز',
  manifest: '/manifest.json',
  verification: { google: 'iNyGU7IkeTOV8tVOw6Ysbt4QASKXwzY2uIYqbt3urgc' },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir='rtl' className='text-mobile lg:text-desktop '>
      <body className={`${IRANYekan.className} ${IRANYekanNumber.className} flex flex-col text-body-2-normal px-0.5 lg:px-2 container mx-auto max-w-[1300px]  `}>
        <ClientLayout>
          {children}
        </ClientLayout>
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />}
        {process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER && <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER} />}
      </body>
    </html>
  )
}
