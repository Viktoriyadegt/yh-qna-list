import type { QuestionSkill } from '@/entities/questions'
import { Button } from '@/shared/ui'

type Props = {
  skills: QuestionSkill[]
}

export const SkillsInfo = ({ skills }: Props) => {
  return (
    <>
      {skills.map((skill) => {
        return (
          <Button key={skill.id} variant={'chip'}>
            {skill.title}
          </Button>
        )
      })}
    </>
  )
}
