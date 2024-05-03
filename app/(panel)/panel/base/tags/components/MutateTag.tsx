import { Button, Input, Modal } from '@components'
import { useCustomMutation, useTags } from '@hooks'
import { api } from '_api/config'
import { TagsEndPoints, TagsEndPointsType } from '_api/endpoints/tag'
import React, { ReactNode, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { TagMutateType } from 'types'

export const MutateTag = ({ mode, recordId, children }: { mode: 'add' | 'edit', recordId?: string, children: ReactNode }) => {

    const [open, setIsOpen] = useState<boolean>(false)

    const { register, formState: { errors }, handleSubmit, reset, watch, getValues } = useForm<TagMutateType>()


    watch()

    const { refetch, data } = useTags()

    const { mutate, isLoading } = useCustomMutation<TagsEndPointsType['CREATE']>({
        mutationFn: (data) => mode == 'edit' && !!recordId ? api.patch(TagsEndPoints.SINGLE(recordId), data) : api.post(TagsEndPoints.CREATE, data),
        mutationKey: [mode, recordId],
        onSuccess: () => {
            toast.success(`تگ با موفقیت ${mode == 'edit' ? 'ویرایش' : 'ایجاد'} شد`)
            refetch()
            setIsOpen(false)
        },
        onError: (d) => {
            toast.error(d.response?.data.message ?? d.message)
        }
    })

    const mutateTag = (data: TagMutateType) => {
        mutate({ ...data, title: '-', color: data.textColor })
    }


    useEffect(() => {

        if (mode == 'edit' && !!recordId && data?.data) {
            const targetTag = data.data.find(t => t.id == recordId)
            reset({ ...targetTag })

        }
    }, [mode, data?.data])


    return (
        <>
            <div onClick={() => setIsOpen(true)} className='cursor-pointer'>
                {children}
            </div>
            <Modal
                open={open}
                setOpen={setIsOpen}
                fitHeight
            >
                <form className='flex  flex-col gap-2 p-1' onSubmit={handleSubmit(mutateTag)}>

                    <span className='text-body-2-bolder'>
                        {mode == 'edit' ? 'ویرایش' : 'ایجاد'}  برچسب
                    </span>


                    <Input
                        label='نام برچسب'
                        fullWidth
                        register={register('name', { required: { value: true, message: 'نام برچسب الزامی است.' } })}
                        errorText={errors.name?.message}
                        error={!!errors.name}
                    />



                    <Input
                        type='color'
                        fullWidth
                        label='رنگ متن برچسب'
                        register={register('textColor', { required: { value: true, message: 'رنگ متن برچسب الزامی است.' } })}
                        errorText={errors.textColor?.message}
                        error={!!errors.textColor}
                    />

                    <Input
                        type='color'
                        fullWidth
                        label='رنگ پس زمینه برچسب'
                        register={register('backgrondColor', { required: { value: true, message: 'رنگ پس زمینه برچسب الزامی است.' } })}
                        errorText={errors.backgrondColor?.message}
                        error={!!errors.backgrondColor}
                    />


                    <div className='flex flex-col gap-2 border p-1 rounded'>
                        <span className='text-gray-500'>پیش نمایش</span>
                        <div className='p-1 rounded w-fit' style={{ backgroundColor: getValues('backgrondColor'), color: getValues('textColor') }}>
                            {getValues('name')}
                        </div>
                    </div>

                    <Button loading={isLoading}>ثبت نهایی</Button>

                </form>

            </Modal>
        </>
    )
}
