import React from 'react'

export default function loading() {
  return (
    <div className='flex flex-col gap-2'>
        {Array.from(new Array(8)).map(item => <div key={item} className='w-full h-8 bg-gray-50 animate-pulse'></div>)}
    </div>
  )
}
