import { Metadata } from 'next'
import React from 'react'
import { UserFullInfo, pageProps } from 'types'
import { ClientPage } from './ClientPage'
import { ApiBaseURL } from '_api/serverSideConfig'
import { UsersEndpoints } from '_api/endpoints/users'


export const generateMetadata = async ({ params: { info } }: pageProps<{ info: string[] }>): Promise<Metadata> => {
    try {

        const response = await fetch(`${ApiBaseURL}${UsersEndpoints.GET_AGENTS}`, { cache: 'reload' })

        const data: UserFullInfo[] = await response.json()

        const targetAgent = data.find(i => i.id == info[0])

        if (targetAgent)
            return (
                { title: `مشاور ${targetAgent.firstName} ${targetAgent.lastName} | دپارتمان املاک اطلس` , description:`خانه دلخواهتان را به کمک مشاور ${targetAgent.firstName} ${targetAgent.lastName} پیدا کنید` }
            )

        else
            return ({ title: 'صفحه مشاور' })
    } catch (error) {
        return ({ title: 'صفحه مشاور' })
    }
}


export default async function page({ params: { info } }: pageProps<{ info: string[] }>) {


    try {


        const response = await fetch(`${ApiBaseURL}${UsersEndpoints.GET_AGENTS}`, { cache: 'no-cache' })

        const data: UserFullInfo[] = await response.json()


        const targetAgent = data?.find(i => i.id == info[0])

        if (targetAgent)
            return (
                <>
                    <ClientPage data={targetAgent} />
                </>
            )

        else
            return <span className='text-red-500 p-2 text-center'>مشاور مورد نظر یافت نشد</span>
    } catch (error) {
        console.log(error)
        return <span className='text-red-500 p-2 text-center'>خطا در دریافت اطلاعات مشاور</span>
    }
}
