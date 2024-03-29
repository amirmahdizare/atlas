import React, { useState } from 'react'

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


    const { register, handleSubmit, control, watch } = useForm<FormValues>()


    console.log(watch())


    const { data, isLoading } = useCustomQuery<PermissionEndPointsType['GET_LIST']>({
        queryFn: () => api.get(PermissionEndPoints.GET_LIST),
        queryKey: 'getAllPermissions',
    })

    const { refetch } = useUserList()

    const { mutate, isLoading: mutateLoading } = useCustomMutation<UsersEndpointType['UPADTE_USER_PERMISSION']>({
        mutationFn: (data) => api.patch(UsersEndpoints.UPADTE_USER_PERMISSION(userId.toString()), data ),
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


    ///To Do => Fetch Current User Permissions

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
            >
                <form className='flex flex-col gap-2 p-2 max-h-[80vh] overflow-auto' onSubmit={handleSubmit(handleSubmitPermissions)}>

                    <span className='font-bold text-md'>تعیین دسترسی های کاربر</span>

                    {data?.data.map((item, index) => <label htmlFor={item.id.toString()} className={`cursor-pointer flex flex-row gap-2 justify-center items-center p-2 border-2 rounded text-center hover:bg-gray-50 ${false ? 'bg-blue-50 border-mint-green' : ''}`}>

                        <input type='checkbox' id={item.id.toString()} key={item.id} {...register(`${item.id}`)} />

                        <span>{captilizeFirstLetter(item.title)}</span>

                    </label>)}

                    {isLoading && <Spinner />}

                    <Button loading={mutateLoading}>ثبت تغییرات</Button>

                </form>

            </Modal>

        </>
    )
}
