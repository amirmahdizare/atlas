import React from 'react'
import fullLogo from 'images/logo-full.svg'
import Image from 'next/image'
import { Divider } from '@components'
export const ClientPage = () => {
  return (

    <div className='flex flex-col gap-2 justify-center items-center h-60 border rounded p-2'>
      <div className='font-bold text-h5-bolder'>به پنل اطلس خوش آمدید</div>
      <Divider/>
      <Image src={fullLogo} alt='لوگوی دپارتمان املاک اطلس'  width={100} height={50} />
    </div>
  )
}
