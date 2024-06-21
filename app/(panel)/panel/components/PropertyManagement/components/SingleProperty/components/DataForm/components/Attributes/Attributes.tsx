import React, { ReactNode, useEffect } from 'react'
import { Input } from '@components'
import { NumericFormat } from 'react-number-format'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { PropertyCUType } from 'types'
import { useFullCategories } from '@hooks'
import { IconAlertCircle } from '@tabler/icons-react'

const AttrContainer = ({ children }: { children: ReactNode }) => {
    return <div className='border-r-2  border-r-coral pr-1.5 flex flex-row gap-2 items-center'>{children}</div>
}

export const Attributes = ({ initialSubCategoryId }: { initialSubCategoryId?: number }) => {

    const { getValues, control, setValue, watch, register, formState: { errors } } = useFormContext<PropertyCUType<File>>()


    const { fields } = useFieldArray({
        control,
        name: 'features'
    })

    watch('features')

    const { data, isLoading, isError } = useFullCategories()


    const selectedSubcategory = getValues('subCategory')

    const selectedCategory = getValues('category')


    const attrss = data?.data.find(i => i.id == selectedCategory?.toString())?.subCategories.find(i => i.id == selectedSubcategory?.toString())?.filters
    useEffect(() => {

        if (attrss) {
            if (initialSubCategoryId != selectedSubcategory) {

                const initalAttributes = attrss?.map(i => ({ value: i.type == 'boolean' ? false : undefined, filterId: i.id }))
                setValue('features', initalAttributes)
            }
        }

    }, [selectedSubcategory])


    // const attrs: Array<{ key: string, type: 'string' | 'number' | 'boolean', title: string }> = [
    //     {
    //         key: 'metr', title: 'متراژ بنا', type: 'number',
    //     },
    //     {
    //         key: 'asansor', title: 'آسانسور', type: 'boolean'
    //     },
    //     {
    //         key: 'document', title: 'نوع سند', type: 'string'
    //     }
    // ]


    const findType = (filterId: string) => attrss?.find(i => i.id == filterId)?.type

    const findTitle = (filterId: string) => attrss?.find(i => i.id == filterId)?.title

    const findUnit = (filterId: string) => attrss?.find(i => i.id == filterId)?.unit

    if (data?.data) {



        return (
            <div className='flex flex-col gap-4'>
                <span className='text-french-gray text-body-2-normal  text-right'>ویژگی ها</span>
                {!selectedSubcategory && <span className='text-gray-500'>برای افزودن ویژگی های باید زیر دسته بندی را انتخاب کنید</span>}

                {!!selectedSubcategory && fields.length == 0 && <span className='text-gray-500'>این زیر دسته بندی ویژگی ای ندارد.</span>}

                {fields?.map((item, index) => {
                    if (findType(item.filterId) == 'string')
                        return <AttrContainer>
                            <Input label={findTitle(item.filterId)} type='string' register={register(`features.${index}.value`, {
                                required: {
                                    value: true,
                                    message: `${findTitle(item.filterId)} وارد نشده است`
                                }
                            })}
                                error={!!errors?.features?.[index]}
                                errorText={errors?.features?.[index]?.message}
                            />
                            <span>{findUnit(item.filterId)}</span>
                        </AttrContainer>
                    else if (findType(item.filterId) == 'number')
                        return <AttrContainer>
                            <span>{findTitle(item.filterId)}</span>
                            <NumericFormat
                                thousandSeparator
                                placeholder={findTitle(item.filterId)}
                                onValueChange={(e) => setValue(`features.${index}.value`, e.floatValue, { shouldValidate: true })}
                                value={Number(getValues(`features.${index}.value`))}
                                className={`border outline-none focus:border-mint-green rounded-sm p-0.5 ${!!(errors?.[`features`])?.[index] ? 'border-imperial-red' : ''}`}
                            />
                            <span>{findUnit(item.filterId)}</span>
                            {!!errors?.features?.[index] && <IconAlertCircle className='text-red-500' />}
                        </AttrContainer>
                    else if (findType(item.filterId) === 'boolean')
                        return <AttrContainer><label id={item.id} className='flex flex-row gap-1 items-center cursor-pointer'>
                            <span className=' text-body-2-normal  text-right'>{findTitle(item.filterId)}</span>
                            <input type='checkbox' defaultChecked={false} {...register(`features.${index}.value`, {

                                // required: {
                                //     value: true,
                                //     message: `${findTitle(item.filterId)} وارد نشده است`
                                // }

                            })} />
                            {!!errors?.features?.[index] && <IconAlertCircle className='text-red-500' />}
                        </label></AttrContainer>
                    else
                        return <>-</>
                })}
            </div>

        )
    }
    else if (isError)
        return <div className='text-body-3-normal text-right text-bittersweet'>خطا در دریافت اطلاعات ویژگی ها</div>

    return <div className='h-4 w-full animate-pulse '></div>
}
