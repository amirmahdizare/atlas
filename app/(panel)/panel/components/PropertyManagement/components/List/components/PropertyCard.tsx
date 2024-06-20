'use client'
import { Button, Spinner } from '@components'
import { IconArrowBigUp, IconEye, IconLoader, IconLocation, IconMapPin, IconPencil, IconTrash, IconUser } from '@tabler/icons-react'
import Link from 'next/link'
import React, { useCallback, useMemo } from 'react'
import ReactSwitch from 'react-switch'
import { PropertyDetailType } from 'types'
import { usePropertyList, usePropertySection } from '../../../hooks'
import { NO_NAME_USER } from 'variables'
import { createMediaUrl } from 'utils'
import { useCustomMutation, usePermission, useUserInfo } from '@hooks'
import { PropretyEndPoints, PropretyEndPointsType } from '_api/endpoints/property'
import { api } from '_api/config'
import { toast } from 'react-toastify'
import { Ladder } from './Ladder'

export const PropertyCard = (pr: PropertyDetailType) => {


    const { medias, id, price, location, user, title, prePrice, rentPrice, active, tags } = pr
    const { data, isLoading: loadingUserData } = useUserInfo()

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

    const { mutate: toggle, isLoading: toggleLoading } = useCustomMutation<PropretyEndPointsType['TOGGLE_ACTIVE']>({
        mutationFn: (d) => api.patch(PropretyEndPoints.TOGGLE_ACTIVE(id), d),
        onSuccess: () => {
            toast.success(`وضعیت آگهی ${title} با موفقیت تغییر کرد.`)
            refetch()
        },
        onError: (e) => {
            toast.error(e.response?.data.message ?? e.message)
        }
    })

    const { dispatch } = usePropertySection()


    const editPermission = usePermission('PRODUCT_UPDATE')

    const deletePermission = usePermission('PRODUCT_DELETE')

    const handleChangeActive = () => {
        if (data?.data.role.name != 'superAdmin')
            return
        if (prompt(`آیا مایل به ${active ? 'غیرفعال' : 'فعال'} کردن "${title}" هستید؟`, 'بله')) {
            toggle({ active: !!!active })
        }
    }

    const isUserCanChangeStatus = data?.data.role.name == 'superAdmin'

    return (
        <div className='grid grid-cols-3 gap-1.5 ' >

            <div className='col-span-1 relative'>
                <img src={createMediaUrl(medias?.[0])} className='object-cover aspect-square w-full rounded ' />
                <div className='flex flex-row gap-0.5 items-center absolute left-0.5 bottom-0.5 text-body-3-normal ' dir='ltr'>
                    {/* target='_blank' href={`/s/tag=[${tag.name}]`} */}
                    {tags?.slice(0, 2).map(tag => <div style={{ backgroundColor: tag.backgrondColor, color: tag.textColor }} className=' p-0.5 rounded'>
                        {tag.name}
                    </div>)}
                    {!!tags && tags?.length > 2 && <div className='rounded-circle text-gray-400'>+2</div>}

                </div>
            </div>


            <div className='col-span-2 flex flex-col gap-2 p-0.5'>
                <span className='line-clamp-1 text-ellipsis overflow-hidden text-body-2-bolder text-raisin-black'>{title}</span>

                <div className='flex flex-row gap-1 items-center '>
                    <IconMapPin className='text-ultra-violet' width={15} height={18} />
                    <span className='text-body-3-normal text-gray-400'>{location?.faTitle}</span>
                </div>

                <div className='flex flex-row gap-1 items-center '>
                    <IconUser className='text-ultra-violet' width={15} height={18} />
                    <span className='text-body-3-normal text-gray-400'>{user?.firstName} {user?.lastName} {!user?.firstName || !user?.lastName ? NO_NAME_USER : ''}</span>
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
            <div className='flex flex-row gap-1 justify-evenly col-span-3 items-center'>
                <Link href={`/property/${id}`} target='_blank'><Button bgColor='gray' textColor='secondary' icon={IconEye} title='پیش نمایش'></Button></Link>
                {(editPermission.state || user?.id == data?.data.id) && <Button bgColor='lightBlue' textColor='primaryNormal' onClick={(e) => { e.preventDefault(); e.stopPropagation(); dispatch({ mode: 'edit', proprtyId: id }) }} icon={IconPencil} title='ویرایش'></Button>}
                {(deletePermission.state || user?.id == data?.data.id) && <Button bgColor='white' textColor='red' icon={isLoading ? IconLoader : IconTrash} title='حذف' onClick={() => {
                    if (prompt(`آیا مایل به حذف آگهی ${title} هستید؟`, 'بله'))
                        mutate({})
                }}></Button>}
                {(data?.data.role.name == 'superAdmin' || user?.id == data?.data.id) && <Ladder {...pr} />}
                {isUserCanChangeStatus && <label className='flex flex-row gap-1 items-center'>
                    {!toggleLoading
                        ? <ReactSwitch
                            checked={active}
                            onChange={() => handleChangeActive()}
                            size={10}
                            checkedIcon={false}
                            uncheckedIcon={false}
                            width={30}
                            handleDiameter={15}
                            height={20}
                            onColor='#FF734C'
                            offColor='#E4E4EB'

                        /> : <Spinner />}
                </label>}
                <span className='text-body-2-normal text-ultra-violet'>{active ? 'فعال' : 'غیرفعال'}</span>

                {data?.data.role.name != 'superAdmin' && user?.id == data?.data.id && !active && <span className='text-gray-400'>منتظر تایید</span>}
            </div>
        </div>
    )
}
