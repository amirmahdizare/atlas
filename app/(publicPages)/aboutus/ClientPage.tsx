import React from 'react'
import { HeroSection } from './components/HeroSection'
import { Advisers, Description, TeamBanner } from './components'

export const ClientPage = () => {

  return (
    <div className='flex flex-col gap-4 pb-4 bg-seasalt'>
        <HeroSection />
        <Description/>
        <TeamBanner />
        <Advisers/>
    </div>
  )
}
