import React from 'react'
import { HeroSection } from './components/HeroSection'
import { SocialMedias } from './components/SocialMedias/SocialMedias'
import { News } from './components/News/News'
// import { Properties } from './components/Properties'

export const ClientPage = () => {
    return (
        <div className='flex flex-col gap-4'>
            <HeroSection/>
            <SocialMedias />
            <News />
            {/* <Properties /> */}
        </div>
    )
}
