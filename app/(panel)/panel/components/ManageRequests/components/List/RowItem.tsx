import React, { useState } from 'react'
import { IconDotsVertical, IconPencil, IconPhoneCall, IconTrash } from '@tabler/icons-react'
import ClickAwayListener from 'react-click-away-listener'
import ReactSwitch from 'react-switch'
import { AgentListInfo, BuyOrSellReadType, RequestItemType } from 'types'
import { useRequestSection } from '../../hooks'
import { useBuyOrSells, useCustomMutation } from '@hooks'
import { BuyOrSellEndPoints, BuyOrSellEndPointsType } from '_api/endpoints/buyOrSell'
import { api } from '_api/config'
import { toast } from 'react-toastify'
import { Spinner } from '@components'

export const RowItem = (req: BuyOrSellReadType & { odd: boolean }) => {

    const [more, setMore] = useState<boolean>(false)

    const { dispatch } = useRequestSection()


    const { refetch } = useBuyOrSells()


    const { mutate, isLoading } = useCustomMutation<BuyOrSellEndPointsType['DELETE_SINGLE']>({
        mutationFn: () => api.delete(BuyOrSellEndPoints.SINGLE(req.id.toString())),
        onSuccess: () => {
            toast.success('در خواست با موفقیت حذف شد.')
            refetch()
        },
        onError: () => {
            toast.error('خطا در حذف درخواست.')
        }
    })

    return (
        <div className={`grid grid-cols-7 gap-1 p-1.5 text-space-codet text-body-3-normal items-center hover:bg-gray-200 cursor-pointer ${req.odd ? 'bg-white' : 'bg-seasalt'}`} onClick={() => dispatch({ reqId: req.id.toString(), mode: 'edit' })}>

            <div className='col-span-2 flex flex-row gap-1 items-center'>
                {/* <img src={ad.avatar} className='rounded-circle w-5 aspect-square object-cover' /> */}
                {/* <span> */}
                {req.title}
                {/* </span> */}
            </div>

            <div className='col-span-2 line-clamp-1 text-ellipsis overflow-hidden'>{req.user.firstName ?? '-'} {req.user.lastName ?? '-'}</div>
            <div className='col-span-1'>
                {req.side == 'buy'
                    ? <span className='text-green-500 font-bold p-0.5 border rounded border-green-500'> خرید </span>
                    : <span className='text-red-500 font-bold p-0.5 border rounded border-red-500'> فروش </span>}</div>

            <div className='col-span-1 line-clamp-1 text-ellipsis overflow-hidden'>{req.description}</div>


            {/*  <div className='col-span-1'>{req.zone}</div> */}

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

                <div className='border rounded-circle bg-anti-flash-white-lighter cursor-pointer hover:bg-gray-200 transition-all text-raisin-black p-0.5 aspect-square relative' onClick={(e) => { e.stopPropagation(); setMore(true) }}>
                    <IconDotsVertical width={15} height={15} />
                    {more &&
                        <ClickAwayListener onClickAway={() => setMore(false)}>

                            <div className='absolute shadow-sm rounded border flex flex-col  items-stretch min-w-[234px] top-full bg-white z-20 left-1/2 -transla te-x-1/2 text-body-3-normal'>
                                {/* <div className='flex flex-row gap-2 items-center justify-between hover:bg-gray-100 transition-all p-1' onClick={() => dispatch({ mode: 'edit', reqId: req.id.toString() })}>
                                    <span>ویرایش</span>
                                    <IconPencil width={20} height={20} className='text-mint-green' />
                                </div> */}

                                {/* <div className='flex-1 bg-gray-300 h-[1px]'></div> */}

                                <div className='flex flex-row gap-2 items-center justify-between hover:bg-gray-100 transition-all p-1' onClick={() => !isLoading ? mutate({}) : undefined}>
                                    <span>حذف </span>
                                    {isLoading ? <Spinner /> : <IconTrash width={20} height={20} className='text-red-500' />}
                                </div>

                            </div>
                        </ClickAwayListener>
                    }
                </div>

            </div>

        </div>
    )
}
