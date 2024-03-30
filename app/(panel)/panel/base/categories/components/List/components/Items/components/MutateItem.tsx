import { useFiltersList, useItemsList, useSuggestList } from '(panel)/panel/base/categories/hooks'
import { Button, Input, Modal, Select } from '@components'
import { IconChevronLeft } from '@tabler/icons-react'
import { api } from '_api/config'
import { FilterEndPoints, FilterEndPointsType } from '_api/endpoints/filter'
import { ItemsEndPoints, ItemsEndPointsType } from '_api/endpoints/items'
import { SuggestEndPoints, SuggestEndPointsType } from '_api/endpoints/suggest'
import { CategorySpecialField, FilterBaseType } from 'enums'
import { useCustomMutation } from 'hooks'
import { extend } from 'ol/extent'
import React, { ReactNode, useEffect, useState } from 'react'

import { RegisterOptions, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { ItemsMutateType, SuggestMutateType } from 'types'



interface FormType extends Omit<ItemsMutateType, 'subCategoryId'> { }

export const MutateItem = ({ children, mode, parentId, recordId, parentTitle }: { parentId: string, mode: 'add' | 'edit', recordId?: string, children: ReactNode, parentTitle: string }) => {

    const [show, setShow] = useState<boolean>(false)

    const { refetch, data } = useItemsList()

    const { register, formState: { errors }, handleSubmit, reset} = useForm<FormType>()


    const modeTitle = mode == 'edit' ? 'ویرایش' : 'ایجاد'

    const { mutate, isLoading } = useCustomMutation<ItemsEndPointsType['CREATE']>({
        mutationFn: (data) => recordId && mode == 'edit' ? api.patch(ItemsEndPoints.SINGLE(recordId.toString()), { ...data , suggestId:parentId}) : api.post(ItemsEndPoints.CREATE, { ...data  , suggestId:parentId}),
        onSuccess: (d, { title }) => {
            toast.success(`آیتم ${title} با موفقیت ${modeTitle} شد.`)
            refetch()
            setShow(false)
        },
        onError: (d) => {
            toast.error(d?.response?.data?.message ?? d?.message)
        },
        mutationKey: [modeTitle, parentId, parentTitle]
    })


    useEffect(() => {

        const targetItem = data?.data.find(i => i.id == recordId?.toString())
        if (targetItem) {
            const { title , value} = targetItem
            reset({ title, value })
        }

    }, [recordId])


    const FormItem = <T extends keyof FormType,>({ label, placeHolder, itemKey, inputType, options }: { label: string, placeHolder: string, itemKey: keyof FormType, inputType?: string, options?: RegisterOptions<FormType> | undefined }) => <Input label={label} placeholder={placeHolder}
        register={register(itemKey, {
            required: {
                value: true,
                message: `وارد کردن ${label} اجباری است.`
            }, ...options
        })}

        error={!!errors[itemKey]}
        errorText={errors[itemKey]?.message}
        type={inputType}
    />



    return (
        <>
            <div onClick={() => setShow(true)}>
                {children}
            </div>

            <Modal
                open={show}
                setOpen={setShow}
                fitHeight
            // fitWidth
            >
                <form className='flex flex-col gap-2  p-2' onSubmit={handleSubmit((d) => mutate({ ...d }))}>
                    <span className='flex flex-row gap-0.5 items-center'>{parentTitle} <IconChevronLeft width={20} height={20} /> {modeTitle} آیتم</span>

                    <FormItem
                        itemKey='title'
                        label='نام'
                        placeHolder='مثلا : هفتاد و پنج میلیون '
                    />

                    <FormItem
                        itemKey='value'
                        label='مقدار'
                        placeHolder='مثلا : 75000 '
                    />





                    <div className='flex flex-row gap-2'>
                        <Button type='button' bgColor='gray' textColor='dark' onClick={() => setShow(false)} fullWidth>انصراف</Button>
                        <Button bgColor='primaryNormal' textColor='white' fullWidth loading={isLoading} className='leading-3'>ثبت {mode == 'edit' ? 'تغییرات' : ''} آیتم</Button>

                    </div>
                </form>

            </Modal>
        </>
    )
}
