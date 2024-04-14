import { IconCheck, IconX } from '@tabler/icons-react'
import React from 'react'

export const SingleField = ({ isPrimary, title, value }: { title: string, value: string | boolean | number, isPrimary: boolean }) => {
   
    return (
        <div className='flex flex-row justify-between items-center py-2 hover:bg-gray-50'>

            <span>{title }</span>

            {typeof value =='string' && <span>{value}</span>}

            {typeof value=='boolean' && <> { value ?  <IconCheck className='text-green-500' /> : <IconX className='text-red-500' />}</>}

            {typeof value=='number' && <span>{value.toLocaleString()}</span>}


        </div>
    )
}
