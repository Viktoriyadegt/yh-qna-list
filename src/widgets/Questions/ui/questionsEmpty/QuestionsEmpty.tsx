import { useAppDispatch } from '@/shared/api/config/store.ts'
import { resetFilters } from '@/features/filterQuestion'
import { Text, Button } from '@/shared/ui'
import s from './QuestionsEmpty.module.css'

export const QuestionsEmpty = () => {
  const dispatch = useAppDispatch()

  const handleReset = () => {
    dispatch(resetFilters())
  }

  return (
    <div className={s.container}>
      <Text variant={'body-20-med'}>Unfortunately, nothing was found for this request</Text>
      <Button variant={'chip'} onClick={handleReset} className={s.reset}>
        Reset filter
      </Button>
    </div>
  )
}
