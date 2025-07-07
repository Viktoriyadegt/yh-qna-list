import { useDispatch } from 'react-redux'
import { selectSkillTotal, setSkillTotal, useGetSkillsQuery } from '@/entities/skills'
import { useAppSelector } from '@/shared/api/config/store.ts'
import { selectSkills, selectSpecializations, setSkills } from '@/features/filterQuestions'
import { Button, LimitSection } from '@/shared/ui'
import { useToggleLimit } from '@/shared/hooks'

export const FilterSkills = () => {
  const dispatch = useDispatch()
  const selected = useAppSelector(selectSkills)
  const skillTotal = useAppSelector(selectSkillTotal)
  const specializations = useAppSelector(selectSpecializations)
  const { data: skills } = useGetSkillsQuery({ limit: skillTotal, specializations })
  const total = skills?.total || 8

  const { show, toggleShow } = useToggleLimit(skillTotal, 8, total, setSkillTotal)

  return (
    <LimitSection title="Select skills" show={show} onToggle={toggleShow}>
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
    </LimitSection>
  )
}
