import { Modal } from '@components'
import { IconUser } from '@tabler/icons-react'
import { api } from '_api/config'
import { RoleEndPoints, RoleEndPointsType } from '_api/endpoints/roles'
import { Axios } from 'axios'
import { useCustomQuery } from 'hooks'
import React, { useState } from 'react'
import { RoleType } from 'types'

export const ChangeUserRole = ({ userId, userRoleId }: { userId: number, userRoleId?: number }) => {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const { data, isLoading } = useCustomQuery<RoleEndPointsType['GET_ROLES']>({
    queryFn: () => api.get(RoleEndPoints.GET_ROLES),
    queryKey:'getAllRoles',
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

      >
        <div className='flex flex-col gap-2 '>
          <span>نقش دادن به کاربر</span>

          {data?.data.map(item => <label className='cursor-pointer flex flex-row gap-2 items-center'>
            <input type='checkbox' />
            <span>{item.name}</span>
          </label>)}

        </div>

      </Modal>

      {/* {isModalOpen && createPortal(<div className='fixed top-0 left-0 w-full h-full backdrop-brightness-50 z-20 flex flex-row justify-center items-center'>



      </div>, document.body)} */}


    </>
  )
}
