import React, { useState } from 'react'

import { IconDotsVertical, IconPencil, IconPhoneCall, IconTrash } from '@tabler/icons-react'
import ClickAwayListener from 'react-click-away-listener'
import {  PermissionType } from 'types'
import { usePermissionsSection } from '../../hooks'
import { NEW_USER_DEFAULT_NAME } from 'variables'
import { ChangeUserRole } from './components/ChangeUserRole'
import { captilizeFirstLetter } from 'utils'


const RenderName = ({ firstName, lastName }: { firstName?: string, lastName?: string }) => {
    if (firstName || lastName)
        return <span>{firstName} {lastName}</span>
    return <span>{NEW_USER_DEFAULT_NAME}</span>
}


export const RowItem = (ad: PermissionType<string>) => {

    const [more, setMore] = useState<boolean>(false)

    const { dispatch } = usePermissionsSection()

    return (
        <div className='grid grid-cols-5 gap-1 p-1.5 text-space-codet text-body-2-normal items-center'>
            <div className='col-span-2 flex flex-row gap-1 items-center'>
                {captilizeFirstLetter(ad.title)}
            </div>
            <div className='col-span-1'>{ad.route}</div>
            <div className='col-span-1'>{ad.action}</div>

            <div className='col-span-1 flex flex-row gap-2 justify-center'>


                {/* <label className='flex flex-row gap-1 items-center'>
                    <ReactSwitch
                        checked={true}
                        onChange={() => { }}
                        size={10}
                        checkedIcon={false}
                        uncheckedIcon={false}
                        width={35}
                        handleDiameter={16}
                        height={20}
                        onColor='#FF734C'
                        offColor='#E4E4EB'

                    />
                    <span className='text-body-2-normal text-ultra-violet'>فعال</span>
                </label> */}

                <div className='border rounded-circle bg-anti-flash-white-lighter cursor-pointer hover:bg-gray-200 transition-all text-raisin-black p-0.5 aspect-square relative' onClick={() => setMore(true)}>
                    <IconDotsVertical width={15} height={15} />
                    {more &&
                        <ClickAwayListener onClickAway={() => setMore(false)}>

                            <div className='absolute shadow-sm rounded border flex flex-col  items-stretch min-w-[234px] top-full bg-white z-10 left-1/2 -transla te-x-1/2 text-body-3-normal'>
                                <div className='flex flex-row gap-2 items-center justify-between hover:bg-gray-100 transition-all p-1' onClick={() => dispatch({ mode: 'edit', permissionId: ad.id.toString() })}>
                                    <span>ویرایش</span>
                                    <IconPencil width={20} height={20} className='text-mint-green' />
                                </div>

                                {/* <ChangeUserRole userId={ad.id} userRoleId={ad.role?.id}/> */}


                                <div className='flex flex-row gap-2 items-center justify-between hover:bg-gray-100 transition-all p-1' onClick={() => alert('Delete')}>
                                    <span>حذف کاربر</span>
                                    <IconTrash width={20} height={20} className='text-red-500' />
                                </div>

                            </div>
                        </ClickAwayListener>
                    }
                </div>

            </div>

        </div>
    )
}
