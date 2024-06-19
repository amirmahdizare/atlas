import { useSearchProperty } from '(publicPages)/s/[...filters]/hooks'
import { IconX } from '@tabler/icons-react'
import React from 'react'

export const Title = () => {

    const { dispatch, filter, dispatchFilter } = useSearchProperty()

    if (filter.title)

        return (
            <div className='flex flex-row gap-2 border rounded p-0.5 items-center justify-between text-body-2-normal'>
                <span>کلمه : {filter.title}</span>
                <IconX className='cursor-pointer text-red-500' onClick={() => dispatchFilter({ title: undefined })} />
            </div>
        )
}
