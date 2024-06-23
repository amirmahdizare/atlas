import { useSubCategoryList } from '(panel)/panel/base/categories/hooks'
import { Button, Input, Modal } from '@components'
import { IconChevronLeft } from '@tabler/icons-react'
import { api } from '_api/config'
import { SubLocationEndPointsType } from '_api/endpoints/location'
import { SubcategoryEndPoints, SubcategoryEndPointsType } from '_api/endpoints/subcategory'
import { useCustomMutation } from 'hooks'
import React, { ReactNode, useEffect, useState } from 'react'

import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { SEO_WORD_REGEX } from 'variables'

export const MutateSubcategory = ({ children, mode, catId, subcatId, catTitle }: { catId: string, mode: 'add' | 'edit', subcatId?: number, children: ReactNode, catTitle: string }) => {

    const [show, setShow] = useState<boolean>(false)

    const { refetch, data } = useSubCategoryList()

    const { register, formState: { errors }, handleSubmit, reset } = useForm<SubcategoryEndPointsType['CREATE']['REQUEST']>()

    const modeTitle = mode == 'edit' ? 'ویرایش' : 'ایجاد'

    const { mutate, isLoading } = useCustomMutation<SubcategoryEndPointsType['CREATE']>({
        mutationFn: (data) => subcatId && mode == 'edit'
            ? api.patch(SubcategoryEndPoints.SINGLE(subcatId.toString()),
                { ...data, categoryId: Number(catId) }) : api.post(SubcategoryEndPoints.CREATE, { ...data, categoryId: Number(catId) }
                ),
        onSuccess: (d, { title }) => {
            toast.success(`زیرگروه ${title} با موفقیت ${modeTitle} شد.`)
            refetch()
            setShow(false)
        },
        onError: (d) => {
            toast.error(d?.response?.data?.message ?? d?.message)
        },
        mutationKey: [modeTitle, catId, catTitle]
    })


    useEffect(() => {

        const targetSubgroup = data?.data.find(i => i.id == subcatId?.toString())
        if (targetSubgroup) {
            const { enTitle, title } = targetSubgroup
            reset({ enTitle, title })
        }

    }, [subcatId])

    useEffect(() => {
        reset()
    }, [show])




    return (
        <>
            <div onClick={() => setShow(true)}>
                {children}
            </div>

            <Modal
                open={show}
                setOpen={setShow}
                fitHeight
                fitWidth
            >
                <form className='flex flex-col gap-2  p-2' onSubmit={handleSubmit((d) => mutate(d))}>
                    <span className='flex flex-row gap-0.5 items-center'>{catTitle} <IconChevronLeft width={20} height={20} /> {modeTitle} زیرگروه</span>

                    <Input label='نام ' placeholder='مثلا : مسکن مهر' register={register('title', {
                        required: {
                            value: true,
                            message: 'وارد کردن نام اجباری است.'
                        }
                    }

                    )}

                        error={!!errors.title}
                        errorText={errors.title?.message}
                    />

                    <Input label='نام انگلیسی' placeholder='مثلا : house' register={register('enTitle', {
                        required: {
                            value: true,
                            message: 'وارد کردن نام انگلیسی اجباری است.'
                        },
                        pattern: {
                            value: SEO_WORD_REGEX,
                            message: 'فرمت نام انگلیسی درست نیست.'
                        }
                    })}

                        error={!!errors.enTitle}
                        errorText={errors.enTitle?.message}
                    />

                    <span>مثال : doublex یا ab_dar (بدون فاصله داخل کلمه فقط حروف و عدد و  آندرلاین)</span>

                    <div className='flex flex-row gap-2'>
                        <Button type='button' bgColor='gray' textColor='dark' onClick={() => setShow(false)} fullWidth>انصراف</Button>
                        <Button bgColor='primaryNormal' textColor='white' fullWidth loading={isLoading} className='leading-3'>ثبت {mode == 'edit' ? 'تغییرات' : ''} زیرگروه</Button>

                    </div>
                </form>

            </Modal>
        </>
    )
}
