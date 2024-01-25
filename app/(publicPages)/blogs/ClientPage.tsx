import React from 'react'
import { blogs } from './data.mock'
import { SingleBlog } from './components/SingleBlog'

export const ClientPage = () => {
    return (
        <div className='grid grid-cols-5 items-center gap-4'>

            <div className='col-span-5 lg:col-span-1'>

            </div>

            <div className='col-span-5 lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                {blogs.map(item => <div className='col-span-1'><SingleBlog {...item} /></div>)}
            </div>



        </div>
    )
}
