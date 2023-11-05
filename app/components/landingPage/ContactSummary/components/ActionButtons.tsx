'use client'
import React from 'react'
import { Button } from '@components'
import { IconMap, IconMap2 } from '@tabler/icons-react'
import { COORDINATE } from 'variables'

export const ActionButtons = () => {
    return (
        <div className='flex flex-col lg:flex-row gap-2'>
            <Button bgColor='secondary' icon={IconMap2} textColor='white'  onClick={()=> window.open(`https://www.google.com/maps?q=${COORDINATE.latitude},${COORDINATE.longitude}`)}>مسیریابی با گوگل</Button>
            <Button bgColor='white' icon={IconMap} textColor='dark' onClick={()=>window.open(`https://nshn.ir/_bv0-UOxSRKg`)}>مسیریابی با نشان</Button>
        </div>
    )
}
