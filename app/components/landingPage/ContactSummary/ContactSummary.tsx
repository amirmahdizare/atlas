import React from 'react'
import { ActionButtons } from './components/ActionButtons'
import { Map } from './components/Map'

export const ContactSummary = () => {
    return (
        <div className='bg-raisin-black p-4 grid grid-cols-2 gap-4'>

            <div className='col-span-3 lg:col-span-1 flex flex-col gap-4 justify-center'>
                <span className='text-white text-h3-bolder'>دریافت مشاوره حضوری</span>
                <p className='text-h6-normal text-french-gray leading-3'>
                    کارشناسان ما همیشه همراه شما هستند با ما در
                    <br />
                    ارتباط باشید.
                </p>
                <ActionButtons />

            </div>

            <div className='col-span-3 lg:col-span-1'>
                <Map />
            </div>

        </div>
    )
}
