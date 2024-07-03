import type { Metadata, Viewport } from 'next'
import './globals.css'
import { IRANYekan, IRANYekanNumber } from './fonts/iranYekan'
import { ClientLayout } from 'ClientLayout';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import 'react-quill/dist/quill.snow.css';
import Script from 'next/script';

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
        <Script
                strategy="lazyOnload"
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
            />

            <Script strategy="lazyOnload">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
            </Script>
      </body>
    </html>
  )
}
