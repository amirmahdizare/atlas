'use client'

import { useTags } from '@hooks'
import Link from 'next/link'
import React from 'react'
import { PropertyDetailType } from 'types'

export const Tags = ({ data: { tags } }: { data: PropertyDetailType }) => {

    if (typeof tags == 'object' && Array.isArray(tags))
        return (
            <div className='flex flex-col gap-2'>
                <span className='text-space-codet font-semibold text-h6-bolder'>برچسب ها</span>

                <div className='flex flex-row gap-1 items-center'>

                    {tags?.map(tag => <Link target='_blank' href={`/s/tag=[${tag.name}]`} style={{ backgroundColor: tag.backgrondColor, color: tag.textColor }} className='text-body-2-normal p-1 rounded'>
                        {tag.name}
                    </Link>)}

                </div>

            </div>
        )

    return <></>
}
