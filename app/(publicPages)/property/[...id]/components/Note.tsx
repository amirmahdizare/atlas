'use client'
import React from 'react'

import { Button } from '@components'
import { useCustomQuery } from '@hooks'
import { api } from '_api/config'
import { PrivateEndPoints, PrivateEndPointsType } from '_api/endpoints/PrivateNote'
import { useForm } from 'react-hook-form'


export const Note = ({ propertyId }: { propertyId: string }) => {

    const { register, formState, handleSubmit, reset } = useForm<{ note: string }>()

    const { data, isLoading } = useCustomQuery<PrivateEndPointsType['BY_PRODUCT']>({
        queryFn: () => api.get(PrivateEndPoints.BY_PRODUCT(propertyId)),
        queryKey: ['privateNote', propertyId],
        onSuccess: (e) => {
            reset({ note: e?.data?.note })
        },
        onError: (e) => {
            console.log(e)
        }
    })

    const handleMutate = () => {

    }


    return (
        <form className='flex flex-col gap-2' onSubmit={() => handleSubmit(handleMutate)}>
            <span className='text-space-codet text-body-2-bolder'>یادداشت</span>

            {isLoading ? <div className='h-8 w-full rounded bg-gray-50 animate-pulse'>

            </div>
                : <textarea
                    placeholder='یادداشت شما'
                    className='bg-seasalt border border-anti-flash-white-lighter p-2 text-body-2-normal outline-none'
                    {...register('note')}
                />}

            <Button fullWidth>ذخیره</Button>

            <p className='text-ultra-violet text-h4-normal'>یادداشت تنها برای شما قابل دیدن است و پس از حذف آگهی، پاک خواهد شد.</p>

        </form>
    )
}
