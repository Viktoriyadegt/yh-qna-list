import { useGetSpecializationsQuery } from '@/entities/specializations/api/specializationsApi.ts'
import { useToggleLimit } from '@/shared/hooks'
import { LimitSection } from '@/shared/ui'
import { SpecializationsList } from '@/entities/specializations/ui/specializationsList.tsx'

const MIN_LIMIT = 5

export const FilterSpecialization = () => {
  const { data } = useGetSpecializationsQuery({ page: 1, limit: MIN_LIMIT, authorId: '' })
  const total = data?.total || MIN_LIMIT

  const { show, toggleShow, limit } = useToggleLimit({ expandedLimit: total, defaultLimit: MIN_LIMIT })

  return (
    <LimitSection title="Select a specialization" show={show} onToggle={toggleShow}>
      <SpecializationsList limit={limit} />
    </LimitSection>
  )
}
