import { Button, Spinner } from '@components'
import { useCustomMutation, useUserInfo } from '@hooks'
import { IconArrowBigUp } from '@tabler/icons-react'
import { api } from '_api/config'
import { PropretyEndPoints, PropretyEndPointsType } from '_api/endpoints/property'
import React from 'react'
import { toast } from 'react-toastify'
import { PropertyDetailType } from 'types'
import { usePropertyList } from '../../../hooks'

export const Ladder = ({ id, title }: PropertyDetailType) => {

  const { data, isError } = useUserInfo()

  const { refetch } = usePropertyList()
  const { mutate, isLoading } = useCustomMutation<PropretyEndPointsType['LADDER']>({
    mutationFn: () => api.patch(PropretyEndPoints.LADDER(id), {}),
    mutationKey: ['ladder', id],
    onSuccess: () => {
      toast.success(`آگهی "${title}" با موفقیت نردبان شد.`)
      refetch()
    },
    onError: () => {
      toast.error('خطا در نردبان کردن آگهی')
    }
  })

  if (isError)
    return <></>

  else if (data?.data)
    return (
      <div>
        <Button bgColor='honeyDraw' textColor='jade' loading={isLoading} onClick={() => mutate({})} icon={IconArrowBigUp} title='نردبان'></Button>
      </div>
    )

  return <Spinner />
}
