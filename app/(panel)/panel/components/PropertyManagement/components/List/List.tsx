import React from 'react'

export const List = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
            {[1, 2, 2, 2,].map(item => <div className='bg-white border p-2'>
                {item}
            </div>)}
        </div>
    )
}
