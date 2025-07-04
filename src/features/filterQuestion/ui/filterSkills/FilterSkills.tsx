import { useDispatch } from 'react-redux'
import { useGetSkillsQuery } from '@/entities/skills'
import { selectSkillTotal, setSkillTotal } from '@/entities/limits'
import { LimitedSection, useToggleLimit } from '@/entities/limits'
import { useAppSelector } from '@/shared/api/config/store'
import { selectSkills, selectSpecializations, setSkills } from '@/features/filterQuestion'
import { Button } from '@/shared/ui'

export const FilterSkills = () => {
  const dispatch = useDispatch()
  const selected = useAppSelector(selectSkills)
  const skillTotal = useAppSelector(selectSkillTotal)
  const specializations = useAppSelector(selectSpecializations)
  const { data: skills } = useGetSkillsQuery({ limit: skillTotal, specializations })
  const total = skills?.total || 5

  const { show, toggleShow } = useToggleLimit(skillTotal, 8, total, setSkillTotal)

  return (
    <LimitedSection title="Select skills" show={show} onToggle={toggleShow}>
      {skills?.data.map((item) => (
        <Button
          key={item.id}
          variant={'chip'}
          onClick={() => dispatch(setSkills(item.id))}
          isActive={selected?.includes(item.id)}
        >
          <img loading={'lazy'} src={item.imageSrc} alt={item.title} />
          {item.title}
        </Button>
      ))}
    </LimitedSection>
  )
}
