import React, { Suspense } from 'react'
import { HeroSection } from './components/HeroSection'
import Advisers from './components/Advisers/Advisers'
import { SocialMedias } from './components/SocialMedias/SocialMedias'
import AdvisersLoader from './components/Advisers/loading'

export const ClientPage = () => {
    return (
        <div className='flex flex-col gap-4 items-stretch pb-4'>
            <HeroSection />
            <Suspense fallback={<AdvisersLoader />}>
                <Advisers />
            </Suspense>
            {/* <SocialMedias /> */}
        </div>
    )
}
