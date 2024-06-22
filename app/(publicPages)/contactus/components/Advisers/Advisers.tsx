import React from 'react'
import { ApiBaseURL } from '_api/serverSideConfig'
import { UsersEndpoints } from '_api/endpoints/users'
import { UserInfoType } from 'types'
import { Slider } from './Slider'
import Link from 'next/link'
import { minuteToMs } from 'utils'

export default async function () {

    try {

        const response = await fetch(`${ApiBaseURL}${UsersEndpoints.GET_AGENTS}`, { next: { revalidate: minuteToMs(15) } })

        const data: UserInfoType<string>[] = await response.json()

        if (data) {

            return (



                <div className='flex flex-col gap-4  overflow-hidden box-border px-2'>

                    <div className='flex flex-col gap-2'>
                        <div className='flex flex-row justify-center relative py-2'>
                            <span className='text-h6-bolder text-raisin-black'> تماس با کارشناسان دپارتمان املاک اطلس</span>
                            <div className='h-[3px] w-8 bg-robin-egg-blue-00 rounded absolute left-1/2 -translate-x-1/2 bottom-0'></div>
                        </div>
                        <span className='text-body-2-bolder text-ultra-violet text-center'>خانه دلخواه تان را به کمک مشاورین متخصص اطلس پیدا کنید.</span>
                    </div>

                    <div className='flex flex-col sr-only'>
                        <h1>لیست مشاورین دپارتمان املاک اطلس</h1>
                        <ul>


                            {data.map(item =>
                                <>
                                    <br />

                                    <li><Link href={`/agent/${item.id}`} className='flex flex-row gap-2'>
                                        <span>نام و نام خانوادگی : {item.firstName} {item.lastName}</span> &nbsp;&nbsp;
                                        <span>شماره تماس : {item.phoneNumber}</span>&nbsp;&nbsp;

                                    </Link>

                                    </li>
                                </>)}

                        </ul>

                    </div>

                    {typeof data == 'object' && <Slider advisers={data} />}


                </div >
            )
        }
        return <></>
    } catch (error) {
        console.log(error?.toString())
        return <></>
    }
}
