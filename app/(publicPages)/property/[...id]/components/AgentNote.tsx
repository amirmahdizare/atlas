'use client'
import { Button } from '@components'
import { useAgentNotes, useCustomMutation, useCustomQuery, useUserInfo } from '@hooks'
import { api } from '_api/config'
import { AgentNoteEndPoints, AgentNoteEndPointsType } from '_api/endpoints/agentNote'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'


import { PropertyDetailType } from 'types'

export const AgentNote = (data: PropertyDetailType) => {

    const [agentNote, setAgentNote] = useState<string | undefined>('')

    const { data: userData, isError, isLoading: loadingUser } = useUserInfo()


    const { data: agentsData, isLoading, isError: agentNoteError, refetch } = useCustomQuery<AgentNoteEndPointsType['SINGLE_PRODUCT']>({
        queryFn: () => api.get(AgentNoteEndPoints.SINGLE_PRODUCT(data.id)),
        queryKey: ['agentNote', data.id],
        enabled:false
    })

    useEffect(() => {

        if (agentsData?.data.find(i => i.product && i.product.id == data.id)) {
            const currentAgentNote = agentsData?.data.find(i => i.product && i.product.id == data.id)?.note
            setAgentNote(currentAgentNote)
        }

    }, [agentsData])


    const { mutate, isLoading: isLoadingMutateAgent, data: mutateResult, isError: isAgentError } = useCustomMutation<AgentNoteEndPointsType['CREATE']>({
        mutationFn: (formData: { note: string, productId: string }) => {

            const currentAgentNote = agentsData?.data.find(i => i.product && i.product.id == data.id)

            return currentAgentNote?.id ? api.patch(AgentNoteEndPoints.SINGLE(currentAgentNote?.id), { note: formData.note, productId: formData.productId }) : api.post(AgentNoteEndPoints.CREATE, { note: formData.note, productId: formData.productId })
        },
        onSuccess: () => {
            toast.success('یادداشت مشاور با موفقیت ذخیره شد. ')
        }
    })

    const isUserPermitToNote = userData?.data.role.name == 'superAdmin' || data.user?.id == userData?.data.id

    const isMutateSuccessful = !!mutateResult?.data?.id

    const currentNote = isMutateSuccessful ? mutateResult?.data?.note : (!!agentsData?.data.find(i => i.product && i.product.id == data.id)?.note ? agentsData?.data.find(i => i.product && i.product.id == data.id)?.note : '')


    useEffect(() => {
        if (userData?.data) {
            const isUserPermitToNote = userData?.data.role.name == 'superAdmin' || data.user?.id == userData?.data.id
            if (isUserPermitToNote)
                refetch()
        }
    }, [userData])

    if (isError)
        return <></>

    else if (loadingUser)
        return <div className='h-20 w-full rounded bg-gray-50 animate-pulse'></div>

    else if (isUserPermitToNote)
        return (
            <div className='flex flex-col gap-3 p-1.5 border border-mint-green rounded' >
                <span className='text-space-codet text-body-2-bolder'>یادداشت مشاور (دپارتمان)</span>

                {isLoading
                    ? <div className='h-20  w-full rounded bg-gray-50 animate-pulse'>

                    </div>
                    : <textarea
                        placeholder='یادداشت مشاور : مثلا مالک فروشنده'
                        className='bg-seasalt border border-anti-flash-white-lighter p-2 text-body-2-normal outline-none'
                        value={agentNote}
                        onChange={({ target: { value } }) => setAgentNote(value)}
                        rows={3}
                    />}

                <Button onClick={() => agentNote ? mutate({ note: agentNote, productId: data.id }) : undefined} disabled={(agentNote == currentNote) || !agentNote} bgColor={(agentNote == currentNote || !agentNote) ? 'gray' : undefined} textColor={(agentNote == currentNote || !agentNote) ? 'textGray' : undefined} fullWidth loading={isLoadingMutateAgent} type='submit'>ذخیره</Button>

                {/* <p className='text-ultra-violet leading-3' dangerouslySetInnerHTML={{ __html: data.agentNote }} /> */}

                <p className='text-ultra-violet text-h4-normal'> یادداشت مشاور تنها برای شما و مدیریت قابل دیدن است.</p>
            </div>
        )

    return <></>
}
