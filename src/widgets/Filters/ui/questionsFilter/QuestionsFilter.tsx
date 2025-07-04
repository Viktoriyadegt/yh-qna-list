import s from '../QuestionsFilterCard.module.css'
import {
  FilterComplexity,
  FilterKeyword,
  FilterRating,
  FilterSkills,
  FilterSpecialization,
} from '@/features/filterQuestions'

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
