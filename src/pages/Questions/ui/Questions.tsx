import s from './Questions.module.css'
import { QuestionsCard } from '@/widgets/Questions'
import { QuestionsFilterCard } from '@/widgets/Filters'

export const Questions = () => {
  return (
    <div className={s.container}>
      <QuestionsCard />
      <QuestionsFilterCard />
    </div>
  )
}
