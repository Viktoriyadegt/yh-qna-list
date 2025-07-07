import { useAppSelector } from '@/shared/api/config/store.ts'
import { selectSpecializations, setSpecialization } from '@/features/filterQuestions'
import { useGetSpecializationsQuery } from '../api/specializationsApi.ts'
import { useDispatch } from 'react-redux'
import { Button } from '@/shared/ui'

type Props = {
  limit: number
}

export const SpecializationsList = ({ limit }: Props) => {
  const selected = useAppSelector(selectSpecializations)
  const dispatch = useDispatch()
  const { data } = useGetSpecializationsQuery({ page: 1, limit, authorId: '' })

  const handlerChooseSpecial = (id: number) => {
    dispatch(setSpecialization(String(id)))
  }

  return (
    <>
      {data?.data.map((item) => (
        <Button
          key={item.id}
          variant={'chip'}
          onClick={() => handlerChooseSpecial(item.id)}
          isActive={+selected === item.id}
        >
          {item.title}
        </Button>
      ))}
    </>
  )
}
