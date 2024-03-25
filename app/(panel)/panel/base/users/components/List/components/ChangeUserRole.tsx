import React, { useState } from 'react'

import { Modal, Spinner } from '@components'
import { IconUser } from '@tabler/icons-react'
import { api } from '_api/config'
import { RoleEndPoints, RoleEndPointsType } from '_api/endpoints/roles'
import { UsersEndpoints } from '_api/endpoints/users'
import { useCustomMutation, useCustomQuery } from 'hooks'
import { toast } from 'react-toastify'
import { captilizeFirstLetter } from 'utils'
import { useUserList } from '../../../hooks'

export const ChangeUserRole = ({ userId, userRoleId }: { userId: number, userRoleId?: number }) => {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const { data, isLoading } = useCustomQuery<RoleEndPointsType['GET_ROLES']>({
    queryFn: () => api.get(RoleEndPoints.GET_ROLES),
    queryKey: 'getAllRoles',
  })

  const { refetch } = useUserList()

  const { mutate, isLoading: mutateLoading } = useCustomMutation({
    mutationFn: () => api.patch(UsersEndpoints.UPDATE_USER_ROLE(userId.toString())),
    onError: (data) => {
      toast.error(data.response?.data?.message)
    },
    onSuccess: () => {
      toast.success('نقش با موفقیت الصاق شد.')
      refetch()
      return setIsModalOpen(false)
    }
  })

  return (
    <>
      <div className='flex flex-row gap-2 items-center justify-between hover:bg-gray-100 transition-all p-1 z-0' onClick={() => setIsModalOpen(true)}>
        <span>تغییر نقش کاربر</span>
        <IconUser width={20} height={20} className='text-mint-green' />
      </div>

      <Modal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        fitHeight
      >
        <div className='flex flex-col gap-2 p-2'>

          <span className='font-bold text-md'>نقش دادن به کاربر</span>

          {data?.data.map(item => <label onClick={() => userRoleId == item.id ? null : mutate(item.id)} htmlFor={item.id.toString()} className={`cursor-pointer flex flex-row gap-1 justify-center items-center p-2 border rounded text-center hover:bg-gray-50 ${userRoleId == item.id ? 'bg-blue-300 border-mint-green' : ''}`}>
            <span>{captilizeFirstLetter(item.name)}</span>
          </label>)}

          {(isLoading || mutateLoading) && <Spinner />}

        </div>

      </Modal>

    </>
  )
}
