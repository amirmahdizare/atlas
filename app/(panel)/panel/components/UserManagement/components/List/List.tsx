import React from 'react'

import { useUsersSection, useUserList } from '../../hooks'
import { RowItem } from './RowItem'
import { UserSkeleton } from './components/UserSkeleton'
import { agentRoles } from 'variables'

export const List = () => {

    const { dispatch, type } = useUsersSection()

    const { data, isLoading, isError } = useUserList()


    if (data?.data)
        return (
            <div className='flex flex-col gap-2'>

                <div className='grid grid-cols-5 gap-2 bg-seasalt p-2 text-ultra-violet text-body-3-normal'>
                    <div className={`${type == 'agent' ? 'col-span-2' : ' col-span-3'}  `}>نام کاربر</div>
                    {/* <div className='col-span-1'>آگهی فعال</div> */}
                    {/* <div className='col-span-1'>زمان آخرین آگهی</div> */}
                    <div className='col-span-1' title='شماره موبایل'>موبایل</div>
                    {type == 'agent' && <div className='col-span-1'>نقش</div>}
                    <div className='col-span-1 text-center'>عملیات</div>

                </div>

                {data?.data.filter(i => {
                    if (type == 'agent')
                        return agentRoles.indexOf(i.role?.name ?? '') != - 1
                    else
                        return agentRoles.indexOf(i.role?.name ?? '') == - 1
                }).map(i => <RowItem key={i.id} {...i} />)}



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