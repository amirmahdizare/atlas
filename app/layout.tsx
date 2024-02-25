import type { Metadata } from 'next'
import './globals.css'
import { IRANYekan, IRANYekanNumber } from './fonts/iranYekan'
import { DesktopHeader, Footer, StickyMobileHeader } from '@components'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import { ContactSummary } from 'components/landingPage';
import { ClientLayout } from 'ClientLayout';

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
      <body className={`${IRANYekan.className} ${IRANYekanNumber.className} flex flex-col text-body-2-normal px-2 container mx-auto max-w-[1300px]  `}>
       <ClientLayout>
        {children}
       </ClientLayout>
        </body>
    </html>
  )
}
