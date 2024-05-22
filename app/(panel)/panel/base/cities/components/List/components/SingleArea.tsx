import React, { ReactNode, useEffect, useState } from 'react'
import { Button, Input, Modal } from '@components'
import { IconMapPin, IconMapPin2, IconPlus, IconX } from '@tabler/icons-react'
import cityPhoto from 'images/city.svg'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useCustomMutation } from 'hooks'
import { api } from '_api/config'
import { SubLocationEndPoints } from '_api/endpoints/location'
import { useSubCities } from '@hooks'

export const SingleArea = ({ mode, id, children, cityTitle, cityId }: { mode: 'add' | 'edit', id?: string, children: ReactNode, cityTitle: string, cityId: number }) => {

    const [addModal, setAddModal] = useState<boolean>(false)

    const { register, handleSubmit, formState: { errors }, reset } = useForm<{ name: string, faTitle: string }>()

    const { refetch, data: subLocationData } = useSubCities()




    const { mutate, isLoading } = useCustomMutation({
        mutationFn: (data) => api.post(SubLocationEndPoints.CREATE_CITY, { ...data, parentLocationId: cityId }),
        onSuccess: () => {
            toast.success('منطقه با موفقیت اضافه شد.')
            refetch()
            // dispatch({ mode: 'list' })
            setAddModal(false)
        },
        onError: (d) => {
            toast.error(d?.response?.data?.message)
        }
    })

    const { mutate: editMutate, isLoading: mutateLoading } = useCustomMutation({
        mutationFn: (data) => id ? api.patch(SubLocationEndPoints.SINGLE(id?.toString()), { ...data, parentLocationId: cityId }) : Promise.reject(),
        onSuccess: () => {
            toast.success('منطقه با موفقیت به روز رسانی شد.')
            refetch()
            // dispatch({ mode: 'list' })
            setAddModal(false)
        },
        onError: (d) => {
            toast.error(d?.response?.data?.message)
        }
    })

    const handleSubmitSubCity = (data: { name: string }) => {

        if (subLocationData?.data?.find(i => i.name == data.name) && subLocationData?.data?.find(i => i.parentLocation?.id == cityId) )
            return toast.info('منطقه ای با این نام انگلیسی قبلا ثبت شده است . لطفا نام انگلیسی دیگری قرار دهید')
        if (mode == 'add')
            mutate(data)
        else if (mode == 'edit' && id)
            editMutate(data)
    }

    useEffect(() => {

        if (subLocationData?.data.find(i => i.id == id)) {
            reset(subLocationData?.data.find(i => i.id == id))
        }

    }, [subLocationData?.data])


    useEffect(() => {
        if (addModal)
            reset()
    }, [addModal])

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


                    <form className='col-span-2 lg:col-span-2 flex flex-col gap-4' onSubmit={handleSubmit(handleSubmitSubCity)}>

                        <div className='flex flex-col gap-2'>
                            <span className='text-h6-bolder text-right'>
                                <span className='text-robin-egg '>{mode == 'add' ? 'افزودن' : 'ویرایش'} منطقه</span>
                                &nbsp;
                                &nbsp;
                                {mode == 'add' && <span className='text-space-codet'>به {cityTitle}</span>}
                            </span>
                        </div>


                        <Input label='نام فارسی منطقه' placeholder='مثلا : منطقه 1' register={register('faTitle', {
                            required: {
                                value: true, message: 'وارد کردن نام فارسی منطقه ضروری می باشد.'
                            }
                        })}
                            error={!!errors?.faTitle}
                            errorText={errors.faTitle?.message}
                        />

                        <Input label='نام انگلیسی منطقه' placeholder='مثلا : Zone1' register={register('name', {
                            required: {
                                value: true,
                                message: 'وارد کردن نام انگلیسی اجباری است.'
                            }
                        }

                        )}

                            error={!!errors.name}
                            errorText={errors.name?.message}
                        />

                        {/* <Input label='نام انگلیسی منطقه' placeholder='مثلا : tehran' /> */}


                        <div className='flex flex-row gap-2'>

                            <Button type='button' bgColor='gray' textColor='dark' onClick={() => setAddModal(false)} fullWidth>انصراف</Button>
                            <Button loading={mutateLoading || isLoading} bgColor='primaryNormal' textColor='white' fullWidth >ثبت {mode == 'edit' ? 'تغییرات' : ''} منطقه</Button>

                        </div>

                    </form>

                    {/* <div className='col-span-2 lg:col-span-1 p-4 max-w-8  aspect-square  relative lg:flex flex-row justify-center items-center hidden'>
                        <Image src={cityPhoto} alt='تصویر منطقه' width={280} height={280} />
                    </div> */}

                </div>
            </Modal>
        </>

    )
}
