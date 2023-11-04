import React from 'react'
import Image from 'next/image'
import  banner from 'images/sarmaye.jpg'

export const Banner = () => {
  return (
    <div className='flex flex-row gap-1 justify-center'>
        <Image src={banner} className='w-full object-contain max-w-[900px]' alt='سرمایتو حفط کن.' />
    </div>
  )
}
