import s from './QuestionsFilterSkeleton.module.css'
export const QuestionsFiltersSkeleton = () => {
  return (
    <div className={s.container}>
      <div className={s.search} />
      <div className={s.list}>
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className={s.item1} />
        ))}
      </div>
      <div className={s.list}>
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className={s.item2} />
        ))}
      </div>
    </div>
  )
}
