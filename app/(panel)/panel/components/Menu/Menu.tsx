'use client'

import React from 'react'
import { ContactInfo, Monitor, UserEdit } from 'icons'
import { MenuItem } from '../MenuItem'
import { MenuCollection } from '../MenuCollection'
import { accesses } from '../../../panel/data.mock'
import { useUserInfo } from '@hooks'
import { redirect } from 'next/navigation'
import { accessPairs } from '(panel)/panel/accessBase'
import { PermissionBackendRoutes } from 'enums'



export const Menu = ({ onClick }: { onClick?: Function }) => {


    const { data, isError, isLoading } = useUserInfo()

    if (isError)
        return redirect('/')

    else if (data?.data) {

        const permissions = data?.data.permissions

        // ?.permissionsAction.every( p=>permissions.findIndex(up=>up.action==p)!=-1 )
        const userAccesses = accesses.filter(i => !!accessPairs?.find(ap => ap.frontRoute == i.route)?.permissionsAction.every(p => permissions.findIndex(up => up.action == PermissionBackendRoutes[p]) != -1))


        console.log(userAccesses)

        return (
            <div className='flex flex-col gap-3' onClick={() => onClick ? onClick() : undefined} >

                <MenuItem isLink icon={UserEdit} link='/panel/profile' title='اطلاعات کاربری' />
                {userAccesses.filter(i => i.route.includes('base'))?.length > 0 && <MenuCollection baseLink='base' icon={Monitor} items={userAccesses} title='اطلاعات پایه' />}
                {userAccesses.filter(i => i.route.includes('property'))?.length > 0 && <MenuCollection baseLink='property' icon={ContactInfo} items={userAccesses} title='آگهی (فایل) ها' />}
                {userAccesses.filter(i => i.route.includes('blog'))?.length > 0 && <MenuCollection baseLink='blog' icon={ContactInfo} items={userAccesses} title='مقالات' />}

            </div>
        )
    }


    return <div className='flex flex-col gap-2 items-stretch'>
        {Array.from(new Array(10)).map((f, index) => <div key={index} className='bg-gray-50 animate-pulse w-full h-4 rounded'></div>)}

    </div>
}
