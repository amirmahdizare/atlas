'use client'
import React, { useEffect } from 'react'

import { Button } from '@components'
import { useCustomMutation, useCustomQuery, useUserInfo } from '@hooks'
import { api } from '_api/config'
import { PrivateEndPoints, PrivateEndPointsType } from '_api/endpoints/privateNote'
import { useForm } from 'react-hook-form'
import { getToken } from 'utils'
import { usePathname, useRouter } from 'next/navigation'
import { toast } from 'react-toastify'


export const Note = ({ propertyId }: { propertyId: string }) => {

    const { register, formState, handleSubmit, reset, watch } = useForm<{ note: string }>()

    const { push } = useRouter()

    const { isError } = useUserInfo()

    const pathname = usePathname()

    const { data: initialData, isLoading } = useCustomQuery<PrivateEndPointsType['BY_PRODUCT']>({
        queryFn: () => api.get(PrivateEndPoints.BY_PRODUCT(propertyId)),
        queryKey: ['privateNote', propertyId],
        onSuccess: (e) => {
            if (e.data.length > 0)
                reset({ note: e?.data?.[0].note })
        },
        onError: (e) => {
            console.log(e)
        }
    })

    const { mutate, isLoading: loadingMutate, data: mutateResult, reset: resetMutate } = useCustomMutation<PrivateEndPointsType['CREATE']>({
        mutationFn: (data) => !!initialData?.data && initialData?.data?.length > 0 ? api.patch(PrivateEndPoints.SINGLE(initialData?.data?.[0]?.id), data) : api.post(PrivateEndPoints.CREATE, data),
        mutationKey: [initialData?.data?.[0] ? 'edit' : 'create', propertyId],
        onSuccess: (d, v) => {
            toast.success(`یادداشت با موفقیت ${!!initialData?.data && initialData?.data?.length > 0 ? 'ویرایش' : 'ثبت'} شد`)
        }
    })


    const handleMutate = (data: { note: string }) => {
        if (isError) {
            alert('برای ذخیره یادداشت باید به سایت وارد شود.')
            return push(`/login?callbackUrl=${pathname}`)
        }

        mutate({ note: data.note, productId: propertyId })
    }

    const noteValue = watch('note')


    const isMutateSuccessful = !!mutateResult?.data?.id

    const currentNote = isMutateSuccessful ? mutateResult?.data?.note : (initialData?.data && initialData?.data?.length > 0 ? initialData?.data?.[0].note : '')

    // console.log({ noteValue, currentNote })


    return (
        <form className='flex flex-col gap-2' onSubmit={handleSubmit(handleMutate)}>
            <span className='text-space-codet text-body-2-bolder'>یادداشت</span>

            {isLoading ? <div className='h-8 w-full rounded bg-gray-50 animate-pulse'>

            </div>
                : <textarea
                    placeholder='یادداشت شما'
                    className='bg-seasalt border border-anti-flash-white-lighter p-2 text-body-2-normal outline-none'
                    {...register('note')}
                />}

            <Button disabled={(noteValue == currentNote) || !noteValue} bgColor={(noteValue == currentNote || !noteValue) ? 'gray' : undefined} textColor={(noteValue == currentNote || !noteValue) ? 'textGray' : undefined} fullWidth loading={loadingMutate} type='submit'>ذخیره</Button>

            <p className='text-ultra-violet text-h4-normal'>یادداشت تنها برای شما قابل دیدن است و پس از حذف آگهی، پاک خواهد شد.</p>

        </form>
    )
}
