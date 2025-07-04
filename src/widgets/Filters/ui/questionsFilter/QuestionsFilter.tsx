import s from '../QuestionsFilterCard.module.css'
import { SearchQuestion } from '@/features/searchQuestion'
import { FilterComplexity, FilterRating, FilterSkills, FilterSpecializations } from '@/features/filterQuestion'

export const QuestionsFilter = () => {
  return (
    <div className={s.container}>
      <SearchQuestion />
      <FilterSpecializations />
      <FilterSkills />
      <FilterComplexity />
      <FilterRating />
    </div>
  )
}
