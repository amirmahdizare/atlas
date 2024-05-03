import { IconPencil, IconTrash } from '@tabler/icons-react'
import React from 'react'
import { TagReadType } from 'types'
import { MutateTag } from './MutateTag'

export const SingleTag = ({ backgrondColor, textColor, name, id }: TagReadType) => {
    return (
        <div className='grid grid-cols-3 items-center gap-2'>
            <span className='col-span-1'>{name}</span>
            <span className='col-span-1 p-1 rounded w-fit' style={{ backgroundColor: backgrondColor, color: textColor }} >{name}</span>
            {/* <span className='col-span-1'>
                <div ></div>
            </span> */}
            <span className='col-span-1 flex flex-row gap-2 items-center'>
                <IconTrash className='text-red-500' />
                <MutateTag mode='edit' recordId={id ?? ''}><IconPencil className='text-mint-green' /></MutateTag>
            </span>

        </div>
    )
}
