'use client'
import { Button, Spinner } from '@components'
import { IconArrowBigUp, IconEye, IconLocation, IconMapPin, IconPencil, IconTrash, IconUser } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'
import ReactSwitch from 'react-switch'
import { PropertyDetailType } from 'types'
import { usePropertyList, usePropertySection } from '../../../hooks'
import { NO_NAME_USER } from 'variables'
import { createMediaUrl } from 'utils'
import { useCustomMutation } from '@hooks'
import { PropretyEndPoints, PropretyEndPointsType } from '_api/endpoints/property'
import { api } from '_api/config'
import { toast } from 'react-toastify'

export const PropertyCard = ({ medias, id, price, location, user, title, prePrice, rentPrice }: PropertyDetailType) => {

    const { refetch } = usePropertyList()

    const { mutate, isLoading } = useCustomMutation<PropretyEndPointsType['DELETE_SINGLE']>({
        mutationFn: () => api.delete(PropretyEndPoints.SINGLE(id)),
        onSuccess: () => {
            toast.success(`آگهی ${title} با موفقیت حذف شد`)
            refetch()
        },
        onError: (e) => {
            toast.error(e.response?.data.message ?? e.message)
        }
    })

    const { dispatch } = usePropertySection()
    return (
        <div className='grid grid-cols-3 gap-1.5 ' >

            <div className='col-span-1'>
                <img src={medias && medias?.length > 0 ? createMediaUrl(medias?.[0]) : ''} className='object-cover aspect-square w-full rounded ' />
            </div>


            <div className='col-span-2 flex flex-col gap-2 p-0.5'>
                <span className='line-clamp-1 text-ellipsis overflow-hidden text-body-2-bolder text-raisin-black'>{title}</span>

                <div className='flex flex-row gap-1 items-center '>
                    <IconMapPin className='text-ultra-violet' width={15} height={18} />
                    <span className='text-body-3-normal text-gray-400'>{location?.faTitle}</span>
                </div>

                <div className='flex flex-row gap-1 items-center '>
                    <IconUser className='text-ultra-violet' width={15} height={18} />
                    <span className='text-body-3-normal text-gray-400'>{user.firstName} {user.lastName} {!user.firstName || !user.lastName ? NO_NAME_USER : ''}</span>
                </div>

                {!!Number(price) && <div className='flex flex-row gap-1 h-6'>
                    <span className='text-h6-bolder text-space-codet'>{Number(price)?.toLocaleString()}</span>
                    <span className='text-ultra-violet text-body-2-normal'>تومان</span>
                </div>}

                {!!Number(prePrice) && <div className='flex flex-row gap-1'>
                    <span>پیش پرداخت :</span>
                    <span className='text-h6-bolder text-space-codet'>{Number(prePrice)?.toLocaleString()}</span>
                    <span className='text-ultra-violet text-body-2-normal'>تومان</span>
                </div>}

                {!!Number(rentPrice) && <div className='flex flex-row gap-1'>
                    <span>اجاره :</span>
                    <span className='text-h6-bolder text-space-codet'>{Number(rentPrice)?.toLocaleString()}</span>
                    <span className='text-ultra-violet text-body-2-normal'>تومان</span>
                </div>}

            </div>
            <div className='flex flex-row gap-1 justify-evenly col-span-3'>
                <Link href={`/property/${id}`}><Button bgColor='gray' textColor='secondary' icon={IconEye} title='پیش نمایش'></Button></Link>
                <Button bgColor='lightBlue' textColor='primaryNormal' onClick={(e) => { e.preventDefault(); e.stopPropagation(); dispatch({ mode: 'edit', proprtyId: id }) }} icon={IconPencil} title='ویرایش'></Button>
                <Button bgColor='white' textColor='secondary' icon={isLoading ? Spinner : IconTrash} title='حذف' onClick={() => {
                    if (prompt(`آیا مایل به حذف آگهی ${title} هستید؟`, 'بله'))
                        mutate({})
                }}></Button>
                {/* <Button bgColor='gray' textColor='secondary' icon={IconArrowBigUp} title='نردبان'></Button> */}
                {/* <label className='flex flex-row gap-1 items-center'>
                    <ReactSwitch
                        checked={true}
                        onChange={() => { }}
                        size={10}
                        checkedIcon={false}
                        uncheckedIcon={false}
                        width={40}
                        handleDiameter={22}
                        height={25}
                        onColor='#FF734C'
                        offColor='#E4E4EB'

                    />
                    <span className='text-body-2-normal text-ultra-violet'>غیرفعال</span>
                </label> */}
            </div>
        </div>
    )
}
