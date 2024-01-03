import React, { useState } from 'react'
import { Button, Input, Modal } from '@components'
import { IconMapPin, IconMapPin2, IconPlus, IconX } from '@tabler/icons-react'
import cityPhoto from 'images/city.svg'
import Image from 'next/image'

export const AddCity = () => {

    const [addModal, setAddModal] = useState<boolean>(false)

    return (
        <>
            <Button
                icon={IconPlus}
                bgColor='primaryNormal'
                iconSide='right'
                onClick={() => setAddModal(true)}
            >
                افزودن شهر
            </Button>

            <Modal
                open={addModal}
                setOpen={setAddModal}
                fitWidth
                fitHeight
            >

                <div className='lg:w-[800px] min-w-[290px] grid grid-cols-2 gap-2 p-1.5 lg:p-1 '>

                    <div className='col-span-2 flex flex-row gap-2 justify-between items-center border-b border-b-gray-50 p-1'>

                        <div className='flex flex-row gap-1 items-center'>
                            <IconMapPin2 width={20} height={20} />
                            <span className='text-body-2-bolder'>افزودن شهر</span>
                        </div>

                        <IconX className='cursor-pointer' onClick={()=>setAddModal(false)} />

                    </div>


                    <div className='col-span-2 lg:col-span-1 flex flex-col gap-4'>

                        <div className='flex flex-col gap-2'>
                            <span className='text-h6-bolder'>
                                <span className='text-robin-egg '>افزودن شهر</span>
                                &nbsp;
                                &nbsp;
                                <span className='text-space-codet'>جدید دپارتمان اطلس</span>
                            </span>
                        </div>


                        <Input label='نام شهر' placeholder='مثلا : تهران' />

                        <Input label='نام انگلیسی شهر' placeholder='مثلا : tehran' />


                        <div className='flex flex-row gap-2'>

                            <Button bgColor='gray' textColor='dark' onClick={() => setAddModal(false)} fullWidth>انصراف</Button>
                            <Button bgColor='primaryNormal' textColor='white' fullWidth >ثبت شهر</Button>

                        </div>

                    </div>

                    <div className='col-span-2 lg:col-span-1 p-4 max-w-8  aspect-square  relative lg:flex flex-row justify-center items-center hidden'>
                        <Image src={cityPhoto} alt='تصویر شهر'  width={280} height={280} />
                    </div>

                </div>
            </Modal>
        </>

    )
}
