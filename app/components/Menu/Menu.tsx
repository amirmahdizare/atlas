import Link from 'next/link'
import React from 'react'

export const Menu = ({onClickLink}:{onClickLink?:Function}) => {
  return (
    <div className='flex flex-col gap-4'>

        <Link className='hover:text-coral' href={'#'}>بازگشت به صفحه اصلی</Link>
        <Link className='hover:text-coral' href={'/login'}>ورود / ثبت نام</Link>
        <Link className='hover:text-coral' href={'/addproperty'}>فروش ملک</Link>
        <Link className='hover:text-coral' href={'/requestproperty'}>درخواست ملک</Link>
        <Link className='hover:text-coral' href={'/aboutus'}>درباره ما</Link>
        <Link className='hover:text-coral' href={'/contactus'}>تماس با ما</Link>


    </div>
  )
}
