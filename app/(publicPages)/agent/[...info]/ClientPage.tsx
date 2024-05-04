import React from 'react'
import { HeroSection } from './components/HeroSection'
import { SocialMedias } from './components/SocialMedias/SocialMedias'
import { News } from './components/News/News'
import { UserFullInfo } from 'types'
// import { Properties } from './components/Properties'

export const ClientPage = ({ data }: { data: UserFullInfo }) => {
    return (
        <div className='flex flex-col gap-2'>
            <HeroSection data={data} />
            {/* <SocialMedias /> */}
            <News data={data} />
            {/* <Properties /> */}
        </div>
    )
}
