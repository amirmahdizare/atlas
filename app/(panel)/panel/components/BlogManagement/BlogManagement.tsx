'use client'
import { Button } from '@components'
import { IconFile, IconPlus } from '@tabler/icons-react'
import React from 'react'
import { List } from './components/List/List'
import { useBlogsSection } from './hooks'
import { SingleBlog } from './components/SingleBlog/SingleBlog'
// import { SingleProperty } from './components/SingleProperty/SingleProperty'

export const BlogManagement = ({ me }: { me: boolean }) => {

    const { mode , blogId  , dispatch} = useBlogsSection()

    return (
        <div className='flex flex-col gap-2 max-h-full'>


            {mode == 'list' && <List />}

            {mode != 'list' && <SingleBlog mode={mode} blogId={blogId?.toString()} />}

        </div>
    )
}
