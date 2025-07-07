import { useDispatch } from 'react-redux'
import { selectSpecialTotal, setSpecialTotal, useGetSpecializationsQuery } from '@/entities/specializations'
import { useAppSelector } from '@/shared/api/config/store.ts'
import { selectSpecializations, setSpecialization } from '@/features/filterQuestions'
import { Button, LimitSection } from '@/shared/ui'
import { useToggleLimit } from '@/shared/hooks'

export const FilterSpecialization = () => {
  const selected = useAppSelector(selectSpecializations)
  const specialTotal = useAppSelector(selectSpecialTotal)
  const { data } = useGetSpecializationsQuery({ page: 1, limit: specialTotal, authorId: '' })
  const total = data?.total || 5
  const dispatch = useDispatch()

  const { show, toggleShow } = useToggleLimit(specialTotal, 5, total, setSpecialTotal)

  const handlerChooseSpecial = (id: number) => {
    dispatch(setSpecialization(String(id)))
  }

  return (
    <LimitSection title="Select a specialization" show={show} onToggle={toggleShow}>
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
    </LimitSection>
  )
}
