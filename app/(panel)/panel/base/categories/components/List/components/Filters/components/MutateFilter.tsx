import { useFiltersList } from '(panel)/panel/base/categories/hooks'
import { Button, Input, Modal, Select } from '@components'
import { IconChevronLeft } from '@tabler/icons-react'
import { api } from '_api/config'
import { FilterEndPoints, FilterEndPointsType } from '_api/endpoints/filter'
import { CategorySpecialField, FilterBaseType } from 'enums'
import { useCustomMutation } from 'hooks'
import { extend } from 'ol/extent'
import React, { ReactNode, useEffect, useState } from 'react'

import { RegisterOptions, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { FilterMutateType, FilterReadType, FilterRecordType } from 'types'



interface FormType extends Omit<FilterRecordType, 'subCategoryId'> { }

export const MutateFilter = ({ children, mode, parentId, recordId, parentTitle }: { parentId: string, mode: 'add' | 'edit', recordId?: string, children: ReactNode, parentTitle: string }) => {

    const [show, setShow] = useState<boolean>(false)

    const { refetch, data } = useFiltersList()

    const { register, formState: { errors }, handleSubmit, reset, getValues, setValue, watch } = useForm<FormType>()

    watch(['type', 'filtertype'])

    const modeTitle = mode == 'edit' ? 'ویرایش' : 'ایجاد'

    const { mutate, isLoading } = useCustomMutation<FilterEndPointsType['CREATE']>({
        mutationFn: (data) => recordId && mode == 'edit' ? api.patch(FilterEndPoints.SINGLE(recordId.toString()), { ...data, subCategoryId: parentId, isPrimary: data.isPrimary.toString() }) : api.post(FilterEndPoints.CREATE, { ...data, subCategoryId: parentId, isPrimary: data.isPrimary.toString() }),
        onSuccess: (d, { title }) => {
            toast.success(`ویژگی ${title} با موفقیت ${modeTitle} شد.`)
            refetch()
            setShow(false)
        },
        onError: (d) => {
            toast.error(d?.response?.data?.message ?? d?.message)
        },
        mutationKey: [modeTitle, parentId, parentTitle]
    })


    useEffect(() => {

        const targetFilter = data?.data.find(i => i.id == recordId?.toString())
        if (targetFilter) {
            const { id, ...items } = targetFilter
            reset(items)
        }

    }, [recordId])

    useEffect(() => {
        reset()
    }, [show])


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
                <form className='flex flex-col gap-2  p-2' onSubmit={handleSubmit((d) => mutate({ ...d, subCategoryId: parentId }))}>
                    <span className='flex flex-row gap-0.5 items-center'>{parentTitle} <IconChevronLeft width={20} height={20} /> {modeTitle} ویژگی</span>

                    <FormItem
                        itemKey='title'
                        label='نام'
                        placeHolder='مثلا : تعداد خواب'
                    />

                    <FormItem
                        itemKey='hint'
                        label='راهنما'
                        placeHolder='مثلا : این ویژگی برای تعداد اتاق است'
                    />



                    <FormItem
                        itemKey='unit'
                        label='واحد'
                        placeHolder='مثلا : متر'
                    />

                    <FormItem
                        itemKey='itemKey'
                        label='نام انگلیسی'
                        placeHolder='مثلا : price به انگلیسی باید وارد شود'
                        options={{
                            pattern: {
                                value: /^[a-z]*$/,
                                message: 'نام انگلیسی با فرمت درستی وارد نشده است.'
                            }
                        }}
                    />

                    <span className='text-gray-500'>نوع فیلتری که میخواد اعمال شود</span>

                    <Select
                        items={Object.values(CategorySpecialField).map(i => ({ value: i, lable: i }))}
                        onChange={(value) => setValue('filtertype', value)}
                        value={getValues('filtertype')}
                    />

                    <span className='text-gray-500'>نوع ویژگی</span>

                    <Select
                        items={Object.values(FilterBaseType).map(i => ({ value: i, lable: i }))}
                        onChange={(value) => setValue('type', value)}
                        value={getValues('type')}
                    />

                    <label className='flex flex-row gap-2 items-center'>
                        <span>آیا ویژگی اصلی است؟</span>
                        <input type='checkbox' {...register('isPrimary')} />

                    </label>



                    {/* <Input label='نام ' placeholder='مثلا : مسکن مهر' register={register('title', {
                        required: {
                            value: true,
                            message: 'وارد کردن نام اجباری است.'
                        }
                    }

                    )}

                        error={!!errors.title}
                        errorText={errors.title?.message}
                    />

                    <Input label='نام انگلیسی' placeholder='مثلا : house' register={register('unit', {
                        required: {
                            value: true,
                            message: 'وارد کردن واحد اجباری است.'
                        }
                    })}

                        error={!!errors.unit}
                        errorText={errors.unit?.message}
                    /> */}

                    <div className='flex flex-row gap-2'>
                        <Button type='button' bgColor='gray' textColor='dark' onClick={() => setShow(false)} fullWidth>انصراف</Button>
                        <Button bgColor='primaryNormal' textColor='white' fullWidth loading={isLoading} className='leading-3'>ثبت {mode == 'edit' ? 'تغییرات' : ''} ویژگی</Button>

                    </div>
                </form>

            </Modal>
        </>
    )
}
