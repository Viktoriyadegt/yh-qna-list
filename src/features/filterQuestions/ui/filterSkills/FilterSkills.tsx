import { useGetSkillsQuery } from '@/entities/skills'
import { LimitSection } from '@/shared/ui'
import { useToggleLimit } from '@/shared/hooks'
import { SkillsList } from '@/entities/skills/ui/skillsList.tsx'

const MIN_LIMIT = 5

export const FilterSkills = () => {
  const { data: skills } = useGetSkillsQuery({ limit: MIN_LIMIT })
  const total = skills?.total || MIN_LIMIT

  const { toggleShow, show, limit } = useToggleLimit({ expandedLimit: total, defaultLimit: MIN_LIMIT })

  return (
    <LimitSection title="Select skills" show={show} onToggle={toggleShow}>
      <SkillsList limit={limit} />
    </LimitSection>
  )
}
