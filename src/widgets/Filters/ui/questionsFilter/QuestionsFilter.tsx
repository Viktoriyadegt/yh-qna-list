import s from '../QuestionsFilterCard.module.css'
import {
  FilterComplexity,
  FilterKeyword,
  FilterRating,
  FilterSkills,
  FilterSpecialization,
} from '@/features/filterQuestion'

export const QuestionsFilter = () => {
  return (
    <div className={s.container}>
      <FilterKeyword />
      <FilterSpecialization />
      <FilterSkills />
      <FilterComplexity />
      <FilterRating />
    </div>
  )
}
