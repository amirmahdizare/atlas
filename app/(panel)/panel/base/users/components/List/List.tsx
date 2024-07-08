import { Button } from '@components'
import { IconPlus, IconUsers } from '@tabler/icons-react'
import React from 'react'
import { useAdvisersSection, useUserList } from '../../hooks'
// import { advisers } from '../../data.mock'
import ReactSwitch from 'react-switch'
import { RowItem } from './RowItem'
import { useQueries, useQuery } from 'react-query'
import { api } from '_api/config'
import { UsersEndpointType, UsersEndpoints } from '_api/endpoints/users'
import { useCustomQuery } from 'hooks'
import { toast } from 'react-toastify'
import { UserSkeleton } from './components/UserSkeleton'

export const List = () => {

    const { dispatch } = useAdvisersSection()

    const { data, isLoading, isError } = useUserList()


    if (data?.data)
        return (
            <div className='flex flex-col gap-2'>

                <div className='grid grid-cols-5 gap-2 bg-seasalt p-2 text-ultra-violet text-body-3-normal'>
                    <div className='col-span-2'>نام کاربر</div>
                    {/* <div className='col-span-1'>آگهی فعال</div> */}
                    {/* <div className='col-span-1'>زمان آخرین آگهی</div> */}
                    <div className='col-span-1'>شماره موبایل</div>
                    <div className='col-span-1'>نقش</div>
                    <div className='col-span-1 text-center'>عملیات</div>

                </div>

                {data?.data.map(i => <RowItem {...i} />)}



            </div>
        )
    else if (isError)
        return <div className='flex flex-col gap-2 items-center justify-center text-red-500 h-full w-full'>خطا در دریافت اطلاعات</div>

    return <>
        {Array.from(new Array(10)).map(i => <UserSkeleton />)}
    </>
}

//     <div className='flex flex-row gap-2 justify-between '>
//         <div className='flex flex-row gap-1 items-center'>
//             <IconUsers width={25} height={25} className='text-french-gray' />
//             کاربران اطلس
//         </div>


//         <Button icon={IconPlus} bgColor='primaryNormal' iconSide='right' onClick={() => dispatch({ mode: 'add', userId: undefined })}>افزودن کاربر</Button>

//     </div>