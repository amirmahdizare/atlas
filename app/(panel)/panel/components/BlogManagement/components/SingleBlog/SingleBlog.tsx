import React from 'react'
import { Button } from '@components'
import { IconArrowBack, IconHome } from '@tabler/icons-react'
import { useBlogsSection } from '../../hooks'
import { DataForm } from './components/DataForm'

export const SingleBlog = ({ mode, blogId }: { mode: 'add' | 'edit', blogId?: string }) => {

    const { dispatch } = useBlogsSection()

    return (
        <div className='flex flex-col gap-2'>

            <div className='flex flex-row gap-2 justify-between '>
                <div className='flex flex-row gap-1 items-center'>
                    <IconHome width={25} height={25} className='text-french-gray' />
                    <span>{mode == 'add' ? 'افزودن' : 'ویرایش'} مقاله </span>
                </div>


                <Button icon={IconArrowBack} bgColor='secondary' iconSide='right' onClick={() => dispatch({ mode: 'list' })}>بازگشت</Button>

            </div>
            <DataForm />

        </div>
    )
}
