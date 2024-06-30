import React, { useEffect, useState } from 'react'

import { Button, Modal, Spinner } from '@components'
import { IconKey, IconUser } from '@tabler/icons-react'
import { api } from '_api/config'
import { RoleEndPoints, RoleEndPointsType } from '_api/endpoints/roles'
import { UsersEndpointType, UsersEndpoints } from '_api/endpoints/users'
import { useAllAgents, useCustomMutation, useCustomQuery } from 'hooks'
import { toast } from 'react-toastify'
import { captilizeFirstLetter } from 'utils'
import { useUserList } from '../../../hooks'
import { PermissionEndPoints, PermissionEndPointsType } from '_api/endpoints/permission'
import { useFieldArray, useForm } from 'react-hook-form'
import { PermissionType } from 'types'

const batchAccesses: Array<{ title: string, records: string[] }> = [
    {
        title: 'مدیریت دسته بندی',
        records: ['category', 'subcategory', 'filter', 'suggest', 'item']
    },
    {
        title: 'مدیریت شهر ها',
        records: ['locations', 'sublocations']
    },
    {
        title: 'مدیریت آگهی',
        records: ['product']
    },
    {
        title: 'مدیریت کاربران',
        records: ['user']
    },
    {
        title: 'مدیریت برچسب ها',
        records: ['tag']
    },
    {
        title: 'مدیریت مقالات',
        records: ['blog']
    },
    {
        title: 'مدیریت پروژه های مشارکت',
        records: ['participation']
    },
    {
        title: 'مدیریت درخواست های خرید و فروش',
        records: ['saleOrBuyProduct']
    }
]


const bannedPermissions = ['role']

type FormValues = {
    [key: string]: boolean
};

export const ChangeUserPermissions = ({ userId, userRoleId, userName }: { userId: number, userRoleId?: number, userName: string }) => {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)


    const { register, handleSubmit, control, watch, getValues, reset, setValue } = useForm<FormValues>()

    // useEffect(() => {
    //     if (isModalOpen)
    //         fetchUserInfo()
    // }, [isModalOpen])

    const { data, isLoading } = useCustomQuery<PermissionEndPointsType['GET_LIST']>({
        queryFn: () => api.get(PermissionEndPoints.GET_LIST),
        queryKey: 'getAllPermissions',
        staleTime: 1000 * 60 * 30
    })


    const currentSelected = watch()
    // const { isLoading: loadingUserInfo, data: userInfo, isError, refetch: fetchUserInfo } = useCustomQuery<UsersEndpointType['GET_SINGLE']>({
    //     queryKey: ['getUserInfo', userId.toString()],
    //     queryFn: ({ queryKey }) => api.get(UsersEndpoints.SINGLE_USER(userName.toString())),
    //     onSuccess: (d) => {
    //         if (d?.data?.permissions) {
    //             const currentPermissionObj = d?.data?.permissions.reduce((pv, cv) => ({ ...pv, [cv.id]: true }), {})
    //             reset(currentPermissionObj)
    //         }
    //     },
    //     enabled: false
    // })

    const { data: agentsData, isError, } = useAllAgents()

    useEffect(() => {
        if (agentsData?.data.find(f => f.id == userId.toString())) {
            const currentPermissionObj = agentsData?.data.find(f => f.id == userId.toString())?.permissions.reduce((pv, cv) => ({ ...pv, [cv.id]: true }), {})
            reset(currentPermissionObj)
        }


    }, [agentsData, userId])


    const { refetch } = useUserList()

    const { mutate, isLoading: mutateLoading } = useCustomMutation<UsersEndpointType['UPADTE_USER_PERMISSION']>({
        mutationFn: (data) => api.patch(UsersEndpoints.UPADTE_USER_PERMISSION(userId.toString()), data),
        onError: (data) => {
            toast.error(data.response?.data?.message)
        },
        onSuccess: () => {
            toast.success('دسترسی ها با موفقیت داده شد')
            refetch()
            return setIsModalOpen(false)
        }
    })


    const handleSubmitPermissions = (data: FormValues) => {
        mutate({ permissionIds: Object.keys(data).filter((i, index) => Object.values(data)[index]).map(i => Number(i)) })
    }


    ///TODO => Fetch Current User Permissions

    const toggleSelectAll = (targetState: boolean) => {
        if (!targetState) {
            console.log({ targetState })
            reset(data?.data.reduce((pv, cv) => ({ ...pv, [cv.id]: false }), {}))
        }

        else
            reset(data?.data.reduce((pv, cv) => ({ ...pv, [cv.id]: true }), {}))
    }

    const proccessedData = data?.data.reduce<Array<{ title: string, items: PermissionType<string>[] }>>((pv, cv, index, array) => {
        if (pv.findIndex(i => i.title == cv.action.split('_')[1]) == -1)
            pv.push({ title: cv.action.split('_')[1], items: array.filter(i => i.action.includes(cv.action.split('_')[1])) })
        return pv
    }, [])


    const handleToggleCatSelect = (catName: string, state: boolean, items: Array<any>) => {

        reset({ ...currentSelected, ...items.reduce((pv, cv) => ({ ...pv, [cv.id]: state }), {}) })

    }

    const Content = () => {

        if (isError)
            return <span className='text-red-500 text-center w-full'>خطا در دریافت اطلاعات کاربر</span>

        else if (agentsData?.data) {


            const proccessedData = data?.data.reduce<Array<{ title: string, items: PermissionType<string>[] }>>((pv, cv, index, array) => {
                if (pv.findIndex(i => i.title == cv.action.split('_')[1]) == -1 && pv.findIndex(i => i.items.findIndex(i => i.action == cv.action) != -1) == -1)
                    pv.push({
                        title: batchAccesses.findIndex(ba => ba.records.indexOf(cv.action.split('_')[1])) != -1 ? batchAccesses.find(ba => ba.records.indexOf(cv.action.split('_')[1]) != -1)?.title ?? cv.action.split('_')[1] : cv.action.split('_')[1]
                        ,
                        items: array.filter(i =>
                            batchAccesses.find(ba => ba.records.indexOf(cv.action.split('_')[1]) == -1
                                ? i.action.split('_')[1] == cv.action.split('_')[1]
                                : (i.action.split('_')[1] == cv.action.split('_')[1] || batchAccesses.findIndex(f => f.records.indexOf(cv.action.split('_')[1]) != -1) == batchAccesses.findIndex(f => f.records.indexOf(i.action.split('_')[1]) != -1))))
                    })
                return pv
            }, [])



            return <form className=' grid grid-cols-4 gap-2 p-2 max-h-[80vh] overflow-auto w-full min-w-[90vw]' onSubmit={handleSubmit(handleSubmitPermissions)}>

                <div className='flex flex-row justify-between items-center col-span-4'>

                    <span className='font-bold text-md'>تعیین دسترسی های کاربر</span>

                    <label className='flex flex-row gap-1 cursor-pointer p-1 rounded border' htmlFor='selectAll'>
                        <input type='checkbox' id='selectAll' onChange={({ target: { checked } }) => toggleSelectAll(checked)} checked={Object.values(getValues()).filter(i => !!i).length == data?.data.length} />
                        <span>انتخاب همه</span>

                    </label>

                </div>

                {/* {data?.data.reduce<Array<{title:string , items : PermissionType[]}>>((pv, cv) => [] , []) } */}

                {proccessedData?.filter(i => bannedPermissions.indexOf(i.title) == -1).map(cat => <div key={cat.title} className='flex flex-col gap-1 col-span-4 md:col-span-2 lg:col-span-1 border rounded p-1'>

                    <div className='flex flex-row gap-2 items-center justify-between'>
                        <span className='text-body-2-bolder'>{captilizeFirstLetter(cat.title)}</span>

                        <label className='flex flex-row gap-1 items-center border p-1 rounded cursor-pointer' htmlFor={`all-${cat.title}`}>
                            <input id={`all-${cat.title}`} type='checkbox' checked={cat.items.every(i => currentSelected[i.id])} onChange={({ target: { checked } }) => handleToggleCatSelect(cat.title, checked, cat.items)} />
                            <span>انتخاب همه</span>

                        </label>
                    </div>

                    {cat.items.map((item, index) => <label htmlFor={item.id.toString()} className={`cursor-pointer flex flex-row gap-2 justify-center items-center p-2 border-2 rounded text-center hover:bg-gray-50 ${false ? 'bg-blue-50 border-mint-green' : ''}`}>

                        <input type='checkbox' id={item.id.toString()} key={item.id} {...register(`${item.id}`)} />

                        <span>{captilizeFirstLetter(item.title)}</span>

                    </label>)}</div>)}

                {/* {data?.data.map((item, index) => <label htmlFor={item.id.toString()} className={`cursor-pointer flex flex-row gap-2 justify-center items-center p-2 border-2 rounded text-center hover:bg-gray-50 ${false ? 'bg-blue-50 border-mint-green' : ''}`}>

                    <input type='checkbox' id={item.id.toString()} key={item.id} {...register(`${item.id}`)} />

                    <span>{captilizeFirstLetter(item.title)}</span>

                </label>)} */}

                {isLoading && <Spinner />}
                <div className='col-span-4 flex'>


                    <Button loading={mutateLoading} fullWidth>ثبت تغییرات</Button>

                </div>
            </form>
        }

        return <div className='flex flex-col gap-2 items-center max-h-[80vh] overflow-auto w-full min-w-[90vw]'>
            {Array.from(new Array(10)).map((i, index) => <div key={i} className='bg-gray-50 animate-pulse w-full h-8 '></div>)}
        </div>

    }


    return (
        <>
            <div className='flex flex-row gap-2 items-center justify-between hover:bg-gray-100 transition-all p-1 z-0' onClick={() => setIsModalOpen(true)}>
                <span>تغییر دسترسی های کاربر</span>
                <IconKey width={20} height={20} className='text-blue-800' />
            </div>

            <Modal
                open={isModalOpen}
                setOpen={setIsModalOpen}
                fitHeight
                fitWidth
            >

                <Content />


            </Modal>

        </>
    )



}
