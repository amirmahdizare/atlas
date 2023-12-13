import React from 'react'
import { HeroSection } from './components/HeroSection'
import { Advisers } from './components/Advisers/Advisers'
import { SocialMedias } from './components/SocialMedias/SocialMedias'

export const ClientPage = () => {
    return (
        <div className='flex flex-col gap-4 items-stretch pb-4'>
            <HeroSection />
            <Advisers/>
            <SocialMedias/>
        </div>
    )
}
