import { IconCheck, IconX } from '@tabler/icons-react'
import React from 'react'
import { isNumber } from 'utils'

const convertValue = (value: any) => {
    if (isNumber(value))
        return Number(value).toLocaleString()

    else if (value == 'true' || value == 'false')
        return value == 'true' ? true : false

    return value


}

export const SingleField = ({ isPrimary, title, value }: { title: string | undefined, value: string | boolean | number | undefined, isPrimary: boolean }) => {


    const finalValue = convertValue(value)
    return (
        <div className='flex flex-row justify-between items-center py-2 hover:bg-gray-50'>

            <span>{title}</span>

            {typeof finalValue == 'string' && <span>{value}</span>}

            {typeof finalValue == 'boolean' && <> {value == 'true' ? <IconCheck className='text-green-500' /> : <IconX className='text-red-500' />}</>}

            {typeof finalValue == 'number' && <span>{value}</span>}


        </div>
    )
}
