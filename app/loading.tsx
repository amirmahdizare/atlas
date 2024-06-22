import React from 'react'
import logo from 'images/logo-full.svg'
import Image from 'next/image'
import { Loader, Spinner } from '@components'
export default function loading() {
  return (
    <div className='flex flex-col gap-2 items-center justify-center h-screen w-screen   fixed backdrop-brightness-50 top-0 left-0'>

      <div className='flex flex-col gap-3 bg-white rounded  items-center  p-2 '>
        <Image className='w-14 h-6' src={logo} alt='لوگوی اطلس' />
        {/* <Spinner  /> */}
        <Loader />
      </div>

    </div>
  )
}
