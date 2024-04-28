import React, { ReactNode, useEffect, useState } from 'react'
import { Button, Input, Modal } from '@components'
import { IconMapPin2, IconX } from '@tabler/icons-react'
import cityPhoto from 'images/city.svg'
import Image from 'next/image'
import { useCities, useCustomMutation } from 'hooks'
import { api } from '_api/config'
import { LocationEndPoints } from '_api/endpoints/location'
import { toast } from 'react-toastify'
import { useCitiesSection } from '../../../hooks'
import { useForm } from 'react-hook-form'

export const SingleCity = ({ mode, id, children }: { mode: 'add' | 'edit', id?: string, children: ReactNode }) => {

    const [addModal, setAddModal] = useState<boolean>(false)


    const { dispatch } = useCitiesSection()

    const { refetch, data } = useCities()

    const { register, handleSubmit, formState: { errors }, reset } = useForm<{ name: string, faTitle: string }>()

    const { mutate, isLoading } = useCustomMutation({
        mutationFn: (data) => api.post(LocationEndPoints.CREATE_CITY, data),
        onSuccess: () => {
            toast.success('شهر با موفقیت اضافه شد.')
            refetch()
            dispatch({ mode: 'list' })
            setAddModal(false)
        },
        onError: (d) => {
            toast.error(d?.response?.data?.message)
        }
    })

    const { mutate: editMutate, isLoading: mutateLoading } = useCustomMutation({
        mutationFn: (data) => id ? api.patch(LocationEndPoints.SINGLE(id?.toString()), data) : Promise.reject(),
        onSuccess: () => {
            toast.success('شهر با موفقیت به روز رسانی شد.')
            refetch()
            dispatch({ mode: 'list' })
            setAddModal(false)
        },
        onError: (d) => {
            toast.error(d?.response?.data?.message)
        }
    })

    const handleSubmitCity = (data: { name: string }) => {
        if (mode == 'add')
            mutate(data)
        else if (mode == 'edit' && id)
            editMutate(data)
    }

    useEffect(() => {
        if (data?.data.find(i => i.id.toString() == id)) {
            reset(data?.data.find(i => i.id.toString() == id))
        }

    }, [id])


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

                <div className='lg:w-[800px] min-w-[290px] grid grid-cols-2 gap-2 p-1.5 lg:p-1 '>

                    <div className='col-span-2 flex flex-row gap-2 justify-between items-center border-b border-b-gray-50 p-1'>

                        <div className='flex flex-row gap-1 items-center'>
                            <IconMapPin2 width={20} height={20} />
                            <span className='text-body-2-bolder'>{mode == 'add' ? 'افزودن' : 'ویرایش'} شهر</span>
                        </div>

                        <IconX className='cursor-pointer' onClick={() => setAddModal(false)} />

                    </div>


                    <form className='col-span-2 lg:col-span-1 flex flex-col gap-4' onSubmit={handleSubmit(handleSubmitCity)}>

                        <div className='flex flex-col gap-2'>
                            <span className='text-h6-bolder text-right'>
                                <span className='text-robin-egg '>{mode == 'add' ? 'افزودن' : 'ویرایش'} شهر</span>
                                &nbsp;
                                &nbsp;
                                {mode == 'add' && <span className='text-space-codet'>جدید دپارتمان اطلس</span>}
                            </span>
                        </div>


                        <Input label='نام فارسی شهر' placeholder='مثلا : تهران' register={register('faTitle', {
                            required: {
                                value: true,
                                message: 'وارد کردن نلم فارسی شهر اجباری است.'
                            }
                        }

                        )}

                            error={!!errors.faTitle}
                            errorText={errors.faTitle?.message}
                        />

                        <Input label='نام انگلیسی شهر' placeholder='مثلا : Tehran' register={register('name', {
                            required: {
                                value: true,
                                message: 'وارد کردن نام انگلیسی اجباری است.'
                            }
                        }

                        )}

                            error={!!errors.name}
                            errorText={errors.name?.message}
                        />



                        <div className='flex flex-row gap-2'>

                            <Button type='button' bgColor='gray' textColor='dark' onClick={() => setAddModal(false)} fullWidth>انصراف</Button>
                            <Button bgColor='primaryNormal' textColor='white' fullWidth loading={isLoading || mutateLoading} >ثبت {mode == 'edit' ? 'تغییرات' : ''} شهر</Button>

                        </div>

                    </form>

                    <div className='col-span-2 lg:col-span-1 p-4 max-w-8  aspect-square  relative lg:flex flex-row justify-center items-center hidden'>
                        <Image src={cityPhoto} alt='تصویر شهر' width={280} height={280} />
                    </div>

                </div>
            </Modal>
        </>

    )
}
