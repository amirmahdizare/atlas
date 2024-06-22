import React from 'react'

export const Loader = () => {


    return <div className="lds-ellipsis mb-2 -mt-4 [&>*]:bg-mint-green"><div></div><div></div><div></div><div></div></div>

    return (
        <div className='flex space- x-1.5 gap-1.5 justify-center items-center bg-white  dark:invert'>
            <span className='sr-only'>Loading...</span>
            <div className='h-1.5 w-1.5 bg-mint-green rounded-full  animate-bounce [animation-delay:-0.15s]'></div>
            <div  className='h-1.5 w-1.5 bg-mint-green rounded-full  animate-bounce [animation-delay:-0.1s]'></div>
            <div className='h-1.5 w-1.5 bg-mint-green rounded-full  animate-bounce animat e-ping'></div>
        </div>
    )
}
