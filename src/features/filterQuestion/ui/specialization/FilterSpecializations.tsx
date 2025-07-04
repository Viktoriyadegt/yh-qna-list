import { useDispatch } from 'react-redux'
import { useGetSpecializationsQuery } from '@/entities/specializations'
import { useAppSelector } from '@/shared/api/config/store.ts'
import { selectSpecialTotal, setSpecialTotal } from '@/entities/limits'
import { useToggleLimit } from '@/entities/limits'
import { LimitedSection } from '@/entities/limits'
import { selectSpecializations, setSpecialization } from '@/features/filterQuestion'
import { Button } from '@/shared/ui'

export const FilterSpecializations = () => {
  const selected = useAppSelector(selectSpecializations)
  const specialTotal = useAppSelector(selectSpecialTotal)
  const { data } = useGetSpecializationsQuery({ page: 1, limit: specialTotal, authorId: '' })
  const total = data?.total || 5
  const dispatch = useDispatch()

  const { show, toggleShow } = useToggleLimit(specialTotal, 5, total, setSpecialTotal)

  return (
    <LimitedSection title="Select a specialization" show={show} onToggle={toggleShow}>
      {data?.data.map((item) => (
        <Button
          key={item.id}
          variant={'chip'}
          onClick={() => dispatch(setSpecialization(String(item.id)))}
          isActive={+selected === item.id}
        >
          {item.title}
        </Button>
      ))}
    </LimitedSection>
  )
}
