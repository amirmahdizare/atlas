import React from 'react'
import { HeroSection } from './components/HeroSection'
import { SocialMedias } from './components/SocialMedias/SocialMedias'
import { News } from './components/News/News'
import { UserFullInfo } from 'types'
import { Blogs } from './components/Blogs/Blogs'
// import { Properties } from './components/Properties'

export const ClientPage = ({ data }: { data: UserFullInfo }) => {

    console.log(data.blogs)
    return (
        <div className='flex flex-col gap-2 px-2'>
            <HeroSection data={data} />
            {/* <SocialMedias /> */}
            <News data={data} />
            <Blogs data={data} />
            {/* <Properties /> */}
        </div>
    )
}
