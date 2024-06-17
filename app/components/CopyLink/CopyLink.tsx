import { IconCopy } from '@tabler/icons-react'
import React from 'react'
import { copyLink } from 'utils'
import { toast } from 'react-toastify'

export const CopyLink = ({ text }: { text: string }) => {


    const handleCopy = () => {
        toast.success('با موفق کپی شد.')
        copyLink(text)
    }

    return (
        <IconCopy  onClick={() => handleCopy()} className='cursor-pointer text-french-gray w-2.5 h-2.5 hover:text-gray-400 duration-200 transition-all' />
    )
}
