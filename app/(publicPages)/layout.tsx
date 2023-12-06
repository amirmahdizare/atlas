import type { Metadata } from 'next'
import { DesktopHeader, Footer, StickyMobileHeader } from '@components'
import { ContactSummary } from 'components/landingPage';

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
    <div className='pt-[65px] lg:py-0 flex flex-col '>
      <DesktopHeader />
      <StickyMobileHeader />
      {children}
      <ContactSummary />
      <Footer />
    </div>
  )
}
