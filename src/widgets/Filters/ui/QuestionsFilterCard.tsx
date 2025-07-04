import Card from '@/shared/ui/Card/Card.tsx'
import s from './QuestionsFilterCard.module.css'
import { selectSpecializations } from '@/features/filterQuestion'
import { useAppSelector } from '@/shared/api/config/store.ts'
import { useGetSkillsQuery } from '@/entities/skills'
import { selectSkillTotal } from '@/entities/limits'
import { QuestionsFiltersSkeleton, QuestionsFilter } from '@/widgets/Filters'

export const QuestionsFilterCard = () => {
  const skillTotal = useAppSelector(selectSkillTotal)
  const specialization = useAppSelector(selectSpecializations)
  const { isLoading } = useGetSkillsQuery({ limit: skillTotal, specializations: specialization })

  return <Card className={s.card}>{isLoading ? <QuestionsFiltersSkeleton /> : <QuestionsFilter />}</Card>
}
