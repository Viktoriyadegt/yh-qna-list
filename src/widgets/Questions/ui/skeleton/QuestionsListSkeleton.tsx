import s from './QuestionsListSkeleton.module.css'
import Card from '@/shared/ui/Card/Card.tsx'

export const QuestionsListSkeleton = () => {
  return (
    <Card className={s.card}>
      <div className={s.container}>
        <div className={s.list}>
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className={s.item} />
          ))}
        </div>
      </div>
    </Card>
  )
}
