import React from 'react'

export default function loading() {
  return (
    <div className='w-full flex flex-row gap-2  justify-between'>

        <div className='aspect-square flex-1 bg-gray-200 animate-pulse'></div>
        <div className='aspect-square flex-1 bg-gray-200 animate-pulse'></div>
        <div className='aspect-square flex-1 bg-gray-200 animate-pulse'></div>
        <div className='aspect-square flex-1 bg-gray-200 animate-pulse'></div>
        <div className='aspect-square flex-1 bg-gray-200 animate-pulse'></div>


    </div>
  )
}
