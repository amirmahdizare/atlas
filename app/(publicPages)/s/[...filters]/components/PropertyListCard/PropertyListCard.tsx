import React from 'react'
import Image from 'next/image'
import { PropertyDetailType, PropertyListItemType } from 'types'
import { Bookmark, BookmarkFilled } from '@icons'
import { IconArrowDownLeft, IconLocation, IconMapPin, IconShare } from '@tabler/icons-react'
import { BookmarkStatus } from './components/BookmarkStatus'
import Link from 'next/link'
import { Divider } from '@components'
import logo from 'images/atlaslight.svg'
import { createMediaUrl, isFileSrcImage } from 'utils'
import { NO_NAME_USER, SAMPLE_AVATAR } from 'variables'
import { Share } from './components/Share'

export const PropertyListCard = (data: PropertyDetailType) => {

    const { id, medias, location, price, prePrice, rentPrice, subLocation, title, user, tags } = data


    const agentAvatar = user?.avatar ? createMediaUrl(user.avatar) : SAMPLE_AVATAR

    const agentName = (user?.firstName || user?.lastName) ? ` ${user?.firstName}  ${user?.lastName} ` : NO_NAME_USER

    return (
        <Link href={`/property/${id}`} className='flex flex-col p-1.5 bg-white items-stretch rounded-sm gap-2 hover:shadow ' prefetch={false}>

            <div className='flex flex-row justify-center'>


                <div className='relative aspect-square lg:aspect-[3/2] w- [170px] lg:w-[ 200px] flex-1 w - full rounded-sm overflow-hidden'>

                    <Image src={createMediaUrl(medias?.find(i => isFileSrcImage(i)))} alt={`${title} | دپارتمان املاک اطلس`} title={`${title} | دپارتمان املاک اطلس`} fill className='object-cover aspect-square lg:aspect-[3/2] ' />
                    {/* 
                    TODO BOOKMARK Functionliaty
                    <div className='absolute aspect-square bg-white rounded shadow left-1 top-1 p-1'>
                        <BookmarkStatus isSaved={false} />
                    </div> */}
                    <div className='flex flex-row gap-0.5 items-center absolute left-0.5 bottom-0.5 text-body-3-normal ' dir='ltr'>
                        {/* target='_blank' href={`/s/tag=[${tag.name}]`} */}
                        {tags?.slice(0, 2).map(tag => <div style={{ backgroundColor: tag.backgrondColor, color: tag.textColor }} className=' p-0.5 rounded'>
                            {tag.name}
                        </div>)}
                        {!!tags && tags?.length > 2 && <div className='rounded-circle text-gray-400'>+2</div>}

                    </div>

                </div>
            </div>

            <span className='text-raisin-black text-h4-bolder leading-3 line-clamp-2 h-6  text-ellipsis ' title={title}>{title}</span>

            <div className='flex flex-row gap-0.5 items-center'>
                <IconMapPin width={20} height={20} className='text-french-gray' />
                <span className='text-ultra-violet line-clamp-1 text-ellipsis text-body-3-normal' title={`${location?.faTitle} ${subLocation ? `, ${subLocation.faTitle}` : ''}`}>{location?.faTitle} {subLocation ? `, ${subLocation.faTitle}` : ''}</span>
            </div>

            {!Number(rentPrice) && <div className='flex flex-row gap-3 justify-between h-2'></div>}

            <div className='flex flex-row gap-3 justify-between h-2'>
                {!!Number(price) && <p className='line-clamp-1 text-ellipsis overflow-hidden'>
                    <span className='text-space-codet text-h5-bolder'>{Number(price ?? 0)?.toLocaleString()}</span>
                    <span className='text-ultra-violet  text-body-3-light mr-[1px]'> تومان</span>
                </p>}


                {!!Number(prePrice) && <p className='line-clamp-1 text-ellipsis overflow-hidden flex flex-row gap-1 items-center'>
                    <span className='text-gray-400 text-body-3-normal'>ودیعه:</span>
                    <span className='text-space-codet text-h5-bolder'>{Number(prePrice ?? 0)?.toLocaleString()}</span>
                    <span className='text-ultra-violet  text-body-3-light mr-[1px]'> تومان</span>
                </p>}





                {/* <div className='aspect-square bg-orange-200 rounded hidden lg:block'>
                    <IconArrowDownLeft className='text-orange' />
                </div> */}

            </div>

            {!!Number(rentPrice) && <div className='flex flex-row gap-3 justify-between h-2'>

                <p className='line-clamp-1 text-ellipsis overflow-hidden flex flex-row gap-1 items-center'>
                    <span className='text-gray-400 text-body-3-normal'>اجاره:</span>
                    <span className='text-space-codet text-h5-bolder'>{Number(rentPrice ?? 0)?.toLocaleString()}</span>
                    <span className='text-ultra-violet  text-body-3-light mr-[1px]'> تومان</span>
                </p>

            </div>}
            {/* <Divider />

            <div className='flex flex-row  justify-start items-center gap-1'>
                <div className='flex flex-row gap-1 items-center'>

                    <div className='w-3 aspect-square rounded-circle overflow-hidden relative shrink-0'>
                        <Image src={agentAvatar} className='object-cover rounded-circle' alt={`مشاور ${agentName}  | دپارتمان املاک اطلس`} fill />
                    </div>

                    <span className='text-body-3-normal text-ultra-violet line-clamp-1' title={agentName ?? 'مشاور'}>{`${agentName}` ?? 'مشاور'}</span>
                </div>
                <Share data={data} id={data.id} />
                
                <IconShare className='text-gray-300' width={20} height={20} /> 

            </div> */}

        </Link>
    )
}
