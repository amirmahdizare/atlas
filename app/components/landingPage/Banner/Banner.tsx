import React from 'react'
import Image from 'next/image'
import  banner from 'images/sarmaye.jpg'

export const Banner = () => {
  return (
    <div className='flex flex-row gap-1'>
        <Image src={banner} className='w-full object-contain' alt='سرمایتو حفط کن.' />
    </div>
  )
}
