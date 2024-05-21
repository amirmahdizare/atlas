'use client'

import React from 'react'
import { useUserInfo } from '@hooks'
import Link from 'next/link'
import { isUserAgent, translateRole } from 'utils'

export const Menu = ({ onClickLink }: { onClickLink?: Function }) => {

  const { data, isError } = useUserInfo()

  return (
    <div className='flex flex-col gap-4'>

      <Link className='hover:text-coral' href={'#'}>بازگشت به صفحه اصلی</Link>
      {!!isError && <Link className='hover:text-coral' href={'/login'}>ورود / ثبت نام</Link>}
      {!!data?.data && <Link className='hover:text-coral' href={'/dashboard'}>پنل کاربری</Link>}
      {data?.data.role.name && isUserAgent(data?.data?.role?.name) && <Link className='hover:text-coral' href={'/panel'}>ورود به پنل {translateRole(data?.data?.role?.name)}</Link>}
      <Link className='hover:text-coral' href={'/addproperty'}>فروش ملک</Link>
      <Link className='hover:text-coral' href={'/requestproperty'}>درخواست ملک</Link>
      <Link className='hover:text-coral' href={'/aboutus'}>درباره ما</Link>
      <Link className='hover:text-coral' href={'/contactus'}>تماس با ما</Link>


    </div>
  )
}
