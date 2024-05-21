import React from 'react'
import { ContactInfo, Monitor, UserEdit } from 'icons'
import { MenuItem } from '../MenuItem'
import { MenuCollection } from '../MenuCollection'
import { accesses } from '../../../panel/data.mock'
import { useUserInfo } from '@hooks'



export const Menu = ({ onClick }: { onClick?: Function }) => {



    return (
        <div className='flex flex-col gap-3' onClick={() => onClick ? onClick() : undefined} >

            <MenuItem isLink icon={UserEdit} link='/panel/profile' title='اطلاعات کاربری' />
            <MenuCollection baseLink='base' icon={Monitor} items={accesses} title='اطلاعات پایه' />
            <MenuCollection baseLink='property' icon={ContactInfo} items={accesses} title='آگهی (فایل) ها' />
            <MenuCollection baseLink='blog' icon={ContactInfo} items={accesses} title='مقالات' />

        </div>
    )
}
