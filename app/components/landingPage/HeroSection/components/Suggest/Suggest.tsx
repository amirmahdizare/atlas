

import React from 'react'
import photo from 'images/landingLeft.svg'
import Image from 'next/image'
import Link from 'next/link'
import {  ssrMutate } from '_api/serverSideConfig'
import { PropretyEndPoints } from '_api/endpoints/property'
import { PropertyDetailType } from 'types'
import { createMediaUrl, isFileSrcImage } from 'utils'


// const tempImages = [
//     { img: 'https://www.khanetarh.com/wp-content/uploads/2018/01/Design-a-duplex-villa-1.webp', title: 'ویلای 200 متری مهستان کاسبی ' },
//     { img: 'https://www.soorban.com/images/news/2023/09/1694333140_P5dC4.jpg', title: 'آپارتمان 95 متری نبرد' },
//     { img: 'https://www.gfxdownload.ir/uploads/posts/2023-11/house1.jpg', title: 'کلنگی مهستان' },
//     { img: 'https://www.khanetarh.com/wp-content/uploads/2018/01/Design-a-duplex-villa-1.webp', title: 'ویلای و خوابه کاسبی ' },
//     { img: 'https://www.khanetarh.com/wp-content/uploads/2018/01/Design-a-duplex-villa-1.webp', title: 'سوبلکس' }


// ]

const Item = ({ img, title, id }: { img: string, title: string, id: string }) => <Link href={`/property/${id}/${title}`} className='flex flex-col gap-4 lg:m-0.5 items-end justify-end brightne relative ss-75 rounded aspect-square object-scale-down w-[120px] lg:w-[140px] shrink-0 ' style={{ backgroundImage: `url(${img})` }}>
    <Image src={img} alt='j' fill className='rounded-lg aspect-square' />
    <span className='text-body-3-bolder text-white  text-ellipsis overflo w-hidden whitespace-pre-wrap backdrop-brightness-50 leading-3 p-0.5 w-full text-center  h-8 align-middle flex flex-row justify-center items-center'>{title}</span>
</Link>


export const Suggest = async () => {

    try {

        const data = await ssrMutate<Array<PropertyDetailType>>({
            path: PropretyEndPoints.SEARCH,
            body: { isSuggested: true, page: 1, limit: 10 }
        })

        if (data?.length == 0)
            return <></>

        return (


            <div className='grid grid-cols-3 lg:grid-cols-5 text-h6-normal gap-3 lg:gap-1 items-center lg:items-start '>

                <div className='col-span-3 lg:col-span-1 flex flex-row lg:flex-col gap-0.5 lg:gap-1.5 text-center'>
                    <span className='text-ghost-white lg:block hidden'>AMLAKATLAS</span>
                    <span className='text-coral text-h3-bolder'>پیشنهـــاد</span>
                    <span className='text-raisin-black text-h3-bolder'>اطلــــس</span>
                </div>

                <div className='flex flex-row col-span-3 lg:col-span-4 gap-2 text-white overflow-auto '>
                    {data.map(item => <Item id={item.id} img={createMediaUrl(item.medias?.find(i => isFileSrcImage(i)))} title={item.title} />)}

                    {/* <ul>
                        {data.map(i=>)}
                    </ul> */}
                    {/* <Item img='' /> */}
                    {/* {sample}
                    {sample}
                    {sample}
                    {sample}
                    {sample}
                    {sample} */}

                </div>
            </div>


        )
    } catch (error) {
        return <></>
    }



}
