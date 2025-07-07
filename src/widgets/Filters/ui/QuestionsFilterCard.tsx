import Card from '@/shared/ui/Card/Card.tsx'
import s from './QuestionsFilterCard.module.css'
import { selectSpecializations } from '@/features/filterQuestions'
import { useAppSelector } from '@/shared/api/config/store.ts'
import { useGetSkillsQuery } from '@/entities/skills'

import { QuestionsFiltersSkeleton, QuestionsFilter } from '@/widgets/Filters'

export const QuestionsFilterCard = () => {
  const specialization = useAppSelector(selectSpecializations)
  const { isLoading } = useGetSkillsQuery({ limit: 5, specializations: specialization })

  return <Card className={s.card}>{isLoading ? <QuestionsFiltersSkeleton /> : <QuestionsFilter />}</Card>
}
