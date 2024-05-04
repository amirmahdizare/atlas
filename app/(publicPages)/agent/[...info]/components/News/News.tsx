import React from 'react'
import { Announcement, Building } from '@icons'
import { IconArrowDownLeft } from '@tabler/icons-react'
import { Properties } from './components/Properties'
import Link from 'next/link'
import { UserFullInfo } from 'types'

export const News = ({data}:{data:UserFullInfo}) => {
    return (
        <div className='flex flex-col gap-4 items-stretch py-2'>
            <div className='flex flex-row gap-4 justify-between lg:justify-center'>

                <div className='text-raisin-black text-h3-bolder relative text-center'>
                    آگهی های مشاور
                    <div className='absolute bg-mint-green w-[80px] right-0 lg:left-1/2 lg:-translate-x-1/2 h-[2px] top-full mt-1.5 rounded '></div>
                </div>



                <Link href={'/s/hashtgerd-newcity/شهر جدید هشتگرد'} className='flex flex-row gap-1 cursor-pointer hover:text-coral lg:hidden'>
                    <span className='text-mint-green text-body-2-bolder hover:text-coral'>همه آگهی ها</span>
                    <IconArrowDownLeft width={15} height={15} />
                </Link>
            </div>

            <div className='flex flex-col p-1 bg-seasalt gap-2 overflow-hidden'>
                {/* <div className='flex flex-row gap-2 justify-between items-center'>

                    <div className='flex flex-row gap-2 items-center'>
                        <Building width={25} height={25} className='text-raisin-black' />
                        <p className='text-h6-bolder text-ellipsis line-clamp-1'>
                            <span className='text-mint-green'>فروش و رهن و اجاره</span>
                            &nbsp;
                            مسکونی، تجاری و اداری
                        </p>

                        <div className='bg-anti-flash-white-lighter p-1 text-body-3-normal  flex-row  gap-1 items-center hidden lg:flex'>
                            <Announcement className='text-ultra-violet' width={20} height={20} />
                            <span className='text-body-3-normal'>+58 آگهی</span>
                        </div>

                    </div>

                    <div className=' flex-row gap-1 cursor-pointer hover:text-coral hidden lg:flex'>
                        <span className='text-mint-green text-body-2-bolder hover:text-coral'>همه آگهی ها</span>
                        <IconArrowDownLeft width={15} height={15} />
                    </div>

                </div> */}

                {/* <Slider /> */}
                <Properties data={data}/>
            </div>



        </div>
    )
}
