import Link from 'next/link'
import React from 'react'

export const Menu = ({onClickLink}:{onClickLink?:Function}) => {
  return (
    <div className='flex flex-col gap-4'>

        <Link className='hover:text-coral' href={'#'}>بازگشت به صفحه اصلی</Link>
        <Link className='hover:text-coral' href={'#'}>بازگشت به صفحه اصلی</Link>
        <Link className='hover:text-coral' href={'#'}>بازگشت به صفحه اصلی</Link>
        <Link className='hover:text-coral' href={'#'}>بازگشت به صفحه اصلی</Link>


    </div>
  )
}
