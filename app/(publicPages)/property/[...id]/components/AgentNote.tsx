import React from 'react'

import { PropertyDetailType } from 'types'

export const AgentNote = (data: PropertyDetailType) => {

    if (data.agentNote)
        return (
            <div className='flex flex-col gap-3 p-1.5 border border-mint-green rounded' >
                <span className='text-space-codet text-body-2-bolder'>یادداشت مشاور (دپارتمان)</span>

                <p className='text-ultra-violet leading-3' dangerouslySetInnerHTML={{ __html: data.agentNote }} />
                
                <p className='text-ultra-violet text-h4-normal'> یادداشت مشاور تنها برای شما و مدیریت قابل دیدن است.</p>
            </div>
        )

    return <></>
}
