import React, { ReactNode, useState } from 'react'
import { Button, Input, Modal } from '@components'
import { IconMapPin, IconMapPin2, IconPlus, IconX } from '@tabler/icons-react'
import cityPhoto from 'images/city.svg'
import Image from 'next/image'

export const SingleArea = ({ mode, id, children  , cityInfo}: { mode: 'add' | 'edit', id?: string, children: ReactNode , cityInfo?:object }) => {

    const [addModal, setAddModal] = useState<boolean>(false)

    return (
        <>

            <div onClick={() => setAddModal(true)}>
                {children}
            </div>
            <Modal
                open={addModal}
                setOpen={setAddModal}
                fitWidth
                fitHeight
            >

                <div className=' min-w-[290px] grid grid-cols-2 gap-2 p-1.5 lg:p-1 '>

                    <div className='col-span-2 flex flex-row gap-2 justify-between items-center border-b border-b-gray-50 p-1'>

                        <div className='flex flex-row gap-1 items-center'>
                            <IconMapPin2 width={20} height={20} />
                            <span className='text-body-2-bolder'>{mode == 'add' ? 'افزودن' : 'ویرایش'} منطقه</span>
                        </div>

                        <IconX className='cursor-pointer' onClick={() => setAddModal(false)} />

                    </div>


                    <div className='col-span-2 lg:col-span-2 flex flex-col gap-4'>

                        <div className='flex flex-col gap-2'>
                            <span className='text-h6-bolder text-right'>
                                <span className='text-robin-egg '>{mode == 'add' ? 'افزودن' : 'ویرایش'} منطقه</span>
                                &nbsp;
                                &nbsp;
                                {mode == 'add' && <span className='text-space-codet'>به شهر هشتگرد</span>}
                            </span>
                        </div>


                        <Input label='نام منطقه' placeholder='مثلا : تهران' />

                        <Input label='نام انگلیسی منطقه' placeholder='مثلا : tehran' />


                        <div className='flex flex-row gap-2'>

                            <Button bgColor='gray' textColor='dark' onClick={() => setAddModal(false)} fullWidth>انصراف</Button>
                            <Button bgColor='primaryNormal' textColor='white' fullWidth >ثبت {mode=='edit' ? 'تغییرات' : ''} منطقه</Button>

                        </div>

                    </div>

                    {/* <div className='col-span-2 lg:col-span-1 p-4 max-w-8  aspect-square  relative lg:flex flex-row justify-center items-center hidden'>
                        <Image src={cityPhoto} alt='تصویر منطقه' width={280} height={280} />
                    </div> */}

                </div>
            </Modal>
        </>

    )
}
