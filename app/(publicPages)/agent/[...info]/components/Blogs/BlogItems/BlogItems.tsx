import React from 'react'
import { UserFullInfo } from 'types'
import { SingleBlog } from './SingleBlog'

export const BlogItems = ({ data }: { data: UserFullInfo }) => {

    return (
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 p-1'>
            {data?.blogs?.map(item => <div className='col-span-1'><SingleBlog {...item} /></div>)}
        </div>
    )
}
