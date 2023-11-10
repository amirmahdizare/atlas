import React from 'react'
import { pageProps } from 'types'

export default function page  ({ }: pageProps<{ filters: Array<string> }, { [key: string]: any }>)  {

    return (
        <div>
            به صفحه جستجو خوش امدید
        </div>
    )
}
