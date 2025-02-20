import React from 'react'
import { Announcement, Building } from '@icons'
import { IconArrowDownLeft } from '@tabler/icons-react'
import { Slider } from './components/Slider/Slider'
import Link from 'next/link'
import { ssrMutate } from '_api/serverSideConfig'
import { PropretyEndPoints } from '_api/endpoints/property'
import { PropertyDetailType } from 'types'
import { Button } from '@components'
import { ButtonToAll } from '@components'

export const News = async () => {


    try {

        const news = await ssrMutate<PropertyDetailType[]>({
            path: PropretyEndPoints.SEARCH,
            body: { limit: 15, page: 1 }
        })

        return (
            <div className='flex flex-col gap-6 items-stretch'>
                <div className='flex flex-row gap-4 justify-between lg:justify-center items-center'>

                    <div className='text-raisin-black text-h3-bolder relative text-center'>
                        آگهی های جدید
                        <div className='absolute bg-mint-green w-[80px]  lg:left-1/2 lg:-translate-x-1/2 h-[2px] top-full mt-1.5 rounded '></div>
                    </div>



                    {/* <Link className='flex flex-row gap-1 cursor-pointer hover:text-coral lg:hidden' href={'/s/all'}>
                        <span className='text-mint-green text-body-2-bolder hover:text-coral'>همه آگهی ها</span>
                        <IconArrowDownLeft width={15} height={15} />
                    </Link> */}

                    <ButtonToAll />



                </div>

                <div className='flex flex-col p-2 lg:p-4 bg-seasalt gap-2 overflow-hidden'>
                    <div className='flex flex-row gap-2 justify-between items-center'>

                        <div className='flex flex-row gap-2 items-center'>
                            <Building width={25} height={25} className='text-raisin-black' />
                            <p className='text-h6-bolder text-ellipsis line-clamp-1'>
                                <span className='text-mint-green'>فروش و رهن و اجاره</span>
                                &nbsp;
                                مسکونی، تجاری و اداری
                            </p>

                            {news?.length > 15 && <div className='bg-anti-flash-white-lighter p-1 text-body-3-normal  flex-row  gap-1 items-center hidden lg:flex'>
                                <Announcement className='text-ultra-violet' width={20} height={20} />
                                <span className='text-body-3-normal'>+15 آگهی</span>
                            </div>}

                        </div>

                        <Link href={'/s/all'} className=' flex-row gap-1 cursor-pointer hover:text-coral hidden lg:flex'>
                            <span className='text-mint-green text-body-2-bolder hover:text-coral'>همه آگهی ها</span>
                            <IconArrowDownLeft width={15} height={15} />
                        </Link>

                    </div>

                    <Slider data={news} />

                    <ul className='sr-only'>
                        {news.map(item => <a key={item.id} href={`/property/${item.id}/${item.title}`}>{item.title} | دپارتمان املاک اطلس</a>)}
                    </ul>
                </div>



            </div>
        )
    } catch (error) {

        return <></>
    }
}
