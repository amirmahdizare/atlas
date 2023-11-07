import React, { useState } from 'react'
import { IconShare } from '@tabler/icons-react'
import { Bookmark } from '@icons'

export const Share = ({ id }: { id: string }) => {

    return (
        <div className='bg-anti-flash-white-lighter rounded-circle p-1.5 shrink-0 hover:bg-gray-200 cursor-pointer transition-all duration-100'>
            {/* <Bookmark width={15} height={15}/> */}
            <IconShare  width={15} height={15}/>
        </div>
    )
}
