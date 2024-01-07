import React from 'react'
import { HeroSection } from './components/HeroSection'
import { SocialMedias } from './components/SocialMedias/SocialMedias'

export const ClientPage = () => {
    return (
        <div className='flex flex-col gap-2'>
            <HeroSection/>
            <SocialMedias />
        </div>
    )
}
