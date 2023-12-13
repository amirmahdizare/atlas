import React from 'react'
import { HeroSection } from './components/HeroSection'
import { Advisers } from './components/Advisers/Advisers'

export const ClientPage = () => {
    return (
        <div className='flex flex-col gap-4 items-stretch'>
            <HeroSection />
            <Advisers/>
        </div>
    )
}
