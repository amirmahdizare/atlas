'use client'

import React, { useState } from 'react'

// import { features } from './data.mock'
import { SingleField } from './components/SingleField'
import { Divider, Modal } from '@components'
import { IconX } from '@tabler/icons-react'
import { PropertyDetailType } from 'types'
import { useFullCategories } from '@hooks'


export const FeatureFields = ({ data: { subCategory, category, features: baseFeatures } }: { data: PropertyDetailType }) => {

    const { data, isLoading, isError } = useFullCategories()

    const [isOpen, setIsOpen] = useState<boolean>(false)

    if (data && !!subCategory?.id && !!category?.id && baseFeatures?.length > 0) {

        const filtersData = data.data.find(c => c.id = category?.id.toString())?.subCategories.find(sc => sc.id == subCategory?.id.toString())?.filters

        if (filtersData) {

            const features = baseFeatures.map(i => ({ ...i, type: filtersData.find(fd => fd.id == i.filterId)?.type, isPrimary: filtersData.find(fd => fd.id == i.filterId)?.isPrimary == 'true' ? true : false, title: filtersData.find(fd => fd.id == i.filterId)?.title ?? '' }))

            return (
                <>
                    <div className='flex flex-col gap-2'>

                        <span className='text-space-codet font-semibold text-h6-bolder'>ویژگی ها و امکانات</span>

                        <div className='flex flex-col  items-stretch'>


                            {features.sort((a, b) => (a?.type ?? 0) < (b?.type ?? 0) ? 1 : -1).filter(i => i.isPrimary).map(item => <>
                                <SingleField {...item} />
                                <Divider />
                            </>)}
                        </div>


                        <span className='text-mint-green cursor-pointer font-bold' onClick={() => setIsOpen(true)}>نمایش همه جزییات</span>

                    </div>

                    <Modal
                        open={isOpen}
                        setOpen={setIsOpen}
                        fitHeight
                    >
                        <div className='flex flex-col gap-4 p-2 '>

                            <div className='flex flex-row justify-between items-center'>
                                <span className='text-space-codet font-semibold text-h6-bolder'>ویژگی ها و امکانات</span>

                                <IconX className='cursor-pointer text-gray-500' onClick={() => setIsOpen(false)} />
                            </div>

                            <div className='flex flex-col '>


                                {features.map(item => <>
                                    <SingleField {...item} />
                                    <Divider />
                                </>)}
                            </div>

                        </div>

                    </Modal>
                </>
            )
        }
        return <></>
    }
    else if (isLoading)
        return <div className='bg-gray-50 w-full rounded animate-pulse h-16'></div>
    else
        return <></>
}
