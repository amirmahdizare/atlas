import React from 'react'
import { blogs } from './data.mock'
import { SingleBlog } from './components/SingleBlog'
import { LatestBlogs } from './components/LatestBlogs'

export const ClientPage = () => {
    return (
        <div className='grid grid-cols-5 items-start gap-4 mt-2 lg:mt-0'>

            <div className='col-span-5 lg:col-span-1'>
                <LatestBlogs />
            </div>

            <div className='col-span-5 lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-1'>
                {blogs.map(item => <div className='col-span-1'><SingleBlog {...item} /></div>)}
            </div>



        </div>
    )
}
