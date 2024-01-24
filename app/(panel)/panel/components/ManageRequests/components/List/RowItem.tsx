import React, { useState } from 'react'
import { IconDotsVertical, IconPencil, IconPhoneCall, IconTrash } from '@tabler/icons-react'
import ClickAwayListener from 'react-click-away-listener'
import ReactSwitch from 'react-switch'
import { AgentListInfo, RequestItemType } from 'types'
import { useRequestSection } from '../../hooks'

export const RowItem = (req: RequestItemType & {odd:boolean}) => {

    const [more, setMore] = useState<boolean>(false)

    const {dispatch} =useRequestSection()

    return (
        <div className={`grid grid-cols-7 gap-1 p-1.5 text-space-codet text-body-3-normal items-center hover:bg-gray-200 cursor-pointer ${req.odd ? 'bg-white' : 'bg-seasalt'}` } onClick={()=>dispatch({reqId:req.id , mode:'edit'})}>

            <div className='col-span-2 flex flex-row gap-1 items-center'>
                {/* <img src={ad.avatar} className='rounded-circle w-5 aspect-square object-cover' /> */}
                {/* <span> */}
                    {req.title}
                {/* </span> */}
            </div>
            
            <div className='col-span-1'>{req.fullname}</div>

            <div className='col-span-1'>{req.category}</div>

            <div className='col-span-1'>{req.city}</div>

            <div className='col-span-1'>{req.zone}</div>

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

                <div className='border rounded-circle bg-anti-flash-white-lighter cursor-pointer hover:bg-gray-200 transition-all text-raisin-black p-0.5 aspect-square relative' onClick={(e) => {e.stopPropagation() ; setMore(true)}}>
                    <IconDotsVertical width={15} height={15} />
                    {more &&
                        <ClickAwayListener onClickAway={()=>setMore(false)}>

                            <div className='absolute shadow-sm rounded border flex flex-col  items-stretch min-w-[234px] top-full bg-white z-20 left-1/2 -transla te-x-1/2 text-body-3-normal'>
                                <div className='flex flex-row gap-2 items-center justify-between hover:bg-gray-100 transition-all p-1' onClick={() => dispatch({mode:'edit' , reqId:req.id})}>
                                    <span>ویرایش</span>
                                    <IconPencil width={20} height={20} className='text-mint-green' />
                                </div>

                                {/* <div className='flex-1 bg-gray-300 h-[1px]'></div> */}

                                <div className='flex flex-row gap-2 items-center justify-between hover:bg-gray-100 transition-all p-1' onClick={() => alert('Delete')}>
                                    <span>حذف </span>
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
