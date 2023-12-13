import React from 'react'
import { HeroSection } from './components/HeroSection'
import { Description, TeamBanner } from './components'

export const ClientPage = () => {

  return (
    <div className='flex flex-col gap-4 pb-4'>
        <HeroSection />
        <Description/>
        <TeamBanner />
    </div>
  )
}
