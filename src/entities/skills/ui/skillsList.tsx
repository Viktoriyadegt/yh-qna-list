import { useDispatch } from 'react-redux'
import { useAppSelector } from '@/shared/api/config/store.ts'
import { selectSkills, selectSpecializations, setSkills } from '@/features/filterQuestions'
import { useGetSkillsQuery } from '@/entities/skills'
import { Button } from '@/shared/ui'

type Props = {
  limit: number
}

export const SkillsList = ({ limit }: Props) => {
  const selected = useAppSelector(selectSkills)
  const specializations = useAppSelector(selectSpecializations)
  const dispatch = useDispatch()
  const { data: skills } = useGetSkillsQuery({ limit, specializations })

  const handlerChooseSkill = (id: number) => {
    dispatch(setSkills(id))
  }

  return (
    <>
      {skills?.data.map((item) => (
        <Button
          key={item.id}
          variant={'chip'}
          onClick={() => handlerChooseSkill(item.id)}
          isActive={selected?.includes(item.id)}
        >
          <img loading={'lazy'} src={item.imageSrc} alt={item.title} />
          {item.title}
        </Button>
      ))}
    </>
  )
}
