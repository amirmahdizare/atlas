import React, { useEffect, useState } from 'react'

import { Button, Modal, Spinner } from '@components'
import { IconKey, IconUser } from '@tabler/icons-react'
import { api } from '_api/config'
import { RoleEndPoints, RoleEndPointsType } from '_api/endpoints/roles'
import { UsersEndpointType, UsersEndpoints } from '_api/endpoints/users'
import { useCustomMutation, useCustomQuery } from 'hooks'
import { toast } from 'react-toastify'
import { captilizeFirstLetter } from 'utils'
import { useUserList } from '../../../hooks'
import { PermissionEndPoints, PermissionEndPointsType } from '_api/endpoints/permission'
import { useFieldArray, useForm } from 'react-hook-form'


// type FormValues = { permissions: string[] }

type FormValues = {
    [key: string]: boolean
};

export const ChangeUserPermissions = ({ userId, userRoleId }: { userId: number, userRoleId?: number }) => {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)


    const { register, handleSubmit, control, watch, getValues, reset, setValue } = useForm<FormValues>()

    useEffect(() => {
        if (isModalOpen)
            fetchUserInfo()
    }, [isModalOpen])

    const { data, isLoading } = useCustomQuery<PermissionEndPointsType['GET_LIST']>({
        queryFn: () => api.get(PermissionEndPoints.GET_LIST),
        queryKey: 'getAllPermissions',
        staleTime: 1000 * 60 * 30
    })

    const { isLoading: loadingUserInfo, data: userInfo, isError, refetch: fetchUserInfo } = useCustomQuery<UsersEndpointType['GET_SINGLE']>({
        queryKey: ['getUserInfo', userId.toString()],
        queryFn: ({ queryKey }) => api.get(UsersEndpoints.SINGLE_USER(userId.toString())),
        onSuccess: (d) => {
            if (d?.data?.permissions) {
                const currentPermissionObj = d?.data?.permissions.reduce((pv, cv) => ({ ...pv, [cv.id]: true }), {})
                reset(currentPermissionObj)
            }
        },
        enabled:false
    })

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


    const Content = () => {

        if (isError)
            return <span className='text-red-500 text-center w-full'>خطا در دریافت اطلاعات کاربر</span>

        else if (userInfo?.data)
            return <form className='flex flex-col gap-2 p-2 max-h-[80vh] overflow-auto w-full min-w-[80vw]' onSubmit={handleSubmit(handleSubmitPermissions)}>

                <div className='flex flex-row justify-between items-center'>

                    <span className='font-bold text-md'>تعیین دسترسی های کاربر</span>

                    <label className='flex flex-row gap-1 cursor-pointer p-1 rounded border' htmlFor='selectAll'>
                        <input type='checkbox' id='selectAll' onChange={({ target: { checked } }) => toggleSelectAll(checked)} checked={Object.values(getValues()).filter(i => !!i).length == data?.data.length} />
                        <span>انتخاب همه</span>

                    </label>

                </div>
                {data?.data.map((item, index) => <label htmlFor={item.id.toString()} className={`cursor-pointer flex flex-row gap-2 justify-center items-center p-2 border-2 rounded text-center hover:bg-gray-50 ${false ? 'bg-blue-50 border-mint-green' : ''}`}>

                    <input type='checkbox' id={item.id.toString()} key={item.id} {...register(`${item.id}`)} />

                    <span>{captilizeFirstLetter(item.title)}</span>

                </label>)}

                {isLoading && <Spinner />}

                <Button loading={mutateLoading}>ثبت تغییرات</Button>

            </form>

        return <div className='flex flex-col gap-2 items-center max-h-[80vh] overflow-auto w-full min-w-[80vw]'>
            {Array.from(new Array(10)).map((i, index) => <div className='bg-gray-50 animate-pulse w-full h-8 '></div>)}
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
