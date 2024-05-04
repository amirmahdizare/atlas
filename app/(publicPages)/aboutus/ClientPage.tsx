import React, { Suspense } from 'react'
import { HeroSection } from './components/HeroSection'
import { Album, Description, Goals, TeamBanner } from './components'
import Advisers from './components/Advisers/Advisers'
import AdvisersLoader from './components/Advisers/loading'

export const ClientPage = () => {

  return (
    <div className='flex flex-col gap-6 pb-4 bg-seasalt'>
      <HeroSection />
      <Description />
      <TeamBanner />
      <Suspense fallback={<AdvisersLoader />}>
        <Advisers />
      </Suspense>
      <Goals />
      <Album />
    </div>
  )
}
