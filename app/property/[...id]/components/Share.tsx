import React, { useState } from 'react'
import { IconShare } from '@tabler/icons-react'

export const Share = ({ id }: { id: string }) => {

    return (
        <div className='bg-anti-flash-white-lighter rounded-circle p-2'>
            <IconShare  width={15} height={15}/>
        </div>
    )
}
