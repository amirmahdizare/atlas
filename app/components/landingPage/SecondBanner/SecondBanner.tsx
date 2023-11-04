import React from 'react'
import Image from 'next/image'
import  banner from 'images/getHome.jpg'

export const SecondBanner = () => {
  return (
    <div className='flex flex-row gap-1 justify-center'>
        <Image src={banner} className='w-full max-w-[900px] object-contain' alt='صاحبخونه خودت باش.' />
    </div>
  )
}
