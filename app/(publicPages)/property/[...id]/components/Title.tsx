import React from 'react'
import { PropertyDetailType } from 'types'
import { Share } from './Share'
import { Bookmark } from './Bookmark'
import { IconMap, IconMapPin } from '@tabler/icons-react'



const PriceComponent = ({ primary, secondary }: { primary: { title: string, value: number }, secondary: { title: string, value: number, replacer?: string } }) => {
    return <>
        <div className='flex flex-row gap-2 items-center text-space-codet justify-between mt-1.5'>
            <span className='text-body-1-bolder'>{primary.title}</span>

            <div className='flex flex-row gap-1 items-center'>
                <span className='text-h3-bolder'>{primary?.value?.toLocaleString()}</span>
                <span className='text-ultra-violet text-body-1-bolder' >تومان</span>
            </div>

        </div>

        <div className='bg-anti-flash-white-lighter w-full h-[1px]'>

        </div>


        <div className='flex flex-row gap-2 items-center text-ultra-violet justify-between '>
            {secondary.replacer ? <span className='text-body-2-normal'>{secondary.replacer}</span> : <> <span className='text-body-2-normal'>{secondary.title}</span>

                <div className='flex flex-row gap-1 items-center'>
                    {/* <span className='text-h6-normal'>{(Math.floor(Number(price ?? 0) / metr )).toLocaleString()}</span> */}
                    <span className='text-h6-normal'>{(secondary.value).toLocaleString()}</span>
                    <span className='text-ultra-violet text-body-2-normal' >تومان</span>
                </div></>}

        </div>
    </>
}


export const Title = ({ data, }: { data: PropertyDetailType }) => {

    const { title, id, bookmarks, location, subLocation, price, prePrice, rentPrice, metr, productType } = data
    return (
        <div className='flex flex-col  gap-2  '>

            <div className='flex flex-row justify-between items-center gap-2'>
                <span className='text-space-codet text-body-1-bolder lg:text-[0.50rem] leading-4 whitespace-pre-wrap break-words'>{title}</span>

                <div className=' flex-row gap-1 hidden lg:flex'>
                    <Bookmark id={id} />
                    <Share id={id} data={data} />
                </div>


            </div>

            <div className='flex flex-row gap-0.5 items-center text-body-2-bolder text-[#8F909F]'>
                <IconMapPin className='text-gray-400' width={17.5} height={17.5} />
                <span>{location?.faTitle}</span>
                {!!subLocation && <span>,{subLocation.faTitle}</span>}

            </div>

            {productType == 'sell' && <PriceComponent primary={{ title: 'قیمت کل', value: Number(price ?? 0) }} secondary={{ title: 'قیمت هر متر', value: Math.floor(Number(price ?? 0) / metr) }} />}
            {productType == 'rent' && <PriceComponent primary={{ title: 'ودیعه', value: Number(prePrice ?? 0) }} secondary={{ title: 'اجاره', value: Number(rentPrice ?? 0), replacer: Number(rentPrice) == 0 ? 'رهن کامل' : undefined }} />}
            <div className='bg-anti-flash-white-lighter w-full h-[1px]'>

            </div>
            <div className='flex flex-row gap-2 items-center text-ultra-violet justify-between '>

                <span className='text-body-2-normal'>متراژ</span>

                <div className='flex flex-row gap-1 items-center'>
                    {/* <span className='text-h6-normal'>{(Math.floor(Number(price ?? 0) / metr )).toLocaleString()}</span> */}
                    <span className='text-h6-normal'>{(metr).toLocaleString()}</span>
                    <span className='text-ultra-violet text-body-2-normal' >متر</span>
                </div>

            </div>


        </div>
    )
}
