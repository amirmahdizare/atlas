import React from 'react'
import { SideBox } from './components/SideBox'


export const ClientPage = () => {
    return (
        <div className='container max-w-[1400px] mx-auto h-full'>
            <div className='grid grid-cols-7  gap-4  h-full'>

                <div className='col-span-7 lg:col-span-4 flex flex-row items-center justify-center  p-2'>

                    <form>
                        ثبت نام/ ورود به اطلس
                    </form>
                </div>

                <SideBox />


            </div>

        </div>
    )
}
