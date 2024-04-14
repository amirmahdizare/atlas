'use client'

import React, { useState } from 'react'

import { features } from './data.mock'
import { SingleField } from './components/SingleField'
import { Divider, Modal } from '@components'
import { IconX } from '@tabler/icons-react'

export const FeatureFields = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <>
            <div className='flex flex-col gap-2'>

                <span className='text-space-codet font-semibold text-h6-bolder'>ویژگی ها و امکانات</span>

                <div className='flex flex-col  items-stretch'>


                    {features.filter(i => i.isPrimary).map(item => <>
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
